<template>
  <div class="image-box">
    <img :src="`https://picsum.photos/id/${image.id}/367/267`" alt="">
    <div class="image-info">
      <p>
        <span>Author: </span>
        <span>{{ image.author }}</span>
      </p>
      <p>
        <span>ID: </span>
        <span>{{ image.id }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBox',
  props: {
    image: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
