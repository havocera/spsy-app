(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trpbuy-addtrpbuy"],{"14bb":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("c5e3"),r={data:function(){return{border:!1,type:"select",rqshow:!1,show:!1,mode:"date",form:{},timeshow:!1,params:{year:!0,month:!0,day:!0,hour:!1,minute:!1,second:!1}}},methods:{addtrpuse:function(){var t=this,e=uni.getStorageSync("token");console.log(e),uni.request({url:n.api_base_url+"/addInputspurchaseInfo",method:"POST",data:{token:e,trpmc:t.form.trpmc,nyscz:t.form.nyscz,nydjzh:t.form.nydjzh,nyscdz:t.form.nyscdz,nyzj:t.form.nyzj,nyzw:t.form.nyzw,ny:t.form.ny,nysyfa:t.form.nysyfa,nydh:t.form.nydh,ly:t.form.ly,trpgg:t.form.trpgg,jsr:t.form.jsr,rq:t.form.rq,bz:t.form.bz},success:function(t){0==t.data.code&&uni.navigateBack({delta:-1})},fail:function(){uni.showModal({title:"添加失败"})}})},change:function(t){console.log(t),this.form.rq=t.result,this.form.year=t.year,this.form.month=t.month,this.form.day=t.day,console.log(this.form)},confirm:function(t){console.log(t),this.form.rq=t.year+"-"+t.month+"-"+t.day,console.log(this.form.rq)}}};e.default=r},"23d0":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,"u-input[data-v-7fd8c34d]{display:inline-block}.inline[data-v-7fd8c34d]{display:inline-block}",""]),t.exports=e},"46a2":function(t,e,o){"use strict";o.r(e);var n=o("7908"),r=o("f4e7");for(var a in r)"default"!==a&&function(t){o.d(e,t,(function(){return r[t]}))}(a);o("d5cd");var l,u=o("f0c5"),f=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"7fd8c34d",null,!1,n["a"],l);e["default"]=f.exports},"5d9a":function(t,e,o){var n=o("23d0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=o("4f06").default;r("7d396699",n,!0,{sourceMap:!1,shadowMode:!1})},7908:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={uForm:o("a2b6").default,uFormItem:o("46b4").default,uInput:o("55c0").default,uPicker:o("6bc8").default,uButton:o("231f").default},r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticStyle:{"margin-left":"20upx","margin-right":"20upx"}},[o("u-form",{ref:"uForm",attrs:{model:t.form}},[o("u-form-item",{attrs:{label:"投入品名称","label-width":"150"}},[o("u-input",{model:{value:t.form.trpmc,callback:function(e){t.$set(t.form,"trpmc",e)},expression:"form.trpmc"}})],1),o("u-form-item",{attrs:{label:"生产商","label-width":"150"}},[o("u-input",{model:{value:t.form.nyscz,callback:function(e){t.$set(t.form,"nyscz",e)},expression:"form.nyscz"}})],1),o("u-form-item",{attrs:{label:"登记证号","label-width":"150"}},[o("u-input",{model:{value:t.form.nydjzh,callback:function(e){t.$set(t.form,"nydjzh",e)},expression:"form.nydjzh"}})],1),o("u-form-item",{attrs:{label:"公司地址","label-width":"150"}},[o("u-input",{model:{value:t.form.nyscdz,callback:function(e){t.$set(t.form,"nyscdz",e)},expression:"form.nyscdz"}})],1),o("u-form-item",{attrs:{label:"质检意见","label-width":"150"}},[o("u-input",{model:{value:t.form.nyzj,callback:function(e){t.$set(t.form,"nyzj",e)},expression:"form.nyzj"}})],1),o("u-form-item",{attrs:{label:"作物(或范围)","label-width":"150"}},[o("u-input",{model:{value:t.form.nyzw,callback:function(e){t.$set(t.form,"nyzw",e)},expression:"form.nyzw"}})],1),o("u-form-item",{attrs:{label:"防治对象","label-width":"150"}},[o("u-input",{model:{value:t.form.nyfz,callback:function(e){t.$set(t.form,"nyfz",e)},expression:"form.nyfz"}})],1),o("u-form-item",{attrs:{label:"使用方法","label-width":"150"}},[o("u-input",{model:{value:t.form.nysyfa,callback:function(e){t.$set(t.form,"nysyfa",e)},expression:"form.nysyfa"}})],1),o("u-form-item",{attrs:{label:"采购来源","label-width":"150"}},[o("u-input",{model:{value:t.form.ly,callback:function(e){t.$set(t.form,"ly",e)},expression:"form.ly"}})],1),o("u-form-item",{attrs:{label:"采购数量","label-width":"150"}},[o("u-input",{model:{value:t.form.trpgg,callback:function(e){t.$set(t.form,"trpgg",e)},expression:"form.trpgg"}})],1),o("u-form-item",{attrs:{label:"经手人","label-width":"150"}},[o("u-input",{model:{value:t.form.jsr,callback:function(e){t.$set(t.form,"jsr",e)},expression:"form.jsr"}})],1),o("u-form-item",{attrs:{label:"采购日期","label-width":"150"}},[o("u-input",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.timeshow=!0}},model:{value:t.form.rq,callback:function(e){t.$set(t.form,"rq",e)},expression:"form.rq"}}),o("u-picker",{attrs:{mode:"time",params:t.params},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.timeshow,callback:function(e){t.timeshow=e},expression:"timeshow"}})],1)],1),o("u-button",{attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addtrpuse()}}},[t._v("添加")])],1)},a=[]},d5cd:function(t,e,o){"use strict";var n=o("5d9a"),r=o.n(n);r.a},f4e7:function(t,e,o){"use strict";o.r(e);var n=o("14bb"),r=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a}}]);