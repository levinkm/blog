<template>
  <div class="main-block">
    <form @submit.prevent="handleSubmit">
      <div class="info">
        <input
          class="fname"
          type="text"
          name="title"
          id="title"
          v-model="title"
          placeholder="Title"
          required
        />
      </div>
      <p>Body</p>
      <div>
        <textarea rows="4" v-model="body" required></textarea>
      </div>
      <input
        class="fname"
        type="text"
        name="title"
        id="title"
        v-model="tags"
        placeholder="tags"
        required
      />
      <button type="submit" @click="$emit('someEvent')">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ModalPost',
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

//const redirectToPost = () => {
//   router.push(`/}`)
// }

const title = ref('')
const body = ref('')
const tags = ref('')

const handleSubmit = async () => {
  try {
    let config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/posts',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
    }

    const response = await axios(config)

    router.replace('/')

    console.log('Response:', response.data)

    tags.value = ''
    body.value = ''
    title.value = ''

    // Do something with the response, like showing a success message, etc.
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
<style scoped>
.main {
  padding-top: 140px;
}
h1 {
  margin: 0 0 20px;
  font-weight: 400;
  color: #1c87c9;
}
p {
  margin: 0 0 5px;
}
.main-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100vh;
}
form {
  padding: 25px;
  margin: 25px;
  box-shadow: 0 2px 5px #f5f5f5;
  background: #ffffff;
}
.fas {
  margin: 25px 10px 0;
  font-size: 72px;
  color: #fff;
}
.fa-envelope {
  transform: rotate(-20deg);
}
.fa-at,
.fa-mail-bulk {
  transform: rotate(10deg);
}
input,
textarea {
  width: calc(100% - 18px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #1c87c9;
  outline: none;
}
input::placeholder {
  color: #666;
}
button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #1c87c9;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.close {
  width: 100%;
  padding: 10px;
  border: none;
  background: #c9331c;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-top: 5px;
}
.close:hover {
  background: #a02323;
}
button:hover {
  background: #2371a0;
}
@media (min-width: 568px) {
  .main-block {
    flex-direction: row;
  }
  .left-part,
  form {
    width: 50%;
  }
}
</style>
