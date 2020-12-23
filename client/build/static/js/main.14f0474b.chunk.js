(this["webpackJsonpexample-react-app"]=this["webpackJsonpexample-react-app"]||[]).push([[0],{42:function(e,t){var n={titleSearch:function(e){return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+intitle&key=").concat("AIzaSyCXTnAoEyEUzdm-vFK0lfeOzclgE3kKyHQ")).then((function(e){return e.json()}))}};e.exports=n},87:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n.n(a),i=n(15),r=n.n(i),s=n(120),j=n(10),l=Object(a.createContext)(),d=function(e){var t=Object(a.useState)("search"),n=Object(j.a)(t,2),o=n[0],i=n[1];return Object(c.jsx)(l.Provider,{value:[o,i],children:e.children})},b=n(42),h=n.n(b),u=n(43),O=n.n(u).a.create({baseURL:"http://localhost:3000/api"}),x={getAllBooks:function(){return O.get("/books")},saveBook:function(e){return O.post("/book",e)},deleteBook:function(e){return O.delete("/book/".concat(e))}},m=Object(a.createContext)(),v=function(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),o=n[0],i=n[1];return Object(c.jsx)(m.Provider,{value:[o,i],children:e.children})},f=n(116),p=n(118),k=n(123),g=n(119),S=n(91),C=n(122),y=n(48),B=n.n(y),I=n(124),w=n(121),N=n(49),A=n.n(N),E=Object(f.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},media:{width:"20vw",margin:"20px"},body:{width:"60vw"},buttons:{alignItems:"center"}}),L=function(e){var t=e.title,n=e.author,o=e.description,i=e.image,r=e.link,d=e.id,b=E(),h=Object(a.useContext)(m),u=Object(j.a)(h,2),O=u[0],v=(u[1],Object(a.useContext)(l)),f=Object(j.a)(v,2),y=f[0];f[1];return"search"===y?Object(c.jsxs)(p.a,{className:b.root,variant:"outlined",children:[Object(c.jsxs)(g.a,{children:[Object(c.jsx)(s.a,{variant:"h5",component:"h2",children:t}),Object(c.jsx)(s.a,{className:b.pos,color:"textSecondary",children:n}),Object(c.jsxs)(w.a,{container:!0,children:[Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(s.a,{variant:"body2",component:"p",className:b.body,children:o})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(C.a,{className:b.media,component:"img",alt:"Book Cover",image:i})})]})]}),Object(c.jsxs)(k.a,{className:b.buttons,children:[Object(c.jsx)(S.a,{size:"small",href:r,children:"Learn More on Google Books"}),Object(c.jsx)(I.a,{onClick:function(e){O.forEach((function(t){t.id===e.target.value&&x.saveBook({id:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.infoLink})}))},value:d,children:Object(c.jsx)(B.a,{})})]})]}):"saved"===y?Object(c.jsxs)(p.a,{className:b.root,variant:"outlined",children:[Object(c.jsxs)(g.a,{children:[Object(c.jsx)(s.a,{variant:"h5",component:"h2",children:t}),Object(c.jsx)(s.a,{className:b.pos,color:"textSecondary",children:n}),Object(c.jsxs)(w.a,{container:!0,children:[Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(s.a,{variant:"body2",component:"p",className:b.body,children:o})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(C.a,{className:b.media,component:"img",alt:"Book Cover",image:i})})]})]}),Object(c.jsxs)(k.a,{className:b.buttons,children:[Object(c.jsx)(S.a,{size:"small",href:r,children:"Learn More on Google Books"}),Object(c.jsx)(I.a,{onClick:function(e){x.getAllBooks().then((function(t){t.data.data.forEach((function(t){t._id===e.target.value&&x.deleteBook(t._id)}))}))},value:d,children:Object(c.jsx)(A.a,{})})]})]}):void 0},z=n(128),M=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],o=t[1],i=Object(a.useContext)(m),r=Object(j.a)(i,2),l=r[0],d=r[1];return Object(c.jsxs)(s.a,{children:[Object(c.jsx)("p",{children:"Search by Title"}),Object(c.jsx)(z.a,{placeholder:"Title",onChange:function(e){o(e.target.value)},value:n.title}),Object(c.jsx)(S.a,{onClick:function(){console.log(n),h.a.titleSearch(n).then((function(e){d(e.items)}))},children:"Search"}),Object(c.jsx)("div",{children:l.map((function(e){return Object(c.jsx)(L,{title:e.volumeInfo.title,author:e.volumeInfo.authors[0],description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink,id:e.id})}))})]})},G=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){x.getAllBooks().then((function(e){o(e.data.data),console.log(n)}))}),[]),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)(L,{title:e.title,author:e.author,description:e.description,image:e.image,link:e.link,id:e._id})}))})},J=function(){var e=Object(a.useContext)(l),t=Object(j.a)(e,2),n=t[0];t[1];return"search"===n?Object(c.jsx)(M,{}):"saved"===n?Object(c.jsx)(G,{}):void 0},T=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h3",{children:"Search for and Save Books you're Interested in"})})},U=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{children:"Made by Chris Asmar with ReactJS and MaterialUI"})})},_=n(125),K=n(126),P=n(127),R=function(e){var t=Object(a.useContext)(l),n=Object(j.a)(t,2),o=(n[0],n[1]),i=function(e){o(e.target.value)};return Object(c.jsx)(_.a,{children:Object(c.jsx)(K.a,{children:Object(c.jsxs)(w.a,{justify:"space-between",container:!0,spacing:24,children:[Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(s.a,{variant:"h6",children:"Google Books Search"})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsxs)(P.a,{variant:"contained",children:[Object(c.jsx)(S.a,{value:"search",onClick:i,children:"Search"}),Object(c.jsx)(S.a,{value:"saved",onClick:i,children:"Saved Books"})]})})]})})})};n(87);var q=function(){return Object(c.jsx)(d,{children:Object(c.jsx)(v,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(R,{}),Object(c.jsx)(T,{}),Object(c.jsx)(J,{}),Object(c.jsx)(U,{})]})})})})};n(88);r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.14f0474b.chunk.js.map