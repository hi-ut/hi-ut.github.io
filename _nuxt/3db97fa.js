(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{345:function(t,e,n){"use strict";n.r(e);n(28);var c=n(7),r=n(8),o=n(13),l=n(11),f=n(12),d=n(4),v=n(5),_=(n(36),n(16),n(1)),m=n(159);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},h=function(t){Object(l.a)(f,t);var e,n=w(f);function f(){var t;return Object(r.a)(this,f),(t=n.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t}return Object(o.a)(f,[{key:"head",value:function(){return{title:this.title}}},{key:"title",get:function(){return this.news.title}},{key:"asyncData",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,c=e.params,t.next=3,n("kaken",c.slug||"index").fetch();case 3:return r=t.sent,t.abrupt("return",{news:r});case 5:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),f}(_.Vue),C=h=y([Object(_.Component)({components:{LayoutAbout:m.default}})],h),O=n(10),component=Object(O.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"my-5"},[n("LayoutPublication",{attrs:{title:t.title}},[n("dl",{staticClass:"row"},[n("dt",{staticClass:"col-sm-3 text-muted"},[n("b",[t._v(t._s(t.$t("研究種目名")))])]),t._v(" "),n("dd",{staticClass:"col-sm-9"},[t._v("\n        "+t._s(t.news.type)+"\n      ")])]),t._v(" "),n("dl",{staticClass:"row"},[n("dt",{staticClass:"col-sm-3 text-muted"},[n("b",[t._v(t._s(t.$t("研究課題名")))])]),t._v(" "),n("dd",{staticClass:"col-sm-9"},[t._v(t._s(t.news.title)+"（"+t._s(t.$route.params.slug)+"）")])]),t._v(" "),n("dl",{staticClass:"row"},[n("dt",{staticClass:"col-sm-3 text-muted"},[n("b",[t._v(t._s(t.$t("研究期間")))])]),t._v(" "),n("dd",{staticClass:"col-sm-9"},[t._v(t._s(t.news.from)+"年度～"+t._s(t.news.to)+"年度")])]),t._v(" "),n("dl",{staticClass:"row"},[n("dt",{staticClass:"col-sm-3 text-muted"},[n("b",[t._v(t._s(t.$t("研究代表者名")))])]),t._v(" "),n("dd",{staticClass:"col-sm-9"},[t._v("\n        "+t._s(t.news.person)+"\n      ")])]),t._v(" "),n("dl",{staticClass:"row"},[n("dt",{staticClass:"col-sm-3 text-muted"},[n("b",[t._v(t._s(t.$t("研究実績の概要")))])]),t._v(" "),n("dd",{staticClass:"col-sm-9"},[n("nuxt-content",{attrs:{document:t.news}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutPublication:n(158).default})}}]);