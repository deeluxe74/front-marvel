<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Where is the hero ...</span>
        </div>
        <div v-if="display" class="mt-5 alert alert-info">{{ display }}</div>
    </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      display: false,
    };
  },
  created() {
    setTimeout(() => {
      this.display = this.message;
    }, 8000);
  },
};
</script>

<style scoped>
.spinner-border {
    width: 8rem;
    height: 8rem;
}
</style>
