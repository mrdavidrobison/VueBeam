<template>
  <div class="hello">
    <h1>{{ movies }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

let url = process.env.AWS_TEST_URL

export default {
  name: 'HelloWorld',
  data () {
    return {
      movies: []
    }
  },
  methods: {
    insertMovie () {
      axios
        .get(url).then(response => {
          this.movie = response.data
        })
        .catch(function (error) {
          console.log(error)
          return false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
