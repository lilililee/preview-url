(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),l=a.n(i),s=(a(15),a(1)),r=function(e){var t=e.width,a=e.height,n=e.url;return c.a.createElement("div",{className:"display-area"},c.a.createElement("div",{className:"devices-container"},c.a.createElement("iframe",{id:"devices-view",style:{width:"".concat(.8*t,"px"),height:"".concat(.8*a,"px")},src:n,frameBorder:"0","scrolling-x":"no",title:"view"})))},m=a(8),u=a.n(m),o=[{size:"320x568",name:"iPhone5/SE\uff08320x568\uff09"},{size:"375x667",name:"iPhone6/7/8\uff08375x667\uff09"},{size:"414x736",name:"iPhone6/7/8 plus\uff08414x736\uff09"},{size:"375x812",name:"iPhone X\uff08375x812\uff09"},{size:"768x1024",name:"iPad\uff08768x1024\uff09"},{size:"1024x1366",name:"iPad pro\uff081024x1366\uff09"},{size:"360x640",name:"Galaxy S5\uff08360x640\uff09"}],d=function(e){var t=Object(n.useState)(e.url),a=Object(s.a)(t,2),i=a[0],l=a[1],r=Object(n.useState)(""),m=Object(s.a)(r,2),d=m[0],p=m[1],v=Object(n.useState)(""),E=Object(s.a)(v,2),h=E[0],x=E[1],N=e.width,f=e.height,b=e.url,z=e.setSize,g=e.setUrl;return c.a.createElement("div",{className:"setting-area"},c.a.createElement("div",{className:"panel panel-link"},c.a.createElement("div",{className:"panel-title"},"\u94fe\u63a5\u8bbe\u7f6e"),c.a.createElement("div",{className:"panel-content"},c.a.createElement("div",{className:"link"},c.a.createElement("input",{type:"text",defaultValue:b,onChange:function(e){return l(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u9884\u89c8\u94fe\u63a5"}),c.a.createElement("div",{className:"btn",onClick:function(){return g(i)}},"\u786e\u5b9a")))),c.a.createElement("div",{className:"panel panel-size"},c.a.createElement("div",{className:"panel-title"},"\u89c6\u56fe\u8bbe\u7f6e"),c.a.createElement("div",{className:"panel-content"},c.a.createElement("div",{className:"size-list"},o.map(function(e){return c.a.createElement("div",{className:"".concat(N,"x").concat(f)===e.size?"active size-item":"size-item",onClick:function(){return z(e.size)},key:e.size},e.name)})),c.a.createElement("div",{className:"diy-size"},c.a.createElement("div",{className:"name"},"\u81ea\u5b9a\u4e49\uff1a"),c.a.createElement("input",{type:"text",className:"input-width",placeholder:"\u5bbd",onChange:function(e){return p(e.target.value)}}),c.a.createElement("span",null,"x"),c.a.createElement("input",{type:"text",className:"input-height",placeholder:"\u9ad8",onChange:function(e){return x(e.target.value)}}),c.a.createElement("span",null,"px"),c.a.createElement("div",{className:"btn",onClick:function(){return!d||+d<=0?alert("\u8bf7\u8f93\u5165\u5408\u6cd5\u7684\u5bbd\u5ea6"):!h||+h<=0?alert("\u8bf7\u8f93\u5165\u5408\u6cd5\u7684\u9ad8\u5ea6"):void z("".concat(d,"x").concat(h))}},"\u786e\u5b9a")))),c.a.createElement("div",{className:"panel panel-qrcode"},c.a.createElement("div",{className:"panel-title"},"\u626b\u63cf\u4e8c\u7ef4\u7801\u9884\u89c8"),c.a.createElement("div",{className:"panel-content"},c.a.createElement(u.a,{value:b}),",")))};a(24);l.a.render(c.a.createElement(function(e){var t=Object(n.useState)(375),a=Object(s.a)(t,2),i=a[0],l=a[1],m=Object(n.useState)(667),u=Object(s.a)(m,2),o=u[0],p=u[1],v=Object(n.useState)("https://weui.io/"),E=Object(s.a)(v,2),h=E[0],x=E[1],N={width:i,height:o,url:h};return c.a.createElement("div",{className:"main"},c.a.createElement(r,N),c.a.createElement(d,Object.assign({},N,{setSize:function(e){var t=e.split("x"),a=Object(s.a)(t,2),n=a[0],c=a[1];l(+n),p(+c)},setUrl:function(e){x(""),setTimeout(function(){x(e)},100)}})))},null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(25)}},[[9,1,2]]]);
//# sourceMappingURL=main.8a7487ab.chunk.js.map