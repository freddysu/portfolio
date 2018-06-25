<template>
  <div :class="'overlay' + (open ? ' overlay-open' : '')" @click="onCloseModal">
    <div class="modal-container" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: ['open'],
  methods: {
    onCloseModal() {
      this.$emit('onCloseModal');
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  opacity: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.75);
}
.overlay-open {
  opacity: 1;
  pointer-events: auto;
}
.modal-container {
  position: relative;
  top: 10%;
  margin: 0 auto;
  width: 80%;
  height: 80%;
  background-color: white;
}
</style>
