import axios from "axios";
export default {
  methods: {
    get(url, data, func) {
      axios.get(url, {
        params: data
      })
          .then(response => func(response.data))
          .catch(error => this.handleError(error));
    },
    handleError (error) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      alert(errMsg);
    }
  },
}
