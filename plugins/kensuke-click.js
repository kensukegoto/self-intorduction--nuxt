const VueKensukeClick = {

  install (Vue,options) {

    Vue.directive("kensuke-click",{
      bind : (el) => {
        el.addEventListener("click",click,false);
      }
    })

    const click = () => {
      console.log("i am kensuke goto");
    }
  }
}

import Vue from "vue";
Vue.use(VueKensukeClick);