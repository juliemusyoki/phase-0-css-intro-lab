(()=>{"use strict";const e="mnojpmjdmbbfmejpflffifhffcmidifd";let t=null;const n=()=>t,i=(e,n)=>{e&&t&&t.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:n}})},a=()=>"complete"===document.readyState&&"visible"===document.visibilityState,s="github",o="github.com",r=()=>{const e=new URL(location.href);var t;t=e.pathname,["/","/about","/enterprise","/events","/explore","/home","/issues","/login","/logout","/marketplace","/nonprofit","/notifications","/pricing","/pulls","/search","/settings","/team","/tos"].includes(t)?(()=>{const e=`https://${o}`,t=o,i=o,a=n();a&&a.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:e,publisherKey:t,publisherName:i,mediaKey:"",favIconUrl:""}})})():(e=>{const t=(e=>{if(!e.pathname)return"";const t=e.pathname.split("/").filter((e=>e));return t&&0!==t.length?t.length>1&&"orgs"===t[0]?t[1]:t[0]:""})(e);if(t)return(async e=>{if(!e)throw new Error("Invalid parameters");const t=(e=>e?`https://api.github.com/users/${e}`:"")(e);if(!t)throw new Error("Invalid profile api url");const n=await fetch(t);if(!n.ok){const e=((e,t)=>`Profile API request failed: ${t.statusText} (${t.status})`)(0,n);throw new Error(e)}const i=await n.json();return{user:{id:i.id,screenName:i.login,fullName:i.name||i.login,favIconUrl:i.avatar_url},post:{id:"",timestamp:"",text:""}}})(t).then((e=>{const a=e.user.id,o=((e,t)=>`${e}#channel:${t}`)(s,a),r=e.user.fullName;if(!r)return void i(s,"Invalid publisher name");const c=((e,t)=>e&&t?`${e}_${t}`:"")(s,t),l=e.user.favIconUrl,u=(e=>e?`https://github.com/${e}/`:"")(t),m=n();m&&m.postMessage({type:"SavePublisherVisit",mediaType:s,data:{url:u,publisherKey:o,publisherName:r,mediaKey:c,favIconUrl:l}})}));i(s,"Invalid screen name")})(e)};let c=!1,l="";const u=e=>{e&&(e.url||"complete"===e.status)&&location.href!==l&&(l=location.href,r())};var m;chrome.extension.inIncognitoContext||(m=e=>{e?(a()?r():document.addEventListener("readystatechange",(function(){a()&&r()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&r()})),((e,t)=>{if(c)return;c=!0;const i=n();i&&(i.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),i.onMessage.addListener((function(e){e.data&&"OnUpdatedTab"===e.type&&t(e.data.changeInfo)})))})(s,u)):console.error("Failed to initialize communications port")},t?m(!0):(chrome.runtime.sendMessage(e,{type:"SupportsGreaselion"},(function(n){!chrome.runtime.lastError&&n&&n.supported&&(t=chrome.runtime.connect(e,{name:"Greaselion"}),m(!0))})),setTimeout((()=>{t||(t=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),m(!0))}),100)),console.info("Greaselion script loaded: githubBase.ts"))})();