(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{303:function(t,e,n){"use strict";(function(t){n(111);var c=n(31),r=n(44),l=n(67),o=n(68),f=n(51),v=n(13),h=(n(30),n(45));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var d=function(t,e,n,desc){var c,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(l=(r<3?c(l):r>3?c(e,n,l):c(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},y=function(e){Object(l.a)(o,e);var n=_(o);function o(){var e;return Object(c.a)(this,o),(e=n.apply(this,arguments)).baseUrl="https://hi-ut.github.io",e.json=t.env.jsonData,e.items=[{text:"HOME",disabled:!1,to:e.localePath({name:"index"}),exact:!0},{text:e.$t(e.label),disabled:!1,to:e.localePath({name:"question"}),exact:!0},{text:e.$t(e.title)}],e}return Object(r.a)(o,[{key:"menu",get:function(){return this.json[7].children}},{key:"label",get:function(){return this.json[7].label}}]),o}(h.Vue);d([Object(h.Prop)()],y.prototype,"title",void 0),y=d([h.Component],y),e.a=y}).call(this,n(112))},304:function(t,e,n){"use strict";var c=n(303).a,r=n(43),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-common"},[n("div",{staticClass:"inner"},[n("p",{staticClass:"ttl"},[t._v(t._s(t.$t(this.label)))])])]),t._v(" "),n("div",{staticClass:"breadcrumb"},[n("ul",t._l(t.items,(function(e,c){return n("li",[e.to?[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.text))])]:[t._v("\n          "+t._s(e.text)+"\n        ")]],2)})),0)]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[n("section",[t._t("default")],2)]),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.$t(t.label)))]),t._v(" "),n("ul",[t._l(t.menu,(function(e,c){return[n("li",[e.lang.includes(t.$i18n.locale)?n("nuxt-link",{key:"parent_"+c,class:t.title==e.label?"current":"",attrs:{to:t.localePath(e.to),exact:""}},[t._v("\n                  "+t._s(t.$t(e.label))+"\n                ")]):t._e()],1)]}))],2)])])])])])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,n){"use strict";n.r(e);n(111);var c=n(31),r=n(44),l=n(67),o=n(68),f=n(51),v=n(13),h=(n(30),n(45)),_=n(304);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var c,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(l=(r<3?c(l):r>3?c(e,n,l):c(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},j=function(t){Object(l.a)(n,t);var e=d(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t.title=t.$t("利用条件：史料画像データの利用"),t}return Object(r.a)(n,[{key:"head",value:function(){return{title:this.title}}}]),n}(h.Vue),O=j=y([Object(h.Component)({components:{LayoutQuestion:_.a}})],j),m=n(43),component=Object(m.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"my-5"},[n("LayoutQuestion",{attrs:{title:t.title}},[n("h2",{staticClass:"h03"},[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v("\n        東京大学史料編纂所（以下、「本所」）が公開している画像データ（関連するメタデータを含む）\n        の利用条件は下記の通りです。\n      ")]),t._v(" "),n("h3",{staticClass:"h04"},[t._v("【１】本所が所蔵する原本等の史料画像データ")]),t._v(" "),n("p",[t._v("\n        史料種別（区分）が「貴重書（原本・古写本類）」・「特殊蒐書」（一部を除く）・「写本」のものが該当します。\n      ")]),t._v(" "),n("p",[t._v("\n        ※史料種別は、所蔵史料目録データベース検索結果画面では下図の例のように表示されています。\n      ")]),t._v(" "),n("h2",{staticClass:"h03"},[t._v("成果物提供のお願い")]),t._v(" "),n("p",[t._v("\n        本所ウェブサイトのコンテンツを利用して作成された書籍、雑誌、論文、パンフレット、映像作品、新聞記事、テレビ番組等の成果物をぜひとも本所にご提供くださいますようお願い申し上げます。\n        ご提供が難しい場合は、利用実績を"),n("nuxt-link",{attrs:{to:t.localePath({name:"question"})}},[t._v("問い合わせフォーム")]),t._v("よりご報告くださるだけでも結構です。\n      ")],1),t._v(" "),n("h1",{staticClass:"red--text"},[t._v("問い合わせフォームは分けた方がよいか？")]),t._v(" "),n("p",[t._v("\n        ご提供先については"),n("nuxt-link",{attrs:{to:t.localePath({name:"tosho-toiawase"})}},[t._v("こちら")]),t._v("をご参照ください。\n      ")],1),t._v(" "),n("h2",{staticClass:"h03"},[t._v("問い合わせ先")]),t._v(" "),n("p",[t._v("\n        上記についてご不明な点やご質問等ございましたら"),n("nuxt-link",{attrs:{to:t.localePath({name:"question"})}},[t._v("問い合わせフォーム")]),t._v("にてお知らせください。\n      ")],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);