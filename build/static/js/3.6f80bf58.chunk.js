(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[3],{300:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3MG-7",photoDescriptionBlock:"ProfileInfo_photoDescriptionBlock__1RQRY",elementDescriptionBlock:"ProfileInfo_elementDescriptionBlock__GPwC3"}},301:function(t,e,n){t.exports=n.p+"static/media/parisAirport.80f8d2c6.jpg"},302:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__3rGid",posts:"MyPosts_posts__Rcf_I"}},303:function(t,e,n){t.exports={item:"Post_item__2bzvv",messagePost:"Post_messagePost__2yCAf"}},304:function(t,e,n){"use strict";n.r(e);var a=n(36),r=n(37),s=n(39),o=n(25),c=n(40),i=n(0),u=n.n(i),l=n(29),p=n(300),f=n.n(p),m=n(63),d=n(301),h=n.n(d),b=n(133),v=function(t){var e=Object(i.useState)(!1),n=Object(b.a)(e,2),a=n[0],r=n[1],s=Object(i.useState)(t.status),o=Object(b.a)(s,2),c=o[0],l=o[1];Object(i.useEffect)((function(){l(t.status)}),[t.status]);return u.a.createElement("div",null,!a&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){r(!0)}},"STATUS: ",t.status||"------"," ")),a&&u.a.createElement("div",null,u.a.createElement("span",null,"STATUS:"),u.a.createElement("input",{autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(c)},onChange:function(t){l(t.currentTarget.value)},value:c})))},E=(n(109),n(110)),j=n.n(E),P=function(t){var e=t.profile,n=t.status,a=t.updateStatus;Object(l.a)(t,["profile","status","updateStatus"]);return e?u.a.createElement("div",null,u.a.createElement("div",{className:f.a.descriptionBlock},u.a.createElement("div",{className:f.a.photoDescriptionBlock},u.a.createElement("img",{src:h.a})),u.a.createElement("div",{className:f.a.elementDescriptionBlock},u.a.createElement("img",{src:e.photos.large||j.a}))),u.a.createElement("div",{className:f.a.descriptionBlock},u.a.createElement("div",{className:f.a.elementDescriptionBlock},u.a.createElement("span",null,e.lookingForAJobDescription?"\u0423\u0447\u0435\u0431\u0430(\u0440\u0430\u0431\u043e\u0442\u0430) : ":null,e.lookingForAJobDescription)),u.a.createElement("div",{className:f.a.elementDescriptionBlock},u.a.createElement("span",null,e.aboutMe?"\u041e \u0441\u0435\u0431\u0435 : ":null,e.aboutMe)),u.a.createElement(v,{status:n,updateStatus:a}))):u.a.createElement(m.a,null)},k=n(98),g=n(302),y=n.n(g),O=n(303),_=n.n(O),S=function(t){return u.a.createElement("div",{className:_.a.item},u.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMvLwJ_LbLDZ1684YtSCV5IIreBPG0jijG_hxQ6mEe02v9_-a&s",alt:""}),u.a.createElement("div",{className:_.a.messagePost},t.post),u.a.createElement("div",null,u.a.createElement("span",null,"Like:")," ",t.lakesCount),u.a.createElement("hr",null))},B=n(89),D=n(132),R=n(86),w=n(35);var A=Object(R.a)(10);window.props=[];var N=function(t){Object(c.a)(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,a=Object(o.a)(t);if(e()){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;window.props.push(this.props);var e=this.props.posts.map((function(t){return u.a.createElement(S,{post:t.post,key:t.id,lakesCount:t.likesCount})}));return u.a.createElement("div",null,u.a.createElement("div",{className:y.a.postsBlock},u.a.createElement("h3",null,"My Posts")),u.a.createElement(x,{onSubmit:function(e){t.props.onAddPost(e.newPostText)}}),u.a.createElement("div",{className:y.a.posts},e))}}]),n}(u.a.Component),x=Object(D.a)({form:"ProfileAddNewPostForm"})((function(t){return u.a.createElement("form",{onSubmit:t.handleSubmit},u.a.createElement(B.a,{name:"newPostText",component:w.b,placeholder:"Your post",validate:[R.b,A]}),"            ",u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))})),C=N,I=n(10),T=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{onAddPost:function(e){t(Object(k.a)(e))}}}))(C),M=function(t){return u.a.createElement("div",null,u.a.createElement(P,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),u.a.createElement(T,null))},G=n(30),U=n(7);var J=function(t){Object(c.a)(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,a=Object(o.a)(t);if(e()){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.auterisedUserId),t||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return u.a.createElement(M,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(u.a.Component);e.default=Object(U.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,auterisedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:k.c,getStatus:k.b,updateStatus:k.e}),G.f)(J)}}]);
//# sourceMappingURL=3.6f80bf58.chunk.js.map