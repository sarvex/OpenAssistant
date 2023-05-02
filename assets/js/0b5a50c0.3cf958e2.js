"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[5684],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=i.createContext({}),p=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=p(t.components);return i.createElement(o.Provider,{value:e},t.children)},y="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),y=p(n),u=a,g=y["".concat(o,".").concat(u)]||y[u]||c[u]||r;return n?i.createElement(g,s(s({ref:e},d),{},{components:n})):i.createElement(g,s({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[y]="string"==typeof t?t:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72791:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={},s="Tasks Interaction",l={type:"api",id:"tasks-interaction",unversionedId:"tasks-interaction",title:"Tasks Interaction",description:"",slug:"/tasks-interaction",frontMatter:{},api:{tags:["tasks"],description:"The frontend reports an interaction.",operationId:"tasks_interaction_api_v1_tasks_interaction_post",requestBody:{content:{"application/json":{schema:{title:"Interaction",anyOf:[{title:"TextReplyToMessage",required:["user","message_id","user_message_id","text"],type:"object",properties:{type:{title:"Type",enum:["text_reply_to_message"],type:"string",default:"text_reply_to_message"},user:{title:"User",required:["id","display_name","auth_method"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"}}},message_id:{title:"Message Id",type:"string"},user_message_id:{title:"User Message Id",type:"string"},text:{title:"Text",minLength:1,type:"string"},lang:{title:"Lang",type:"string"}},description:"A user has replied to a message with text."},{title:"MessageRating",required:["user","message_id","rating"],type:"object",properties:{type:{title:"Type",enum:["message_rating"],type:"string",default:"message_rating"},user:{title:"User",required:["id","display_name","auth_method"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"}}},message_id:{title:"Message Id",type:"string"},rating:{title:"Rating",exclusiveMinimum:0,type:"integer"}},description:"A user has rated a message."},{title:"MessageRanking",required:["user","message_id","ranking"],type:"object",properties:{type:{title:"Type",enum:["message_ranking"],type:"string",default:"message_ranking"},user:{title:"User",required:["id","display_name","auth_method"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"}}},message_id:{title:"Message Id",type:"string"},ranking:{title:"Ranking",minItems:1,type:"array",items:{type:"integer"}},not_rankable:{title:"Not Rankable",type:"boolean"}},description:"A user has given a ranking for a message."},{title:"TextLabels",required:["user","text","labels","message_id"],type:"object",properties:{type:{title:"Type",enum:["text_labels"],type:"string",default:"text_labels"},user:{title:"User",required:["id","display_name","auth_method"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"}}},text:{title:"Text",type:"string"},labels:{title:"Labels",type:"object",additionalProperties:{type:"number"}},message_id:{title:"Message Id",type:"string",format:"uuid"},task_id:{title:"Task Id",type:"string",format:"uuid"},is_report:{title:"Is Report",type:"boolean"}},description:"A set of labels for a piece of text."}]}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"TaskDone",type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},type:{title:"Type",enum:["task_done"],type:"string",default:"task_done"}},description:"Signals to the frontend that the task is done."}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],method:"post",path:"/api/v1/tasks/interaction",parameters:[],securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Tasks Interaction",description:{content:"The frontend reports an interaction.",type:"text/plain"},url:{path:["api","v1","tasks","interaction"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "user": {\n        "id": "<string>",\n        "display_name": "<string>",\n        "auth_method": "<string>"\n    },\n    "message_id": "<string>",\n    "user_message_id": "<string>",\n    "text": "<string>",\n    "type": "text_reply_to_message",\n    "lang": "<string>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/tasks-interaction",previous:{title:"Tasks Acknowledge Failure",permalink:"/Open-Assistant/api/tasks-acknowledge-failure"},next:{title:"Close Collective Task",permalink:"/Open-Assistant/api/close-collective-task"}},o=[],p={toc:o},d="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tasks-interaction"},"Tasks Interaction"),(0,a.kt)("p",null,"The frontend reports an interaction."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"task_done"),"]"))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}y.isMDXComponent=!0}}]);