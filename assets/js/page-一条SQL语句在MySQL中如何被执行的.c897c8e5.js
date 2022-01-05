(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{755:function(e,s,t){"use strict";t.r(s);var r=t(1),_=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("本文来自"),t("a",{attrs:{href:"https://github.com/kinglaw1204",target:"_blank",rel:"noopener noreferrer"}},[e._v("木木匠"),t("OutboundLink")],1),e._v("投稿。")]),e._v(" "),t("p",[e._v("本篇文章会分析下一个 sql 语句在 MySQL 中的执行流程，包括 sql 的查询在 MySQL 内部会怎么流转，sql 语句的更新是怎么完成的。")]),e._v(" "),t("p",[e._v("在分析之前我会先带着你看看 MySQL 的基础架构，知道了 MySQL 由那些组件组成以及这些组件的作用是什么，可以帮助我们理解和解决这些问题。")]),e._v(" "),t("h2",{attrs:{id:"一-mysql-基础架构分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-mysql-基础架构分析"}},[e._v("#")]),e._v(" 一 MySQL 基础架构分析")]),e._v(" "),t("h3",{attrs:{id:"_1-1-mysql-基本架构概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mysql-基本架构概览"}},[e._v("#")]),e._v(" 1.1 MySQL 基本架构概览")]),e._v(" "),t("p",[e._v("下图是 MySQL  的一个简要架构图，从下图你可以很清晰的看到用户的 SQL 语句在 MySQL 内部是如何执行的。")]),e._v(" "),t("p",[e._v("先简单介绍一下下图涉及的一些组件的基本作用帮助大家理解这幅图，在 1.2 节中会详细介绍到这些组件的作用。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("连接器：")]),e._v(" 身份认证和权限相关(登录 MySQL 的时候)。")]),e._v(" "),t("li",[t("strong",[e._v("查询缓存：")]),e._v(" 执行查询语句的时候，会先查询缓存（MySQL 8.0 版本后移除，因为这个功能不太实用）。")]),e._v(" "),t("li",[t("strong",[e._v("分析器：")]),e._v(" 没有命中缓存的话，SQL 语句就会经过分析器，分析器说白了就是要先看你的 SQL 语句要干嘛，再检查你的 SQL 语句语法是否正确。")]),e._v(" "),t("li",[t("strong",[e._v("优化器：")]),e._v(" 按照 MySQL 认为最优的方案去执行。\n")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/13526879-3037b144ed09eb88.png",alt:""}})]),e._v(" "),t("p",[e._v("简单来说 MySQL  主要分为 Server 层和存储引擎层：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Server 层")]),e._v("：主要包括连接器、查询缓存、分析器、优化器、执行器等，所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图，函数等，还有一个通用的日志模块 binglog 日志模块。")]),e._v(" "),t("li",[t("strong",[e._v("存储引擎")]),e._v("： 主要负责数据的存储和读取，采用可以替换的插件式架构，支持 InnoDB、MyISAM、Memory 等多个存储引擎，其中 InnoDB 引擎有自有的日志模块 redolog 模块。"),t("strong",[e._v("现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始就被当做默认存储引擎了。")])])]),e._v(" "),t("h3",{attrs:{id:"_1-2-server-层基本组件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-server-层基本组件介绍"}},[e._v("#")]),e._v(" 1.2 Server 层基本组件介绍")]),e._v(" "),t("h4",{attrs:{id:"_1-连接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-连接器"}},[e._v("#")]),e._v(" 1) 连接器")]),e._v(" "),t("p",[e._v("连接器主要和身份认证和权限相关的功能相关，就好比一个级别很高的门卫一样。")]),e._v(" "),t("p",[e._v("主要负责用户登录数据库，进行用户的身份认证，包括校验账户密码，权限等操作，如果用户账户密码已通过，连接器会到权限表中查询该用户的所有权限，之后在这个连接里的权限逻辑判断都是会依赖此时读取到的权限数据，也就是说，后续只要这个连接不断开，即时管理员修改了该用户的权限，该用户也是不受影响的。")]),e._v(" "),t("h4",{attrs:{id:"_2-查询缓存-mysql-8-0-版本后移除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查询缓存-mysql-8-0-版本后移除"}},[e._v("#")]),e._v(" 2) 查询缓存(MySQL 8.0 版本后移除)")]),e._v(" "),t("p",[e._v("查询缓存主要用来缓存我们所执行的 SELECT 语句以及该语句的结果集。")]),e._v(" "),t("p",[e._v("连接建立后，执行查询语句的时候，会先查询缓存，MySQL 会先校验这个 sql 是否执行过，以 Key-Value 的形式缓存在内存中，Key 是查询预计，Value 是结果集。如果缓存 key 被命中，就会直接返回给客户端，如果没有命中，就会执行后续的操作，完成后也会把结果缓存起来，方便下一次调用。当然在真正执行缓存查询的时候还是会校验用户的权限，是否有该表的查询条件。")]),e._v(" "),t("p",[e._v("MySQL 查询不建议使用缓存，因为查询缓存失效在实际业务场景中可能会非常频繁，假如你对一个表更新的话，这个表上的所有的查询缓存都会被清空。对于不经常更新的数据来说，使用缓存还是可以的。")]),e._v(" "),t("p",[e._v("所以，一般在大多数情况下我们都是不推荐去使用查询缓存的。")]),e._v(" "),t("p",[e._v("MySQL 8.0 版本后删除了缓存的功能，官方也是认为该功能在实际的应用场景比较少，所以干脆直接删掉了。")]),e._v(" "),t("h4",{attrs:{id:"_3-分析器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分析器"}},[e._v("#")]),e._v(" 3) 分析器")]),e._v(" "),t("p",[e._v("MySQL 没有命中缓存，那么就会进入分析器，分析器主要是用来分析 SQL 语句是来干嘛的，分析器也会分为几步：")]),e._v(" "),t("p",[t("strong",[e._v("第一步，词法分析")]),e._v("，一条 SQL 语句有多个字符串组成，首先要提取关键字，比如 select，提出查询的表，提出字段名，提出查询条件等等。做完这些操作后，就会进入第二步。")]),e._v(" "),t("p",[t("strong",[e._v("第二步，语法分析")]),e._v("，主要就是判断你输入的 sql 是否正确，是否符合 MySQL 的语法。")]),e._v(" "),t("p",[e._v("完成这 2 步之后，MySQL 就准备开始执行了，但是如何执行，怎么执行是最好的结果呢？这个时候就需要优化器上场了。")]),e._v(" "),t("h4",{attrs:{id:"_4-优化器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化器"}},[e._v("#")]),e._v(" 4) 优化器")]),e._v(" "),t("p",[e._v("优化器的作用就是它认为的最优的执行方案去执行（有时候可能也不是最优，这篇文章涉及对这部分知识的深入讲解），比如多个索引的时候该如何选择索引，多表查询的时候如何选择关联顺序等。")]),e._v(" "),t("p",[e._v("可以说，经过了优化器之后可以说这个语句具体该如何执行就已经定下来。")]),e._v(" "),t("h4",{attrs:{id:"_5-执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-执行器"}},[e._v("#")]),e._v(" 5) 执行器")]),e._v(" "),t("p",[e._v("当选择了执行方案后，MySQL 就准备开始执行了，首先执行前会校验该用户有没有权限，如果没有权限，就会返回错误信息，如果有权限，就会去调用引擎的接口，返回接口执行的结果。")]),e._v(" "),t("h2",{attrs:{id:"二-语句分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-语句分析"}},[e._v("#")]),e._v(" 二 语句分析")]),e._v(" "),t("h3",{attrs:{id:"_2-1-查询语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查询语句"}},[e._v("#")]),e._v(" 2.1 查询语句")]),e._v(" "),t("p",[e._v("说了以上这么多，那么究竟一条 sql 语句是如何执行的呢？其实我们的 sql 可以分为两种，一种是查询，一种是更新（增加，更新，删除）。我们先分析下查询语句，语句如下：")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" tb_student  A "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("age"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'18'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("' 张三 '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("结合上面的说明，我们分析下这个语句的执行流程：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("先检查该语句是否有权限，如果没有权限，直接返回错误信息，如果有权限，在 MySQL8.0 版本以前，会先查询缓存，以这条 sql 语句为 key 在内存中查询是否有结果，如果有直接缓存，如果没有，执行下一步。")])]),e._v(" "),t("li",[t("p",[e._v("通过分析器进行词法分析，提取 sql 语句的关键元素，比如提取上面这个语句是查询 select，提取需要查询的表名为 tb_student，需要查询所有的列，查询条件是这个表的 id='1'。然后判断这个 sql 语句是否有语法错误，比如关键词是否正确等等，如果检查没问题就执行下一步。")])]),e._v(" "),t("li",[t("p",[e._v("接下来就是优化器进行确定执行方案，上面的 sql 语句，可以有两种执行方案：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  a.先查询学生表中姓名为“张三”的学生，然后判断是否年龄是 18。\n  b.先找出学生中年龄 18 岁的学生，然后再查询姓名为“张三”的学生。\n")])])]),t("p",[e._v("那么优化器根据自己的优化算法进行选择执行效率最好的一个方案（优化器认为，有时候不一定最好）。那么确认了执行计划后就准备开始执行了。")])]),e._v(" "),t("li",[t("p",[e._v("进行权限校验，如果没有权限就会返回错误信息，如果有权限就会调用数据库引擎接口，返回引擎的执行结果。")])])]),e._v(" "),t("h3",{attrs:{id:"_2-2-更新语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-更新语句"}},[e._v("#")]),e._v(" 2.2 更新语句")]),e._v(" "),t("p",[e._v("以上就是一条查询 sql 的执行流程，那么接下来我们看看一条更新语句如何执行的呢？sql 语句如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("update tb_student A set A.age='19' where A.name=' 张三 ';\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("我们来给张三修改下年龄，在实际数据库肯定不会设置年龄这个字段的，不然要被技术负责人打的。其实这条语句也基本上会沿着上一个查询的流程走，只不过执行更新的时候肯定要记录日志啦，这就会引入日志模块了，MySQL 自带的日志模块是 "),t("strong",[e._v("binlog（归档日志）")]),e._v(" ，所有的存储引擎都可以使用，我们常用的 InnoDB 引擎还自带了一个日志模块 "),t("strong",[e._v("redo log（重做日志）")]),e._v("，我们就以 InnoDB 模式下来探讨这个语句的执行流程。流程如下：")]),e._v(" "),t("ul",[t("li",[e._v("先查询到张三这一条数据，如果有缓存，也是会用到缓存。")]),e._v(" "),t("li",[e._v("然后拿到查询的语句，把 age 改为 19，然后调用引擎 API 接口，写入这一行数据，InnoDB 引擎把数据保存在内存中，同时记录 redo log，此时 redo log 进入 prepare 状态，然后告诉执行器，执行完成了，随时可以提交。")]),e._v(" "),t("li",[e._v("执行器收到通知后记录 binlog，然后调用引擎接口，提交 redo log 为提交状态。")]),e._v(" "),t("li",[e._v("更新完成。")])]),e._v(" "),t("p",[t("strong",[e._v("这里肯定有同学会问，为什么要用两个日志模块，用一个日志模块不行吗?")])]),e._v(" "),t("p",[e._v("这是因为最开始 MySQL 并没有 InnoDB 引擎（InnoDB 引擎是其他公司以插件形式插入 MySQL 的），MySQL 自带的引擎是 MyISAM，但是我们知道 redo log 是 InnoDB 引擎特有的，其他存储引擎都没有，这就导致会没有 crash-safe 的能力(crash-safe 的能力即使数据库发生异常重启，之前提交的记录都不会丢失)，binlog 日志只能用来归档。")]),e._v(" "),t("p",[e._v("并不是说只用一个日志模块不可以，只是 InnoDB 引擎就是通过 redo log 来支持事务的。那么，又会有同学问，我用两个日志模块，但是不要这么复杂行不行，为什么 redo log 要引入 prepare 预提交状态？这里我们用反证法来说明下为什么要这么做？")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("先写 redo log 直接提交，然后写 binlog")]),e._v("，假设写完 redo log 后，机器挂了，binlog 日志没有被写入，那么机器重启后，这台机器会通过 redo log 恢复数据，但是这个时候 bingog 并没有记录该数据，后续进行机器备份的时候，就会丢失这一条数据，同时主从同步也会丢失这一条数据。")]),e._v(" "),t("li",[t("strong",[e._v("先写 binlog，然后写 redo log")]),e._v("，假设写完了 binlog，机器异常重启了，由于没有 redo log，本机是无法恢复这一条记录的，但是 binlog 又有记录，那么和上面同样的道理，就会产生数据不一致的情况。")])]),e._v(" "),t("p",[e._v("如果采用 redo log 两阶段提交的方式就不一样了，写完 binglog 后，然后再提交 redo log 就会防止出现上述的问题，从而保证了数据的一致性。那么问题来了，有没有一个极端的情况呢？假设 redo log 处于预提交状态，binglog 也已经写完了，这个时候发生了异常重启会怎么样呢？\n这个就要依赖于 MySQL 的处理机制了，MySQL 的处理过程如下：")]),e._v(" "),t("ul",[t("li",[e._v("判断 redo log 是否完整，如果判断是完整的，就立即提交。")]),e._v(" "),t("li",[e._v("如果 redo log 只是预提交但不是 commit 状态，这个时候就会去判断 binlog 是否完整，如果完整就提交 redo log, 不完整就回滚事务。")])]),e._v(" "),t("p",[e._v("这样就解决了数据一致性的问题。")]),e._v(" "),t("h2",{attrs:{id:"三-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-总结"}},[e._v("#")]),e._v(" 三 总结")]),e._v(" "),t("ul",[t("li",[e._v("MySQL 主要分为 Server 层和引擎层，Server 层主要包括连接器、查询缓存、分析器、优化器、执行器，同时还有一个日志模块（binlog），这个日志模块所有执行引擎都可以共用，redolog 只有 InnoDB 有。")]),e._v(" "),t("li",[e._v("引擎层是插件式的，目前主要包括，MyISAM,InnoDB,Memory 等。")]),e._v(" "),t("li",[e._v("查询语句的执行流程如下：权限校验（如果命中缓存）---\x3e查询缓存---\x3e分析器---\x3e优化器---\x3e权限校验---\x3e执行器---\x3e引擎")]),e._v(" "),t("li",[e._v("更新语句执行流程如下：分析器----\x3e权限校验----\x3e执行器---\x3e引擎---redo log(prepare 状态)---\x3ebinlog---\x3eredo log(commit状态)")])]),e._v(" "),t("h2",{attrs:{id:"四-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-参考"}},[e._v("#")]),e._v(" 四 参考")]),e._v(" "),t("ul",[t("li",[e._v("《MySQL 实战45讲》")]),e._v(" "),t("li",[e._v("MySQL 5.6参考手册:"),t("a",{attrs:{href:"https://dev.MySQL.com/doc/refman/5.6/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dev.MySQL.com/doc/refman/5.6/en/"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=_.exports}}]);