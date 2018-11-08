// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  AWS_REGION,
  AWS_ENDPOINT,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} from '../.env'

var AWS = require('aws-sdk')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      movies: []
    }
  },
  methods: {
    insertMovie () {
    }
  },
  router,
  components: {
    App
  },
  template: '<App/>'
})

AWS.config.update({
  region: AWS_REGION,
  endpoint: AWS_ENDPOINT,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
})

var dynamodb = new AWS.DynamoDB()
var dynamodoc = new AWS.DynamoDB.DocumentClient()
