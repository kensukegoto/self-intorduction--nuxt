const VueHelloArg = {

  install (Vue,options) {

    Vue.directive("hello-arg",{
      bind : (el,binding) => {
        console.log(binding.arg);
        console.log(binding.value);
      }
    })

  }
}

import Vue from "vue";
Vue.use(VueHelloArg);