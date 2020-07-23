export default class Resizer {

  constructor(func){
    this.w = window.innerWidth;
    this.timer = null;
    window.addEventListener("resize",()=>{
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        if(this.w === window.innerWidth) return;
        if(this.w > 959 && window.innerWidth > 959) return;
        this.w = window.innerWidth;
        func();
    },300)
    })
  }
};