(this.webpackJsonpcomplete_mui_system=this.webpackJsonpcomplete_mui_system||[]).push([[0],{109:function(e,t,a){e.exports=a(119)},114:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=(a(114),a(89)),c=a(180),u=a(181),m=a(160),s=a(92),d=a(164),p=a(73),g=Object(m.a)((function(e){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:e.spacing(4),display:"flex",marginBottom:e.spacing(2)},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));function f(e){var t=g(),a=e.title,n=e.subTitle,l=e.icon;return r.a.createElement(s.a,{elevation:0,square:!0,className:t.root},r.a.createElement("div",{className:t.pageHeader},r.a.createElement(d.a,{className:t.pageIcon},l),r.a.createElement("div",{className:t.pageTitle},r.a.createElement(p.a,{variant:"h6",component:"div"},a),r.a.createElement(p.a,{variant:"subtitle2",component:"div"},n))))}var b=a(14),v=a(18),E=a(173),h=a(44),O=a(165);var y=a(122),C=a(124),j=a(189),S=a(167),I=a(184);var N=a(123),k=a(129),T=a(190),x=a(126);var P=a(185);var D=a(16),A=a(182),B=a(88);var M=a(170),w=Object(m.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var F=Object(m.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var R={Input:function(e){var t=e.name,a=e.label,n=e.value,l=e.error,o=void 0===l?null:l,i=e.onChange,c=Object(h.a)(e,["name","label","value","error","onChange"]);return r.a.createElement(O.a,Object.assign({variant:"outlined",label:a,name:t,value:n,onChange:i},c,o&&{error:!0,helperText:o}))},RadioGroup:function(e){var t=e.name,a=e.label,n=e.value,l=e.onChange,o=e.items;return r.a.createElement(y.a,null,r.a.createElement(C.a,null,a),r.a.createElement(j.a,{row:!0,name:t,value:n,onChange:l},o.map((function(e){return r.a.createElement(S.a,{key:e.id,value:e.id,control:r.a.createElement(I.a,null),label:e.title})}))))},Select:function(e){var t=e.name,a=e.label,n=e.value,l=e.error,o=void 0===l?null:l,i=e.onChange,c=e.options;return r.a.createElement(y.a,Object.assign({variant:"outlined"},o&&{error:!0}),r.a.createElement(N.a,null,a),r.a.createElement(k.a,{label:a,name:t,value:n,onChange:i},r.a.createElement(T.a,{value:""},"None"),c.map((function(e){return r.a.createElement(T.a,{key:e.id,value:e.id},e.title)}))),o&&r.a.createElement(x.a,null,o))},Checkbox:function(e){var t=e.name,a=e.label,n=e.value,l=e.onChange;return r.a.createElement(y.a,null,r.a.createElement(S.a,{control:r.a.createElement(P.a,{name:t,color:"primary",checked:n,onChange:function(e){return l(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:a}))},DatePicker:function(e){var t=e.name,a=e.label,n=e.value,l=e.onChange;return r.a.createElement(D.a,{utils:B.a},r.a.createElement(A.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:a,format:"MMM/dd/yyyy",name:t,value:n,onChange:function(e){return l(function(e,t){return{target:{name:e,value:t}}}(t,e))}}))},Button:function(e){var t=e.text,a=e.size,n=e.color,l=e.variant,o=e.onClick,i=Object(h.a)(e,["text","size","color","variant","onClick"]),c=w();return r.a.createElement(M.a,Object.assign({variant:l||"contained",size:a||"large",color:n||"primary",onClick:o},i,{classes:{root:c.root,label:c.label}}),t)},ActionButton:function(e){var t=e.color,a=e.children,n=e.onClick,l=F();return r.a.createElement(M.a,{className:"".concat(l.root," ").concat(l[t]),onClick:n},a)}},H=a(52);var z=Object(m.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));function J(e){var t=z(),a=(e.children,Object(h.a)(e,["children"]));return r.a.createElement("form",Object.assign({className:t.root,autoComplete:"off"},a),e.children)}var W="employees",q="employeeId";function G(e){var t=_();e.id=function(){null==localStorage.getItem(q)&&localStorage.setItem(q,"0");var e=parseInt(localStorage.getItem(q));return localStorage.setItem(q,(++e).toString()),e}(),t.push(e),localStorage.setItem(W,JSON.stringify(t))}function _(){null==localStorage.getItem(W)&&localStorage.setItem(W,JSON.stringify([]));var e=JSON.parse(localStorage.getItem(W)),t=[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}];return e.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{department:t[e.departmentId-1].title})}))}var V=[{id:"male",title:"Male"},{id:"female",title:"Female"},{id:"other",title:"Other"}],L={id:0,fullName:"",email:"",mobile:"",city:"",gender:"male",departmentId:"",hireDate:new Date,isPermanent:!1};function Y(e){var t=e.addOrEdit,a=e.recordForEdit,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=Object(b.a)({},u);if("fullName"in e&&(t.fullName=e.fullName?"":"This field is required."),"email"in e&&(t.email=/$^|.+@.+..+/.test(e.email)?"":"Email is not valid."),"mobile"in e&&(t.mobile=e.mobile.length>9?"":"Minimum 10 numbers required."),"departmentId"in e&&(t.departmentId=0!==e.departmentId.length?"":"This field is required."),m(Object(b.a)({},t)),e===i)return Object.values(t).every((function(e){return""===e}))},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,r=Object(n.useState)(e),l=Object(v.a)(r,2),o=l[0],i=l[1],c=Object(n.useState)({}),u=Object(v.a)(c,2),m=u[0],s=u[1],d=function(e){var n=e.target,r=n.name,l=n.value;i(Object(b.a)(Object(b.a)({},o),{},Object(H.a)({},r,l))),t&&a(Object(H.a)({},r,l))},p=function(){i(e),s({})};return{values:o,setValues:i,errors:m,setErrors:s,handleInputChange:d,resetForm:p}}(L,!0,l),i=o.values,c=o.setValues,u=o.errors,m=o.setErrors,s=o.handleInputChange,d=o.resetForm;return Object(n.useEffect)((function(){null!=a&&c(Object(b.a)({},a))}),[a]),r.a.createElement(J,{onSubmit:function(e){e.preventDefault(),l()&&t(i,d)}},r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(R.Input,{name:"fullName",label:"Full Name",value:i.fullName,onChange:s,error:u.fullName}),r.a.createElement(R.Input,{label:"Email",name:"email",value:i.email,onChange:s,error:u.email}),r.a.createElement(R.Input,{label:"Mobile",name:"mobile",value:i.mobile,onChange:s,error:u.mobile}),r.a.createElement(R.Input,{label:"City",name:"city",value:i.city,onChange:s})),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(R.RadioGroup,{name:"gender",label:"Gender",value:i.gender,onChange:s,items:V}),r.a.createElement(R.Select,{name:"departmentId",label:"Department",value:i.departmentId,onChange:s,options:[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}],error:u.departmentId}),r.a.createElement(R.DatePicker,{name:"hireDate",label:"Hire Date",value:i.hireDate,onChange:s}),r.a.createElement(R.Checkbox,{name:"isPermanent",label:"Permanent Employee",value:i.isPermanent,onChange:s}),r.a.createElement("div",null,r.a.createElement(R.Button,{type:"submit",text:"Submit"}),r.a.createElement(R.Button,{text:"Reset",color:"default",onClick:d})))))}var Z=a(171),$=a(172),K=a(179),Q=a(176),U=a(177),X=a(174),ee=a(175),te=a(191),ae=a(186),ne=Object(m.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));function re(e,t,a){var l=ne(),o=[5,10,25],i=Object(n.useState)(0),c=Object(v.a)(i,2),u=c[0],m=c[1],s=Object(n.useState)(o[u]),d=Object(v.a)(s,2),p=d[0],g=d[1],f=Object(n.useState)(),b=Object(v.a)(f,2),E=b[0],h=b[1],O=Object(n.useState)(),y=Object(v.a)(O,2),C=y[0],j=y[1],S=function(e,t){m(t)},I=function(e){g(parseInt(e.target.value,10)),m(0)};function N(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}return{TblContainer:function(e){return r.a.createElement(X.a,{className:l.table},e.children)},TblHead:function(e){return r.a.createElement(ee.a,null,r.a.createElement(Q.a,null,t.map((function(e){return r.a.createElement(U.a,{key:e.id,sortDirection:C===e.id&&E},e.disableSorting?e.label:r.a.createElement(te.a,{active:C===e.id,direction:C===e.id?E:"asc",onClick:function(){var t;t=e.id,h(C===t&&"asc"===E?"desc":"asc"),j(t)}},e.label))}))))},TblPagination:function(){return r.a.createElement(ae.a,{component:"div",page:u,rowsPerPageOptions:o,rowsPerPage:p,count:e.length,onChangePage:S,onChangeRowsPerPage:I})},recordsAfterPagingAndSorting:function(){return function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(a.fn(e),function(e,t){return"desc"===e?function(e,a){return N(e,a,t)}:function(e,a){return-N(e,a,t)}}(E,C)).slice(u*p,(u+1)*p)}}}var le=a(192),oe=a(85),ie=a.n(oe),ce=a(187),ue=a(178),me=a(168),se=a(69),de=a.n(se),pe=Object(m.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{paddingRight:"0px"}}}));function ge(e){var t=e.title,a=e.children,n=e.openPopup,l=e.setOpenPopup,o=pe();return r.a.createElement(ce.a,{open:n,maxWidth:"md",classes:{paper:o.dialogWrapper}},r.a.createElement(ue.a,{className:o.dialogTitle},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(p.a,{variant:"h6",component:"div",style:{flexGrow:1}},t),r.a.createElement(R.ActionButton,{color:"secondary",onClick:function(){l(!1)}},r.a.createElement(de.a,null)))),r.a.createElement(me.a,{dividers:!0},a))}var fe=a(86),be=a.n(fe),ve=a(188),Ee=a(183),he=Object(m.a)((function(e){return{root:{top:e.spacing(9)}}}));function Oe(e){var t=e.notify,a=e.setNotify,n=he(),l=function(e,n){"clickaway"!==n&&a(Object(b.a)(Object(b.a)({},t),{},{isOpen:!1}))};return r.a.createElement(ve.a,{className:n.root,open:t.isOpen,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:l},r.a.createElement(Ee.a,{severity:t.type,onClose:l},t.message))}var ye=a(127),Ce=a(169),je=a(84),Se=a.n(je),Ie=Object(m.a)((function(e){return{dialog:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{textAlign:"center"},dialogContent:{textAlign:"center"},dialogAction:{justifyContent:"center"},titleIcon:{backgroundColor:e.palette.secondary.light,color:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.light,cursor:"default"},"& .MuiSvgIcon-root":{fontSize:"8rem"}}}}));function Ne(e){var t=e.confirmDialog,a=e.setConfirmDialog,n=Ie();return r.a.createElement(ce.a,{open:t.isOpen,classes:{paper:n.dialog}},r.a.createElement(ue.a,{className:n.dialogTitle},r.a.createElement(ye.a,{disableRipple:!0,className:n.titleIcon},r.a.createElement(Se.a,null))),r.a.createElement(me.a,{className:n.dialogContent},r.a.createElement(p.a,{variant:"h6"},t.title),r.a.createElement(p.a,{variant:"subtitle2"},t.subTitle)),r.a.createElement(Ce.a,{className:n.dialogAction},r.a.createElement(R.Button,{text:"No",color:"default",onClick:function(){return a(Object(b.a)(Object(b.a)({},t),{},{isOpen:!1}))}}),r.a.createElement(R.Button,{text:"Yes",color:"secondary",onClick:t.onConfirm})))}var ke=Object(m.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)},searchInput:{width:"75%"},newButton:{position:"absolute",right:"10px"}}})),Te=[{id:"fullName",label:"Company Name"},{id:"email",label:"Email Address"},{id:"mobile",label:"Mobile Number"},{id:"department",label:"Department"},{id:"actions",label:"Actions",disableSorting:!0}];function xe(){var e=ke(),t=Object(n.useState)(null),a=Object(v.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(_()),c=Object(v.a)(i,2),u=c[0],m=c[1],d=Object(n.useState)({fn:function(e){return e}}),p=Object(v.a)(d,2),g=p[0],f=p[1],E=Object(n.useState)(!1),h=Object(v.a)(E,2),O=h[0],y=h[1],C=Object(n.useState)({isOpen:!1,message:"",type:""}),j=Object(v.a)(C,2),S=j[0],I=j[1],N=Object(n.useState)({isOpen:!1,title:"",subTitle:""}),k=Object(v.a)(N,2),T=k[0],x=k[1],P=re(u,Te,g),D=P.TblContainer,A=P.TblHead,B=P.TblPagination,M=P.recordsAfterPagingAndSorting,w=function(e){x(Object(b.a)(Object(b.a)({},T),{},{isOpen:!1})),function(e){var t=_();t=t.filter((function(t){return t.id!==e})),localStorage.setItem(W,JSON.stringify(t))}(e),m(_()),I({isOpen:!0,message:"Deleted Successfully",type:"error"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:e.pageContent},r.a.createElement(Z.a,null,r.a.createElement(R.Input,{label:"Search Employees",className:e.searchInput,InputProps:{startAdornment:r.a.createElement($.a,{position:"start"},r.a.createElement(le.a,null))},onChange:function(e){var t=e.target;f({fn:function(e){return""===t.value?e:e.filter((function(e){return e.fullName.toLowerCase().includes(t.value)}))}})}}),r.a.createElement(R.Button,{text:"Add New",variant:"outlined",startIcon:r.a.createElement(ie.a,null),className:e.newButton,onClick:function(){y(!0),o(null)}})),r.a.createElement(D,null,r.a.createElement(A,null),r.a.createElement(K.a,null,M().map((function(e){return r.a.createElement(Q.a,{key:e.id},r.a.createElement(U.a,null,e.fullName),r.a.createElement(U.a,null,e.email),r.a.createElement(U.a,null,e.mobile),r.a.createElement(U.a,null,e.department),r.a.createElement(U.a,null,r.a.createElement(R.ActionButton,{color:"primary",onClick:function(){!function(e){o(e),y(!0)}(e)}},r.a.createElement(be.a,{fontSize:"small"})),r.a.createElement(R.ActionButton,{color:"secondary",onClick:function(){x({isOpen:!0,title:"Are you sure to delete this record?",subTitle:"You can't undo this operation",onConfirm:function(){w(e.id)}})}},r.a.createElement(de.a,{fontSize:"small"}))))})))),r.a.createElement(B,null)),r.a.createElement(ge,{title:"Employee Form",openPopup:O,setOpenPopup:y},r.a.createElement(Y,{recordForEdit:l,addOrEdit:function(e,t){0===e.id?G(e):function(e){var t=_(),a=t.findIndex((function(t){return t.id===e.id}));t[a]=Object(b.a)({},e),localStorage.setItem(W,JSON.stringify(t))}(e),t(),o(null),y(!1),m(_()),I({isOpen:!0,message:"Submitted Successfully",type:"success"})}})),r.a.createElement(Oe,{notify:S,setNotify:I}),r.a.createElement(Ne,{confirmDialog:T,setConfirmDialog:x}))}var Pe=a(87),De=a.n(Pe),Ae=Object(i.a)({palette:{primary:{main:"#333996",light:"#3c44b126"},secondary:{main:"#f83245",light:"#f8324526"},background:{default:"#f4f5fd"}},overrides:{MuiAppBar:{root:{transform:"translateZ(0)"}}},props:{MuiIconButton:{disableRipple:!0}}});var Be=function(){return r.a.createElement(c.a,{theme:Ae},r.a.createElement(f,{title:"Employees Details",subTitle:"Details that admin can update only",icon:r.a.createElement(De.a,null)}),r.a.createElement(xe,null),r.a.createElement(u.a,null))};o.a.render(r.a.createElement(Be,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.652b6c3b.chunk.js.map