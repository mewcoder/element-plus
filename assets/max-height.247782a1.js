import{_ as l,r as e,o as t,f as o,w as a,c as r,i as n,b as s,j as u,F as c,a as d,d as i}from"./app.0c76b38c.js";var m=l({},[["render",function(l,d){const i=e("el-scrollbar");return t(),o(i,{height:"400px"},{default:a((()=>[(t(),r(c,null,n(20,(l=>s("p",{key:l,class:"scrollbar-demo-item"},u(l),1))),64))])),_:1})}]]),f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m});const p={class:"flex-content"};var _=l({},[["render",function(l,d){const i=e("el-scrollbar");return t(),o(i,null,{default:a((()=>[s("div",p,[(t(),r(c,null,n(50,(l=>s("p",{key:l,class:"scrollbar-demo-item"},u(l),1))),64))])])),_:1})}]]),b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});const h={ref:"inner"};var S=l({data:()=>({max:0,value:0}),mounted(){this.max=this.$refs.inner.clientHeight-380},methods:{inputSlider(l){this.$refs.scrollbar.setScrollTop(l)},scroll({scrollTop:l}){this.value=l},formatTooltip:l=>`${l} px`}},[["render",function(l,o,i,m,f,p){const _=e("el-scrollbar"),b=e("el-slider");return t(),r(c,null,[d(_,{ref:"scrollbar",height:"400px",always:"",onScroll:p.scroll},{default:a((()=>[s("div",h,[(t(),r(c,null,n(20,(l=>s("p",{key:l,class:"scrollbar-demo-item"},u(l),1))),64))],512)])),_:1},8,["onScroll"]),d(b,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=l=>f.value=l),max:f.max,"format-tooltip":p.formatTooltip,onInput:p.inputSlider},null,8,["modelValue","max","format-tooltip","onInput"])],64)}]]),g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const x={data:()=>({count:3}),methods:{add(){this.count++},onDelete(){this.count>0&&this.count--}}},v=i("Add Item"),y=i("Delete Item");var k=l(x,[["render",function(l,o,s,i,m,f){const p=e("el-button"),_=e("el-scrollbar");return t(),r(c,null,[d(p,{onClick:f.add},{default:a((()=>[v])),_:1},8,["onClick"]),d(p,{onClick:f.onDelete},{default:a((()=>[y])),_:1},8,["onClick"]),d(_,{"max-height":"400px"},{default:a((()=>[(t(!0),r(c,null,n(m.count,(l=>(t(),r("p",{key:l,class:"scrollbar-demo-item"},u(l),1)))),128))])),_:1})],64)}]]),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});export{f as _,b as a,g as b,T as c};
