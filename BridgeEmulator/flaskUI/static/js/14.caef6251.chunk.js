(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[14],{108:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return x}));var c=o(14),n=o(2),l=o(16),a=o.n(l),r=o(91),s=o(12),i=o(27),u=o(17),j=o(89),b=o.n(j),d=(o(90),o(92)),h=(o(93),o(6)),p=function(e){var t=e.HOST_IP,o=e.api_key,c=e.id,n=e.light,l=e.modelIds,j=e.setType,p=e.setMessage,O=function(){a.a.delete("".concat(t,"/api/").concat(o,"/lights/").concat(c)).then((function(e){console.log(e.data),p("Light successfully deleted"),j("none"),j("success")})).catch((function(e){console.error(e),p("Error occured, check browser console"),j("none"),j("error")}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"iconContainer",children:Object(h.jsx)(s.h,{onClick:function(){a.a.put("".concat(t,"/api/").concat(o,"/lights/").concat(c,"/state"),{alert:"select"}).then((function(e){console.log(e.data),p("Light alerted"),j("none"),j("success")})).catch((function(e){console.error(e),p("Error occured, check browser console"),j("none"),j("error")}))}})}),n.name," ",n.state.reachable&&Object(h.jsx)(s.c,{title:"Reachable"})||Object(h.jsx)(u.b,{title:"Unrechable"}),Object(h.jsx)("br",{}),Object(h.jsx)(b.a,{options:l,value:n.modelid,onChange:function(e){return o=e.value,console.log(Object(r.a)({},c,o)),void a.a.post("".concat(t,"/light-types"),Object(r.a)({},c,o)).then((function(e){console.log(e.data),p("Modelid updated"),j("none"),j("success")})).catch((function(e){console.error(e),p("Error occured, check browser console"),j("none"),j("error")}));var o},placeholder:"Choose light modelid"}),"Protocol: ",n.protocol,Object(h.jsx)("br",{})," IP: ",n.protocol_cfg.ip,Object(h.jsx)("br",{}),Object(h.jsx)(i.a,{title:"Delete",onClick:function(){Object(d.confirmAlert)({title:"Delete light "+n.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return O()}},{label:"No"}]})}})," ",Object(h.jsx)(i.c,{title:"Update"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},O=o(99),g=o(97),m=function(e){var t=e.setType,o=e.setMessage,l=e.HOST_IP,s=e.API_KEY,i=Object(n.useState)({protocol:"auto"}),u=Object(c.a)(i,2),j=u[0],d=u[1],p=function(e,t){d(Object(g.a)(Object(g.a)({},j),{},Object(r.a)({},e,t)))};return Object(h.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var c={protocol:j.protocol,ip:j.ip,config:Object(O.a)(j,["protocol","ip"])};a.a.post("".concat(l,"/api/").concat(s,"/lights"),c),o("Light added"),t("none"),t("success")}(e)},className:"add-form",children:[Object(h.jsx)(b.a,{options:[{value:"auto",label:"Autodetect"},{value:"domoticz",label:"Domoticz"},{value:"flex",label:"Flex"},{value:"jeedom",label:"Jeedom"},{value:"milight",label:"MiLight"},{value:"mibox",label:"Mi Box"},{value:"wiz",label:"Wiz"}],value:j.protocol,onChange:function(e){return p("protocol",e.value)},placeholder:"Choose light protocol"}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Light Ip"}),Object(h.jsx)("input",{type:"text",placeholder:"192.168.x.x",value:j.ip,onChange:function(e){return p("ip",e.target.value)}})]}),"auto"!==j.protocol&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{type:"text",value:j.lightName,onChange:function(e){return p("lightName",e.target.value)},placeholder:"Name used on diyhue"})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)(b.a,{options:[{value:"LOM001",label:"On/Off Plug"},{value:"LWB010",label:"Dimmable Light"},{value:"LTW001",label:"Color temperature Light"},{value:"LCT015",label:"Color Light"},{value:"LST002",label:"Color Strip"}],value:j.lightModelID,onChange:function(e){return p("lightModelID",e.value)},placeholder:"Emulated light type"})})]}),("milight"===j.protocol||"mibox"===j.protocol)&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Device ID"}),Object(h.jsx)("input",{type:"text",value:j.miID,onChange:function(e){return p("miID",e.target.value)},placeholder:"0x1234"})]}),Object(h.jsx)(b.a,{options:[{value:"rgbw",label:"RGBW"},{value:"cct",label:"CCT"},{value:"rgb_cct",label:"RGB-CCT"},{value:"rgb",label:"RGB"}],value:j.miModes,onChange:function(e){return p("miModes",e.value)},placeholder:"Choose light mode"}),Object(h.jsx)(b.a,{options:["1","2","3","4"],value:j.miGroups,onChange:function(e){return p("miGroups",e.value)},placeholder:"Choose light group"})]}),"mibox"===j.protocol&&Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Port"}),Object(h.jsx)("input",{type:"number",placeholder:"Mi Box port",value:j.miBoxPort,onChange:function(e){return p("miboxPort",e.target.value)}})]}),"domoticz"===j.protocol&&Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Device ID"}),Object(h.jsx)("input",{type:"text",placeholder:"",value:j.domoticzID,onChange:function(e){return p("domoticzID",e.target.value)}})]}),"jeedom"===j.protocol&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Light Api"}),Object(h.jsx)("input",{type:"text",placeholder:"Light Api",value:j.jeedomlightAPI,onChange:function(e){return p("jeedomlightAPI",e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Light ID"}),Object(h.jsx)("input",{type:"text",placeholder:"Light ID",value:j.jeedomlightID,onChange:function(e){return p("jeedomlightID",e.target.value)}})]})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)("input",{type:"submit",value:"Add Light",className:"btn btn-block"})})]})},v=o(87);function x(e){var t=e.HOST_IP,o=e.API_KEY,l=Object(n.useState)({}),r=Object(c.a)(l,2),s=r[0],i=r[1],u=Object(n.useState)([]),j=Object(c.a)(u,2),b=j[0],d=j[1],O=Object(n.useState)("none"),g=Object(c.a)(O,2),x=g[0],f=g[1],C=Object(n.useState)("no message"),y=Object(c.a)(C,2),I=y[0],N=y[1],D=Object(n.useState)(!1),L=Object(c.a)(D,2),k=L[0],P=L[1];return Object(n.useEffect)((function(){var e=function(){void 0!==o&&a.a.get("".concat(t,"/lights")).then((function(e){console.log(e.data),i(e.data)})).catch((function(e){console.error(e)}))};e(),void 0!==o&&a.a.get("".concat(t,"/light-types")).then((function(e){console.log(e.data),d(e.data.result)})).catch((function(e){console.error(e)}));var c=setInterval((function(){e()}),2e3);return function(){return clearInterval(c)}}),[t,o]),Object(h.jsxs)("div",{className:"content",children:["none"!==x&&Object(h.jsx)(v.a,{type:x,message:I,duration:"5000",setType:f}),Object(h.jsxs)("div",{className:"cardGrid",children:[Object(h.jsxs)("div",{className:"linkbtn",onClick:function(){void 0!==o&&a.a.post("".concat(t,"/api/").concat(o,"/lights"),"").then((function(e){console.log(e.data),N("Searching for new lights..."),f("none"),f("success")})).catch((function(e){console.error(e),N("Error occured, check browser console"),f("none"),f("error")}))},children:["Scan For Lights",Object(h.jsx)("div",{className:"btn btn-block"})]}),Object(h.jsx)("button",{onClick:function(){return P(!k)},className:"someClassWithCursorPointer",style:{all:"unset"},children:"Add light manually"}),k&&Object(h.jsx)(m,{setType:f,setMessage:N,HOST_IP:t,API_KEY:o}),Object.entries(s).map((function(e){var n=Object(c.a)(e,2),l=n[0],a=n[1];return Object(h.jsx)(p,{HOST_IP:t,api_key:o,id:l,light:a,modelIds:b,setType:f,setMessage:N},l)}))]})]})}},87:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var c=o(12),n=o(88),l=o.n(n),a=o(6);function r(e){var t=e.type,o=e.message,n=e.duration,r=e.setType;return Object(a.jsx)(l.a,{duration:n,persistOnHover:!0,children:Object(a.jsx)("div",{className:"notificationContainer",children:Object(a.jsxs)("div",{className:"notification ".concat(t),children:[Object(a.jsx)("p",{children:o}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(c.m,{onClick:function(){return r("none")}})})]})})})}}}]);
//# sourceMappingURL=14.caef6251.chunk.js.map