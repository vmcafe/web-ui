(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("293a0017",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n(366)},387:function(t,e,n){var o=n(32)(!1);o.push([t.i,".radio[data-v-66ad7766]{max-height:48px;min-width:100px;font-size:11px;color:#262626;padding:20px;border:3px solid #fff;transition:all .2s;background:#fff;display:flex;align-items:center;justify-content:space-between;font:normal normal Futura PT;letter-spacing:3.25px;box-shadow:0 1px 6px rgba(0,0,0,.161)}.radio__field[data-v-66ad7766]{display:none}.radio__label[data-v-66ad7766]{letter-spacing:3.25px;color:#262626;cursor:pointer}.radio__line[data-v-66ad7766]{width:0;height:2px;background:#d9def1;transition:all .2s;margin-top:2px}.radio__line__selected[data-v-66ad7766]{margin-top:-2px;width:100%;height:6px}.radio[data-v-66ad7766]:active,.radio[data-v-66ad7766]:focus{outline:none;border:1px solid #d9def1}",""]),t.exports=o},413:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{options:[{id:1,label:"PEREMPUAN",value:"p"},{id:2,label:"LAKI - LAKI",value:"l"}],selected:"p"}},computed:{inputVal:{get:function(){return this.selected},set:function(){return this.$emit("model",this.selected)}}},methods:{setRadio:function(t){this.selected=t,this.$emit("model",t)}}},d=(n(386),n(19)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radio"},t._l(t.options,(function(e){return n("label",{key:e.id,attrs:{for:"option"+e.id}},[n("input",{staticClass:"radio__field",attrs:{id:"option"+e.id,name:"gender",type:"radio"},on:{change:function(n){return t.setRadio(e.value)}}}),t._v(" "),n("span",{staticClass:"radio__label text-truncate"},[t._v(t._s(e.label))]),t._v(" "),n("div",{staticClass:"radio__line",class:e.value===t.selected&&"radio__line__selected"})])})),0)}),[],!1,null,"66ad7766",null);e.default=component.exports}}]);