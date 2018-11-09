// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_ENDPOINT
} from "../awsconfig";
import AWS from "aws-sdk";

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  data() {
    return {
      tablesList: []
    }
  },
  methods: {
    getImageData() {
      AWS.config.update({
        region: AWS_REGION,
        endpoint: AWS_ENDPOINT,
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
      });

      let dynamodb = new AWS.DynamoDB();
      let docClient = new AWS.DynamoDB.DocumentClient();

      let params = {
        TableName: "ProdImage",
      };

      dynamodb.describeTable(params, function (err, data) {
        let tableList = JSON.stringify(data, undefined, 2);
        if (err) {
          document.getElementById("app").innerHTML =
            "Unable to list tables: " +
            "\n" +
            JSON.stringify(err, undefined, 2);
        } else {
          vm.tablesList = tableList;
        }
      });
    }
  }
});
