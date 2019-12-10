<template>
  <div class="image-list">
    <ImageBox
      v-for="image in images"
      v-bind:key="image.id"
      :image="image"
      @click.native="openImageInModal(image.download_url)"/>
  </div>
</template>

<script>
import ImageBox from '@/components/images/image-container/ImageBox.vue'

export default {
  name: 'ImageList',
  components: {
    ImageBox
  },
  props: {
    images: Array
  },
  methods: {
    openImageInModal(imageUrl) {
      this.$emit('imageClickEvent', imageUrl);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .image-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
