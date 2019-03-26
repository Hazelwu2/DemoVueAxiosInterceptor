<template>
  <div id="axiosdemo">
    <div class="card"
         v-for="post in postInfos"
         :key="post.id">
      <div class="card-header"
           @click="post.show = !post.show">
        <i class="fa fa-plus-square-o"
           v-show="!post.show"></i>
        <i class="fa fa-minus-square-o"
           v-show="post.show"></i> {{post.title}}
      </div>
      <div class="card-body"
           v-show="post.show">
        <p class="card-text">
          {{post.body}}
        </p>
      </div>
    </div>
    <!-- blockui -->
    <BlockUI :message="msg"
             v-show="spinnerStatus">
      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
    </BlockUI>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            postInfos: [],
            msg: "Loading...",
            spinnerStatus: false
        };
    },
    created() {
        axios.interceptors.request.use(config => {
            $vue.spinnerStatus = true;
            return config
        }, (error) => {
            $vue.spinnerStatus = false;
            return Promise.reject(error);
        });

        axios.interceptors.response.use(res => {
            setTimeout(()=> {
                $vue.spinnerStatus = false;
            }, 3000);
            return res;
        }, (error) => {
            $vue.spinnerStatus = false;
            return Promise.reject(error);
        })
        axios.get("/posts").then(res => {
            let tempInfos = res.data;
            tempInfos.forEach(item => {
                item.show = false;
                this.postInfos.push(item);
            });
        });

        let $vue = this;
    }
};
</script>