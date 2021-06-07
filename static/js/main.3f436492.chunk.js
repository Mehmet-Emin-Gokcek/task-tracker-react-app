(this["webpackJsonptask-tracker-react-app"]=this["webpackJsonptask-tracker-react-app"]||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),o=(n(34),n(8)),i=n(29),u=n(2),l=n.n(u),d=n(5),j=n(4),b=(n(36),n(0)),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProps={color:"steelblue"};var f=p,h=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)(f,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};h.defaultProps={title:"Task Tracker"};var O=h,x=n(28),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.description," ",Object(b.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(b.jsx)("p",{children:t.date}),Object(b.jsx)("p",{children:t.location})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)("div",{children:Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(m,{task:e,onDelete:n,onToggle:r},t)}))})})},k=n(13),g=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(j.a)(o,2),u=i[0],l=i[1],d=Object(r.useState)(""),p=Object(j.a)(d,2),f=p[0],h=p[1],O=Object(r.useState)(!1),x=Object(j.a)(O,2),m=x[0],v=x[1];return Object(b.jsx)(k.Animated,{animationIn:"slideInDown",animationOut:"slideOutUp",animationInDuration:2e3,animationOutDuration:2e3,isVisible:!0,children:Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({description:a,date:u,location:f,reminder:m}),s(""),l(""),h(""),v(!1)):alert("Please add a task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",value:u,placeholder:"Add Day & Time",onChange:function(e){return l(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Location"}),Object(b.jsx)("input",{type:"text",value:f,placeholder:"Location",onChange:function(e){return h(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",checked:m,onChange:function(e){return v(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})})},y=function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"Copyright \xa9 Task Tracker 2021"})})},T="https://tasktrackerapi2.azurewebsites.net/api/usertasks",w=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:null!==(r=e.sent)&&c(!1),p([].concat(Object(i.a)(u),[r]));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/").concat(t),{method:"DELETE"});case 2:200===e.sent.status?p(u.filter((function(e){return e.id!==t}))):alert("Error Deleting This Task");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("".concat(T,"/").concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{onAdd:function(){return c(!n)},showAdd:n}),Object(b.jsx)(k.Animated,{animationIn:"slideInDown",animationOut:"slideOutUp",animationInDuration:2e3,animationOutDuration:2e3,isVisible:n,children:Object(b.jsx)(g,{onAdd:x})}),u.length>0?Object(b.jsx)(v,{tasks:u,onDelete:m,onToggle:w}):"No Tasks To Show",Object(b.jsx)(y,{})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.3f436492.chunk.js.map