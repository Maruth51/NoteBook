(this["webpackJsonpnotebook-app"]=this["webpackJsonpnotebook-app"]||[]).push([[0],{252:function(e,t,n){"use strict";n.r(t);var i=n(278),o=n(270),c=n(0),r=n(40),s=n.n(r),l=n(8),a=n(4),d=n(281),j=n(106),b=n(284),u=n(269),x=n(271),O=n(158),h=n(273),p=n(272),f=n(147),v=n(164),m=n(260),g=n(125),y=n(3),C=function(e){var t=Object(v.c)().toggleColorMode,n=Object(v.d)("dark","light"),i=Object(v.d)(g.a,g.b);return Object(y.jsx)(m.a,Object(f.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(y.jsx)(i,{}),"aria-label":"Switch to ".concat(n," mode")},e))},k=n(279),w=n(64),S=n(265),N=n(266),z=n(267),H=n(268),I=n(160),_=n(159),B=function(e){var t,n,i=e.isOpen,o=e.onClose,c=e.selectedNote,r=e.handleNoteCreate,s=e.handleNoteUpdate,l=Object(_.a)({mode:"onChange"}),a=l.register,d=l.handleSubmit,j=l.formState,b=l.errors;return Object(y.jsxs)(k.a,{isOpen:i,onClose:o,size:"lg",isCentered:!0,motionPreset:"slideInBottom",children:[Object(y.jsx)(k.g,{}),Object(y.jsx)(k.d,{children:Object(y.jsxs)("form",{onSubmit:d((function(e){var t={id:"",title:e.title,body:e.body};r?(t.id=Object(I.a)(),r&&r(t)):(t.id=c?c.id:"",s&&s(t)),o()})),children:[Object(y.jsxs)(k.f,{children:[c?"Edit":"Create"," a Note"]}),Object(y.jsx)(k.c,{}),Object(y.jsxs)(k.b,{pb:6,children:[Object(y.jsxs)(w.a,{isInvalid:!!(null===b||void 0===b?void 0:b.title),isRequired:!0,children:[Object(y.jsx)(S.a,{children:"Title"}),Object(y.jsx)(N.a,{name:"title",placeholder:"Title",defaultValue:null===c||void 0===c?void 0:c.title,ref:a({validate:function(e){return!!e||"Title is required"}})}),Object(y.jsx)(z.a,{children:!!(null===b||void 0===b?void 0:b.title)&&(null===b||void 0===b||null===(t=b.title)||void 0===t?void 0:t.message)})]}),Object(y.jsxs)(w.a,{size:"lg",mt:4,isInvalid:!!(null===b||void 0===b?void 0:b.body),isRequired:!0,children:[Object(y.jsx)(S.a,{children:"Body"}),Object(y.jsx)(H.a,{name:"body",placeholder:"Body",size:"md",borderRadius:"5px",defaultValue:null===c||void 0===c?void 0:c.body,ref:a({validate:function(e){return!!e||"Body is required"}})}),Object(y.jsx)(z.a,{children:!!(null===b||void 0===b?void 0:b.body)&&(null===b||void 0===b||null===(n=b.body)||void 0===n?void 0:n.message)})]})]}),Object(y.jsxs)(k.e,{children:[Object(y.jsx)(O.a,{type:"submit",colorScheme:"blue",isLoading:j.isSubmitting,mr:3,children:"Save"}),Object(y.jsx)(O.a,{onClick:o,children:"Cancel"})]})]})})]})},T=n(163),F=function(e){var t=e.handleNoteCreate,n=Object(b.a)(),i=n.isOpen,c=n.onOpen,r=n.onClose;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(u.a,{mb:"30px",align:"center",children:[Object(y.jsxs)(o.a,{p:"2",to:"/",children:[Object(y.jsx)(T.a.div,{whileHover:{scale:1.1},children:Object(y.jsx)(x.a,{as:"h1",size:"xl",bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",_focus:{boxShadow:"none",outline:"none"},_hover:{textDecoration:"none",bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Notebook App"})}),Object(y.jsx)(O.a,{leftIcon:Object(y.jsx)(p.a,{}),variant:"outline",size:"sm",onClick:c,children:"Add new note"})]}),Object(y.jsx)(h.a,{}),Object(y.jsx)(o.a,{children:Object(y.jsx)(C,{justifySelf:"flex-end"})})]}),Object(y.jsx)(B,{isOpen:i,onClose:r,handleNoteCreate:t})]})},P=n(280),q=n(263),A=n(274),E=n(283),G=n(275),L=n(113),R=n(276),W=n(277),M=n(282),V=n(165),Y=function(e){var t=e.isOpen,n=e.onClose,i=e.selectedNote;return Object(y.jsx)(V.a,{children:Object(y.jsx)(T.a.div,{layoutId:null===i||void 0===i?void 0:i.id,children:Object(y.jsxs)(k.a,{isOpen:t,onClose:n,scrollBehavior:"inside",isCentered:!0,motionPreset:"slideInBottom",children:[Object(y.jsx)(k.g,{}),Object(y.jsxs)(k.d,{children:[Object(y.jsx)(T.a.div,{children:Object(y.jsx)(k.f,{isTruncated:!0,paddingRight:"10",children:null===i||void 0===i?void 0:i.title})}),Object(y.jsx)(k.c,{}),Object(y.jsx)(T.a.div,{children:Object(y.jsx)(k.b,{pb:6,children:null===i||void 0===i?void 0:i.body})})]})]})})})},J=n(153),U=n.n(J),D=function(e){var t=e.notes,n=e.handleClick,i=e.setNotes,r=Object(v.d)("white","#2f3244"),s=c.useState(),l=Object(a.a)(s,2),d=l[0],j=l[1],O=Object(P.a)(),h=Object(b.a)(),p=h.isOpen,f=h.onOpen,m=h.onClose,g=function(){O({title:"Note deleted.",status:"success",position:"top",duration:2e3,isClosable:!0})};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(M.a,{type:"crossfade",children:[Object(y.jsx)(o.a,{minH:"50vh",children:Object(y.jsx)(U.a,{columnWidth:330,children:t.map((function(e){return Object(y.jsx)(q.a,{in:!0,children:Object(y.jsx)(T.a.div,{whileHover:{y:-10},layoutId:e.id,onClick:function(){return function(e){j(e),f()}(e)},children:Object(y.jsx)(A.a,{py:2,px:2,children:Object(y.jsx)(o.a,{maxH:"400px",w:"100%",boxShadow:"lg",rounded:"md",p:6,overflow:"hidden",cursor:"pointer",_hover:{boxShadow:"xl"},bg:r,role:"group",children:Object(y.jsxs)(E.b,{children:[Object(y.jsxs)(u.a,{_groupHover:{justifyContent:"space-between"},justifyContent:"center",align:"center",children:[Object(y.jsx)(o.a,{children:Object(y.jsx)(G.a,{color:"green.500",textTransform:"uppercase",fontWeight:800,fontSize:"sm",letterSpacing:1.1,children:"Note"})}),Object(y.jsx)(o.a,{_groupHover:{display:"block"},display:"none",children:Object(y.jsxs)(E.a,{spacing:"2",children:[Object(y.jsx)(L.a,{color:"green.500",_hover:{color:"green.600"},_groupHover:{display:"block"},as:R.a,w:4,h:4,onClick:function(t){return function(e,t){n(e),t.stopPropagation()}(e.id,t)}}),Object(y.jsx)(L.a,{color:"green.500",_hover:{color:"#ca364a"},_groupHover:{display:"block"},as:W.a,w:4,h:4,onClick:function(n){return function(e,n){var o=t.filter((function(t){return t.id!==e}));i(o),g(),n.stopPropagation()}(e.id,n)}})]})})]}),Object(y.jsx)(x.a,{fontSize:"xl",fontFamily:"body",textTransform:"capitalize",noOfLines:2,children:e.title}),Object(y.jsx)(G.a,{color:"gray.500",fontSize:"md",noOfLines:{base:3,md:4},children:e.body})]})})},e.id)})})}))})}),p?Object(y.jsx)(Y,{isOpen:p,onClose:m,selectedNote:d}):""]})})},K=n(262);function Q(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(u.a,{h:"55vh",justifyContent:"center",align:"center",children:Object(y.jsx)(K.a,{in:!0,offsetY:"50vh",children:Object(y.jsx)(T.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(y.jsxs)(x.a,{fontWeight:600,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:[Object(y.jsx)(G.a,{textShadow:"1px 1px #9c1786",children:"Make notes for "}),Object(y.jsx)(G.a,{as:"span",color:"green.400",bgGradient:"linear(to-r, green.200, pink.500)",bgClip:"text",children:"your daily work"})]})})})})})}var X=T.a.custom(o.a),Z=function(e){var t=e.children;return Object(y.jsx)(V.a,{initial:!0,exitBeforeEnter:!0,children:Object(y.jsx)(X,{as:"main",animate:"enter",exit:"exit",flexGrow:1,initial:"initial",variants:{initial:{opacity:0,y:-200},enter:{opacity:1,y:0},exit:{opacity:0,y:250}},children:t})})},$=function(e){var t=e.notes,n=e.setNotes,i=Object(b.a)(),o=i.isOpen,r=i.onOpen,s=i.onClose,d=c.useState(),j=Object(a.a)(d,2),u=j[0],x=j[1],O=Object(P.a)(),h=function(){O({title:"Note updated.",status:"success",position:"top",duration:2e3,isClosable:!0})};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(Z,{children:[t.length?Object(y.jsx)(D,{notes:t,handleClick:function(e){var n=t.find((function(t){return t.id===e}));x(n),r()},setNotes:n}):Object(y.jsx)(Q,{}),o?Object(y.jsx)(B,{isOpen:o,onClose:s,handleNoteUpdate:function(e){var i=Object(l.a)(t);i[t.findIndex((function(t){return t.id===e.id}))]=e,n(i),h()},selectedNote:u}):""]})})},ee=function(){var e=c.useState([]),t=Object(a.a)(e,2),n=t[0],i=t[1];c.useEffect((function(){i([{id:"Odork5n5jPVd0wvm0w_dY",title:"Hey \ud83d\udc4b",body:"I'm dummy note here. Try to update me. Click me to see my remaining part. You can also delete me \ud83d\ude14. But I'll be here again by reopening the app link \ud83d\ude03. "}])}),[]);return Object(y.jsx)(d.a,{theme:j.theme,children:Object(y.jsxs)(o.a,{textAlign:"center",fontSize:"xl",p:5,children:[Object(y.jsx)(F,{handleNoteCreate:function(e){var t=Object(l.a)(n);t.push(e),i(t)}}),Object(y.jsx)($,{notes:n,setNotes:i})]})})};s.a.render(Object(y.jsxs)(c.StrictMode,{children:[Object(y.jsx)(i.a,{}),Object(y.jsx)(o.a,{maxW:"1050px",mx:"auto",children:Object(y.jsx)(ee,{})})]}),document.getElementById("root"))}},[[252,1,2]]]);
//# sourceMappingURL=main.ebce8e80.chunk.js.map