<template lang="">
  <div class="pt-40 max-w-2xl ml-[30%]">
    <header class="mb-4">
      <h1 class="font-bold text-2xl">
        {{ post.title }}
      </h1>
      <hr />
      <br />

      <p class="text-xs">
        <time>{{ new Date(post.created_at).toLocaleString() }}</time>
      </p>
      <br />

      <p>
        {{ post.body }}
      </p>
      <br />
      <button
        class="tags bg-blue-500 w-32 rounded-lg m-3"
        v-for="(tag, index) in post.tags"
        :key="index"
      >
        {{ tag }}
      </button>
    </header>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
const route = useRoute()

const post = ref([])
onMounted(async () => {
  const postId = computed(() => route.params.id)

  try {
    let config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/posts/' + postId.value,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios(config)
    post.value = response.data.data

    post.value.tags = post.value.tags.split(',').map((item) => item.trim())
    console.log(post)
  } catch (error) {
    console.error('Error fetching Posts:', error)
  }
  console.log(postId)
})
</script>
<style lang=""></style>
