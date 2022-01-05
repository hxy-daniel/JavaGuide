(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{871:function(t,e,_){"use strict";_.r(e);var s=_(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"sso-单点登录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sso-单点登录"}},[t._v("#")]),t._v(" SSO 单点登录")]),t._v(" "),_("blockquote",[_("p",[t._v("本文授权转载自 ： https://ken.io/note/sso-design-implement 作者：ken.io")]),t._v(" "),_("p",[t._v("相关推荐阅读："),_("strong",[_("a",{attrs:{href:"https://www.imooc.com/article/286710",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统的讲解 - SSO单点登录"),_("OutboundLink")],1)])])]),t._v(" "),_("h2",{attrs:{id:"一、前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),_("h3",{attrs:{id:"_1、sso说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、sso说明"}},[t._v("#")]),t._v(" 1、SSO说明")]),t._v(" "),_("p",[t._v("SSO英文全称Single Sign On，单点登录。SSO是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。https://baike.baidu.com/item/SSO/3451380")]),t._v(" "),_("p",[t._v("例如访问在网易账号中心（https://reg.163.com/ ）登录之后\n访问以下站点都是登录状态")]),t._v(" "),_("ul",[_("li",[t._v("网易直播 "),_("a",{attrs:{href:"https://v.163.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://v.163.com"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("网易博客 "),_("a",{attrs:{href:"https://blog.163.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.163.com"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("网易花田 "),_("a",{attrs:{href:"https://love.163.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://love.163.com"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("网易考拉 "),_("a",{attrs:{href:"https://www.kaola.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.kaola.com"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("网易Lofter "),_("a",{attrs:{href:"http://www.lofter.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.lofter.com"),_("OutboundLink")],1)])]),t._v(" "),_("h3",{attrs:{id:"_2、单点登录系统的好处"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、单点登录系统的好处"}},[t._v("#")]),t._v(" 2、单点登录系统的好处")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("用户角度")]),t._v(" :用户能够做到一次登录多次使用，无需记录多套用户名和密码，省心。")]),t._v(" "),_("li",[_("strong",[t._v("系统管理员角度")]),t._v(" : 管理员只需维护好一个统一的账号中心就可以了，方便。")]),t._v(" "),_("li",[_("strong",[t._v("新系统开发角度:")]),t._v(" 新系统开发时只需直接对接统一的账号中心即可，简化开发流程，省时。")])]),t._v(" "),_("h3",{attrs:{id:"_3、设计目标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、设计目标"}},[t._v("#")]),t._v(" 3、设计目标")]),t._v(" "),_("p",[t._v("本篇文章也主要是为了探讨如何设计&实现一个SSO系统")]),t._v(" "),_("p",[t._v("以下为需要实现的核心功能：")]),t._v(" "),_("ul",[_("li",[t._v("单点登录")]),t._v(" "),_("li",[t._v("单点登出")]),t._v(" "),_("li",[t._v("支持跨域单点登录")]),t._v(" "),_("li",[t._v("支持跨域单点登出")])]),t._v(" "),_("h2",{attrs:{id:"二、sso设计与实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、sso设计与实现"}},[t._v("#")]),t._v(" 二、SSO设计与实现")]),t._v(" "),_("h3",{attrs:{id:"_1、核心应用与依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、核心应用与依赖"}},[t._v("#")]),t._v(" 1、核心应用与依赖")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-system.png-kblb.png",alt:"单点登录（SSO）设计"}})]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("应用/模块/对象")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("前台站点")]),t._v(" "),_("td",[t._v("需要登录的站点")])]),t._v(" "),_("tr",[_("td",[t._v("SSO站点-登录")]),t._v(" "),_("td",[t._v("提供登录的页面")])]),t._v(" "),_("tr",[_("td",[t._v("SSO站点-登出")]),t._v(" "),_("td",[t._v("提供注销登录的入口")])]),t._v(" "),_("tr",[_("td",[t._v("SSO服务-登录")]),t._v(" "),_("td",[t._v("提供登录服务")])]),t._v(" "),_("tr",[_("td",[t._v("SSO服务-登录状态")]),t._v(" "),_("td",[t._v("提供登录状态校验/登录信息查询的服务")])]),t._v(" "),_("tr",[_("td",[t._v("SSO服务-登出")]),t._v(" "),_("td",[t._v("提供用户注销登录的服务")])]),t._v(" "),_("tr",[_("td",[t._v("数据库")]),t._v(" "),_("td",[t._v("存储用户账户信息")])]),t._v(" "),_("tr",[_("td",[t._v("缓存")]),t._v(" "),_("td",[t._v("存储用户的登录信息，通常使用Redis")])])])]),t._v(" "),_("h3",{attrs:{id:"_2、用户登录状态的存储与校验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、用户登录状态的存储与校验"}},[t._v("#")]),t._v(" 2、用户登录状态的存储与校验")]),t._v(" "),_("p",[t._v("常见的Web框架对于"),_("a",{attrs:{href:"https://ken.io/note/session-principle-skill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session"),_("OutboundLink")],1),t._v("的实现都是生成一个SessionId存储在浏览器Cookie中。然后将Session内容存储在服务器端内存中，这个 ken.io 在之前"),_("a",{attrs:{href:"https://ken.io/note/session-principle-skill",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session工作原理"),_("OutboundLink")],1),t._v("中也提到过。整体也是借鉴这个思路。\n用户登录成功之后，生成AuthToken交给客户端保存。如果是浏览器，就保存在Cookie中。如果是手机App就保存在App本地缓存中。本篇主要探讨基于Web站点的SSO。\n用户在浏览需要登录的页面时，客户端将AuthToken提交给SSO服务校验登录状态/获取用户登录信息")]),t._v(" "),_("p",[t._v("对于登录信息的存储，建议采用Redis，使用Redis集群来存储登录信息，既可以保证高可用，又可以线性扩充。同时也可以让SSO服务满足负载均衡/可伸缩的需求。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("对象")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("AuthToken")]),t._v(" "),_("td",[t._v("直接使用UUID/GUID即可，如果有验证AuthToken合法性需求，可以将UserName+时间戳加密生成，服务端解密之后验证合法性")])]),t._v(" "),_("tr",[_("td",[t._v("登录信息")]),t._v(" "),_("td",[t._v("通常是将UserId，UserName缓存起来")])])])]),t._v(" "),_("h3",{attrs:{id:"_3、用户登录-登录校验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、用户登录-登录校验"}},[t._v("#")]),t._v(" 3、用户登录/登录校验")]),t._v(" "),_("ul",[_("li",[t._v("登录时序图")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-login-sequence.png-kbrb.png",alt:"SSO系统设计-登录时序图"}})]),t._v(" "),_("p",[t._v("按照上图，用户登录后AuthToken保存在Cookie中。 domain=test.com\n浏览器会将domain设置成 .test.com，\n这样访问所有*.test.com的web站点，都会将AuthToken携带到服务器端。\n然后通过SSO服务，完成对用户状态的校验/用户登录信息的获取")]),t._v(" "),_("ul",[_("li",[t._v("登录信息获取/登录状态校验")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-logincheck-sequence.png-kbrb.png",alt:"SSO系统设计-登录信息获取/登录状态校验"}})]),t._v(" "),_("h3",{attrs:{id:"_4、用户登出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、用户登出"}},[t._v("#")]),t._v(" 4、用户登出")]),t._v(" "),_("p",[t._v("用户登出时要做的事情很简单：")]),t._v(" "),_("ol",[_("li",[t._v("服务端清除缓存（Redis）中的登录状态")]),t._v(" "),_("li",[t._v("客户端清除存储的AuthToken")])]),t._v(" "),_("ul",[_("li",[t._v("登出时序图")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-logout-sequence.png-kbrb.png",alt:"SSO系统设计-用户登出"}})]),t._v(" "),_("h3",{attrs:{id:"_5、跨域登录、登出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、跨域登录、登出"}},[t._v("#")]),t._v(" 5、跨域登录、登出")]),t._v(" "),_("p",[t._v("前面提到过，核心思路是客户端存储AuthToken，服务器端通过Redis存储登录信息。由于客户端是将AuthToken存储在Cookie中的。所以跨域要解决的问题，就是如何解决Cookie的跨域读写问题。")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Cookie是不能跨域的")]),t._v(" ，比如我一个")])]),t._v(" "),_("p",[t._v("解决跨域的核心思路就是：")]),t._v(" "),_("ul",[_("li",[t._v("登录完成之后通过回调的方式，将AuthToken传递给主域名之外的站点，该站点自行将AuthToken保存在当前域下的Cookie中。")]),t._v(" "),_("li",[t._v("登出完成之后通过回调的方式，调用非主域名站点的登出页面，完成设置Cookie中的AuthToken过期的操作。")]),t._v(" "),_("li",[t._v("跨域登录（主域名已登录）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-crossdomain-login-loggedin-sequence.png-kbrb.png",alt:"SSO系统设计-跨域登录（主域名已登录）"}})]),t._v(" "),_("ul",[_("li",[t._v("跨域登录（主域名未登录）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-crossdomain-login-unlogin-sequence.png-kbrb.png",alt:"SSO系统设计-跨域登录（主域名未登录）"}})]),t._v(" "),_("ul",[_("li",[t._v("跨域登出")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img.ken.io/blog/sso/sso-crossdomain-logout-sequence.png-kbrb.png",alt:"SSO系统设计-跨域登出"}})]),t._v(" "),_("h2",{attrs:{id:"三、备注"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、备注"}},[t._v("#")]),t._v(" 三、备注")]),t._v(" "),_("ul",[_("li",[t._v("关于方案")])]),t._v(" "),_("p",[t._v("这次设计方案更多是提供实现思路。如果涉及到APP用户登录等情况，在访问SSO服务时，增加对APP的签名验证就好了。当然，如果有无线网关，验证签名不是问题。")]),t._v(" "),_("ul",[_("li",[t._v("关于时序图")])]),t._v(" "),_("p",[t._v("时序图中并没有包含所有场景，ken.io只列举了核心/主要场景，另外对于一些不影响理解思路的消息能省就省了。")])])}),[],!1,null,null,null);e.default=r.exports}}]);