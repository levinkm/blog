<template>
  <div class="modal-backdrop" v-if="isModalVisible">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body" @some-event="closeModal"> This is the default body! </slot>
      </section>

      <!-- <footer class="modal-footer">
        <slot name="footer"> This is the default footer! </slot>
        <button type="button" class="btn-green" @click="close">Close Modal</button>
      </footer> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalPost',
  methods: {
    closeModal() {
      this.isModalVisible.value = false
    },
    close() {
      console.log('emit received')
      this.$emit('close')
    }
  },
  data() {
    return {
      isModalVisible: true
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff00;

  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: red;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
