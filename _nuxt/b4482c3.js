(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{301:function(t,e,n){var map={"./1997.json":[304,35],"./1998.json":[305,36],"./1999.json":[306,37],"./2001.json":[307,38],"./2002.json":[308,39],"./2003.json":[309,40],"./2004.json":[310,41],"./2005.json":[311,42],"./2006.json":[312,43],"./2007.json":[313,44],"./2008.json":[314,45],"./2009.json":[315,46],"./2010.json":[316,47],"./2011.json":[317,48],"./2012.json":[318,49],"./2013.json":[319,50],"./2014.json":[320,51],"./2015.json":[321,52],"./2016.json":[322,53],"./2017.json":[323,54],"./2018.json":[324,55],"./2019.json":[325,56],"./2020.json":[326,57],"./2021.json":[327,58]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=301,t.exports=r},302:function(t,e,n){"use strict";(function(t){n(110);var r=n(41),c=n(54),o=n(61),l=n(62),f=n(49),v=n(11),d=(n(24),n(43));function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(e){Object(o.a)(l,e);var n=j(l);function l(){var e;return Object(r.a)(this,l),(e=n.apply(this,arguments)).baseUrl="https://hi-ut.github.io",e.json=t.env.jsonData,e}return Object(c.a)(l,[{key:"menu",get:function(){return this.json[0].children[3].children}}]),l}(d.Vue);h=y([d.Component],h),e.a=h}).call(this,n(144))},303:function(t,e,n){"use strict";n(110);var r=n(41),c=n(61),o=n(62),l=n(49),f=n(11),v=(n(24),n(43));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).lang=t.$i18n.locale,t.select="latest",t}return n}(v.Vue);j([Object(v.Prop)({default:!1})],y.prototype,"isTop",void 0),j([Object(v.Prop)()],y.prototype,"newsList",void 0);var h=y=j([Object(v.Component)({components:{}})],y),_=n(42),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-topics"},[t.isTop?n("h2",{staticClass:"h01"},[t._v("\n    News & Topics\n    "),n("nuxt-link",{staticClass:"list",staticStyle:{"text-decoration":"none"},attrs:{to:t.localePath({name:"news-year"})}},[t._v(t._s(t.$t("一覧")))])],1):t._e(),t._v(" "),n("div",{staticClass:"page-link",class:t.isTop?"c4":""},[n("ul",[t.isTop?n("li",[n("a",{on:{click:function(e){t.select="latest"}}},[t._v(t._s(t.$t("新着一覧")))])]):t._e(),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="news"}}},[t._v(t._s(t.$t("news")))])]),n("li",[n("a",{on:{click:function(e){t.select="event"}}},[t._v(t._s(t.$t("event")))])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="data"}}},[t._v(t._s(t.$t("data")))])])])]),t._v(" "),n("div",{class:t.isTop?"data":""},[t._l(t.newsList,(function(e,r){return["latest"===t.select||t.select===e.tag?n("dl",{key:r},[n("dt",{staticClass:"mb1"},[n("span",[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"chip2"},[t._v(t._s(t.$t(e.tag)))])]),t._v(" "),n("dd",[n("span",{staticClass:"fc1"},[t._v(t._s(e.featured))]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()]}))],2)])}),[],!1,null,null,null);e.a=component.exports},344:function(t,e,n){"use strict";n.r(e);n(110);var r=n(3),c=n(41),o=n(54),l=n(61),f=n(62),v=n(49),d=n(11),j=(n(25),n(24),n(12),n(17),n(19),n(43)),y=n(302).a,h=n(42),_=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.menu,(function(e,r){return[e.lang.includes(t.$i18n.locale)?n("v-list-item",{key:r,attrs:{href:t.baseUrl+"/"+("en"==t.$i18n.locale?"/en/":"")+e.to.name,exact:""}},[n("v-list-item-content",[n("v-list-item-title",[n("span",[t._v(t._s(t.$t(e.label)))])])],1)],1):t._e()]}))],2)}),[],!1,null,null,null).exports;function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},R=function(t){Object(l.a)(n,t);var e=O(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).currentFiscalYear=2021,t.label=t.$t("ニュース"),t.items=[{text:"HOME",disabled:!1,to:t.localePath({name:"index"}),exact:!0},{text:t.$t(t.label),disabled:!1,to:t.localePath({name:"news-year"}),exact:!0},{text:t.title}],t}return Object(o.a)(n,[{key:"years",get:function(){for(var t=[],i=this.currentFiscalYear-1;i>=1997;i--)2e3!==i&&t.push(i);return t}}]),n}(j.Vue);m([Object(j.Prop)()],R.prototype,"title",void 0);var w=R=m([Object(j.Component)({components:{LayoutOrganization:_}})],R),x=Object(h.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-common"},[n("div",{staticClass:"inner"},[n("p",{staticClass:"ttl"},[t._v(t._s(t.label))])])]),t._v(" "),n("div",{staticClass:"breadcrumb"},[n("ul",t._l(t.items,(function(e,r){return n("li",{key:r},[e.to?[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.text))])]:[t._v("\n          "+t._s(e.text)+"\n        ")]],2)})),0)]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[t._t("default"),t._v(" "),n("section")],2),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.label))]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"news-year"})}},[t._v("\n                "+t._s(t.$t("今年度のニュース"))+"\n              ")])],1),t._v(" "),t._l(t.years,(function(e,r){return n("li",{key:r},[n("nuxt-link",{attrs:{to:t.localePath({name:"news-year",params:{year:e}})}},[t._v("\n                "+t._s(e)+t._s(t.$t("年度のニュース"))+"\n              ")])],1)}))],2)])])])])])}),[],!1,null,null,null).exports,k=n(303);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var $=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},C=function(t){Object(l.a)(v,t);var e,f=P(v);function v(){return Object(c.a)(this,v),f.apply(this,arguments)}return Object(o.a)(v,[{key:"title",get:function(){return String(this.$data.year)+this.$t("年度のニュース")}},{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var r,c,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,c=r.year||2021,t.next=4,n(301)("./".concat(c,".json"));case 4:return o=t.sent,l=o.default,t.abrupt("return",{year:c,newsList:l});case 7:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),v}(j.Vue),L=C=$([Object(j.Component)({components:{Layout:x,News:k.a}})],C),B=Object(h.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:t.title}},[n("News",{attrs:{newsList:t.newsList}})],1)}),[],!1,null,null,null);e.default=B.exports}}]);