(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{109:function(t,e,n){"use strict";n.r(e);n(58);var l=n(15),o=n(26),r=n(24),c=n(25),h=n(12),f=n(6),v=(n(20),n(3));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},y=n(185).VueSlideToggle,m=function(t){Object(r.a)(n,t);var e=d(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).isOpenLanguageSelection=!1,t.baseUrl="https://hi-ut.github.io",t}return Object(o.a)(n,[{key:"lang",get:function(){return this.$i18n.locale}}]),n}(v.Vue),w=m=j([Object(v.Component)({components:{VueSlideToggle:y}})],m),k=n(16),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"lang-select",on:{click:function(e){t.isOpenLanguageSelection=!t.isOpenLanguageSelection}}},[n("li",[n("span",[t._v("Language")]),t._v(" "),n("VueSlideToggle",{attrs:{duration:500,open:t.isOpenLanguageSelection}},[n("ul",{staticClass:"child"},["ja"!==t.lang?n("li",[n("a",{attrs:{href:t.baseUrl+"/"}},[t._v("日本語")])]):t._e(),t._v(" "),"en"!==t.lang?n("li",[n("a",{attrs:{href:t.baseUrl+"/en/"}},[t._v("English")])]):t._e()])])],1)])}),[],!1,null,null,null);e.default=component.exports},110:function(t,e,n){"use strict";n.r(e);n(58);var l=n(15),o=n(24),r=n(25),c=n(12),h=n(6),f=(n(20),n(3));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(r.a)(this,n)}}var d=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},j=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return n}(f.Vue),y=j=d([Object(f.Component)({})],j),m=n(16),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{id:"cse-search-box",action:"https://google.com/cse"}},[n("input",{attrs:{type:"hidden",name:"cx",value:"1e10e2c945c90dfeb"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"ie",value:"UTF-8"}}),t._v(" "),n("input",{attrs:{id:"search-box",type:"text",name:"q",size:"31",placeholder:t.$t("Googleカスタム検索")}}),t._v(" "),n("input",{attrs:{id:"search-btn",type:"submit",name:"sa",value:"."}})])}),[],!1,null,null,null);e.default=component.exports},144:function(t,e,n){"use strict";var l=n(15),o=n(26),r=(n(188),n(30),n(76),function(){function t(){Object(l.a)(this,t)}return Object(o.a)(t,[{key:"split",value:function(data){var t=data.indexOf("=>");return[data.substring(0,t).trim(),data.substring(t+"=>".length,data.length).trim()]}},{key:"calcYearFromSyohoVol",value:function(t){return t<=28?1965+t+"年":1964+t+"年度"}},{key:"calcSyohoVolFromYear",value:function(t){return t-1965}},{key:"calcKiyoVolFromYear",value:function(t){return t-1990}},{key:"zfill",value:function(t,e){return(Array(e).join("0")+t).slice(-e)}}]),t}());e.a=function(t,e){e("utils",new r)}},145:function(t,e,n){"use strict";n.r(e);n(58);var l=n(15),o=n(26),r=n(24),c=n(25),h=n(12),f=n(6),v=(n(20),n(22),n(3));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},y=function(t){Object(r.a)(n,t);var e=d(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t.menuList=[{label:"ご案内",lang:["ja","en"],to:{name:"about-slug"},isDisplayTop:!0,children:[{label:"所長挨拶",to:{name:"about-slug"},lang:["ja","en"]},{label:"沿革",to:{name:"about-slug",params:{slug:"history"}},lang:["ja","en"]},{label:"事業",to:{name:"about-slug",params:{slug:"mission"}},lang:["ja","en"]},{label:"組織",to:{name:"about-organization"},lang:["ja","en"],children:[{label:"古代史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/kodai",en:"https://www.hi.u-tokyo.ac.jp/dev/en/kodai"},lang:["ja","en"]},{label:"中世史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/chusei",en:"https://www.hi.u-tokyo.ac.jp/dev/en/chusei"},lang:["ja","en"]},{label:"近世史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/kinsei",en:"https://www.hi.u-tokyo.ac.jp/dev/en/kinsei"},lang:["ja","en"]},{label:"古文書古記録部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/komo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/komo"},lang:["ja","en"]},{label:"特殊史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tokushu",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tokushu"},lang:["ja","en"]},{label:"画像史料解析センター",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/gazo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/gazo"},lang:["ja","en"]},{label:"前近代日本史情報国際センター",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/cdps",en:"https://www.hi.u-tokyo.ac.jp/dev/en/cdps"},lang:["ja","en"]},{label:"技術部・史料保存技術室",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/gijyutu",en:"https://www.hi.u-tokyo.ac.jp/dev/en/gijyutu"},lang:["ja","en"]},{label:"図書部",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho"},lang:["ja","en"]},{label:"IR・広報室",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/ir",en:"https://www.hi.u-tokyo.ac.jp/dev/en/ir"},lang:["ja","en"]}]},{label:"教員一覧",to:{name:"faculty"},lang:["ja","en"]},{label:"施設",to:{name:"about-slug",params:{slug:"facilities"}},lang:["ja"]},{label:"点検・評価",to:{name:"about-slug",params:{slug:"evaluation"}},lang:["ja"]},{label:"アクセスマップ",to:{name:"about-slug",params:{slug:"access"}},lang:["ja","en"]},{label:"リンク",to:{name:"about-slug",params:{slug:"link"}},lang:["ja"]},{label:"サイトマップ",to:{name:"about-sitemap"},lang:["ja"]}]},{label:"ニュース",to:{name:"news-year"},lang:["ja"],children:[{label:"ニュース",to:{name:"news-year"},lang:["ja"]}],isDisplayTop:!1},{label:"編纂・研究・公開",lang:["ja","en"],to:{name:"publication"},isDisplayTop:!0,children:[{label:"編纂・出版",to:{name:"publication"},lang:["ja","en"],children:[{label:"大日本史料・史料綜覧",to:{name:"publication-slug",params:{slug:"dainihonshiryo_shiryosoran"}},lang:["ja","en"]},{label:"大日本古文書",to:{name:"publication-slug",params:{slug:"komonjo"}},lang:["ja","en"]},{label:"大日本古記録",to:{name:"publication-slug",params:{slug:"kokiroku"}},lang:["ja","en"]},{label:"大日本近世史料",to:{name:"publication-slug",params:{slug:"kinsei"}},lang:["ja","en"]},{label:"大日本維新史料",to:{name:"publication-slug",params:{slug:"ishin"}},lang:["ja","en"]},{label:"維新史料綱要",to:{name:"publication-slug",params:{slug:"ishinkoyo"}},lang:["ja"]},{label:"日本関係海外史料",to:{name:"publication-slug",params:{slug:"kaigai"}},lang:["ja","en"]},{label:"日本関係海外史料目録",to:{name:"publication-slug",params:{slug:"kaigaimokuroku"}},lang:["ja","en"]},{label:"正倉院文書目録",to:{name:"publication-slug",params:{slug:"shosoin"}},lang:["ja","en"]},{label:"日本荘園絵図聚影",to:{name:"publication-slug",params:{slug:"shoenezu"}},lang:["ja","en"]},{label:"花押かがみ",to:{name:"publication-slug",params:{slug:"kao"}},lang:["ja","en"]},{label:"入来院家文書",href:{ja:"http://www.hi.u-tokyo.ac.jp/iriki.html",en:"http://www.hi.u-tokyo.ac.jp/iriki.html"},lang:["en"]},{label:"その他の出版物",to:{name:"publication-slug",params:{slug:"kakushu"}},lang:["ja"]},{label:"所報",to:{name:"publication-syoho"},lang:["ja"]},{label:"研究紀要",to:{name:"publication-kiyo"},lang:["ja"]},{label:"画像解析センター通信",href:{ja:"https://www.hi.u-tokyo.ac.jp/gazo/centernewslist",en:"https://www.hi.u-tokyo.ac.jp/gazo/centernewslist"},lang:["ja"]}]},{label:"史料調査",to:{name:"investigation"},lang:["ja"]},{label:"共同研究",to:{name:"collaboration"},lang:["ja"],children:[{label:"各種成果",to:{name:"collaboration-fruits"},lang:["ja"]}]},{label:"成果公開・教育",to:{name:"conference-seminar"},lang:["ja"]},{label:"史料集版面ギャラリー",to:{name:"publication-dip"},lang:["ja","en"]}]},{label:"史料の利用",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho"},lang:["ja","en"],isDisplayTop:!0,children:[{label:"お知らせ",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/"},lang:["ja","en"]},{label:"図書室利用（閲覧手続き）",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/etsuran",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/etsuran"},lang:["ja"]},{label:"図書室利用（複製・掲載・放映等）",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/shiryoriyo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/shiryoriyo"},lang:["ja"]},{label:"所蔵史料の検索",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/kensaku",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/kensaku"},lang:["ja"]},{label:"お問い合わせ・連絡先",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/toiawase",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/toiawase"},lang:["ja"]}]},{label:"データベース検索",lang:["ja","en"],isDisplayTop:!0,children:[{label:"データベース検索",lang:["ja","en"],href:{ja:"http://wwwap.hi.u-tokyo.ac.jp/ships/",en:"https://wwwap.hi.u-tokyo.ac.jp/ships/shipscontroller-e"}}]},{label:"所蔵史料紹介",isDisplayTop:!0,to:{name:"collection-slug"},lang:["ja","en"],children:[{label:"概要",to:{name:"collection-slug"},lang:["ja","en"]},{label:"貴重書",to:{name:"collection-slug",params:{slug:"collection02"}},lang:["ja"]},{label:"特殊蒐書",to:{name:"collection-slug",params:{slug:"collection03"}},lang:["ja"]},{label:"その他の貴重書",to:{name:"collection-slug",params:{slug:"collection04"}},lang:["ja"]},{label:"１階展示案内",to:{name:"collection-slug",params:{slug:"exhibition"}},lang:["ja"]},{label:"デジタルギャラリー",to:{name:"collection-slug",params:{slug:"degitalgallary"}},lang:["ja"]}]},{label:"国際交流",isDisplayTop:!0,to:{name:"exchange"},lang:["ja","en"],children:[{label:"国際交流",to:{name:"exchange"},lang:["ja","en"]}]},{label:"よくあるご質問",to:{name:"faq-slug"},lang:["ja"],isDisplayTop:!1,children:[{label:"よくあるご質問",to:{name:"faq-slug"},lang:["ja"]},{label:"ビューアについて",to:{name:"faq-slug",params:{slug:"viewer"}},lang:["ja"]},{label:"データベースにおける文字について",to:{name:"faq-slug",params:{slug:"kanjiv"}},lang:["ja"]},{label:"利用条件：史料画像データの利用",to:{name:"faq-slug",params:{slug:"reuse"}},lang:["ja"]}]}],t}return Object(o.a)(n,[{key:"lang",get:function(){return this.$i18n.locale}},{key:"menu",get:function(){return this.menuList[this.index].children}},{key:"label",get:function(){return this.menuList[this.index].label}},{key:"keyStr",get:function(){return this.head||this.label}},{key:"items",get:function(){var t=[{text:"HOME",disabled:!1,to:this.localePath({name:"index"}),exact:!0}],e=this.breadcrumbs;if(0===e.length){var menu=this.menuList[this.index];t.push({text:this.$t(menu.label),to:this.localePath(menu.to)})}else for(var i=0;i<e.length;i++){var n=e[i];n.to?t.push({text:n.text,disabled:!1,to:n.to,exact:!0}):t.push({text:n.text,disabled:!1,to:this.localePath({name:n.name}),exact:!0})}return t.push({text:this.title}),t}}]),n}(v.Vue);j([Object(v.Prop)()],y.prototype,"title",void 0),j([Object(v.Prop)({default:0})],y.prototype,"index",void 0),j([Object(v.Prop)({default:""})],y.prototype,"head",void 0),j([Object(v.Prop)({default:function(){return[]}})],y.prototype,"breadcrumbs",void 0);var m=y=j([Object(v.Component)({components:{}})],y),w=n(16),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-common"},[n("div",{staticClass:"inner"},[n("p",{staticClass:"ttl"},[t._v(t._s(t.$t(t.keyStr)))])])]),t._v(" "),n("div",{staticClass:"breadcrumb"},[n("ul",t._l(t.items,(function(e,l){return n("li",{key:l},[e.to?[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.text))])]:[t._v("\n          "+t._s(e.text)+"\n        ")]],2)})),0)]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[n("section",[t._t("default")],2)]),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.$t(t.label)))]),t._v(" "),n("ul",[t._l(t.menu,(function(e,l){return[e.lang.includes(t.lang)?n("li",{key:l},[n("nuxt-link",{key:"parent_"+l,class:t.title==e.label?"current":"",attrs:{to:t.localePath(e.to),exact:""}},[t._v("\n                  "+t._s(t.$t(e.label))+"\n                ")]),t._v(" "),n("ul",[t._l(e.children,(function(e,o){return[e.lang.includes(t.lang)?n("li",{key:o},[e.to?[n("nuxt-link",{key:o,attrs:{to:t.localePath(e.to)}},[t._v("\n                          "+t._s(t.$t(e.label))+"\n                        ")])]:[n("a",{key:"parent_"+l,class:t.title==e.label?"current":"",attrs:{href:e.href[t.lang],exact:""}},[t._v("\n                          "+t._s(t.$t(e.label))+"\n                        ")])]],2):t._e()]}))],2)],1):t._e()]}))],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},147:function(t,e,n){"use strict";n.r(e);n(58);var l=n(15),o=n(24),r=n(25),c=n(12),h=n(6),f=(n(20),n(3));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(r.a)(this,n)}}var d=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},j=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).lang=t.$i18n.locale,t.select="latest",t}return n}(f.Vue);d([Object(f.Prop)({default:!1})],j.prototype,"isTop",void 0),d([Object(f.Prop)()],j.prototype,"newsList",void 0);var y=j=d([Object(f.Component)({components:{}})],j),m=n(16),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-topics"},[t.isTop?n("h2",{staticClass:"h01"},[t._v("\n    News & Topics\n    "),n("nuxt-link",{staticClass:"list",staticStyle:{"text-decoration":"none"},attrs:{to:t.localePath({name:"news-year"})}},[t._v(t._s(t.$t("一覧")))])],1):t._e(),t._v(" "),n("div",{staticClass:"page-link",class:t.isTop?"c4":""},[n("ul",[t.isTop?n("li",[n("a",{on:{click:function(e){t.select="latest"}}},[t._v(t._s(t.$t("新着一覧")))])]):t._e(),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="news"}}},[t._v(t._s(t.$t("news")))])]),n("li",[n("a",{on:{click:function(e){t.select="event"}}},[t._v(t._s(t.$t("event")))])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="data"}}},[t._v(t._s(t.$t("data")))])])])]),t._v(" "),n("div",{class:t.isTop?"data":""},[t._l(t.newsList,(function(e,l){return["latest"===t.select||t.select===e.tag?n("dl",{key:l},[n("dt",{staticClass:"mb1"},[n("span",[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"chip2"},[t._v(t._s(t.$t(e.tag)))])]),t._v(" "),n("dd",[n("span",{staticClass:"fc1"},[t._v(t._s(e.featured))]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports},148:function(t,e,n){"use strict";n.r(e);n(58),n(30),n(11),n(22),n(39),n(18),n(27),n(40),n(41),n(21);var l=n(15),o=n(26),r=n(24),c=n(25),h=n(12),f=n(6),v=(n(20),n(3));function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,l=function(){};return{s:l,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw o}}}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},w=function(t){Object(r.a)(n,t);var e=y(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).currentFiscalYear=2021,t.mapping={COE:"中核的研究拠点（COE）形成基礎研究費",sosei:"学術創成研究費",S:"基盤研究(S)",A:"基盤研究(A)",B:"基盤研究(B)",C:"基盤研究(C)",hoga:"挑戦的萌芽研究",wakate_a:"若手研究(A)",wakate_b:"若手研究(B)",wakate:"若手研究",wakate_start:"若手研究(スタートアップ)",start:"研究活動スタート支援",shorei:"奨励研究",tokutei:"特定領域研究"},t}return Object(o.a)(n,[{key:"items",get:function(){var t,e=this.past,n=this.currentFiscalYear,l=[],o=d(this.data);try{for(o.s();!(t=o.n()).done;){var r,c=t.value,h=[],f=d(c.data);try{for(f.s();!(r=f.n()).done;){var v=r.value;(e?v.end<n:v.end>=n)&&h.push(v)}}catch(t){f.e(t)}finally{f.f()}c.data=h,l.push(c)}}catch(t){o.e(t)}finally{o.f()}return l}}]),n}(v.Vue);m([Object(v.Prop)()],w.prototype,"data",void 0),m([Object(v.Prop)({default:!1})],w.prototype,"past",void 0);var k=w=m([Object(v.Component)({components:{}})],w),_=n(16),component=Object(_.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.items,(function(e,i){return e.data.length>0?[n("div",{key:e.type,staticClass:"mb2"},[n("h3",{staticClass:"h04"},[t._v(t._s(t.mapping[e.type]))]),t._v(" "),n("ul",[t._l(e.data,(function(e,l){return[(t.past?e.end<t.currentFiscalYear:e.end>=t.currentFiscalYear)?n("li",{key:l},[e.kaken?[n("a",{attrs:{href:"https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-"+e.kaken+"/"}},[t._v(t._s(e.title))])]:[t._v("\n              "+t._s(e.title)+"\n            ")],t._v("\n            （"+t._s(e.start)+"～"+t._s(e.end)+"年度）\n            "),e.url2?n("p",[n("a",{attrs:{href:e.url2}},[t._v("プロジェクトのページへ")])]):t._e()],2):t._e()]}))],2)])]:t._e()}))],2)}),[],!1,null,null,null);e.default=component.exports},150:function(t,e,n){"use strict";n.r(e);n(58);var l=n(15),o=n(26),r=n(24),c=n(25),h=n(12),f=n(6),v=(n(20),n(3));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},y=function(t){Object(r.a)(n,t);var e=d(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).currentFiscalYear=2021,t.label=t.$t("ニュース"),t.items=[{text:"HOME",disabled:!1,to:t.localePath({name:"index"}),exact:!0},{text:t.$t(t.label),disabled:!1,to:t.localePath({name:"news-year"}),exact:!0},{text:t.title}],t}return Object(o.a)(n,[{key:"years",get:function(){for(var t=[],i=this.currentFiscalYear-1;i>=1997;i--)2e3!==i&&t.push(i);return t}}]),n}(v.Vue);j([Object(v.Prop)()],y.prototype,"title",void 0);var m=y=j([Object(v.Component)({components:{}})],y),w=n(16),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-common"},[n("div",{staticClass:"inner"},[n("p",{staticClass:"ttl"},[t._v(t._s(t.label))])])]),t._v(" "),n("div",{staticClass:"breadcrumb"},[n("ul",t._l(t.items,(function(e,l){return n("li",{key:l},[e.to?[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.text))])]:[t._v("\n          "+t._s(e.text)+"\n        ")]],2)})),0)]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[t._t("default"),t._v(" "),n("section")],2),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.label))]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"news-year"})}},[t._v("\n                "+t._s(t.$t("今年度のニュース"))+"\n              ")])],1),t._v(" "),t._l(t.years,(function(e,l){return n("li",{key:l},[n("nuxt-link",{attrs:{to:t.localePath({name:"news-year",params:{year:e}})}},[t._v("\n                "+t._s(e)+t._s(t.$t("年度のニュース"))+"\n              ")])],1)}))],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},186:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("56b15182",content,!1,{sourceMap:!1})},208:function(t,e,n){"use strict";n.r(e);n(58);var l=n(15),o=n(26),r=n(24),c=n(25),h=n(12),f=n(6),v=(n(20),n(3));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},y=function(t){Object(r.a)(n,t);var e=d(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t}return Object(o.a)(n,[{key:"absPath",get:function(){return this.baseUrl+this.src}}]),n}(v.Vue);j([Object(v.Prop)()],y.prototype,"height",void 0),j([Object(v.Prop)()],y.prototype,"width",void 0),j([Object(v.Prop)()],y.prototype,"src",void 0),j([Object(v.Prop)()],y.prototype,"alt",void 0),j([Object(v.Prop)()],y.prototype,"caption",void 0);var m=y=j([Object(v.Component)({components:{}})],y),w=n(16),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",[n("img",{attrs:{width:t.width,height:t.height,src:t.absPath,alt:t.alt||t.caption}}),t._v(" "),n("figcaption",{domProps:{innerHTML:t._s(t.caption)}})])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n(58);var l=n(15),o=n(26),r=n(24),c=n(25),h=n(12),f=n(6),v=(n(20),n(3)),d=n(109),j=n(110);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var l,o=arguments.length,r=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(o<3?l(r):o>3?l(e,n,r):l(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},w=n(185).VueSlideToggle,k=function(t){Object(r.a)(n,t);var e=y(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).menuList=[{label:"ご案内",lang:["ja","en"],to:{name:"about-slug"},isDisplayTop:!0,children:[{label:"所長挨拶",to:{name:"about-slug"},lang:["ja","en"]},{label:"沿革",to:{name:"about-slug",params:{slug:"history"}},lang:["ja","en"]},{label:"事業",to:{name:"about-slug",params:{slug:"mission"}},lang:["ja","en"]},{label:"組織",to:{name:"about-organization"},lang:["ja","en"],children:[{label:"古代史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/kodai",en:"https://www.hi.u-tokyo.ac.jp/dev/en/kodai"},lang:["ja","en"]},{label:"中世史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/chusei",en:"https://www.hi.u-tokyo.ac.jp/dev/en/chusei"},lang:["ja","en"]},{label:"近世史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/kinsei",en:"https://www.hi.u-tokyo.ac.jp/dev/en/kinsei"},lang:["ja","en"]},{label:"古文書古記録部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/komo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/komo"},lang:["ja","en"]},{label:"特殊史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tokushu",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tokushu"},lang:["ja","en"]},{label:"画像史料解析センター",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/gazo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/gazo"},lang:["ja","en"]},{label:"前近代日本史情報国際センター",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/cdps",en:"https://www.hi.u-tokyo.ac.jp/dev/en/cdps"},lang:["ja","en"]},{label:"技術部・史料保存技術室",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/gijyutu",en:"https://www.hi.u-tokyo.ac.jp/dev/en/gijyutu"},lang:["ja","en"]},{label:"図書部",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho"},lang:["ja","en"]},{label:"IR・広報室",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/ir",en:"https://www.hi.u-tokyo.ac.jp/dev/en/ir"},lang:["ja","en"]}]},{label:"教員一覧",to:{name:"faculty"},lang:["ja","en"]},{label:"施設",to:{name:"about-slug",params:{slug:"facilities"}},lang:["ja"]},{label:"点検・評価",to:{name:"about-slug",params:{slug:"evaluation"}},lang:["ja"]},{label:"アクセスマップ",to:{name:"about-slug",params:{slug:"access"}},lang:["ja","en"]},{label:"リンク",to:{name:"about-slug",params:{slug:"link"}},lang:["ja"]},{label:"サイトマップ",to:{name:"about-sitemap"},lang:["ja"]}]},{label:"ニュース",to:{name:"news-year"},lang:["ja"],children:[{label:"ニュース",to:{name:"news-year"},lang:["ja"]}],isDisplayTop:!1},{label:"編纂・研究・公開",lang:["ja","en"],to:{name:"publication"},isDisplayTop:!0,children:[{label:"編纂・出版",to:{name:"publication"},lang:["ja","en"],children:[{label:"大日本史料・史料綜覧",to:{name:"publication-slug",params:{slug:"dainihonshiryo_shiryosoran"}},lang:["ja","en"]},{label:"大日本古文書",to:{name:"publication-slug",params:{slug:"komonjo"}},lang:["ja","en"]},{label:"大日本古記録",to:{name:"publication-slug",params:{slug:"kokiroku"}},lang:["ja","en"]},{label:"大日本近世史料",to:{name:"publication-slug",params:{slug:"kinsei"}},lang:["ja","en"]},{label:"大日本維新史料",to:{name:"publication-slug",params:{slug:"ishin"}},lang:["ja","en"]},{label:"維新史料綱要",to:{name:"publication-slug",params:{slug:"ishinkoyo"}},lang:["ja"]},{label:"日本関係海外史料",to:{name:"publication-slug",params:{slug:"kaigai"}},lang:["ja","en"]},{label:"日本関係海外史料目録",to:{name:"publication-slug",params:{slug:"kaigaimokuroku"}},lang:["ja","en"]},{label:"正倉院文書目録",to:{name:"publication-slug",params:{slug:"shosoin"}},lang:["ja","en"]},{label:"日本荘園絵図聚影",to:{name:"publication-slug",params:{slug:"shoenezu"}},lang:["ja","en"]},{label:"花押かがみ",to:{name:"publication-slug",params:{slug:"kao"}},lang:["ja","en"]},{label:"入来院家文書",href:{ja:"http://www.hi.u-tokyo.ac.jp/iriki.html",en:"http://www.hi.u-tokyo.ac.jp/iriki.html"},lang:["en"]},{label:"その他の出版物",to:{name:"publication-slug",params:{slug:"kakushu"}},lang:["ja"]},{label:"所報",to:{name:"publication-syoho"},lang:["ja"]},{label:"研究紀要",to:{name:"publication-kiyo"},lang:["ja"]},{label:"画像解析センター通信",href:{ja:"https://www.hi.u-tokyo.ac.jp/gazo/centernewslist",en:"https://www.hi.u-tokyo.ac.jp/gazo/centernewslist"},lang:["ja"]}]},{label:"史料調査",to:{name:"investigation"},lang:["ja"]},{label:"共同研究",to:{name:"collaboration"},lang:["ja"],children:[{label:"各種成果",to:{name:"collaboration-fruits"},lang:["ja"]}]},{label:"成果公開・教育",to:{name:"conference-seminar"},lang:["ja"]},{label:"史料集版面ギャラリー",to:{name:"publication-dip"},lang:["ja","en"]}]},{label:"史料の利用",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho"},lang:["ja","en"],isDisplayTop:!0,children:[{label:"お知らせ",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/"},lang:["ja","en"]},{label:"図書室利用（閲覧手続き）",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/etsuran",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/etsuran"},lang:["ja"]},{label:"図書室利用（複製・掲載・放映等）",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/shiryoriyo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/shiryoriyo"},lang:["ja"]},{label:"所蔵史料の検索",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/kensaku",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/kensaku"},lang:["ja"]},{label:"お問い合わせ・連絡先",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/toiawase",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/toiawase"},lang:["ja"]}]},{label:"データベース検索",lang:["ja","en"],isDisplayTop:!0,children:[{label:"データベース検索",lang:["ja","en"],href:{ja:"http://wwwap.hi.u-tokyo.ac.jp/ships/",en:"https://wwwap.hi.u-tokyo.ac.jp/ships/shipscontroller-e"}}]},{label:"所蔵史料紹介",isDisplayTop:!0,to:{name:"collection-slug"},lang:["ja","en"],children:[{label:"概要",to:{name:"collection-slug"},lang:["ja","en"]},{label:"貴重書",to:{name:"collection-slug",params:{slug:"collection02"}},lang:["ja"]},{label:"特殊蒐書",to:{name:"collection-slug",params:{slug:"collection03"}},lang:["ja"]},{label:"その他の貴重書",to:{name:"collection-slug",params:{slug:"collection04"}},lang:["ja"]},{label:"１階展示案内",to:{name:"collection-slug",params:{slug:"exhibition"}},lang:["ja"]},{label:"デジタルギャラリー",to:{name:"collection-slug",params:{slug:"degitalgallary"}},lang:["ja"]}]},{label:"国際交流",isDisplayTop:!0,to:{name:"exchange"},lang:["ja","en"],children:[{label:"国際交流",to:{name:"exchange"},lang:["ja","en"]}]},{label:"よくあるご質問",to:{name:"faq-slug"},lang:["ja"],isDisplayTop:!1,children:[{label:"よくあるご質問",to:{name:"faq-slug"},lang:["ja"]},{label:"ビューアについて",to:{name:"faq-slug",params:{slug:"viewer"}},lang:["ja"]},{label:"データベースにおける文字について",to:{name:"faq-slug",params:{slug:"kanjiv"}},lang:["ja"]},{label:"利用条件：史料画像データの利用",to:{name:"faq-slug",params:{slug:"reuse"}},lang:["ja"]}]}],t.currentLv1Index=-1,t.currentLv2Index=-1,t.isOpenLv1=!1,t.isOpenLv2=!1,t.isMobileMenuOpen=!1,t.baseUrl="https://hi-ut.github.io",t.isPageTopBtnActive=!1,t}return Object(o.a)(n,[{key:"onUrlChange",value:function(){this.isMobileMenuOpen=!1,this.currentLv1Index=-1,this.currentLv2Index=-1,this.isOpenLv1=!1,this.isOpenLv2=!1}},{key:"lg",get:function(){return this.$store.getters.getLg},set:function(t){this.$store.commit("setLg",t)}},{key:"mounted",value:function(){this.lg=this.getLg(),window.addEventListener("scroll",this.scrollWindow),window.addEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.lg=this.getLg()}},{key:"getLg",value:function(){return window.innerWidth>769}},{key:"returnTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"scrollWindow",value:function(){100<=window.scrollY?this.isPageTopBtnActive=!0:this.isPageTopBtnActive=!1}},{key:"lang",get:function(){return this.$i18n.locale}},{key:"langStr",get:function(){switch(this.lang){case"ja":return"日本語";case"en":return"English";case"zh":return"Chinese"}}},{key:"clickLv1Menu",value:function(t){var e=this.currentLv1Index;this.isOpenLv1=e!==t||!this.isOpenLv1,this.currentLv1Index=t}},{key:"clickLv2Menu",value:function(t){var e=this.currentLv2Index;this.isOpenLv2=e!==t||!this.isOpenLv2,this.currentLv2Index=t}}]),n}(v.Vue);m([Object(v.Watch)("$route")],k.prototype,"onUrlChange",null);var _=k=m([Object(v.Component)({components:{VueSlideToggle:w,LangSelect:d.default,GoogleCustomSearch:j.default}})],k),O=(n(258),n(16)),component=Object(O.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.isMobileMenuOpen?"gnav-open":""},[n("div",{staticClass:"overlay",attrs:{id:"js__overlay"}}),t._v(" "),n("div",{staticClass:"wrapper",attrs:{id:"wrapper"}},[n("header",{attrs:{id:"header"}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"header-logo"},[n("h1",[n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[n("img",{attrs:{src:t.baseUrl+"/assets/img/common/hilogo.jpg",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})])],1)]),t._v(" "),t.lg?[n("GoogleCustomSearch"),t._v(" "),n("LangSelect")]:t._e(),t._v(" "),n("div",{staticClass:"nav_toggle",attrs:{id:"js__sideMenuBtn"},on:{click:function(e){t.isMobileMenuOpen=!t.isMobileMenuOpen}}},[t._m(0)])],2)]),t._v(" "),n("nav",{staticClass:"gnav",attrs:{id:"js_gnav"}},[t.isMobileMenuOpen?n("GoogleCustomSearch"):t._e(),t._v(" "),n("ul",{staticClass:"menu"},[t._l(t.menuList,(function(e,l){return[e.lang.includes(t.lang)&&e.isDisplayTop?n("li",{key:l},[n("span",{staticClass:"atag",on:{click:function(e){return t.clickLv1Menu(l)}}},[t._v(t._s(t.$t(e.label)))]),t._v(" "),n("i",{staticClass:"child-btn",on:{click:function(e){return t.clickLv1Menu(l)}}}),t._v(" "),n("VueSlideToggle",{staticClass:"sub-menu",attrs:{duration:500,tag:"ul",open:t.isOpenLv1&&t.currentLv1Index===l}},[t._l(e.children,(function(e,l){return[e.lang.includes(t.lang)?n("li",{key:l,class:t.isOpenLv2&&t.currentLv2Index===l?"child-open":""},[e.href?[n("a",{attrs:{href:e.href[t.lang]}},[t._v(t._s(t.$t(e.label)))])]:[n("nuxt-link",{attrs:{to:t.localePath(e.to)}},[t._v(t._s(t.$t(e.label)))])],t._v(" "),e.children?[n("i",{staticClass:"child-btn",on:{click:function(e){return t.clickLv2Menu(l)}}}),t._v(" "),n("VueSlideToggle",{staticClass:"sub-menu2",attrs:{duration:500,tag:"ul",open:t.isOpenLv2&&t.currentLv2Index===l}},[t._l(e.children,(function(e,l){return[e.lang.includes(t.lang)?n("li",{key:l},[e.href?[n("a",{attrs:{href:e.href[t.lang]}},[t._v(t._s(t.$t(e.label)))])]:[n("nuxt-link",{attrs:{to:t.localePath(e.to)}},[t._v(t._s(t.$t(e.label)))])]],2):t._e()]}))],2)]:t._e()],2):t._e()]}))],2)],1):t._e()]}))],2),t._v(" "),t.isMobileMenuOpen?n("LangSelect"):t._e()],1)]),t._v(" "),n("nuxt"),t._v(" "),n("footer",{attrs:{id:"footer"}},[n("transition",{attrs:{name:"button"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.isPageTopBtnActive,expression:"isPageTopBtnActive"}],attrs:{id:"page-top"},on:{click:t.returnTop}})]),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"foot-add"},[n("p",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[n("img",{attrs:{src:t.baseUrl+"/assets/img/common/logo_foot.png",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})])],1),t._v(" "),n("p",["ja"==t.lang?[t._v("\n            東京大学史料編纂所 所長：保谷 徹"),n("br"),t._v("\n            所在地：〒113-0033 東京都文京区本郷７丁目３番１号\n          ")]:[t._v("\n            Director : Hoya, Toru"),n("br"),t._v("\n            Address: 3-1, Hongo 7-chome, Bunkyo-ku, Tokyo 113-0033, JAPAN\n          ")]],2),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"contct"},[n("nuxt-link",{staticClass:"btn01 v3",attrs:{to:t.localePath({name:"inquery"})}},[t._v(t._s(t.$t("お問い合わせ")))])],1)]),t._v(" "),n("aside",{staticClass:"foot-nav"},[n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v("■ HOME")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"about-sitemap"})}},[t._v("■ "+t._s(t.$t("サイトマップ")))])],1),t._v(" "),"ja"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"about-slug",params:{slug:"link"}})}},[t._v("■ "+t._s(t.$t("リンク")))])],1):t._e(),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"about-slug",params:{slug:"access"}})}},[t._v("■ "+t._s(t.$t("アクセスマップ")))])],1)]),t._v(" "),n("ul")]),t._v(" "),n("small",[t._v("\n          © 1997 Historiographical Institute The University of Tokyo.\n          ")])])])],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ellipsis-v"},[n("span",{staticClass:"point top"}),t._v(" "),n("span",{staticClass:"point mid"}),t._v(" "),n("span",{staticClass:"point bot"})])}],!1,null,null,null);e.a=component.exports},221:function(t,e,n){n(222),t.exports=n(223)},258:function(t,e,n){"use strict";n(186)},259:function(t,e,n){var l=n(106)(!1);l.push([t.i,".gnav .sub-menu,.gnav .sub-menu2,.lang-select .child{display:block!important}",""]),t.exports=l},260:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return o})),n.d(e,"getters",(function(){return r}));var l=function(){return{lg:!0}},o={setLg:function(t,e){t.lg=e}},r={getLg:function(t){return t.lg}}}},[[221,35,2,36]]]);