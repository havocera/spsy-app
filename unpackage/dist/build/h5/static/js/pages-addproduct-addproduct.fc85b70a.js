(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addproduct-addproduct"],{"0692":function(t,e,n){"use strict";var i=n("6fbc"),r=n.n(i);r.a},1857:function(t,e,n){"use strict";n.r(e);var i=n("527c"),r=n("2015");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("c869");var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"5124d97a",null,!1,i["a"],o);e["default"]=l.exports},"1c8e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-upload[data-v-69e9adda]{display:flex;flex-wrap:wrap;align-items:center}.u-list-item[data-v-69e9adda]{width:%?200?%;height:%?200?%;overflow:hidden;margin:%?10?%;background:#f4f5f6;position:relative;border-radius:%?10?%;display:inline-flex;align-items:center;justify-content:center}.u-preview-wrap[data-v-69e9adda]{border:1px solid #ebecee}.u-add-wrap[data-v-69e9adda]{flex-direction:column;color:#606266;font-size:%?28?%}.u-add-tips[data-v-69e9adda]{margin-top:%?20?%;line-height:%?40?%}.u-add-wrap__hover[data-v-69e9adda]{background-color:#ebecee}.u-preview-image[data-v-69e9adda]{display:block;width:100%;height:100%;border-radius:%?10?%}.u-delete-icon[data-v-69e9adda]{position:absolute;top:%?10?%;right:%?10?%;z-index:10;background-color:#fa3534;border-radius:%?100?%;width:%?44?%;height:%?44?%;display:flex;align-items:center;justify-content:center}.u-icon[data-v-69e9adda]{display:flex;align-items:center;justify-content:center}.u-progress[data-v-69e9adda]{position:absolute;bottom:%?10?%;left:%?8?%;right:%?8?%;z-index:9;width:auto}.u-error-btn[data-v-69e9adda]{color:#fff;background-color:#fa3534;font-size:%?20?%;padding:4px 0;text-align:center;position:absolute;bottom:0;left:0;right:0;z-index:9;line-height:1}',""]),t.exports=e},"1da1":function(t,e,n){"use strict";function i(t,e,n,i,r,a,o){try{var s=t[a](o),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,l,"next",t)}function l(t){i(o,r,a,s,l,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},2015:function(t,e,n){"use strict";n.r(e);var i=n("3e66"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"2ae9":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-line-progress",props:{round:{type:Boolean,default:!0},type:{type:String,default:""},activeColor:{type:String,default:"#19be6b"},inactiveColor:{type:String,default:"#ececec"},percent:{type:Number,default:0},showPercent:{type:Boolean,default:!0},height:{type:[Number,String],default:28},striped:{type:Boolean,default:!1},stripedActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{progressStyle:function(){var t={};return t.width=this.percent+"%",this.activeColor&&(t.backgroundColor=this.activeColor),t}},methods:{}};e.default=i},"2e35":function(t,e,n){"use strict";n.r(e);var i=n("d623"),r=n("b3e9");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("7950");var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"69e9adda",null,!1,i["a"],o);e["default"]=l.exports},"3e66":function(t,e,n){"use strict";n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var t={};return t.textAlign=this.inputAlign,"left"==this.labelPosition?t.margin="0 8rpx":t.marginRight="8rpx",t},rightIconStyle:function(){var t={};return"top"==this.arrowDirection&&(t.transform="roate(-90deg)"),"bottom"==this.arrowDirection?t.transform="roate(90deg)":t.transform="roate(0deg)",t},labelStyle:function(){var t={};return"left"==this.labelAlign&&(t.justifyContent="flext-start"),"center"==this.labelAlign&&(t.justifyContent="center"),"right"==this.labelAlign&&(t.justifyContent="flext-end"),t},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var t={};return"left"==this.labelPosition?t.flexDirection="row":t.flexDirection="column",t}},methods:{onInput:function(t){var e=t.detail.value;this.trim&&(e=this.$u.trim(e)),this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};e.default=i},"43d6":function(t,e,n){"use strict";n.r(e);var i=n("2ae9"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},4989:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uForm:n("a2b6").default,uFormItem:n("46b4").default,uInput:n("55c0").default,uField:n("1857").default,uUpload:n("2e35").default,uButton:n("231f").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"margin-left":"20upx","margin-right":"20upx"}},[n("u-form",{ref:"uForm",attrs:{model:t.form}},[n("u-form-item",{attrs:{label:"产品名称","label-width":"150"}},[n("u-input",{model:{value:t.form.cpmc,callback:function(e){t.$set(t.form,"cpmc",e)},expression:"form.cpmc"}})],1),n("u-form-item",{attrs:{label:"产品规格","label-width":"150"}},[n("u-input",{model:{value:t.form.cpgg,callback:function(e){t.$set(t.form,"cpgg",e)},expression:"form.cpgg"}})],1),n("u-form-item",{attrs:{label:"保质期","label-width":"150"}},[n("u-input",{model:{value:t.form.bzq,callback:function(e){t.$set(t.form,"bzq",e)},expression:"form.bzq"}})],1),n("u-form-item",{attrs:{label:"产品介绍","label-width":"150"}},[n("u-field",{attrs:{"label-width":"0",type:"textarea"},model:{value:t.form.ms,callback:function(e){t.$set(t.form,"ms",e)},expression:"form.ms"}})],1),n("u-upload",{attrs:{action:t.action,"show-progress":t.showprogress,"max-count":"1","file-list":t.fileList},on:{"-remove":function(e){arguments[0]=e=t.$handleEvent(e),t.onRemove()},"on-success":function(e){arguments[0]=e=t.$handleEvent(e),t.onsuccess.apply(void 0,arguments)}}})],1),n("u-button",{attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addbase()}}},[t._v("添加产品")])],1)},a=[]},"4b68":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("c5e3"),r={data:function(){return{type:"textarea",border:!0,height:100,autoHeight:!0,form:{cpmc:"",cpgg:"",bzq:"",picname:"",ms:""},showprogress:!0,qyinfo:{},action:"http://www.aielab.net/ah/product/fileupload",fileList:[]}},onLoad:function(t){this.qyinfo=uni.getStorageSync("qyinfo"),this.action="https://www.aielab.net/ah/product/wxfileupload?qydm="+this.qyinfo.qydm,this.getbase(t)},methods:{onRemove:function(t,e,n){console.log(n),this.showprogress=!0},addbase:function(){var t=this,e=uni.getStorageSync("token");console.log(e),uni.request({url:i.api_base_url+"/addproduct?token="+e,method:"POST",data:t.form,success:function(t){0==t.data.code&&uni.navigateBack({delta:1})},fail:function(){uni.showModal({title:"添加失败"})}})},onsuccess:function(t,e,n){console.log(n),console.log(n[0].response.picname),this.form.picname=n[0].response.picname,this.showprogress=!1},getbase:function(t){if(t.bh){var e=this;console.log(t.bh);var n=uni.getStorageSync("token");uni.request({url:i.api_base_url+"/getproductdetail?token="+n,data:{bh:t.bh},success:function(t){e.form.bh=t.data.data.bh,e.form.cpmc=t.data.data.cpmc,e.form.cpgg=t.data.data.cpgg,e.form.bzq=t.data.data.bzq,e.form.ms=t.data.data.ms,e.form.bh=t.data.data.bh,e.form.picname=t.data.data.picname,e.fileList.push({url:"https://www.aielab.net/ah/Uploads/"+t.data.data.qydm+"/"+e.form.picname}),e.showprogress=!1}})}}}};e.default=r},"4fac":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-field[data-v-5124d97a]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-5124d97a]{display:flex;align-items:center}.u-textarea-inner[data-v-5124d97a]{align-items:flex-start}.u-textarea-class[data-v-5124d97a]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-5124d97a]{display:flex;flex:1;align-items:center}.u-arror-right[data-v-5124d97a]{margin-left:%?8?%}.u-label-text[data-v-5124d97a]{display:inline-block}.u-label-left-gap[data-v-5124d97a]{margin-left:%?6?%}.u-label-postion-top[data-v-5124d97a]{flex-direction:column;align-items:flex-start}.u-label[data-v-5124d97a]{width:%?130?%;flex:1 1 %?130?%;text-align:left;position:relative;display:flex;align-items:center}.u-required[data-v-5124d97a]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-5124d97a]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;flex:1;width:auto}.u-clear-icon[data-v-5124d97a]{display:flex;align-items:center}.u-error-message[data-v-5124d97a]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-5124d97a]{color:#969799}.u-input-class[data-v-5124d97a]{font-size:%?28?%}.u-button-wrap[data-v-5124d97a]{margin-left:%?8?%}',""]),t.exports=e},"527c":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("c25b").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-field",class:{"u-border-top":t.borderTop,"u-border-bottom":t.borderBottom}},[n("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==t.type?"u-textarea-inner":"","u-label-postion-"+t.labelPosition]},[n("v-uni-view",{staticClass:"u-label",class:[t.required?"u-required":""],style:{justifyContent:t.justifyContent,flex:"left"==t.labelPosition?"0 0 "+t.labelWidth+"rpx":"1"}},[t.icon?n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":t.iconStyle,name:t.icon,color:t.iconColor}})],1):t._e(),t._t("icon"),n("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||t.icon?"u-label-left-gap":""]},[t._v(t._s(t.label))])],2),n("v-uni-view",{staticClass:"fild-body"},[n("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[t.inputWrapStyle]},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[t.fieldStyle],attrs:{value:t.value,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,autoHeight:t.autoHeight,fixed:t.fixed},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[t.fieldStyle],attrs:{type:t.type,value:t.value,password:t.password||"password"===this.type,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}})],1),t.clearable&&""!=t.value&&t.focused?n("u-icon",{staticClass:"u-clear-icon",attrs:{size:t.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{staticClass:"u-button-wrap"},[t._t("right")],2),t.rightIcon?n("u-icon",{staticClass:"u-arror-right",style:[t.rightIconStyle],attrs:{name:t.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightIconClick.apply(void 0,arguments)}}}):t._e()],1)],1),!1!==t.errorMessage&&""!=t.errorMessage?n("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:t.labelWidth+"rpx"}},[t._v(t._s(t.errorMessage))]):t._e()],1)},a=[]},"6fbc":function(t,e,n){var i=n("94a0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("3f5a0600",i,!0,{sourceMap:!1,shadowMode:!1})},"769c":function(t,e,n){"use strict";n.r(e);var i=n("4989"),r=n("c719");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"4030d711",null,!1,i["a"],o);e["default"]=l.exports},7950:function(t,e,n){"use strict";var i=n("bcf0"),r=n.n(i);r.a},"94a0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-progress[data-v-5bae8782]{overflow:hidden;height:15px;display:inline-flex;align-items:center;width:100%;border-radius:%?100?%}.u-active[data-v-5bae8782]{width:0;height:100%;align-items:center;display:flex;justify-items:flex-end;justify-content:space-around;font-size:%?20?%;color:#fff;transition:all .4s ease}.u-striped[data-v-5bae8782]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:39px 39px}.u-striped-active[data-v-5bae8782]{-webkit-animation:progress-stripes-data-v-5bae8782 2s linear infinite;animation:progress-stripes-data-v-5bae8782 2s linear infinite}@-webkit-keyframes progress-stripes-data-v-5bae8782{0%{background-position:0 0}100%{background-position:39px 0}}@keyframes progress-stripes-data-v-5bae8782{0%{background-position:0 0}100%{background-position:39px 0}}',""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",u="object"===typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{c=e.regeneratorRuntime=u?t.exports:{},c.wrap=w;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(F([])));y&&y!==i&&r.call(y,o)&&(g=y);var b=S.prototype=_.prototype=Object.create(g);k.prototype=b.constructor=S,S.constructor=k,S[l]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},C($.prototype),$.prototype[s]=function(){return this},c.AsyncIterator=$,c.async=function(t,e,n,i){var r=new $(w(t,e,n,i));return c.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},C(b),b[l]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},c.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:F(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,i){var r=e&&e.prototype instanceof _?e:_,a=Object.create(r.prototype),o=new T(i||[]);return a._invoke=E(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function _(){}function k(){}function S(){}function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function $(t){function e(n,i,a,o){var s=x(t[n],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var n;function i(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function E(t,e,n){var i=d;return function(r,a){if(i===p)throw new Error("Generator is already running");if(i===h){if("throw"===r)throw a;return z()}n.method=r,n.arg=a;while(1){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var l=x(t,e,n);if("normal"===l.type){if(i=n.done?h:f,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=h,n.method="throw",n.arg=l.arg)}}}function L(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function F(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:z}}function z(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"98ef":function(t,e,n){"use strict";n.r(e);var i=n("d409"),r=n("43d6");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("0692");var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"5bae8782",null,!1,i["a"],o);e["default"]=l.exports},b3e9:function(t,e,n){"use strict";n.r(e);var i=n("bfc9"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},bcf0:function(t,e,n){var i=n("1c8e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("febdc6ac",i,!0,{sourceMap:!1,shadowMode:!1})},bfc9:function(t,e,n){"use strict";var i=n("4ea4");n("caad"),n("d81d"),n("45fc"),n("a434"),n("a9e3"),n("d3b7"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a={name:"u-upload",props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},name:{type:String,default:"file"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"选择图片"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200},delBgColor:{type:String,default:"#fa3534"},delColor:{type:String,default:"#ffffff"},delIcon:{type:String,default:"close"},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif"]}},index:{type:[Number,String],default:""}},mounted:function(){},data:function(){return{lists:[],isInCount:!0,uploading:!1}},watch:{fileList:{immediate:!0,handler:function(t){var e=this;t.map((function(t){var n=e.lists.some((function(e){return e.url==t.url}));!n&&e.lists.push({url:t.url,error:!1,progress:100})}))}},lists:function(t){this.$emit("on-list-change",t,this.index)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var t=this;if(!this.disabled){this.name;var e=this.maxCount,n=this.multiple,i=this.maxSize,r=this.sizeType,a=this.lists,o=(this.camera,this.compressed,this.maxDuration,this.sourceType),s=null,l=e-a.length;s=new Promise((function(t,e){uni.chooseImage({count:n?l>9?9:l:1,sourceType:o,sizeType:r,success:t,fail:e})})),s.then((function(r){var o=t.lists.length;r.tempFiles.map((function(r,o){if(t.checkFileExt(r)&&(n||!(o>=1)))if(r.size>i)t.$emit("on-oversize",r,t.lists,t.index),t.showToast("超出允许的文件大小");else{if(e<=a.length)return t.$emit("on-exceed",r,t.lists,t.index),void t.showToast("超出最大允许的文件个数");a.push({url:r.path,progress:0,error:!1})}})),t.$emit("on-choose-complete",t.lists,t.index),t.autoUpload&&t.uploadFile(o)})).catch((function(t){}))}},showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||e)&&uni.showToast({title:t,icon:"none"})},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].progress=0,this.lists[t].error=!1,this.lists[t].response=null,uni.showLoading({title:"重新上传"}),this.uploadFile(t)},uploadFile:function(){var t=arguments,e=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var i,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:0,!e.disabled){n.next=3;break}return n.abrupt("return");case 3:if(!e.uploading){n.next=5;break}return n.abrupt("return");case 5:if(!(i>=e.lists.length)){n.next=8;break}return e.$emit("on-uploaded",e.lists,e.index),n.abrupt("return");case 8:if(100!=e.lists[i].progress){n.next=11;break}return 0==e.autoUpload&&e.uploadFile(i+1),n.abrupt("return");case 11:if(!e.beforeUpload||"function"!==typeof e.beforeUpload){n.next=20;break}if(r=e.beforeUpload.bind(e.$u.$parent.call(e))(i,e.lists),!r||"function"!==typeof r.then){n.next=18;break}return n.next=16,r.then((function(t){})).catch((function(t){return e.uploadFile(i+1)}));case 16:n.next=20;break;case 18:if(!1!==r){n.next=20;break}return n.abrupt("return",e.uploadFile(i+1));case 20:if(e.action){n.next=23;break}return e.showToast("请配置上传地址",!0),n.abrupt("return");case 23:e.lists[i].error=!1,e.uploading=!0,a=uni.uploadFile({url:e.action,filePath:e.lists[i].url,name:e.name,formData:e.formData,header:e.header,success:function(t){var n=e.toJson&&e.$u.test.jsonString(t.data)?JSON.parse(t.data):t.data;[200,201,204].includes(t.statusCode)?(e.lists[i].response=n,e.lists[i].progress=100,e.lists[i].error=!1,e.$emit("on-success",n,i,e.lists,e.index)):e.uploadError(i,n)},fail:function(t){e.uploadError(i,t)},complete:function(t){uni.hideLoading(),e.uploading=!1,e.uploadFile(i+1),e.$emit("on-change",t,i,e.lists,e.index)}}),a.onProgressUpdate((function(t){t.progress>0&&(e.lists[i].progress=t.progress,e.$emit("on-progress",t,i,e.lists,e.index))}));case 27:case"end":return n.stop()}}),n)})))()},uploadError:function(t,e){this.lists[t].progress=0,this.lists[t].error=!0,this.lists[t].response=null,this.$emit("on-error",e,t,this.lists,this.index),this.showToast("上传失败，请重试")},deleteItem:function(t){var e=this;uni.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(n){n.confirm&&(e.lists[t].process<100&&e.lists[t].process>0&&"undefined"!=typeof e.lists[t].uploadTask&&e.lists[t].uploadTask.abort(),e.lists.splice(t,1),e.$forceUpdate(),e.$emit("on-remove",t,e.lists,e.index),e.showToast("移除成功"))}})},remove:function(t){t>=0&&t<this.lists.length&&(this.lists.splice(t,1),this.$emit("on-list-change",this.lists,this.index))},doPreviewImage:function(t,e){var n=this;if(this.previewFullImage){var i=this.lists.map((function(t){return t.url||t.path}));uni.previewImage({urls:i,current:t,success:function(){n.$emit("on-preview",t,n.lists,n.index)},fail:function(){uni.showToast({title:"预览图片失败",icon:"none"})}})}},checkFileExt:function(t){var e=!1,n="",i=/.+\./;return n=t.name.replace(i,"").toLowerCase(),e=this.limitType.some((function(t){return t.toLowerCase()===n})),e||this.showToast("不允许选择".concat(n,"格式的文件")),e}}};e.default=a},c11d:function(t,e,n){var i=n("4fac");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("f9385cb2",i,!0,{sourceMap:!1,shadowMode:!1})},c719:function(t,e,n){"use strict";n.r(e);var i=n("4b68"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},c869:function(t,e,n){"use strict";var i=n("c11d"),r=n.n(i);r.a},d409:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-progress",style:{borderRadius:t.round?"100rpx":0,height:t.height+"rpx",backgroundColor:t.inactiveColor}},[n("v-uni-view",{staticClass:"u-active",class:[t.type?"u-type-"+t.type+"-bg":"",t.striped?"u-striped":"",t.striped&&t.stripedActive?"u-striped-active":""],style:[t.progressStyle]},[t.$slots.default?t._t("default"):t.showPercent?[t._v(t._s(t.percent+"%"))]:t._e()],2)],1)},a=[]},d623:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("c25b").default,uLineProgress:n("98ef").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?t._e():n("v-uni-view",{staticClass:"u-upload"},[t._l(t.lists,(function(e,i){return t.showUploadList?n("v-uni-view",{key:i,staticClass:"u-list-item u-preview-wrap",style:{width:t.width+"rpx",height:t.width+"rpx"}},[t.deletable?n("v-uni-view",{staticClass:"u-delete-icon",style:{background:t.delBgColor},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteItem(i)}}},[n("u-icon",{staticClass:"u-icon",attrs:{name:t.delIcon,size:"20",color:t.delColor}})],1):t._e(),t.showProgress&&e.progress>0&&!e.error?n("u-line-progress",{staticClass:"u-progress",attrs:{"show-percent":!1,height:"16",percent:e.progress}}):t._e(),e.error?n("v-uni-view",{staticClass:"u-error-btn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.retry(i)}}},[t._v("点击重试")]):t._e(),e.isImage?t._e():n("v-uni-image",{staticClass:"u-preview-image",attrs:{src:e.url||e.path,mode:t.imageMode},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.doPreviewImage(e.url||e.path,i)}}})],1):t._e()})),t._t("file",null,{file:t.lists}),t.maxCount>t.lists.length?n("v-uni-view",{staticStyle:{display:"inline-block"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectFile.apply(void 0,arguments)}}},[t._t("addBtn"),t.customBtn?t._e():n("v-uni-view",{staticClass:"u-list-item u-add-wrap",style:{width:t.width+"rpx",height:t.width+"rpx"},attrs:{"hover-class":"u-add-wrap__hover","hover-stay-time":"150"}},[n("u-icon",{staticClass:"u-add-btn",attrs:{name:"plus",size:"40"}}),n("v-uni-view",{staticClass:"u-add-tips"},[t._v(t._s(t.uploadText))])],1)],2):t._e()],2)},a=[]}}]);