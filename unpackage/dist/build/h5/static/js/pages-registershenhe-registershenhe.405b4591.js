(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registershenhe-registershenhe"],{2232:function(t,a,e){"use strict";e.r(a);var s=e("50ad"),o=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,(function(){return s[t]}))}(i);a["default"]=o.a},2770:function(t,a,e){var s=e("3a9c");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=e("4f06").default;o("7d505c5f",s,!0,{sourceMap:!1,shadowMode:!1})},"3a9c":function(t,a,e){var s=e("24fb");a=s(!1),a.push([t.i,".load[data-v-7d61d207]{margin-bottom:%?40?%}.search[data-v-7d61d207]{margin-top:%?20?%;width:80%;margin:%?20?% auto}.sticky[data-v-7d61d207]{width:%?750?%;height:%?80?%;background-color:#fff;color:#fff;padding:%?24?%}.caozuo[data-v-7d61d207]{height:%?180?%;width:100%}.shenhe[data-v-7d61d207]{height:%?45?%;width:100%;text-align:left;margin-bottom:%?20?%;margin-top:%?20?%}.detail[data-v-7d61d207]{margin-left:%?80?%}.pass[data-v-7d61d207]{\n\t/* width: 60upx; */float:left;margin-left:%?20?%}",""]),t.exports=a},"50ad":function(t,a,e){"use strict";e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=e("c5e3"),o={data:function(){return{baseList:[],token:"",status:"loadmore",list:15,page:1,pageCount:1,keyword:"",scrollTop:0,iconStyle:{fontSize:"32rpx",color:"#65aa40"}}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReachBottom:function(){this.page>=this.pageCount?this.status="nomore":(this.status="loading",this.page=++this.page,this.getshenhe())},onLoad:function(){this.getshenhe()},onShow:function(){uni.showLoading({title:"加载中"}),this.keyword="",this.getshenhe()},methods:{seedetail:function(t){uni.navigateTo({url:"../detail/detail?qydm="+t})},getshenhe:function(){var t=this,a=uni.getStorageSync("token");console.log(a),uni.request({url:s.api_base_url+"/Examined",method:"POST",data:{token:a,page:t.page,list:t.list,qymc:t.keyword},success:function(a){console.log(a.data.data.row),""!=t.keyword?(1==t.page&&(t.baseList=[]),t.baseList=t.baseList.concat(a.data.data.row),t.pageCount=a.data.data.pageCount):(t.baseList=t.baseList.concat(a.data.data.row),t.pageCount=a.data.data.pageCount),console.log(t.baseList);for(var e=0;e<t.baseList.length;e++)""!==t.baseList[e].business_license&&""!==t.baseList[e].card_x&&""!==t.baseList[e].card_y?t.baseList[e].check="证件齐全":t.baseList[e].check="证件不齐全",0===t.baseList[e].flag||"0"===t.baseList[e].flag?(t.baseList[e].zt="待审核",t.baseList[e].color="#004ce6"):1===t.baseList[e].flag||"1"===t.baseList[e].flag?(t.baseList[e].zt="审核通过",t.baseList[e].color="#65aa40"):2===t.baseList[e].flag||"2"===t.baseList[e].flag?(t.baseList[e].zt="审核未通过",t.baseList[e].color="#ff0000"):3!==t.baseList[e].flag&&"3"!==t.baseList[e].flag||(t.baseList[e].zt="县级单位审核通过",t.baseList[e].color="#fa0000");t.status="loadmore",uni.hideLoading()},fail:function(){uni.hideLoading(),uni.showModal({title:"网络错误"})}})},pass:function(t){console.log(t);var a=uni.getStorageSync("token");uni.request({url:s.api_base_url+"/Verify?token="+a,method:"POST",data:{token:a,bh:t},success:function(t){console.log(t),0==t.data.code&&uni.navigateBack({delta:1})},fail:function(){uni.showModal({title:"修改失败"})}})},nopass:function(t){console.log(t);var a=uni.getStorageSync("token");uni.request({url:s.api_base_url+"/noVerify?token="+a,method:"POST",data:{token:a,bh:t},success:function(t){console.log(t),0==t.data.code&&uni.navigateBack({delta:1})},fail:function(){uni.showModal({title:"修改失败"})}})}}};a.default=o},"8b3b":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return s}));var s={uSearch:e("64df").default,uCard:e("8300").default,uIcon:e("c25b").default,uButton:e("231f").default,uBackTop:e("52c7").default,uLoadmore:e("0450").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"search"},[e("u-search",{attrs:{placeholder:"请输入企业名称"},on:{search:function(a){arguments[0]=a=t.$handleEvent(a),t.getshenhe()},custom:function(a){arguments[0]=a=t.$handleEvent(a),t.getshenhe()}},model:{value:t.keyword,callback:function(a){t.keyword=a},expression:"keyword"}})],1),t._l(t.baseList,(function(a,s){return e("v-uni-view",[e("u-card",[e("v-uni-view",{attrs:{slot:"head"},slot:"head"},[e("u-icon",{attrs:{name:"map-fill",color:"#3fbf00",size:"32"}}),t._v(t._s(a.qymc))],1),e("v-uni-view",{attrs:{slot:"body"},slot:"body"},[e("v-uni-view",{staticStyle:{color:"#65aa40"}},[t._v("企业代码："+t._s(a.qydm))]),e("v-uni-view",{staticStyle:{color:"#65aa40"}},[t._v("生产企业名称："+t._s(a.qymc))]),e("v-uni-view",{staticStyle:{color:"#65aa40"}},[t._v("负责人："+t._s(a.fzr))]),e("v-uni-view",{staticStyle:{color:"#65aa40"}},[t._v("企业类型："+t._s(a.qylx))]),e("v-uni-view",{staticStyle:{color:"#65aa40"}},[t._v("注册日期："+t._s(a.zcrq))]),e("v-uni-view",{style:{color:a.color}},[t._v("审核状态："+t._s(a.zt))]),e("v-uni-view",{style:{color:a.color}},[t._v("证件状态："+t._s(a.check))]),e("v-uni-view",{staticClass:"caozuo",staticStyle:{color:"#65aa40"}},["审核通过"!=a.zt?e("v-uni-view",{staticClass:"shenhe"},[e("u-button",{staticClass:"pass",attrs:{type:"error"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nopass(a.bh)}}},[t._v("不通过")]),e("u-button",{staticClass:"pass",attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pass(a.bh)}}},[t._v("通过")])],1):t._e(),e("br"),e("v-uni-view",{},[e("u-button",{staticClass:"detail",staticStyle:{float:"right"},attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.seedetail(a.qydm)}}},[t._v("查看详情")])],1)],1)],1)],1)],1)})),e("u-back-top",{attrs:{"scroll-top":t.scrollTop,iconStyle:t.iconStyle}}),e("v-uni-view",{staticClass:"load"},[e("u-loadmore",{attrs:{status:t.status}})],1),t._v("`")],2)},i=[]},b810:function(t,a,e){"use strict";e.r(a);var s=e("8b3b"),o=e("2232");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("b90d");var n,c=e("f0c5"),l=Object(c["a"])(o["default"],s["b"],s["c"],!1,null,"7d61d207",null,!1,s["a"],n);a["default"]=l.exports},b90d:function(t,a,e){"use strict";var s=e("2770"),o=e.n(s);o.a}}]);