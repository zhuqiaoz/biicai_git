## cookie
* Cookie 是由 Web 服务器保存在用户浏览器（客户端）上的小文本文件
* 目前有些 Cookie 是临时的，有些则是持续的。临时的 Cookie 只在浏览器上保存一段规定的时间，一旦超过规定的时间，该 Cookie 就会被系统清除
* 一个浏览器能创建的 Cookie 数量最多为 300 个，并且每个不能超过 4KB，每个 Web 站点能设置的 Cookie 总数不能超过 20 个

## session



## cookie与session的区别
1. session 在服务器端，cookie 在客户端（浏览器）
2. session 默认被存在在服务器的一个文件里（不是内存）
3. session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）
4. session 可以放在 文件、数据库、或内存中都可以。
5. 用户验证这种场合一般会用 session 因此，维持一个会话的核心就是客户端的唯一标识，即 session id

* 本来 session 是一个抽象概念，开发者为了实现中断和继续等操作，将 user agent 和 server 之间一对一的交互，抽象为“会话”，进而衍生出“会话状态”，也就是 session 的概念。
* cookie 是一个实际存在的东西，http 协议中定义在 header 中的字段。可以认为是 session 的一种后端无状态实现。
* 我们今天常说的 “session”，是为了绕开 cookie 的各种限制，通常借助 cookie 本身和后端存储实现的，一种更高级的会话状态实现。

>因此，维持一个会话的核心就是客户端的唯一标识，即 session id

>所以 cookie 和 session，你可以认为是同一层次的概念，也可以认为是不同层次的概念。具体到实现，session 因为 session id 的存在，通常要借助 cookie 实现，但这并非必要，只能说是通用性较好的一种实现方案。

## cookie，localStorage和sessionStorage的区别

* cookie，保存为字符串，存储容量小，随请求自动发送
* localStorage与sessionStorage均为本地存储，属性Storage对象具有内置的API，均为本地存储
* localStorage在关闭窗口或标签页后依然存在，而sessionStorage会被清除
* 在同源的不同标签页中共享localStorage，但不共享sessionStorage