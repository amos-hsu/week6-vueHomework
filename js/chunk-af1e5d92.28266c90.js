(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af1e5d92"],{"0b42":function(t,e,n){var c=n("da84"),a=n("e8b5"),o=n("68ee"),i=n("861d"),r=n("b622"),u=r("species"),s=c.Array;t.exports=function(t){var e;return a(t)&&(e=t.constructor,o(e)&&(e===s||a(e.prototype))?e=void 0:i(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"1dde":function(t,e,n){var c=n("d039"),a=n("b622"),o=n("2d00"),i=a("species");t.exports=function(t){return o>=51||!c((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var c=n("0b42");t.exports=function(t,e){return new(c(t))(0===e?0:e)}},"6be2":function(t,e,n){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,n){var c=t.get(e);c?c.push(n):t.set(e,[n])},off:function(e,n){var c=t.get(e);c&&(n?c.splice(c.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var c=t.get(e);c&&c.slice().map((function(t){t(n)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,n)}))}}},a=c();e["a"]=a},8418:function(t,e,n){"use strict";var c=n("a04b"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=c(e);i in t?a.f(t,i,o(0,n)):t[i]=n}},"99af":function(t,e,n){"use strict";var c=n("23e7"),a=n("da84"),o=n("d039"),i=n("e8b5"),r=n("861d"),u=n("7b0b"),s=n("07fa"),l=n("8418"),d=n("65f0"),b=n("1dde"),g=n("b622"),p=n("2d00"),f=g("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",h=a.TypeError,v=p>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=b("concat"),y=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},x=!v||!m;c({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,c,a,o,i=u(this),r=d(i,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?i:arguments[e],y(o)){if(a=s(o),b+a>O)throw h(j);for(n=0;n<a;n++,b++)n in o&&l(r,b,o[n])}else{if(b>=O)throw h(j);l(r,b++,o)}return r.length=b,r}})},cc55:function(t,e,n){"use strict";n.r(e);n("99af");var c=n("7a23"),a={class:"container"},o={class:"table align-middle"},i=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,"圖片"),Object(c["g"])("th",null,"商品名稱"),Object(c["g"])("th",null,"價格"),Object(c["g"])("th")])],-1),r={style:{width:"200px"}},u={key:0,class:"h5"},s={key:1},l={class:"h6"},d={class:"h5"},b={class:"btn-group btn-group-sm"},g=["onClick","disabled"],p=["onClick"],f={class:"spinner-grow spinner-grow-sm"},O=Object(c["i"])(" 加到購物車 "),j={class:"text-end"},h=["disabled"],v={class:"table align-middle"},m=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th"),Object(c["g"])("th",null,"品名"),Object(c["g"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["g"])("th",null,"單價")])],-1),y=["onClick"],x={class:"input-group input-group-sm"},C={class:"input-group mb-3"},k=["onUpdate:modelValue","onChange","disabled"],w=["value"],I={class:"input-group-text",id:"basic-addon2"},B={class:"text-end"},A=Object(c["g"])("td",{colspan:"3",class:"text-end"},"總計",-1),D={class:"text-end"};function L(t,e,n,L,q,$){return Object(c["u"])(),Object(c["f"])("div",a,[Object(c["g"])("table",o,[i,Object(c["g"])("tbody",null,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(q.products,(function(e){return Object(c["u"])(),Object(c["f"])("tr",{key:e.id},[Object(c["g"])("td",r,[Object(c["g"])("div",{style:Object(c["q"])([{backgroundImage:"url(".concat(e.imageUrl,")")},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),Object(c["g"])("td",null,Object(c["B"])(e.title),1),Object(c["g"])("td",null,[e.price===e.origin_price?(Object(c["u"])(),Object(c["f"])("div",u,Object(c["B"])(e.price)+" 元 ",1)):(Object(c["u"])(),Object(c["f"])("div",s,[Object(c["g"])("del",l,"原價 "+Object(c["B"])(e.origin_price)+" 元",1),Object(c["g"])("div",d,"現在只要 "+Object(c["B"])(e.price)+" 元",1)]))]),Object(c["g"])("td",null,[Object(c["g"])("div",b,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(n){return t.openProductModal(e.id)},disabled:q.isLoadingItem===e.id}," 查看更多 ",8,g),Object(c["g"])("button",{type:"button",class:"btn btn-danger",onClick:function(t){return $.addToCart(e.id)}},[Object(c["I"])(Object(c["g"])("span",f,null,512),[[c["F"],q.isLoadingItem===e.id]]),O],8,p)])])])})),128))])]),Object(c["g"])("div",j,[Object(c["g"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=function(){return $.removeAllCarts&&$.removeAllCarts.apply($,arguments)}),disabled:0===q.cartData.carts.length}," 清空購物車 ",8,h)]),Object(c["g"])("table",v,[m,Object(c["g"])("tbody",null,[q.cartData.carts?(Object(c["u"])(!0),Object(c["f"])(c["a"],{key:0},Object(c["y"])(q.cartData.carts,(function(e){return Object(c["u"])(),Object(c["f"])("tr",{key:e.id},[Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(n){return t.removeCartItem(e.id)}}," x ",8,y)]),Object(c["g"])("td",null,Object(c["B"])(e.product.title),1),Object(c["g"])("td",null,[Object(c["g"])("div",x,[Object(c["g"])("div",C,[Object(c["I"])(Object(c["g"])("select",{id:"",class:"form-select","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(n){return t.updateCartItem(e)},disabled:q.isLoadingItem===e.id},[(Object(c["u"])(),Object(c["f"])(c["a"],null,Object(c["y"])(20,(function(t){return Object(c["g"])("option",{value:t,key:"".concat(t," + ").concat(e.id)},Object(c["B"])(t),9,w)})),64))],40,k),[[c["D"],e.qty]]),Object(c["g"])("span",I,Object(c["B"])(e.product.unit),1)])])]),Object(c["g"])("td",B,Object(c["B"])(e.total),1)])})),128)):Object(c["e"])("",!0)]),Object(c["g"])("tfoot",null,[Object(c["g"])("tr",null,[A,Object(c["g"])("td",D,Object(c["B"])(q.cartData.total),1)])])])])}var q=n("6be2"),$={data:function(){return{cartData:{carts:[]},products:[],productId:"",isLoadingItem:""}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("minhsin","/products/?page=").concat(e)).then((function(e){t.products=e.data.products,t.pagination=e.data.pagination})).catch((function(t){alert(t.data.message)}))},getCart:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("minhsin","/cart")).then((function(e){t.cartData=e.data.data})).catch((function(t){alert(t.data.message)}))},addToCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c={product_id:t,qty:n};this.isLoadingItem=t,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("minhsin","/cart"),{data:c}).then((function(t){e.getCart(),e.isLoadingItem="",q["a"].emit("get-cart")}))},removeAllCarts:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("minhsin","/carts")).then((function(e){t.getCart()})).catch((function(t){console.log(t.response)}))}},mounted:function(){var t=this;this.getProducts(),this.getCart(),q["a"].on("get-cart",(function(){t.getCart()}))}},M=n("6b0d"),P=n.n(M);const T=P()($,[["render",L]]);e["default"]=T},e8b5:function(t,e,n){var c=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-af1e5d92.28266c90.js.map