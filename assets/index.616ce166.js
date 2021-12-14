import{r as _,o as p,c as h,a as n,b as u,w as m,F as v,d as l,e as k,i as w,f as T,n as S,g as x,h as F,j as O,k as R,l as I}from"./vendor.18708ff9.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};P();const A={class:"container mobile-size"},$={class:"terminal-nav"},N=n("div",{class:"terminal-logo"},[n("div",{class:"logo terminal-prompt"},[n("a",{href:"./",class:"no-style"},"League Fan")])],-1),E={class:"terminal-menu"},D=l("Icons"),G=l("Emotes"),V=l("Skins"),B={class:"container"},M={class:"main"},j={class:"footer"},z=n("hr",null,null,-1),U=n("header",null,null,-1),W=n("p",null,[l(" Css theme by "),n("a",{href:"https://terminalcss.xyz/",target:"_blank"},"Terminal CSS"),n("span",{style:{float:"right"}},[l(" Project by magicwenli/"),n("a",{href:"https://github.com/league-fan/league-fan.github.io/",target:"_blank"},"league-fan")])],-1),q=l("License"),H={setup(r){return(a,s)=>{const i=_("router-link"),e=_("router-view"),o=_("vue-progress-bar");return p(),h(v,null,[n("div",A,[n("div",$,[N,n("nav",E,[n("ul",null,[n("li",null,[u(i,{to:"./",class:"menu-item"},{default:m(()=>[D]),_:1})]),n("li",null,[u(i,{to:"./summoner-emotes",class:"menu-item"},{default:m(()=>[G]),_:1})]),n("li",null,[u(i,{to:"./summoner-skins",class:"menu-item"},{default:m(()=>[V]),_:1})])])])])]),n("div",B,[n("div",M,[u(e),u(o)]),n("div",j,[z,n("footer",null,[U,W,u(i,{to:"./license"},{default:m(()=>[q]),_:1})])])])],64)}}},J="modulepreload",b={},K="",y=function(a,s){return!s||s.length===0?a():Promise.all(s.map(i=>{if(i=`${K}${i}`,i in b)return;b[i]=!0;const e=i.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":J,e||(t.as="script",t.crossOrigin=""),t.href=i,document.head.appendChild(t),e)return new Promise((f,c)=>{t.addEventListener("load",f),t.addEventListener("error",c)})})).then(()=>a())};var g=(r,a)=>{const s=r.__vccOpts||r;for(const[i,e]of a)s[i]=e;return s};const Q={},X=n("h3",null,"License",-1),Y=n("p",null,[l(" These assets are copyrighted to Riot Games Inc. "),n("br"),l("However: Riot Games allows use of their League of Legends intellectual property when meeting the conditions lined in their Legal Jibber-Jabber policy. "),n("br"),l("This Website believes usage falls under US fair-use law because: "),n("br"),n("br"),l("Riot Games' profits are not limited in any way whatsoever. "),n("br"),l("The asset is merely being used for product promotion purposes. "),n("br"),l("Disclaimer: League Fan is not endorsed by Riot Games and nor does it reflect their views, opinions, or those of anyone officially involved in League of Legends' production and/or management. "),n("br"),n("br"),l("\xA9 Riot Games, Inc. All rights reserved. 'Riot Games', 'League of Legends', and 'PvP.net' are trademarks, services marks, or registered trademarks of Riot Games, Inc. ")],-1);function Z(r,a){return p(),h(v,null,[X,Y],64)}var ee=g(Q,[["render",Z]]);const te={};function oe(r,a){return p(),h("p",null," NotFound ")}var L=g(te,[["render",oe]]);const d="",se=[{path:d+"/",name:"icons",component:()=>y(()=>import("./SummonerIcons.522f228e.js"),["assets/SummonerIcons.522f228e.js","assets/grab.61be46cc.js","assets/grab.1f96678c.css","assets/vendor.18708ff9.js"]),meta:{title:"Summoner Icons"}},{path:d+"/license",name:"license",meta:{title:"License"},component:ee},{path:d+"/summoner-emotes",name:"emotes",component:()=>y(()=>import("./SummonerEmotes.c4e9b9cf.js"),["assets/SummonerEmotes.c4e9b9cf.js","assets/grab.61be46cc.js","assets/grab.1f96678c.css","assets/vendor.18708ff9.js"]),meta:{title:"Summoner Emotes"}},{path:d+"/summoner-skins",name:"skins",component:L,meta:{title:"Summoner Skins"}},{path:"/:path(.*)",component:L}],ne=k({state(){return{slider:{val:1},settings:{sliderVal:1,display:"none",language:"chinese"},icons:{previewIndex:0,page:1,caches:{}},emotes:{previewIndex:0,page:1,caches:{}}}},mutations:{changeSliderVal(r,a){a>=1&&a<=6&&(r.slider.val=a)},toggleSettings(r){r.settings.display=r.settings.display==="none"?"block":"none"}}}),ie=typeof window!="undefined",re={name:"VueProgress",serverCacheKey:()=>"Progress",setup(){const r=ie?w("RADON_LOADING_BAR"):{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},location:"top",autoRevert:!0,inverse:!1}},a=T(()=>{const s=r.options,i=!!s.show,e=s.location,o={"z-index":999999,"background-color":s.canSuccess?s.color:s.failedColor,opacity:s.show?1:0,position:s.position};return e==="top"||e==="bottom"?(e==="top"?o.top="0px":o.bottom="0px",s.inverse?o.right="0px":o.left="0px",o.width=r.percent+"%",o.height=s.thickness,o.transition=(i?"width "+s.transition.speed+", ":"")+"opacity "+s.transition.opacity):(e==="left"||e==="right")&&(e==="left"?o.left="0px":o.right="0px",s.inverse?o.top="0px":o.bottom="0px",o.height=r.percent+"%",o.width=s.thickness,o.transition=(i?"height "+s.transition.speed+", ":"")+"opacity "+s.transition.opacity),o});return{progress:r,finalStyle:a}}};function ae(r,a,s,i,e,o){return p(),h("div",{style:S(i.finalStyle)},null,4)}var ce=g(re,[["render",ae]]);function le(r,a){for(var s=1,i,e;s<arguments.length;++s){e=arguments[s];for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}var ue={install:(r,a)=>{const i=le({canSuccess:!0,show:!1,color:"#73ccec",position:"fixed",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1,autoFinish:!0},a),e=x({percent:0,options:i});r.provide("RADON_LOADING_BAR",e);let o={state:{tFailColor:"",tColor:"",timer:null,cut:0},start(t){t||(t=3e3),e.percent=0,e.options.show=!0,e.options.canSuccess=!0,this.state.cut=1e4/Math.floor(t),clearInterval(this.state.timer),this.state.timer=setInterval(()=>{this.increase(this.state.cut*Math.random()),e.percent>95&&e.options.autoFinish&&this.finish()},100)},set(t){e.options.show=!0,e.options.canSuccess=!0,e.percent=Math.floor(t)},get(){return Math.floor(e.percent)},increase(t){e.percent=Math.min(99,e.percent+Math.floor(t))},decrease(t){e.percent=e.percent-Math.floor(t)},hide(){clearInterval(this.state.timer),this.state.timer=null,setTimeout(()=>{e.options.show=!1,F(()=>{setTimeout(()=>{e.percent=0},100),e.options.autoRevert&&setTimeout(()=>{this.revert()},300)})},e.options.transition.termination)},pause(){clearInterval(this.state.timer)},finish(){e.percent=100,this.hide()},fail(){e.options.canSuccess=!1,e.percent=100,this.hide()},setFailColor(t){e.options.failedColor=t},setColor(t){e.options.color=t},setLocation(t){e.options.location=t},setTransition(t){e.options.transition=t},tempFailColor(t){this.state.tFailColor=e.options.failedColor,e.options.failedColor=t},tempColor(t){this.state.tColor=e.options.color,e.options.color=t},tempLocation(t){this.state.tLocation=e.options.location,e.options.location=t},tempTransition(t){this.state.tTransition=e.options.transition,e.options.transition=t},revertColor(){e.options.color=this.state.tColor,this.state.tColor=""},revertFailColor(){e.options.failedColor=this.state.tFailColor,this.state.tFailColor=""},revertLocation(){e.options.location=this.state.tLocation,this.state.tLocation=""},revertTransition(){e.options.transition=this.state.tTransition,this.state.tTransition={}},revert(){e.options.autoRevert&&(this.state.tColor&&this.revertColor(),this.state.tFailColor&&this.revertFailColor(),this.state.tLocation&&this.revertLocation(),this.state.tTransition&&(this.state.tTransition.speed!==void 0||this.state.tTransition.opacity!==void 0)&&this.revertTransition())},parseMeta(t){for(var f in t.func){let c=t.func[f];switch(c.call){case"color":switch(c.modifier){case"set":this.setColor(c.argument);break;case"temp":this.tempColor(c.argument);break}break;case"fail":switch(c.modifier){case"set":this.setFailColor(c.argument);break;case"temp":this.tempFailColor(c.argument);break}break;case"location":switch(c.modifier){case"set":this.setLocation(c.argument);break;case"temp":this.tempLocation(c.argument);break}break;case"transition":switch(c.modifier){case"set":this.setTransition(c.argument);break;case"temp":this.tempTransition(c.argument);break}break}}}};r.component("vue-progress-bar",ce),r.config.globalProperties.$Progress=o}};const C=O({history:R(),base:"/",routes:se,linkActiveClass:"active"}),pe={color:"#1a95e0",failedColor:"#874b4b",thickness:"12px",transition:{speed:"0.2s",opacity:"0.5s",termination:300},autoRevert:!0,location:"top",inverse:!1};C.beforeEach((r,a,s)=>{r.meta.title?document.title=`League Fan | ${r.meta.title}`:document.title="League Fan",s()});I(H).use(C).use(ne).use(ue,pe).mount("#app");export{g as _};
