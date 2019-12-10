<template>
  <div class="image-list">
    <ImageContainer v-for="image in images" v-bind:key="image.id" :image="image"/>
  </div>
</template>

<script>
import ImageContainer from '@/components/images/image-container/ImageContainer.vue'

export default {
  name: 'ImageList',
  components: {
    ImageContainer
  },
  props: {
    images: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
