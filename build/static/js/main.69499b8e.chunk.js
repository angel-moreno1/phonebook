(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),o=t(15),a=t(6),u=t(3),i=t(0),s=function(e){var n=e.filter,t=e.onChangeFilter;return Object(i.jsxs)("p",{children:["Filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})," "]})},j=function(e){var n=e.name,t=e.number,r=e.onChangeName,c=e.onChangeNumber,o=e.onAddPerson;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:r}),Object(i.jsx)("br",{}),"number: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsx)("button",{type:"submit",onClick:o,children:"add"})]})},f=function(e){var n=e.person,t=e.onDelete;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:[n.name,": ",n.phone," ",Object(i.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]},n.name)})},b=function(e){var n=e.filter,t=e.persons,r=e.onDeleteSinglePerson,c=t.filter((function(e){return-1!==e.name.trim().toLowerCase().indexOf(n.trim().toLowerCase())}));return n?c.length<1?Object(i.jsx)("p",{children:"Not results"}):c.map((function(e){return Object(i.jsx)(f,{person:e,onDelete:r},e.name)})):t.map((function(e){return Object(i.jsx)(f,{person:e,onDelete:r},e.name)}))},l=t(4),d=t.n(l),h="/api/persons",m=(t(39),function(e){var n=e.message,t=e.type;return Object(i.jsx)("h3",{className:"done"===t?"done":"error",children:n})}),O=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),f=Object(u.a)(o,2),l=f[0],O=f[1],p=Object(r.useState)(""),v=Object(u.a)(p,2),x=v[0],g=v[1],w=Object(r.useState)(""),C=Object(u.a)(w,2),y=C[0],S=C[1],k=Object(r.useState)(""),N=Object(u.a)(k,2),D=N[0],P=N[1],F=Object(r.useState)(""),L=Object(u.a)(F,2),A=L[0],E=L[1];Object(r.useEffect)((function(){d.a.get(h).then((function(e){return e.data})).then((function(e){c(e)}))}),[]),Object(r.useEffect)((function(){var e=setTimeout((function(){P(""),E("")}),3e3);return function(){clearTimeout(e)}}),[D,A]);var J=function(){var e,n;if(window.confirm("".concat(l," is already added to phonebook, replace the old number with new one?"))){var r=t.find((function(e){return e.name===l})),o=Object(a.a)(Object(a.a)({},r),{},{number:x}),u=t.map((function(e){return e.name===r.name?e=o:e}));O(""),g(""),c(u),(e=r.id,n=o,d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e}))).catch((function(e){E("information of ".concat(l," has already been removed from server"));var n=t.filter((function(e){return e.name!==l}));c(n)}))}};return Object(i.jsxs)("div",{style:{margin:"2rem"},children:[D&&Object(i.jsx)(m,{message:D,type:"done"}),A&&Object(i.jsx)(m,{message:A}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(s,{filter:y,onChangeFilter:function(e){var n=e.target;S(n.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(j,{name:l,number:x,onChangeName:function(e){var n=e.target;O(n.value)},onChangeNumber:function(e){var n=e.target;g(n.value)},onAddPerson:function(e){if(e.preventDefault(),""!==l&&x)if(t.some((function(e){return e.name.trim().toLowerCase()===l.trim().toLowerCase()})))J();else{var n={name:l,phone:x};c((function(e){return e.concat(n)})),O(""),g(""),function(e){return d.a.post(h,e).then((function(e){return e.data}))}(n).catch((function(e){return alert(e)})),P("".concat(l," Added  successfully"))}}}),Object(i.jsx)("h2",{children:"Numbers"}),t.length>=1?Object(i.jsx)(b,{filter:y,persons:t,onDeleteSinglePerson:function(e){var n=e.id,r=e.name;if(window.confirm("delete ".concat(r,"?"))){var o=t.filter((function(e){return e.id!==n}));c(o),function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.status}))}(n).catch((function(e){return alert(e)})),P("".concat(r," delete successfully"))}}}):Object(i.jsx)("p",{children:"No contacts to show"})]})};Object(o.render)(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.69499b8e.chunk.js.map