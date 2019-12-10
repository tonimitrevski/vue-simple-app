<template>
  <div class="home">
    <ImageList :images="images"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageList from '@/components/images/images-list/ImageList.vue'
import httpClient from '@/mixin/httpClient.js';
export default {
  mixins: [httpClient],
  name: 'home',
  components: {
    ImageList
  },
  data() {
    return {
      images: []
    };
  },
  created() {
    this.get(
      'https://picsum.photos/v2/list',
      {},
      this.getImages
    );
  },
  methods: {
    getImages(response) {
      this.images = response;
    }
  }
}
</script>
