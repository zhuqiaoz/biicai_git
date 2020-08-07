1.添加一个配置文件
··· ##数据文件
dbpath=D:\bridge\MongoDB\data\db

##日志文件
logpath=d:\bridge\MongoDB\log\mongo.log
···

##

mongod.exe --config "配置文件目录"

```
注册MongoDB Service
进入：E:\Work_App\MongoDB\bin
输入：mongod -dbpath "E:\Work_App\MongoDB\Data\db" -logpath "E:\Work_App\MongoDB\Data\log\MongoDB.log" -install -serviceName "MongoDB"（这里必须以管理员身份运行）
此时服务已经安装成功，运行
>net start mongodb   (开启服务)
>net stop mongodb   (关闭服务)
```

```
删除MongoDB Service
mongod -dbpath "E:\Work_App\MongoDB\Data\db" -logpath "E:\Work_App\MongoDB\Data\log\MongoDB.log" -remove -serviceName "MongoDB"
```

## qinxi.bat

```
@echo off
echo qinxi执行文件执行中。。。
echo 请按任意键继续。。。
pause
cd /d C:\Program Files\MongoDB\Server\3.4\bin
mongod.exe --config 'D:\HBfile\Vue\vue_demo\mongodb\mongo.config'
pause>nul

mongod -dbpath "D:\HBfile\Vue\vue_demo\mongodb\data\db" -logpath "D:\HBfile\Vue\vue_demo\mongodb\log\mongo.log" -install -serviceName "MongoDB"
```
