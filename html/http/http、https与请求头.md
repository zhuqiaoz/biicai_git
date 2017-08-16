## SSL/TLS
+ 对比HTTP/1.1与HTTP2有什么不同？
    - 在浏览器端，HTTP/2仅能在TLS下运行，也就是HTTPS。这不是因为HTTP/2标准强制要求，而是全球两大浏览器领导者 —— Firefox和Chrome都明确地表示，他们只会实现基于TLS的HTTP/2
    - HTTP/2取消了大量头字段，并且取消了小版本号。也就是说服务器和客户端都必须确定自己是否完整兼容http2或者彻底不兼容
    - 最重要的一点，HTTP/2不再是一个基于文本的协议，通过新增的二进制分帧层变成了一个二进制协议，这意味着：
        * HTTP/2使用二进制帧进行数据交换。HTTP/2规范中一共定义了10种帧，其中最基础的两种分别对应于HTTP/1.1的DATA和HEADERS帧
        * HTTP/2可以对压缩头信息进行压缩了。反正是二进制帧
    - 利用帧，HTTP/2可以在单个TCP连接上高效传输所有资源
        * 通过在单个连接上建立多个流，实现流的多路复用
        * 流可以指派一个优先级，也可以为流建立依赖关系。这样可以避免“浏览器明明在等关键的CSS和JS，服务器却还在发图片”
        * 完全避免线头阻塞
    - 服务器可以利用RST_STREAM帧随时中断某个chunk的发送
    - 服务器可以主动向客户端推送资源让客户端缓存。当然，客户端可以使用RST_STREAM帧拒绝掉服务器的“好意”
    - HTTP/2的流可以进行流量控制，通过公示流量窗口来限制另一端发送数据



---


##  请求头和响应头
### request 常用
* Accept
>  浏览器端可以接受的媒体类型

* Accept-Encoding
> 浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法

* Accept-Language
> 浏览器申明自己接收的语言。 

* User-Agent
>作用：告诉HTTP服务器， 客户端使用的操作系统和浏览器的名称和版本.

* cache-control  
    + 打开新窗口
        - 值为private、no-cache、must-revalidate，那么打开新窗口访问时都会重新访问服务器。 
        - 而如果指定了max-age值，那么在此值内的时间里就不会重新访问服务器
    + 在地址栏回车 
        - 值为private或must-revalidate则只有第一次访问时会访问服务器，以后就不再访问。 
        - 值为no-cache，那么每次都会访问。 
        - 值为max-age，则在过期之前不会重复访问。 
    + 按后退按扭 
        - 值为private、must-revalidate、max-age，则不会重访问， 
        - 值为no-cache，则每次都重复访问 
    + 按刷新按扭 
        - 无论为何值，都会重复访问 
        - Cache-control值为“no-cache”时，访问此页面不会在Internet临时文章夹留下页面备份。
    + Expires 
        - 过期时间。如果为-1.没次都需要访问。

> 网页的缓存是由http消息头中的“Cache-control”来控制的，常见的取值有private、no-cache、max-age、must-revalidate等，默认为private。

* Pragma:no-cache
> 页面缓存相关，与cache-control 类似。但不同。 html中有meta标签支持。
        
    <META HTTP-EQUIV="REFRESH" CONTENT="5">

* Upgrade-Insecure-Requests:1 (chrome)
    + 他的作用就是让浏览器自动升级请求为： https;
```
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
```
* Connection
> 表示是否需要持久连接。（HTTP 1.1默认进行持久连接）

* Cookie
> HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。


### responses

* Accept-Ranges (bytes)
> 表明服务器是否支持指定范围请求及哪种类型的分段请求

* Age
> 从原始服务器到代理缓存形成的估算时间（以秒计，非负）

* Cache-Control
> 告诉所有的缓存机制是否可以缓存及哪种类型

* Content-Encoding
> web服务器支持的返回内容压缩编码类型。

* Content-Type
> 返回内容的MIME类型

* Date
> 原始服务器消息发出的时间

* ETag
> 请求变量的实体标签的当前值

* Vary
> 告诉下游代理是使用缓存响应还是从原始服务器请求

* Via
> 告知代理客户端响应是通过哪里发送的




>https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html