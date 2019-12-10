export default {
  methods: {
    debounce(callableFunction, time) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        callableFunction();
      }, time);
    }
  },
}
