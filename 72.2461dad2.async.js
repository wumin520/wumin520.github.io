(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"IQV+":function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("g9YV"),a("wCAj")),l=(a("Awhp"),a("KrTs")),d=a("q1tI"),i=a.n(d),s=a("Y2fQ"),o=a("mOP9"),m=a("hFLe"),c=a.n(m),u=["error","processing","warning","success"],p=[{title:i.a.createElement(s["FormattedMessage"],{id:"app.homePage.table.orderCode",defaultMessage:"Rank"}),dataIndex:"p_order_id",key:"index",width:230},{title:"\u63a8\u5e7f\u7f16\u53f7",dataIndex:"task_id",key:"task_id",width:90},{key:"goods_id",title:"\u5546\u54c1id",width:120,dataIndex:"goods_id"},{title:i.a.createElement(s["FormattedMessage"],{id:"app.homePage.table.product",defaultMessage:"Search keyword"}),key:"keyword",className:c.a.resultColumns,render:function(e){return i.a.createElement("a",{className:c.a.pro,href:e.goods_url,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:e.img,alt:"a",style:{width:50,heigth:50,marginRight:5}}),i.a.createElement("span",{className:c.a.goodsName}," ",e.title))}},{title:"\u8d2d\u4e70\u4ef7\u683c",width:100,render:function(e){return i.a.createElement("span",null,"\uffe5",e.order_price)}},{title:"\u72b6\u6001",width:100,render:function(e){return i.a.createElement(l["a"],{status:u[e.state],text:e.state_desc})}},{title:"\u65f6\u95f4",width:250,render:function(e){var t=i.a.createElement("span",null,i.a.createElement("span",null,e.paid_datetime?"\u4ed8\u6b3e: "+e.paid_datetime:""),i.a.createElement("br",null),i.a.createElement("span",null," ",e.harvest_time?"\u6536\u8d27: "+e.harvest_time:""),i.a.createElement("br",null));return i.a.createElement("span",null,i.a.createElement("span",null,"\u4e0b\u5355:",e.ordered_datetime),i.a.createElement("br",null),t)}}],g=Object(d["memo"])(function(e){var t=e.loading,a=e.data,l=e.pageInfo;return i.a.createElement(r["a"],{loading:t,bordered:!1,title:i.a.createElement(s["FormattedMessage"],{id:"app.homePage.todayOrder",defaultMessage:""}),extra:i.a.createElement(o["a"],{to:"/order/Index"},"\u67e5\u770b\u66f4\u591a>"),style:{marginTop:24}},i.a.createElement(n["a"],{rowKey:function(e){return e.index},size:"small",columns:p,dataSource:a,pagination:l}))});t["default"]=g}}]);