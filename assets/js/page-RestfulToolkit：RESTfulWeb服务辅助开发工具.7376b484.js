(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{595:function(t,s,a){t.exports=a.p+"assets/img/RestfulToolkit3.c64cf0fc.png"},596:function(t,s,a){t.exports=a.p+"assets/img/RestfulToolkit4.9f37aa07.png"},811:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("开始推荐这个 IDEA 插件之前，我觉得有必要花一小会时间简单聊聊 "),e("strong",[t._v("REST")]),t._v(" 这个我们经常打交道的概念。")]),t._v(" "),e("h2",{attrs:{id:"rest-相关概念解读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest-相关概念解读"}},[t._v("#")]),t._v(" REST 相关概念解读")]),t._v(" "),e("h3",{attrs:{id:"何为-rest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为-rest"}},[t._v("#")]),t._v(" 何为 REST？")]),t._v(" "),e("p",[t._v("REST 即 "),e("strong",[t._v("REpresentational State Transfer")]),t._v(' 的缩写。这个词组的翻译过来就是"'),e("strong",[t._v("表现层状态转化")]),t._v('"。')]),t._v(" "),e("p",[t._v("这样理解起来甚是晦涩，实际上 REST 的全称是 "),e("strong",[t._v("Resource Representational State Transfer")]),t._v(" ，直白地翻译过来就是 "),e("strong",[t._v("“资源”在网络传输中以某种“表现形式”进行“状态转移”")]),t._v(" 。")]),t._v(" "),e("p",[e("strong",[t._v("有没有感觉很难理解？")])]),t._v(" "),e("p",[t._v("没关系，看了我对 REST 涉及到的一些概念的解读之后你没准就能理解了！")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("资源（Resource）")]),t._v(" ：我们可以把真实的对象数据称为资源。一个资源既可以是一个集合，也可以是单个个体。比如我们的班级 classes 是代表一个集合形式的资源，而特定的 class 代表单个个体资源。每一种资源都有特定的 URI（统一资源定位符）与之对应，如果我们需要获取这个资源，访问这个 URI 就可以了，比如获取特定的班级："),e("code",[t._v("/class/12")]),t._v("。另外，资源也可以包含子资源，比如 "),e("code",[t._v("/classes/classId/teachers")]),t._v("：列出某个指定班级的所有老师的信息")]),t._v(" "),e("li",[e("strong",[t._v("表现形式（Representational）")]),t._v('："资源"是一种信息实体，它可以有多种外在表现形式。我们把"资源"具体呈现出来的形式比如 json，xml，image,txt 等等叫做它的"表现层/表现形式"。')]),t._v(" "),e("li",[e("strong",[t._v("状态转移（State Transfer）")]),t._v(" ：大家第一眼看到这个词语一定会很懵逼？内心 BB：这尼玛是啥啊？ "),e("strong",[t._v("大白话来说 REST 中的状态转移更多地描述的服务器端资源的状态，比如你通过增删改查（通过 HTTP 动词实现）引起资源状态的改变。")]),t._v(" （HTTP 协议是一个无状态的，所有的资源状态都保存在服务器端）")])]),t._v(" "),e("h3",{attrs:{id:"何为-restful-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为-restful-架构"}},[t._v("#")]),t._v(" 何为 RESTful 架构？")]),t._v(" "),e("p",[t._v("满足 REST 风格的架构设计就可以称为 RESTful 架构：")]),t._v(" "),e("ol",[e("li",[t._v("每一个 URI 代表一种资源；")]),t._v(" "),e("li",[t._v("客户端和服务器之间，传递这种资源的某种表现形式比如 json，xml，image,txt 等等；")]),t._v(" "),e("li",[t._v('客户端通过特定的 HTTP 动词，对服务器端资源进行操作，实现"表现层状态转化"。')])]),t._v(" "),e("h3",{attrs:{id:"何为-restful-web-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为-restful-web-服务"}},[t._v("#")]),t._v(" 何为 RESTful Web 服务？")]),t._v(" "),e("p",[t._v("基于 REST 架构的 Web 服务就被称为 RESTful Web 服务。")]),t._v(" "),e("h2",{attrs:{id:"restful-web-服务辅助开发工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restful-web-服务辅助开发工具"}},[t._v("#")]),t._v(" RESTful Web 服务辅助开发工具")]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("这个插件的名字叫做 “"),e("strong",[t._v("RestfulToolkit")]),t._v("” 。我们直接在 IDEA 的插件市场即可找到这个插件。如下图所示。")]),t._v(" "),e("blockquote",[e("p",[t._v("如果你因为网络问题没办法使用 IDEA 自带的插件市场的话，也可以通过"),e("a",{attrs:{href:"https://plugins.jetbrains.com/idea",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA 插件市场的官网"),e("OutboundLink")],1),t._v("手动下载安装。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41a9bfa18920403ba4db83e324f8621e~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"简单使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),e("h4",{attrs:{id:"url-跳转到对应方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-跳转到对应方法"}},[t._v("#")]),t._v(" URL 跳转到对应方法")]),t._v(" "),e("p",[t._v("根据 URL 直接跳转到对应的方法定义 (Windows: "),e("code",[t._v("ctrl+\\")]),t._v(" or "),e("code",[t._v("ctrl+alt+n")]),t._v(" Mac:"),e("code",[t._v("command+\\")]),t._v(" or "),e("code",[t._v("command+alt+n")]),t._v(" )并且提供了一个服务的树形可视化显示窗口。 如下图所示。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c26ea05ad472488fbf9eb21627964bee~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"作为-http-请求工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为-http-请求工具"}},[t._v("#")]),t._v(" 作为 HTTP 请求工具")]),t._v(" "),e("p",[t._v("这个插件还可以作为一个简单的 http 请求工具来使用。如下图所示。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/RestfulToolkit2.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"复制生成-url、复制方法参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制生成-url、复制方法参数"}},[t._v("#")]),t._v(" 复制生成 URL、复制方法参数...")]),t._v(" "),e("p",[t._v("这个插件还提供了生成 URL、查询参数、请求体（RequestBody）等功能。")]),t._v(" "),e("p",[t._v("举个例子。我们选中 "),e("code",[t._v("Controller")]),t._v(" 中的某个请求对应的方法右击，你会发现多了几个可选项。当你选择"),e("code",[t._v("Generate & Copy Full URL")]),t._v("的话，就可以把整个请求的路径直接复制下来。eg："),e("code",[t._v("http://localhost:9333/api/users?pageNum=1&pageSize=1")]),t._v(" 。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(595),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"将-java-类转换为对应的-json-格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-java-类转换为对应的-json-格式"}},[t._v("#")]),t._v(" 将 Java 类转换为对应的 JSON 格式")]),t._v(" "),e("p",[t._v("这个插件还为 Java 类上添加了 "),e("strong",[t._v("Convert to JSON")]),t._v(" 功能 。")]),t._v(" "),e("p",[t._v("我们选中的某个类对应的方法然后右击，你会发现多了几个可选项。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(596),alt:""}})]),t._v(" "),e("p",[t._v("当我们选择"),e("code",[t._v("Convert to JSON")]),t._v("的话，你会得到如下 json 类型的数据：")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demoData"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demoData"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rememberMe"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),e("p",[t._v("RESTFulToolkit 原作者不更新了，IDEA.201 及以上版本不再适配。")]),t._v(" "),e("p",[t._v("因此，国内就有一个大佬参考 RESTFulToolkit 开发了一款类似的插件——RestfulTool（功能较少一些，不过够用了）。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20210830112030237.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);