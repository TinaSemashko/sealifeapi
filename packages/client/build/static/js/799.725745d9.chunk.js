"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[799],{8799:function(e,t,n){n.r(t),n.d(t,{default:function(){return be}});var a,o,r,i,s,d=n(4165),c=n(5861),l=n(9439),u=n(8547),p=n(8976),m=n(3911),v=n(9346),g=n(5479),h=n(505),f=n(168),Z=n(404),x=(0,Z.ZP)("div")(a||(a=(0,f.Z)(["\n  min-height: 100vh;\n"]))),b=(0,Z.ZP)("div")(o||(o=(0,f.Z)(["\n  padding-top: 10%;\n  color: ",";\n  text-align: center;\n\n  @media (max-width: 750px) {\n    padding-top: 15%;\n  }\n"])),(function(e){return e.theme.palette.primary.main})),y=(0,Z.ZP)("div")(r||(r=(0,f.Z)(["\n  text-align: center;\n\n  @media (max-width: 750px) {\n   display:flex;\n   justify-content:space-evenly;\n  }\n"]))),C=(0,Z.ZP)("div")(i||(i=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  justify-items: center;\n  align-items: center;\n"]))),j=(0,Z.ZP)("div")(s||(s=(0,f.Z)(["\n  margin-top: 10%;\n  margin-bottom: 10%;\n  grid-gap: 1%;\n  max-width: 100%;\n  display: grid;\n  grid-template-columns: 33% 33% 33%;\n  grid-template-rows: auto;\n  justify-items: center;\n  align-items: center;\n\n  @media (max-width: 750px) {\n    grid-template-columns: 100vw;\n    align-items: center;\n    grid-gap: 0%;\n  }\n"]))),w=n(9867),M=n(7462),S=n(3366),k=n(7713),P=n(6020),R=n(7362),N=n(5157),I=n(3845);function H(e){return(0,I.Z)("MuiCardContent",e)}(0,N.Z)("MuiCardContent",["root"]);var O=n(2834),T=["className","component"],z=(0,Z.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),F=w.forwardRef((function(e,t){var n=(0,R.Z)({props:e,name:"MuiCardContent"}),a=n.className,o=n.component,r=void 0===o?"div":o,i=(0,S.Z)(n,T),s=(0,M.Z)({},n,{component:r}),d=function(e){var t=e.classes;return(0,P.Z)({root:["root"]},H,t)}(s);return(0,O.jsx)(z,(0,M.Z)({as:r,className:(0,k.Z)(d.root,a),ownerState:s,ref:t},i))}));function B(e){return(0,I.Z)("MuiCardMedia",e)}(0,N.Z)("MuiCardMedia",["root","media","img"]);var G=["children","className","component","image","src","style"],V=(0,Z.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.isMediaComponent,o=n.isImageComponent;return[t.root,a&&t.media,o&&t.img]}})((function(e){var t=e.ownerState;return(0,M.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),_=["video","audio","picture","iframe","img"],L=["picture","img"],q=w.forwardRef((function(e,t){var n=(0,R.Z)({props:e,name:"MuiCardMedia"}),a=n.children,o=n.className,r=n.component,i=void 0===r?"div":r,s=n.image,d=n.src,c=n.style,l=(0,S.Z)(n,G),u=-1!==_.indexOf(i),p=!u&&s?(0,M.Z)({backgroundImage:'url("'.concat(s,'")')},c):c,m=(0,M.Z)({},n,{component:i,isMediaComponent:u,isImageComponent:-1!==L.indexOf(i)}),v=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,P.Z)(n,B,t)}(m);return(0,O.jsx)(V,(0,M.Z)({className:(0,k.Z)(v.root,o),as:i,role:!u&&s?"img":void 0,ref:t,style:p,ownerState:m,src:u?s||d:void 0},l,{children:a}))})),E=n(4942);function D(e){return(0,I.Z)("MuiCardHeader",e)}var A=(0,N.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),W=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Y=(0,Z.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,M.Z)((n={},(0,E.Z)(n,"& .".concat(A.title),t.title),(0,E.Z)(n,"& .".concat(A.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),J=(0,Z.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),K=(0,Z.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Q=(0,Z.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),U=w.forwardRef((function(e,t){var n=(0,R.Z)({props:e,name:"MuiCardHeader"}),a=n.action,o=n.avatar,r=n.className,i=n.component,s=void 0===i?"div":i,d=n.disableTypography,c=void 0!==d&&d,l=n.subheader,p=n.subheaderTypographyProps,m=n.title,v=n.titleTypographyProps,g=(0,S.Z)(n,W),h=(0,M.Z)({},n,{component:s,disableTypography:c}),f=function(e){var t=e.classes;return(0,P.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},D,t)}(h),Z=m;null==Z||Z.type===u.Z||c||(Z=(0,O.jsx)(u.Z,(0,M.Z)({variant:o?"body2":"h5",className:f.title,component:"span",display:"block"},v,{children:Z})));var x=l;return null==x||x.type===u.Z||c||(x=(0,O.jsx)(u.Z,(0,M.Z)({variant:o?"body2":"body1",className:f.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:x}))),(0,O.jsxs)(Y,(0,M.Z)({className:(0,k.Z)(f.root,r),as:s,ref:t,ownerState:h},g,{children:[o&&(0,O.jsx)(J,{className:f.avatar,ownerState:h,children:o}),(0,O.jsxs)(Q,{className:f.content,ownerState:h,children:[Z,x]}),a&&(0,O.jsx)(K,{className:f.action,ownerState:h,children:a})]}))})),X=n(3050),$=n(7237),ee=n(3527),te=n(1322),ne=n(1847),ae=n(7808),oe=n(8649);var re=(0,N.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),ie=n(655);function se(e){return(0,I.Z)("MuiMenuItem",e)}var de=(0,N.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ce=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],le=(0,Z.ZP)(te.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,M.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,E.Z)(t,"&.".concat(de.selected),(0,E.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,$.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(de.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,$.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,E.Z)(t,"&.".concat(de.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,$.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,$.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,E.Z)(t,"&.".concat(de.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,E.Z)(t,"&.".concat(de.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,E.Z)(t,"& + .".concat(oe.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,E.Z)(t,"& + .".concat(oe.Z.inset),{marginLeft:52}),(0,E.Z)(t,"& .".concat(ie.Z.root),{marginTop:0,marginBottom:0}),(0,E.Z)(t,"& .".concat(ie.Z.inset),{paddingLeft:36}),(0,E.Z)(t,"& .".concat(re.root),{minWidth:36}),t),!a.dense&&(0,E.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,M.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,E.Z)({},"& .".concat(re.root," svg"),{fontSize:"1.25rem"})))})),ue=w.forwardRef((function(e,t){var n=(0,R.Z)({props:e,name:"MuiMenuItem"}),a=n.autoFocus,o=void 0!==a&&a,r=n.component,i=void 0===r?"li":r,s=n.dense,d=void 0!==s&&s,c=n.divider,l=void 0!==c&&c,u=n.disableGutters,p=void 0!==u&&u,m=n.focusVisibleClassName,v=n.role,g=void 0===v?"menuitem":v,h=n.tabIndex,f=n.className,Z=(0,S.Z)(n,ce),x=w.useContext(ee.Z),b=w.useMemo((function(){return{dense:d||x.dense||!1,disableGutters:p}}),[x.dense,d,p]),y=w.useRef(null);(0,ne.Z)((function(){o&&y.current&&y.current.focus()}),[o]);var C,j=(0,M.Z)({},n,{dense:b.dense,divider:l,disableGutters:p}),N=function(e){var t=e.disabled,n=e.dense,a=e.divider,o=e.disableGutters,r=e.selected,i=e.classes,s={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",r&&"selected"]},d=(0,P.Z)(s,se,i);return(0,M.Z)({},i,d)}(n),I=(0,ae.Z)(y,t);return n.disabled||(C=void 0!==h?h:-1),(0,O.jsx)(ee.Z.Provider,{value:b,children:(0,O.jsx)(le,(0,M.Z)({ref:I,role:g,tabIndex:C,component:i,focusVisibleClassName:(0,k.Z)(N.focusVisible,m),className:(0,k.Z)(N.root,f)},Z,{ownerState:j,classes:N}))})}));function pe(e){return(0,I.Z)("MuiCard",e)}(0,N.Z)("MuiCard",["root"]);var me,ve=["className","raised"],ge=(0,Z.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),he=w.forwardRef((function(e,t){var n=(0,R.Z)({props:e,name:"MuiCard"}),a=n.className,o=n.raised,r=void 0!==o&&o,i=(0,S.Z)(n,ve),s=(0,M.Z)({},n,{raised:r}),d=function(e){var t=e.classes;return(0,P.Z)({root:["root"]},pe,t)}(s);return(0,O.jsx)(ge,(0,M.Z)({className:(0,k.Z)(d.root,a),elevation:r?8:void 0,ref:t,ownerState:s},i))})),fe=(0,Z.ZP)(he)(me||(me=(0,f.Z)(["\n  background: linear-gradient(\n    180deg,\n    rgba(216, 236, 232, 0.34505139946603647) 28%,\n    rgba(122, 184, 181, 0.6335668056285014) 100%\n  );\n\n  @media (max-width: 750px) {\n  }\n"]))),Ze=function(e){var t=e.element,n=(0,w.useState)(""),a=(0,l.Z)(n,2),o=a[0],r=a[1];return(0,w.useEffect)((function(){console.log(null===t||void 0===t?void 0:t.photo),null!==t&&void 0!==t&&t.photo&&r("data:image/jpeg;base64,".concat(t.photo))}),[t]),(0,O.jsxs)(fe,{sx:{width:{xs:"90vw",md:"25vw"},height:{xs:"60vh",md:"100%"},backgroundColor:"linear-gradient(180deg, rgba(123,201,188,0.8548553210346639) 47%, rgba(16,86,83,1) 100%);"},children:[(0,O.jsx)(U,{title:null===t||void 0===t?void 0:t.model,subheader:null===t||void 0===t?void 0:t.model}),(0,O.jsx)(q,{component:"img",height:"196",image:o,alt:null===t||void 0===t?void 0:t.model}),(0,O.jsxs)(F,{children:[(0,O.jsxs)(u.Z,{variant:"h4",component:"div",children:["Type: ",1===(null===t||void 0===t?void 0:t.id_type)?"Catamaran":"Yacht"]}),(0,O.jsxs)(X.Z,{id:"composition-menu","aria-labelledby":"composition-button",sx:{width:"20vw"},children:[(0,O.jsxs)(ue,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Displacement: ",null===t||void 0===t?void 0:t.displacement]}),(0,O.jsxs)(ue,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["SpeedMax: ",null===t||void 0===t?void 0:t.speed_max]}),(0,O.jsxs)(ue,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Length: ",null===t||void 0===t?void 0:t.length]}),(0,O.jsxs)(ue,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["TankFuelCapacity: ",null===t||void 0===t?void 0:t.tankfuelcapacity]}),(0,O.jsxs)(ue,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Eng Power ",null===t||void 0===t?void 0:t.eng_power]}),(0,O.jsxs)(ue,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Prix: ",null===t||void 0===t?void 0:t.price]})]})]})]})},xe=n(1083),be=function(){var e=(0,xe.Ds)().enqueueSnackbar,t=(0,w.useState)([]),n=(0,l.Z)(t,2),a=n[0],o=n[1],r=(0,w.useState)(""),i=(0,l.Z)(r,2),s=i[0],f=i[1],Z=(0,w.useState)(""),M=(0,l.Z)(Z,2),S=M[0],k=M[1],P=localStorage.getItem("usrCourant"),R="http://localhost:4000/api/bateauxbytype?data=".concat(S,"&api_key=").concat(s),N="http://localhost:4000/api/bateauxbymodel?data=".concat(S,"&api_key=").concat(s),I=function(){var e=(0,c.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{id:P,api_key:s}},e.next=3,h.Z.get("getuserbyid",t).then((function(e){f(e.data.results[0].api_key)})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,w.useEffect)((function(){P&&!s&&I()}),[P]);var H=function(){var t=(0,c.Z)((0,d.Z)().mark((function t(n){return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Z.get(n).then((function(e){o(e.data.results[0])})).catch((function(t){e(t.message,{variant:"error"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(e){k(e.target.value)};return(0,w.useEffect)((function(){console.log(a),a||e("Erreur",{variant:"error"})}),[a]),(0,O.jsx)(x,{children:(0,O.jsxs)(b,{children:[(0,O.jsx)(u.Z,{variant:"h2",children:"Page exemple API"}),(0,O.jsxs)(C,{children:[(0,O.jsx)(y,{children:(0,O.jsxs)(p.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:400,border:3,borderRadius:2},children:[(0,O.jsx)(m.ZP,{sx:{ml:1,flex:1},placeholder:"Type",inputProps:{"aria-label":"boat"},onChange:T}),(0,O.jsx)(v.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",onClick:function(){H(R)},children:(0,O.jsx)(g.Z,{})})]})}),(0,O.jsx)(y,{children:(0,O.jsxs)(p.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:400,border:3,borderRadius:2},children:[(0,O.jsx)(m.ZP,{sx:{ml:1,flex:1},placeholder:"Modele",inputProps:{"aria-label":"boat"},onChange:T}),(0,O.jsx)(v.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",onClick:function(){H(N)},children:(0,O.jsx)(g.Z,{})})]})})]}),(0,O.jsx)(j,{children:a.map((function(e,t){return(0,O.jsx)(Ze,{element:e},t)}))})]})})}},5479:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5511)),r=n(2834),i=(0,o.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i}}]);
//# sourceMappingURL=799.725745d9.chunk.js.map