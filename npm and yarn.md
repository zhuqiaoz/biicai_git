# npm

```
npm (v5)									Yarn
npm install									yarn install
(N/A)										yarn install --flat
(N/A)										yarn install --har
npm install --no-package-lock				yarn install --no-lockfile
(N/A)										yarn install --pure-lockfile
npm install [package] --save				yarn add [package]
npm install [package] --save-dev			yarn add [package] --dev
(N/A)										yarn add [package] --peer
npm install [package] --save-optional		yarn add [package] --optional
npm install [package] --save-exact			yarn add [package] --exact
(N/A)										yarn add [package] --tilde
npm install [package] --global				yarn global add [package]
npm update --global                  		yarn global upgrade                    
npm rebuild									yarn add --force
npm uninstall [package]						yarn remove [package]
npm cache clean								yarn cache clean [package]
rm -rf node_modules && npm install  		yarn upgrade                          
npm version major                    		yarn version --major                  
npm version minor                    		yarn version --minor                  
npm version patch                    		yarn version --patch 
```
1. 安装模块(局部安装)
```
    npm install mock
```
2. 全局安装
```
    npm install mock -g
```
3. 查看已安装的模块
```
    npm list(npm ls)
```
4. 卸载模块
```
    npm uninstall mock
```
5. 清除缓存
```
    npm cache clean
    npm cache clean --force
```
6. 查看版本号
```
    npm info angular
```
7. 更新版本
```
    npm updata angular
```
8. 安装特定版本号
```
    npm install angular@2.0.0
```




# package
* dependencies //package的应用依赖模块，即别人要使用这个package，至少需要安装哪些东东。应用依赖模块会安装到当前模块的node_modules目录下。npm install angular --save
* devDependencies //package的开发依赖模块，即别人要在这个package上进行开发 npm install angular --save-dev

