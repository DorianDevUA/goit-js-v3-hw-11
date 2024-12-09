var w=n=>{throw TypeError(n)};var L=(n,l,t)=>l.has(n)||w("Cannot "+t);var f=(n,l,t)=>(L(n,l,"read from private field"),t?t.call(n):l.get(n)),h=(n,l,t)=>l.has(n)?w("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(n):l.set(n,t),g=(n,l,t,a)=>(L(n,l,"write to private field"),a?a.call(n,t):l.set(n,t),t);import{H as S,S as k}from"./assets/vendor-Bi_J8_6n.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();function b(){return{searchForm:document.querySelector(".js-search-form"),imageGallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")}}const q="43520057-d4110ce2722b475a1deefaa82",O="https://pixabay.com/api/";var y,u;class I{constructor(){h(this,y);h(this,u);g(this,y,""),g(this,u,1),this.perPage=10,this.isLastPage=!1}get query(){return f(this,y)}set query(l){g(this,y,l)}get page(){return f(this,u)}set page(l){g(this,u,l)}incrementPage(){g(this,u,f(this,u)+1)}resetPage(){g(this,u,1)}fetchImages(){const l=new URLSearchParams({key:q,q:f(this,y),page:f(this,u),per_page:this.perPage,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${O}?${l}`;return fetch(t).then(a=>{if(!a.ok)throw new Error(`HTTP error: ${a.status}`);return a.json()}).then(a=>(this.incrementPage(),f(this,u)*this.perPage>a.totalHits&&(this.isLastPage=!0,console.log("This is last page!"),console.log("isLastPage:",this.isLastPage)),a))}}y=new WeakMap,u=new WeakMap;const R=S.template({1:function(n,l,t,a,r){var e,o=l??(n.nullContext||{}),i=n.hooks.helperMissing,c="function",m=n.escapeExpression,s=n.lookupProperty||function(d,P){if(Object.prototype.hasOwnProperty.call(d,P))return d[P]};return`  <li class='gallery-item'>
    <article>
      <a class='gallery-item-link' href='`+m((e=(e=s(t,"largeImageURL")||(l!=null?s(l,"largeImageURL"):l))!=null?e:i,typeof e===c?e.call(o,{name:"largeImageURL",hash:{},data:r,loc:{start:{line:4,column:41},end:{line:4,column:58}}}):e))+`'>
        <img
          class='gallery-item-image'
          src='`+m((e=(e=s(t,"webformatURL")||(l!=null?s(l,"webformatURL"):l))!=null?e:i,typeof e===c?e.call(o,{name:"webformatURL",hash:{},data:r,loc:{start:{line:7,column:15},end:{line:7,column:31}}}):e))+`'
          alt='`+m((e=(e=s(t,"tags")||(l!=null?s(l,"tags"):l))!=null?e:i,typeof e===c?e.call(o,{name:"tags",hash:{},data:r,loc:{start:{line:8,column:15},end:{line:8,column:23}}}):e))+`'
          width='150'
        />
      </a>

      <ul class='gallery-item-meta'>
        <li class='gallery-item-likes'>
          <h3>likes</h3>
          <p>`+m((e=(e=s(t,"likes")||(l!=null?s(l,"likes"):l))!=null?e:i,typeof e===c?e.call(o,{name:"likes",hash:{},data:r,loc:{start:{line:16,column:13},end:{line:16,column:22}}}):e))+`</p>
        </li>
        <li class='gallery-item-views'>
          <h3>views</h3>
          <p>`+m((e=(e=s(t,"views")||(l!=null?s(l,"views"):l))!=null?e:i,typeof e===c?e.call(o,{name:"views",hash:{},data:r,loc:{start:{line:20,column:13},end:{line:20,column:22}}}):e))+`</p>
        </li>
        <li class='gallery-item-comments'>
          <h3>comments</h3>
          <p>`+m((e=(e=s(t,"comments")||(l!=null?s(l,"comments"):l))!=null?e:i,typeof e===c?e.call(o,{name:"comments",hash:{},data:r,loc:{start:{line:24,column:13},end:{line:24,column:25}}}):e))+`</p>
        </li>
        <li class='gallery-item-downloads'>
          <h3>downloads</h3>
          <p>`+m((e=(e=s(t,"downloads")||(l!=null?s(l,"downloads"):l))!=null?e:i,typeof e===c?e.call(o,{name:"downloads",hash:{},data:r,loc:{start:{line:28,column:13},end:{line:28,column:26}}}):e))+`</p>
        </li>
      </ul>
    </article>
  </li>
`},compiler:[8,">= 4.3.0"],main:function(n,l,t,a,r){var e,o=n.lookupProperty||function(i,c){if(Object.prototype.hasOwnProperty.call(i,c))return i[c]};return(e=o(t,"each").call(l??(n.nullContext||{}),l,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:1,column:0},end:{line:33,column:9}}}))!=null?e:""},useData:!0}),v=b();function j(n){v.imageGallery.insertAdjacentHTML("beforeend",R(n))}function U(){v.imageGallery.innerHTML=""}const x=b(),p=new I;x.searchForm.addEventListener("submit",T);function T(n){n.preventDefault();const l=n.currentTarget,t=l.elements.query.value.trim();if(!t){alert("Введіть пошуковий запит");return}p.query=t,p.resetPage(),p.fetchImages().then(({hits:a})=>{U(),j(a),new k(".js-gallery a")}),l.reset()}
//# sourceMappingURL=index.js.map
