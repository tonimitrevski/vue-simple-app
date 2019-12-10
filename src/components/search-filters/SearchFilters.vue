<template>
  <div class="search-filters">
    <div class="search-filters__field">
      <label>Filter by author name: </label>
      <input type="text" v-model="inputValue"/>
    </div>
    <div class="search-filters__field">
      <label>Number of images to be displayed: </label>
      <input type="text">
    </div>
  </div>
</template>
<script>
  import debounce from "../../mixins/debounce";

  export default {
    name: 'SearchFilters',
    mixins: [debounce],
    data: function () {
      return {
        inputValue: ''
      }
    },
    watch: {
      author: function () {
        this.debounce(this.emitFilterByAuthor, 500)
      }
    },
    methods: {
      emitFilterByAuthor() {
        this.$emit('filterByAuthor', this.inputValue);
      }
    }
  }
</script>
