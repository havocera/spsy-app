(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-agriculturalwork-editnszy"],{"031e":function(t,e,o){var a=o("7b89");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("6a0e428e",a,!0,{sourceMap:!1,shadowMode:!1})},"0d5b":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return a}));var a={uForm:o("a2b6").default,uFormItem:o("46b4").default,uInput:o("55c0").default,uPicker:o("6bc8").default,uButton:o("231f").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticStyle:{"margin-left":"20upx","margin-right":"20upx"}},[o("u-form",{ref:"uForm",attrs:{model:t.form}},[o("u-form-item",{attrs:{label:"产地名称","label-width":"150"}},[o("u-input",{attrs:{type:t.type,border:t.border},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chandi=!0}},model:{value:t.form.chandi,callback:function(e){t.$set(t.form,"chandi",e)},expression:"form.chandi"}}),o("u-picker",{attrs:{mode:"selector","default-selector":[0],range:t.baselist,"range-key":"text"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetCallback.apply(void 0,arguments)}},model:{value:t.chandi,callback:function(e){t.chandi=e},expression:"chandi"}})],1),o("u-form-item",{attrs:{label:"农事作业","label-width":"150"}},[o("u-input",{model:{value:t.form.nszy,callback:function(e){t.$set(t.form,"nszy",e)},expression:"form.nszy"}})],1),o("u-form-item",{attrs:{label:"作业人","label-width":"150"}},[o("u-input",{model:{value:t.form.zyr,callback:function(e){t.$set(t.form,"zyr",e)},expression:"form.zyr"}})],1),o("u-form-item",{attrs:{label:"投入品名称","label-width":"150"}},[o("u-input",{model:{value:t.form.trpmc,callback:function(e){t.$set(t.form,"trpmc",e)},expression:"form.trpmc"}})],1),o("u-form-item",{attrs:{label:"作业量","label-width":"150"}},[o("u-input",{model:{value:t.form.zyl,callback:function(e){t.$set(t.form,"zyl",e)},expression:"form.zyl"}})],1),o("u-form-item",{attrs:{label:"单位","label-width":"150"}},[o("u-input",{model:{value:t.form.zyldw,callback:function(e){t.$set(t.form,"zyldw",e)},expression:"form.zyldw"}})],1),o("u-form-item",{attrs:{label:"作业日期","label-width":"150"}},[o("u-input",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.timeshow=!0}},model:{value:t.form.rq,callback:function(e){t.$set(t.form,"rq",e)},expression:"form.rq"}}),o("u-picker",{attrs:{mode:"time",params:t.params},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.timeshow,callback:function(e){t.timeshow=e},expression:"timeshow"}})],1),o("u-form-item",{attrs:{label:"备注","label-width":"150"}},[o("u-input",{model:{value:t.form.bz,callback:function(e){t.$set(t.form,"bz",e)},expression:"form.bz"}})],1)],1),o("u-button",{attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addnszy()}}},[t._v("确认修改")])],1)},r=[]},"23a3":function(t,e,o){"use strict";o.r(e);var a=o("6200"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"44a7":function(t,e,o){"use strict";o.r(e);var a=o("0d5b"),n=o("23a3");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("c2ed");var i,l=o("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"158d5ea2",null,!1,a["a"],i);e["default"]=c.exports},6200:function(t,e,o){"use strict";var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("ade3")),r=o("c5e3"),i={data:function(){var t;return t={border:!1,type:"select",rqshow:!1,chandi:!1,show:!1,mode:"date",maxdate:"10000",cpmc:"",form:{chandi:"",cpbh:"",rq:"",scz:"",year:"",month:"",day:""},text:"text",baselist:[],productList:[]},(0,n.default)(t,"form",{}),(0,n.default)(t,"timeshow",!1),(0,n.default)(t,"params",{year:!0,month:!0,day:!0,hour:!1,minute:!1,second:!1}),t},onLoad:function(t){this.getchandi(),this.getnszy(t)},methods:{getnszy:function(t){if(t.bh){var e=this;console.log(t.bh);var o=uni.getStorageSync("token");uni.request({url:r.api_base_url+"/EditFarmingoperationsInfo",method:"POST",data:{token:o,bh:t.bh},success:function(t){e.form=t.data.data}})}},addnszy:function(){var t=this,e=uni.getStorageSync("token");console.log(e),uni.request({url:r.api_base_url+"/AddFarmingoperationsInfo",method:"POST",data:{token:e,qymc:t.form.qymc,cdbh:t.form.cdbh,nszy:t.form.nszy,zyr:t.form.zyr,trpmc:t.form.trpmc,zyl:t.form.zyl,zyldw:t.form.zyldw,rq:t.form.rq,bz:t.form.bz},success:function(t){0==t.data.code&&uni.navigateBack({delta:1})},fail:function(){uni.showModal({title:"添加失败"})}})},actionSheetCallback2:function(t){this.form.cpbh=this.productList[t].value,this.cpmc=this.productList[t].text},actionSheetCallback:function(t){this.form.cdbh=this.baselist[t].value,this.form.chandi=this.baselist[t].text},change:function(t){console.log(t),this.form.rq=t.result,this.form.year=t.year,this.form.month=t.month,this.form.day=t.day,console.log(this.form)},getchandi:function(){var t=this,e=uni.getStorageSync("token");uni.request({url:r.api_base_url+"/getchandi?token="+e,success:function(e){console.log(e),t.baselist=e.data.data}}),uni.request({url:r.api_base_url+"/getchanpin?token="+e,success:function(e){console.log(e),t.productList=e.data.data}})},confirm:function(t){console.log(t),this.form.rq=t.year+"-"+t.month+"-"+t.day,console.log(this.form.rq)}}};e.default=i},"7b89":function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,"u-input[data-v-158d5ea2]{display:inline-block}.inline[data-v-158d5ea2]{display:inline-block}",""]),t.exports=e},c2ed:function(t,e,o){"use strict";var a=o("031e"),n=o.n(a);n.a}}]);