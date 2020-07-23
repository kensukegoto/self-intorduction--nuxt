import Resizer from "./Resizer";
import * as d3 from "d3";
import d3cloud from "../lib/d3cloud";
import gsap from "gsap";

export default async () => {

  window.d3 = d3;
  d3 = window.d3;
  d3cloud();

  const selector = ".c-cloud";
  const csv = "/data/word.csv";

  let w = document.querySelector(selector).clientWidth;
  let h = document.querySelector(selector).clientHeight;

  let m = (w > 959) ? 
    {
      t: 20,b: 20
    }:
    {
      t: 10,b: 10
    };

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  let data = await d3.csv(csv);
  data = shuffle(data).filter((e,i) => i < 25);

  const color = d3.scaleOrdinal(d3.schemePaired);

  const fontSizeSet = [
    [20,50],
    [60,120]
  ];

  let fontSize = d3.scalePow()
  .exponent(5)
  .domain([0,1]) // 0 ~ 1の入力値
  .range(fontSizeSet[(w > 959) ? 1 : 0]) // 5乗なのでより40に近い値が取得される傾向になる

  let svg = d3.select(selector)
    .append("svg")
    .attr("width",w)
    .attr("height",h)

  let wc = svg
    .append("g")
    .attr("class","wordcloud")
    .attr("transform", 
    `translate(${w / 2},${h / 2 + m.t})`);


  let cloud = d3.layout.cloud()
    .size([w,h - m.t - m.b])

  cloud.words(data)
    .rotate(0)
    .fontSize(()=> fontSize(Math.random()))
    .fontWeight(["bold"])
    .font(["Cabin"])
    .text(d => d.Name)
    .on("end",draw)
    .start();

  new Resizer(resize);

  function resize (){

    w = document.querySelector(selector).clientWidth;
    h = document.querySelector(selector).clientHeight;

    m = (w > 959) ? 
      {
        t: 20,b: 20
      }:
      {
        t: 10,b: 10
      };


    fontSize = d3.scalePow()
      .range(fontSizeSet[(w > 959) ? 1 : 0]) 


    svg
      .attr("width",w)
      .attr("height",h)

    wc
    .attr("transform", 
    `translate(${w / 2},${h / 2 + m.t})`);

    cloud
      .size([w,h - m.t - m.b])
      .words(data)
      .rotate(0)
      .fontSize(()=> fontSize(Math.random()))
      .fontWeight(["bold"])
      .font(["Cabin"])
      .text(d => d.Name)
      .on("end",draw)
      .start();
  } // resize

  function draw(words){

    wc.selectAll("g").remove();

    let words2 = words.reduce((acc,e,i)=>{
      if(acc[i % 3]){
        acc[i % 3].push(e);
      } else {
        acc[i % 3] = [];
        acc[i % 3].push(e);
      }
      return acc;
    },[])

    words2.forEach( (list,i) => {

      let g = wc.append("g").attr("class",`g${i + 1}`);
    
      g.selectAll("text")
        .data(list)
        .enter()
        .append("text")
        .style("fill",(d,i)=>{
          return color(i);
        })
        .style("font-size",d => d.size + "px")
        .style("font-family",d => d.font)
        .attr("text-anchor","middle")
        .attr("transform",d => {
          return `translate(${d.x},${d.y}) rotate(${d.rotate})`
        })
        .text( d => d.text)


        // アニメーション
        gsap.from( `.g${i + 1}` , [3,1,2][i] , {
          y : (w > 959) ? [-10,5,10][i] : [-20,10,15][i], // CSSプロパティ
          repeat: -1,
          yoyo: true,
          ease : "none", // イージング
        });

    })


  } // draw
}