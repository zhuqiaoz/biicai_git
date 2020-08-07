# Tcp && Udp

## Tcp

### Tcp三次握手

客户端向服务器发起一个SYN包，服务器端返回对应的SYN的ACK响应以及新的SYN包，然后客户端返回对应的ACK。（在客户端和服务器之间建立正常的TCP网络连接时，客户端首先发出一个SYN消息，服务器使用SYN+ACK应答表示接收了这个消息，最后客户端再以ACK消息响应。）

> SYN是同步序列编号，是TCP/IP建立连接时使用的握手信息。
> ACK是确认字符，在数据通信中，接收站发给发送站的一种传输类控制字符。表示发来的数据已确认接收无误。在TCP/IP协议中，如果接收方成功的接收到数据，那么会回复一个ACK数据。通过ACK信号有自己固定的格式，长度大小，由接收方回复给发送方。

1. 第一次握手，建立连接时，客户端发送SYN包到服务器，并进入SYN_SENT状态，等待服务器确认，其中SYN就是同步序列编号。

2. 第二次握手，服务器收到SYN包，必须确认客户的SYN，同时自己也发送一个SYN包，即是SYN+ACK包，此时服务器进入SYN_RECV状态。

3. 第三次握手，客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK，此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

> 完成三次握手，客户端与服务器开始传送数据。