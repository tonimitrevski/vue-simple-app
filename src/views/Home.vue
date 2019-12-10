<template>
  <div class="home">
    <SearchFilters @filterByAuthor="handleFilterByAuthor"/>
    <ImageList :images="images" @imageClickEvent="openModal"/>
    <Modal v-model="modalVisible">
      <template v-slot:content>
        <img :src="imageToBeShownInModal" alt="">
      </template>
    </Modal>
    <Pagination
      :current-page="currentPage"
      :page-count="pageCount"
      @nextPage="handlePageChange('next')"
      @previousPage="handlePageChange('previous')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFilters from '@/components/search-filters/SearchFilters.vue';
import ImageList from '@/components/images/images-list/ImageList.vue';
import httpClient from '@/mixins/httpClient.js';
import Modal from '@/components/modal/Modal.vue';
import Pagination from '@/components/pagination/Pagination.vue';

export default {
  mixins: [httpClient],
  name: 'home',
  components: {
    SearchFilters,
    ImageList,
    Modal,
    Pagination
  },
  data() {
    return {
      images: [],
      modalVisible: false,
      imageToBeShownInModal: '',
      currentPage: 1,
      pageCount: 0,
      visibleItemsPerPage: 10
    };
  },
  created() {
    this.get(
      `https://picsum.photos/v2/list?page=${this.currentPage}&limit=${this.visibleItemsPerPage}`,
      {},
      this.getImages
    );
  },
  methods: {
    getImages(response) {
      this.images = response;
    },
    handleFilterByAuthor(authorName) {

      // eslint-disable-next-line no-console
      console.log(authorName);
    },
    openModal(imageUrl) {
      this.imageToBeShownInModal = imageUrl;
      this.modalVisible = !this.modalVisible;
    },
    handlePageChange(value) {
      switch (value) {
        case 'next':
          this.currentPage += 1;
          break;
        case 'previous':
          this.currentPage -= 1;
          break;
        default:
          this.currentPage = value;
      }
    }
  }
}
</script>
