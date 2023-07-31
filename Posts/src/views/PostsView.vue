<script setup>
import PostItem from '../components/PostItem.vue'

import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])

onMounted(async () => {
  try {
    let config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/posts/',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios(config)
    posts.value = response.data.data
  } catch (error) {
    console.error('Error fetching Posts:', error)
  }
})
</script>

<template>
  <div class="pt-20 ml-[25%] max-w-6xl">
    <div v-for="post in posts" :key="post.id" class="w-full fl">
      <PostItem :post="post" />
    </div>
  </div>
</template>
