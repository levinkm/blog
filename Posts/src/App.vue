<script setup>
import { ref } from 'vue'
import Modal from './components/ModalPost.vue'
import CreatePost from './components/CreatePost.vue'

const isModalVisible = ref(false)

const showModal = () => {
  isModalVisible.value = true
}
const closeModal = () => {
  isModalVisible.value = false
}

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="bg-blue-500 fixed top-0 left-0 w-full h-4vh flex items-center justify-around px-4z">
      <RouterLink to="/">Posts</RouterLink>
      <button type="button" class="btn" @click="showModal">Create New Post</button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template #header> Create New Post </template>
        <template #body>
          <CreatePost />
        </template>
      </Modal>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}
.btn {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 2rem 0;
  }
}
</style>
