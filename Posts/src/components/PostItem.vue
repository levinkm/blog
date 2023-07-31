<script setup>
import { defineProps } from 'vue'

const pst = defineProps({
  post: {
    type: Object,
    required: true
  }
})

function createExcerpt(text, maxLength) {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.slice(0, maxLength).trim() + '...'
  }
}
</script>

<template>
  <article
    class="flex bg-gray-100 space-x-4 border border-gray-200 p-12 rounded-xl bg-gray-100 mt-5 hover:bg-white"
  >
    <div class="flex-shrink-0"></div>
    <div>
      <header class="mb-4">
        <h3 class="font-bold">
          {{ post.title }}
        </h3>
        <p class="text-xs">
          <time>{{ new Date(post.created_at).toLocaleString() }}</time>
        </p>

        <p>
          {{ createExcerpt(post.body, 80) }}
        </p>
        <button
          class="tags bg-blue-500"
          v-for="(tag, index) in post.tags.split(',').map((item) => item.trim())"
          :key="index"
        >
          {{ tag }}
        </button>
      </header>
    </div>
  </article>
</template>

<style scoped>
.tags {
  border-radius: 7px;
  padding: 12px, 0;
  width: 80px;
  margin-right: 4px;
}
</style>
