(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=a(4),s=a(1),m="https://jsonplaceholder.typicode.com/";function u(e){return fetch(e).then((function(e){return e.json()}))}var i=u("".concat(m,"posts")),p=u("".concat(m,"users")),d=u("".concat(m,"comments")),f=(a(10),function(e){var t=e.comment,a=t.name,n=t.body,r=t.email;return c.a.createElement("div",{className:"comment"},c.a.createElement("p",{className:"comment__name"},a),c.a.createElement("p",{className:"comment__body"},n),c.a.createElement("div",{className:"comment__email"},c.a.createElement("a",{href:"mailto:".concat(r)},r)))}),E=(a(11),function(e){var t=e.post,a=t.title,n=t.body,r=t.comments,l=t.user,o=l.name,s=l.email,m=t.user.address,u=m.city,i=m.street,p=m.suite,d=m.zipcode;return c.a.createElement("div",{className:"post__wrapper"},c.a.createElement("div",null,c.a.createElement("h3",null,o),c.a.createElement("div",{className:"user__email"},c.a.createElement("a",{href:"mailto:".concat(s)},s)),c.a.createElement("div",{className:"address"},c.a.createElement("p",null,u),c.a.createElement("p",null,i),c.a.createElement("p",null,p),c.a.createElement("p",null,d))),c.a.createElement("h3",null,a),c.a.createElement("p",null,n),c.a.createElement("div",{className:"comment__wrapper"},r.map((function(e){return c.a.createElement(f,{comment:e,key:e.id})}))))}),v=(a(12),function(e){var t=e.posts;return c.a.createElement("div",{className:"posts__wrapper"},t.map((function(e){return c.a.createElement(E,{post:e,key:e.id})})))}),b=(a(13),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),m=Object(s.a)(l,2),u=m[0],f=m[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),h=b[0],_=b[1],y=Object(n.useMemo)((function(){var e=h.toLowerCase();return a.filter((function(t){return t.title.toLowerCase().includes(e)||t.body.toLowerCase().includes(e)}))}),[h,a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Dynamic list of posts"),a.length?c.a.createElement("div",{className:"app"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Serch the post",value:h,onChange:function(e){return function(e){var t=e.target.value;_(t)}(e)}}),c.a.createElement(v,{posts:h?y:a})):c.a.createElement("button",{className:"button",type:"button",onClick:function(){f(!0),Promise.all([i,p,d]).then((function(e){var t=Object(s.a)(e,3),a=t[0],n=t[1],c=t[2],l=a.map((function(e){var t=n.find((function(t){return e.userId===t.id})),a=c.filter((function(t){return e.id===t.postId}));return Object(o.a)({},e,{user:t,comments:a})}));r(l),f(!1)}))},disabled:u},u?"Loading...":"Load Posts"))});l.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.ddd85b59.chunk.js.map