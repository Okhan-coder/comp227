(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"E+oP":function(e,a,t){var r=t("A90E"),n=t("QqLw"),l=t("03A+"),o=t("Z0cm"),c=t("MMmD"),i=t("DSRE"),s=t("6sVZ"),u=t("c6wG"),m=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||u(e)||l(e)))return!e.length;var a=n(e);if("[object Map]"==a||"[object Set]"==a)return!e.size;if(s(e))return!r(e).length;for(var t in e)if(m.call(e,t))return!1;return!0}},GGGK:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O})),t.d(a,"partInfoQuery",(function(){return B}));t("YbXK"),t("cFtU"),t("q8oJ"),t("m210"),t("4DPX"),t("cxuS"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("Ppn1");var r=t("XFRJ"),n=t("mt4B"),l=t("jsr+"),o=t("Bl7J"),c=t("76ZC"),i=t.n(c),s=t("kl3L"),u=t("q1tI"),m=t.n(u),p=t("vrFN"),f=t("u1fg"),g=t("GkXj"),d=t.n(g),b=t("KJAY"),k=t.n(b),E=t("gqR3"),v=t.n(E),h=t("5I0T"),y=t.n(h),C=t("ymbu"),N=t.n(C),w=t("Zosa"),x=t("33yf"),P=t.n(x),_=t("c7NW"),F=t.n(_),A=t("xB9W");function j(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(e){var a=e.data.markdownRemark,t=a.frontmatter,c=a.html,u=t.mainImage,g=t.part,b=t.lang,E=k()(N.a[b][g])?[]:Object.keys(N.a[b][g]),h={replace:function(e){var a=e.type,t=e.attribs,r=e.children;if("tag"===a&&"intro"===t.class)return m.a.createElement("div",{className:"col-7"},d()(r,h))}};return m.a.createElement(o.a,null,m.a.createElement(p.a,{lang:b,title:"COMP227 part"+g,description:v.a[b],keywords:[].concat(j(y.a),[N.a[b][g]?Object.values(N.a[b][g]):[]])}),m.a.createElement("div",{className:"spacing--after"},m.a.createElement(n.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+P.a.resolve(u.publicURL)+")",backgroundColor:f[w.a[g]]}},m.a.createElement(l.a,{className:"container"},m.a.createElement(r.a,{className:"breadcrumb",content:[{backgroundColor:f[w.a[g]],text:"COMP 227",link:"/"+("en"===b?"":b+"/")+"#course-contents"},{backgroundColor:f.black,text:"Part "+g}]}),m.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},i()(c,h)),E&&m.a.createElement(r.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:E.map((function(e){return{backgroundColor:f.white,letter:e,path:Object(A.a)(b,g,"/"+F()(N.a[b][g][e])),text:e+" "+N.a[b][g][e]}}))}))),m.a.createElement(s.a,{part:g,lang:b})))}var B="3017060611"},KJAY:function(e,a,t){var r=t("sZCt")("isEmpty",t("E+oP"),t("Eszj"));r.placeholder=t("wuTn"),e.exports=r},Ppn1:function(e,a,t){},XFRJ:function(e,a,t){"use strict";t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("aHCT"),t("y7hu"),t("m4Pe");var r=t("jsr+"),n=t("Wbzz"),l=t("q1tI"),o=t.n(l),c=t("u1fg");var i=function(e){var a,t=e.className,l=e.wrapperClassName,i=e.link,s=e.content,u=e.stack,m=e.bold,p=e.thickBorder,f=e.upperCase,g=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),d=o.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},s.map((function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===c.black?"white":c.black};return o.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},g),o.a.createElement("div",{className:"arrow__rectangle "+(m?"bold":"")+" "+(p?"arrow__rectangle--thick-border":""),style:t},e.link?o.a.createElement(n.Link,{to:e.link},f?e.text.toUpperCase():e.text):f?e.text.toUpperCase():e.text),o.a.createElement("div",{className:"arrow__point "+(p?"arrow__point--thick-border":""),style:t}))})));return u||i?!u&&i?a=o.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},o.a.createElement(n.Link,{to:i,style:{display:"inline-block"}},d)):u&&(a=o.a.createElement("div",{className:"col-10 spacing--after "+l},o.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map((function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===c.black?"white":c.black};return o.a.createElement(n.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},g),o.a.createElement(r.a,{flex:!0,className:"arrow__rectangle",style:a},o.a.createElement("p",{className:"arrow--stacked-title"},o.a.createElement("span",null,e.text))),o.a.createElement("div",{className:"arrow__point",style:a}))}))))):a=o.a.createElement("div",{className:"col-10 spacing--after"},d),a};i.defaultProps={className:"",wrapperClassName:""},a.a=i},Zosa:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"light-green",9:"part9-light-blue",10:"turqouise",11:"purple",12:"pale-pink",13:"sqlgreen"}},cxuS:function(e,a,t){var r=t("P8UN"),n=t("ys0W")(!1);r(r.S,"Object",{values:function(e){return n(e)}})},gqR3:function(e,a){e.exports={en:"Online instructional materials for COMP 227 from the University of the Pacific"}},kl3L:function(e,a,t){"use strict";t("q8oJ"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("gu/5"),t("eoYm"),t("l54/");var r=t("jsr+"),n=t("Wbzz"),l=t("q1tI"),o=t.n(l),c=t("ymbu"),i=t.n(c),s=t("c7NW"),u=t.n(s),m=t("9Koi"),p=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},f=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},g=function(e,a){return Object.keys(i.a[a]).includes(e.toString())},d=function(e,a,t){return f(e)in i.a[t][a]},b=function(e,a,t){return!e&&g(a+1,t)||e&&d(e,a,t)},k=function(e){return"en"===e?"/part":"/"+e+"/part"},E=function(e){var a=e.part,t=e.letter,l=e.lang,c=Object(m.a)().t;return o.a.createElement(r.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&g(a-1,l)?o.a.createElement(o.a.Fragment,null,o.a.createElement(n.Link,{to:""+k(l)+(a-1),className:"col-4--mobile push-right-1 prev"},o.a.createElement(r.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Part"," ",a-1),o.a.createElement("b",null,c("previousPart")))),b(t,a,l)&&o.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?o.a.createElement(o.a.Fragment,null,o.a.createElement(n.Link,{to:""+k(l)+a+"/"+u()(i.a[l][a][p(t)]),className:"col-4--mobile push-right-1 prev"},o.a.createElement(r.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Part"," ",""+a+p(t)),o.a.createElement("b",null,c("previousPart")))),b(t,a,l)&&o.a.createElement("div",{className:"col-1--mobile separator"})):g(a-1,l)?o.a.createElement(o.a.Fragment,null,o.a.createElement(n.Link,{to:""+k(l)+(a-1),className:"col-4--mobile push-right-1 prev"},o.a.createElement(r.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Part"," ",a-1),o.a.createElement("b",null,c("previousPart")))),b(t,a,l)&&o.a.createElement("div",{className:"col-1--mobile separator"})):o.a.createElement(r.a,{className:"push-right-1"}):o.a.createElement(r.a,{className:"push-right-1"}),!t&&g(a+1,l)?(console.log("a",g(a+1,l)),o.a.createElement(n.Link,{to:""+k(l)+(a+1),className:"col-4--mobile push-left-1 next"},o.a.createElement(r.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Part"," ",a+1),o.a.createElement("b",null,c("nextPart"))))):t?d(t,a,l)?o.a.createElement(n.Link,{to:""+k(l)+a+"/"+u()(i.a[l][a][f(t)]),className:"col-4--mobile push-left-1 next"},o.a.createElement(r.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Part"," ",""+a+f(t)),o.a.createElement("b",null,c("nextPart")))):g(a+1,l)?o.a.createElement(n.Link,{to:""+k(l)+(a+1),className:"col-4--mobile push-left-1 next"},o.a.createElement(r.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Part"," ",a+1),o.a.createElement("b",null,c("nextPart")))):o.a.createElement(r.a,{className:"push-left-1"}):o.a.createElement(r.a,{className:"push-left-1"}))};E.defaultProps={part:void 0,letter:void 0},a.a=E},"l54/":function(e,a,t){},m4Pe:function(e,a,t){},mt4B:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("rXWv");var r=t("q1tI"),n=t.n(r);var l=function(e){var a=e.className,t=e.backgroundColor,r=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return n.a.createElement("div",Object.assign({className:"banner "+a,style:l},r))};l.defaultProps={className:""}},rXWv:function(e,a,t){},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","turquoise":"#82F7EB","blue":"#706BE4","pale-pink":"#F9B9D3","purple":"#D4A8E2","sqlgreen":"#C5FF73","smartly-purple":"#f8f5f9","light-violet":"#B2BBF0","light-violet-alt":"#576CE0","light-violet-dark":"#182986","green":"#AEFFDA","green-alt":"#008549","green-dark":"#003f22","dark-orange":"#F0AC8A","dark-orange-alt":"#CB4A3A","dark-orange-dark":"#4c2303","light-orange":"#EEB268","light-orange-alt":"#AA632C","light-orange-dark":"#3d2d0f","yellow":"#F7F382","yellow-alt":"#937206","yellow-dark":"#5B4703","pink":"#E693CB","pink-alt":"#a62d80","pink-dark":"#3d102f","violet":"#B795F3","violet-alt":"#4c14b0","violet-dark":"#220950","light-blue":"#82D2F7","light-blue-alt":"#0b7db1","light-blue-dark":"#043850","light-green":"#D4FCB5","light-green-alt":"#3C8406","light-green-dark":"#295b04","part9-light-blue":"#AFF4FE","part9-light-blue-alt":"#038296","part9-light-blue-dark":"#01515D"}')},xB9W:function(e,a,t){"use strict";a.a=function(e,a,t){return void 0===t&&(t=""),"en"===e?"/part"+a+t:"/"+e+"/part"+a+t}},y7hu:function(e,a,t){"use strict";t("t+fG")("link",(function(e){return function(a){return e(this,"a","href",a)}}))},ymbu:function(e,a){e.exports={en:{0:{a:"Syllabus",b:"General info",c:"Fundamentals of Web apps",d:"Configuring your machine for this course"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"}}}},ys0W:function(e,a,t){var r=t("QPJK"),n=t("2mBY"),l=t("5SQf"),o=t("BnbX").f;e.exports=function(e){return function(a){for(var t,c=l(a),i=n(c),s=i.length,u=0,m=[];s>u;)t=i[u++],r&&!o.call(c,t)||m.push(e?[t,c[t]]:c[t]);return m}}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-0318547412d3401ded95.js.map