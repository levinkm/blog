<template lang="">
  <div>
    <header class="mb-4">
      <h3 class="font-bold">
        {{ post.title }}
      </h3>
      <p class="text-xs">
        <time>{{ new Date(post.created_at).toLocaleString() }}</time>
      </p>

      <p>
        {{ post.body }}
      </p>
      <!-- <button
        class="tags bg-blue-500"
        v-for="(tag, index) in post.tags.split(',').map((item) => item.trim())"
        :key="index"
      >
        {{ tag }}
      </button> -->
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
    console.log(post)
  } catch (error) {
    console.error('Error fetching Posts:', error)
  }
  console.log(postId)
})
</script>
<style lang=""></style>
