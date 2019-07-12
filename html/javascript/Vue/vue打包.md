## vue>2.3

方法一：
    使用vue-cli创建webpack去除掉烦人的Eslint

    删除build/webpack.base.config.js中
    包含eslint-loader的内容。
方法二：

在创建webpack项目中，
···
Use ESlint to lint you code？  
···
输入NO


##vue

npm run build  去掉js文件中的map文件

config 中 index.js将
productionSourceMap: false,
