(this["webpackJsonpKabzda-kak-podrobno"]=this["webpackJsonpKabzda-kak-podrobno"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),c=t(3),o=t.n(c),r=(t(9),t(1));t(10);function i(e){return console.log("AccordionTitle rendering"),a.a.createElement("h3",{onClick:function(){e.onChange(e.collapsed)}},e.title)}function u(e){return console.log("AccordionBody rendering"),a.a.createElement("ul",null,e.items.map((function(n,t){return a.a.createElement("li",{key:t,onClick:function(){e.onClick(n.value)}},n.title)})))}var d=function(e){return a.a.createElement("div",null,a.a.createElement(i,{title:e.titleValue,onChange:e.onChange,collapsed:!e.collapsed}),!e.collapsed&&a.a.createElement(u,{items:e.items,onClick:e.onClick}))};function s(e){return a.a.createElement("div",null,a.a.createElement(m,{selected:e.value>0,onClick:e.onClick,value:1}),a.a.createElement(m,{selected:e.value>1,onClick:e.onClick,value:2}),a.a.createElement(m,{selected:e.value>2,onClick:e.onClick,value:3}),a.a.createElement(m,{selected:e.value>3,onClick:e.onClick,value:4}),a.a.createElement(m,{selected:e.value>4,onClick:e.onClick,value:5}))}function m(e){return console.log("Star rendering"),a.a.createElement("span",{onClick:function(){e.onClick(e.value)}},e.selected?a.a.createElement("b",null,"star "):"star ")}function p(e){return console.log("AccordionTitle rendering"),a.a.createElement("h3",{onClick:function(){e.onClick()}},e.title)}function k(){return console.log("AccordionBody rendering"),a.a.createElement("ul",null,a.a.createElement("li",null,"1"),a.a.createElement("li",null,"2"),a.a.createElement("li",null,"3"))}var E=function(e){var n=Object(l.useState)(!1),t=Object(r.a)(n,2),c=t[0],o=t[1];return a.a.createElement("div",null,a.a.createElement(p,{title:e.titleValue,onClick:function(){o(!c)}}),!c&&a.a.createElement(k,null))};function g(e){var n=Object(l.useState)(e.defaultValue?e.defaultValue:0),t=Object(r.a)(n,2),c=t[0],o=t[1];return a.a.createElement("div",null,a.a.createElement(f,{selected:c>0,setValue:function(){o(1)}}),a.a.createElement(f,{selected:c>1,setValue:function(){o(2)}}),a.a.createElement(f,{selected:c>2,setValue:function(){o(3)}}),a.a.createElement(f,{selected:c>3,setValue:function(){o(4)}}),a.a.createElement(f,{selected:c>4,setValue:function(){o(5)}}))}function f(e){return console.log("Star rendering"),a.a.createElement("span",{onClick:function(){e.setValue()}},e.selected?a.a.createElement("b",null,"star "):"star ")}var b=function(e){var n=Object(l.useState)(!!e.defaultOn&&e.defaultOn),t=Object(r.a)(n,2),c=t[0],o=t[1],i={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:c?"green":"white"},u={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"2px",padding:"2px",backgroundColor:c?"white":"red"},d={width:"10px",height:"10px",borderRadius:"5px",border:"1px solid black",display:"inline-block",marginLeft:"5px",backgroundColor:c?"green":"red"};return a.a.createElement("div",null,a.a.createElement("div",{style:i,onClick:function(){o(!0),e.onChange(!0)},onChange:function(){}},"On"),a.a.createElement("div",{style:u,onClick:function(){o(!1),e.onChange(!1)}},"Off"),a.a.createElement("div",{style:d}))};function C(e){var n={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:e.on?"green":"white"},t={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"2px",padding:"2px",backgroundColor:e.on?"white":"red"},l={width:"10px",height:"10px",borderRadius:"5px",border:"1px solid black",display:"inline-block",marginLeft:"5px",backgroundColor:e.on?"green":"red"};return a.a.createElement("div",null,a.a.createElement("div",{style:n,onClick:function(){e.onClick(!0)}},"On"),a.a.createElement("div",{style:t,onClick:function(){e.onClick(!1)}},"Off"),a.a.createElement("div",{style:l}))}function h(e){return a.a.createElement("div",{className:"PageTitle"},e.title)}var v=function(){var e=Object(l.useState)(0),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(l.useState)(!1),i=Object(r.a)(o,2),u=i[0],m=i[1],p=Object(l.useState)(!1),k=Object(r.a)(p,2),f=k[0],v=k[1];return a.a.createElement("div",{className:"App"},a.a.createElement(h,{title:"This is App component"}),a.a.createElement("b",null,"UncontrolledComponents"),a.a.createElement(E,{titleValue:"Menu"}),a.a.createElement(g,null),a.a.createElement(b,{onChange:v}),f.toString(),a.a.createElement("hr",null),a.a.createElement("b",null,"ControlledComponents"),a.a.createElement(d,{titleValue:"Friends",collapsed:u,onChange:m,items:[],onClick:function(e){return e}}),a.a.createElement(s,{value:t,onClick:c}),a.a.createElement(C,{onClick:v,on:f}),a.a.createElement("hr",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.a52f0161.chunk.js.map