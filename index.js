var P=n=>{throw TypeError(n)};var L=(n,l,r)=>l.has(n)||P("Cannot "+r);var g=(n,l,r)=>(L(n,l,"read from private field"),r?r.call(n):l.get(n)),h=(n,l,r)=>l.has(n)?P("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(n):l.set(n,r),f=(n,l,r,a)=>(L(n,l,"write to private field"),a?a.call(n,r):l.set(n,r),r);import{H as S,S as q}from"./assets/vendor-Bi_J8_6n.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function b(){return{searchForm:document.querySelector(".js-search-form"),imageGallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector('[data-action="load-more"]'),loader:document.querySelector(".js-loader")}}const k="43520057-d4110ce2722b475a1deefaa82",O="https://pixabay.com/api/";var y,u;class I{constructor(){h(this,y);h(this,u);f(this,y,""),f(this,u,1)}get query(){return g(this,y)}set query(l){f(this,y,l)}get page(){return g(this,u)}set page(l){f(this,u,l)}incrementPage(){f(this,u,g(this,u)+1)}resetPage(){f(this,u,1)}fetchImages(){const l=new URLSearchParams({key:k,q:g(this,y),page:g(this,u),per_page:10,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${O}?${l}`;return fetch(r).then(a=>{if(!a.ok)throw new Error(`HTTP error: ${a.status}`);return a.json()}).then(a=>(this.incrementPage(),a))}}y=new WeakMap,u=new WeakMap;const R=S.template({1:function(n,l,r,a,t){var e,s=l??(n.nullContext||{}),i=n.hooks.helperMissing,c="function",m=n.escapeExpression,o=n.lookupProperty||function(p,w){if(Object.prototype.hasOwnProperty.call(p,w))return p[w]};return`  <li class='gallery-item'>
    <article>
      <a class='gallery-item-link' href='`+m((e=(e=o(r,"largeImageURL")||(l!=null?o(l,"largeImageURL"):l))!=null?e:i,typeof e===c?e.call(s,{name:"largeImageURL",hash:{},data:t,loc:{start:{line:4,column:41},end:{line:4,column:58}}}):e))+`'>
        <img
          class='gallery-item-image'
          src='`+m((e=(e=o(r,"webformatURL")||(l!=null?o(l,"webformatURL"):l))!=null?e:i,typeof e===c?e.call(s,{name:"webformatURL",hash:{},data:t,loc:{start:{line:7,column:15},end:{line:7,column:31}}}):e))+`'
          alt='`+m((e=(e=o(r,"tags")||(l!=null?o(l,"tags"):l))!=null?e:i,typeof e===c?e.call(s,{name:"tags",hash:{},data:t,loc:{start:{line:8,column:15},end:{line:8,column:23}}}):e))+`'
          width='150'
        />
      </a>

      <ul class='gallery-item-meta'>
        <li class='gallery-item-likes'>
          <h3>likes:</h3>
          <p>`+m((e=(e=o(r,"likes")||(l!=null?o(l,"likes"):l))!=null?e:i,typeof e===c?e.call(s,{name:"likes",hash:{},data:t,loc:{start:{line:16,column:13},end:{line:16,column:22}}}):e))+`</p>
        </li>
        <li class='gallery-item-views'>
          <h3>views:</h3>
          <p>`+m((e=(e=o(r,"views")||(l!=null?o(l,"views"):l))!=null?e:i,typeof e===c?e.call(s,{name:"views",hash:{},data:t,loc:{start:{line:20,column:13},end:{line:20,column:22}}}):e))+`</p>
        </li>
        <li class='gallery-item-comments'>
          <h3>comments:</h3>
          <p>`+m((e=(e=o(r,"comments")||(l!=null?o(l,"comments"):l))!=null?e:i,typeof e===c?e.call(s,{name:"comments",hash:{},data:t,loc:{start:{line:24,column:13},end:{line:24,column:25}}}):e))+`</p>
        </li>
        <li class='gallery-item-downloads'>
          <h3>downloads:</h3>
          <p>`+m((e=(e=o(r,"downloads")||(l!=null?o(l,"downloads"):l))!=null?e:i,typeof e===c?e.call(s,{name:"downloads",hash:{},data:t,loc:{start:{line:28,column:13},end:{line:28,column:26}}}):e))+`</p>
        </li>
      </ul>
    </article>
  </li>
`},compiler:[8,">= 4.3.0"],main:function(n,l,r,a,t){var e,s=n.lookupProperty||function(i,c){if(Object.prototype.hasOwnProperty.call(i,c))return i[c]};return(e=s(r,"each").call(l??(n.nullContext||{}),l,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:1,column:0},end:{line:33,column:9}}}))!=null?e:""},useData:!0}),v=b();function j(n){v.imageGallery.insertAdjacentHTML("beforeend",R(n))}function U(){v.imageGallery.innerHTML=""}const x=b(),d=new I;x.searchForm.addEventListener("submit",A);function A(n){n.preventDefault();const l=n.currentTarget,r=l.elements.query.value.trim();if(!r){alert("Введіть пошуковий запит");return}d.query=r,d.resetPage(),d.fetchImages().then(({hits:a})=>{U(),j(a),new q(".js-gallery a")}),l.reset()}
//# sourceMappingURL=index.js.map
