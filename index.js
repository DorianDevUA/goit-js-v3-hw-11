var P=t=>{throw TypeError(t)};var v=(t,n,l)=>n.has(t)||P("Cannot "+l);var f=(t,n,l)=>(v(t,n,"read from private field"),l?l.call(t):n.get(t)),p=(t,n,l)=>n.has(t)?P("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,l),d=(t,n,l,a)=>(v(t,n,"write to private field"),a?a.call(t,l):n.set(t,l),l);import{S as T,i as E,H as U}from"./assets/vendor-BV_-B_xx.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(s){if(s.ep)return;s.ep=!0;const e=l(s);fetch(s.href,e)}})();function M(){return{searchForm:document.querySelector(".js-gallery-search-form"),galleryContainer:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn"),galleryObserverGuard:document.querySelector(".js-guard")}}class O{constructor({selector:n,enabledLabel:l,disabledLabel:a,hidden:s=!1}){this.refs=this.getRefs(n),this.enabledLabel=l,this.disabledLabel=a,s&&this.hide()}getRefs(n){const l={};return l.button=document.querySelector(n),l.label=l.button.querySelector(".custom-btn-label"),l.spinner=l.button.querySelector(".custom-btn-spinner"),l}enable(){this.refs.button.disabled=!1,this.refs.label.textContent=this.enabledLabel,this.refs.spinner.classList.add("is-hidden")}disable(){this.refs.button.disabled=!0,this.refs.label.textContent=this.disabledLabel,this.refs.spinner.classList.remove("is-hidden")}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}}const j="43520057-d4110ce2722b475a1deefaa82",k="https://pixabay.com/api/";var g,u;class C{constructor(){p(this,g);p(this,u);d(this,g,""),d(this,u,1),this.isLastPage=!1,this.limit=5}get searchQuery(){return f(this,g)}set searchQuery(n){d(this,g,n.trim().toLowerCase())}get galleryPage(){return f(this,u)}set galleryPage(n){d(this,u,n)}incrementPage(){d(this,u,f(this,u)+1)}resetPage(){d(this,u,1)}fetchImages(){const n=new URLSearchParams({key:j,q:f(this,g),page:f(this,u),per_page:this.limit,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${k}?${n}`;return fetch(l).then(a=>{if(!a.ok)throw new Error(`HTTP error: ${a.status}`);return a.json()}).then(({hits:a,totalHits:s})=>(f(this,u)*this.limit>=s&&(this.isLastPage=!0),this.incrementPage(),a))}}g=new WeakMap,u=new WeakMap;class I{constructor(){this.lightbox=null}initialize(){const n=".js-gallery a",l={captions:!0,captionsData:"alt",captionDelay:250};this.lightbox=new T(n,l)}refresh(){this.lightbox.refresh()}}const G={BAD_REQUEST:"Введіть запит у поле для пошуку!",NOT_FOUND:"Sorry, there are no images matching your search query. Please try again!",LAST_PAGE:"Нових зображень немає"};function _(t){E.warning({position:"topRight",message:t})}function B(t){E.error({position:"topRight",message:t})}const b={showWarningMsg:_,showErrorMsg:B,MESSAGES:G},D=U.template({1:function(t,n,l,a,s){var e,i=n??(t.nullContext||{}),o=t.hooks.helperMissing,c="function",h=t.escapeExpression,r=t.lookupProperty||function(w,S){if(Object.prototype.hasOwnProperty.call(w,S))return w[S]};return"  <li class='gallery-item' data-id='"+h((e=(e=r(l,"id")||(n!=null?r(n,"id"):n))!=null?e:o,typeof e===c?e.call(i,{name:"id",hash:{},data:s,loc:{start:{line:2,column:36},end:{line:2,column:42}}}):e))+`'>
    <article class='card'>
      <div class='card-thumb'>
        <a class='card-link' href='`+h((e=(e=r(l,"largeImageURL")||(n!=null?r(n,"largeImageURL"):n))!=null?e:o,typeof e===c?e.call(i,{name:"largeImageURL",hash:{},data:s,loc:{start:{line:5,column:35},end:{line:5,column:52}}}):e))+`'>
          <img
            class='card-image'
            src='`+h((e=(e=r(l,"webformatURL")||(n!=null?r(n,"webformatURL"):n))!=null?e:o,typeof e===c?e.call(i,{name:"webformatURL",hash:{},data:s,loc:{start:{line:8,column:17},end:{line:8,column:33}}}):e))+`'
            alt='`+h((e=(e=r(l,"tags")||(n!=null?r(n,"tags"):n))!=null?e:o,typeof e===c?e.call(i,{name:"tags",hash:{},data:s,loc:{start:{line:9,column:17},end:{line:9,column:25}}}):e))+`'
            width='360'
          />
        </a>
      </div>

      <div class='card-content'>
        <ul class='card-socials'>
          <li>
            <h3>likes</h3>
            <p>`+h((e=(e=r(l,"likes")||(n!=null?r(n,"likes"):n))!=null?e:o,typeof e===c?e.call(i,{name:"likes",hash:{},data:s,loc:{start:{line:19,column:15},end:{line:19,column:24}}}):e))+`</p>
          </li>
          <li>
            <h3>views</h3>
            <p>`+h((e=(e=r(l,"views")||(n!=null?r(n,"views"):n))!=null?e:o,typeof e===c?e.call(i,{name:"views",hash:{},data:s,loc:{start:{line:23,column:15},end:{line:23,column:24}}}):e))+`</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>`+h((e=(e=r(l,"comments")||(n!=null?r(n,"comments"):n))!=null?e:o,typeof e===c?e.call(i,{name:"comments",hash:{},data:s,loc:{start:{line:27,column:15},end:{line:27,column:27}}}):e))+`</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>`+h((e=(e=r(l,"downloads")||(n!=null?r(n,"downloads"):n))!=null?e:o,typeof e===c?e.call(i,{name:"downloads",hash:{},data:s,loc:{start:{line:31,column:15},end:{line:31,column:28}}}):e))+`</p>
          </li>
        </ul>
      </div>
    </article>
  </li>
`},compiler:[8,">= 4.3.0"],main:function(t,n,l,a,s){var e,i=t.lookupProperty||function(o,c){if(Object.prototype.hasOwnProperty.call(o,c))return o[c]};return(e=i(l,"each").call(n??(t.nullContext||{}),n,{name:"each",hash:{},fn:t.program(1,s,0),inverse:t.noop,data:s,loc:{start:{line:1,column:0},end:{line:37,column:9}}}))!=null?e:""},useData:!0}),R=M();function Q(t){R.galleryContainer.insertAdjacentHTML("beforeend",D(t))}function z(){R.galleryContainer.innerHTML=""}const x=M(),m=new C,A=new I,L=new O({selector:".js-gallery-search-btn",enabledLabel:"Знайти",disabledLabel:"Пошук"}),y=new O({selector:".js-load-more-btn",enabledLabel:"Показати ще",disabledLabel:"Завантаження",hidden:!0});L.enable();x.searchForm.addEventListener("submit",F);x.loadMoreBtn.addEventListener("click",H);function F(t){t.preventDefault();const n=t.currentTarget;if(m.searchQuery=n.elements.query.value,!m.searchQuery){b.showWarningMsg(b.MESSAGES.BAD_REQUEST);return}N(),q().then(()=>{A.initialize(),L.enable()}),n.reset()}function H(){q().then(()=>{A.refresh()})}function q(){return y.disable(),m.fetchImages().then(t=>{if(m.searchQuery&&!t.length){b.showErrorMsg(b.MESSAGES.NOT_FOUND);return}Q(t)}).then(()=>{if(m.searchQuery&&m.isLastPage){y.hide();return}y.show(),y.enable()})}function N(){m.resetPage(),m.isLastPage=!1,L.disable(),y.hide(),z()}
//# sourceMappingURL=index.js.map
