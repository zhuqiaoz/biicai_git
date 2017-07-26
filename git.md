# Git

1. 设置提交代码的用户信息
```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```
2. 配置ssh
```
ssh-keygen -t rsa -C "youremail@example.com"
```
> -t 密钥类型 -C 注释




3. 常用操作
```
git remote add origin git@github.com:michaelliao/learngit.git    
git clone git@github.com:michaelliao/gitskills.git //下载远程库 
git log --graph --pretty=online --abbrev-commit
git init    //创建git库
git status  //检查git库中文件状态
git add <filename>  //将git工作区中的文件放入暂存区
git add -f <file> //强制添加
git commit -m "注释"  //提交暂存区域的文件
git log  //查看‘提交’日志
git log --graph //查看‘提交分支’日志
git reflog //查看‘已上传’全部日志
git checkout -- <file>  //将暂存区的文件覆盖工作区的文件
git reset --hard  <commit Id> //撤销工作区与暂存区的差异，返回暂存区文件内容
git reset --hard HEAD^ //同上

git branch dev //创建git分支
git checkout dev //切换git分支
git branch //查看git分支
git merge master //合并分支
git merge --no-ff -m "merge with no-ff" dev   //合并分支，并显示分支信息。分支历史上就可以看出分支信息
git branch -d dev //删除分支
git status  //将分区的工作区的内容暂时隐藏，使用git status 无法显示更改。
git stash list  //显示隐藏文件的Id
git stash apply  //在当前分区显示隐藏文件的内容。但是 git stash list 依然显示隐藏文件的Id
git stash drop  //删除隐藏文件Id
git stash pop  //显示隐藏文件并删除git stash list Id
git branch -D <name>  //如果要丢弃一个没有被合并过的分支，可以通过强行删除。

git remote //要查看远程库的信息
git remote -v //显示更详细的信息：

git push origin master  //推送至GitHub上master库
git push origin dev  //推送之dev库
git push -u origin master //全部文件推送


git tag v1.0  //标签
git tag //查看标签
git show <tagname> //查看标签信息
git tag v0.9 6224937  //比方说要对add merge这次提交打标签，它对应的commit id是6224937，敲入命令
git tag -a v0.1 -m "version 0.1 released" 3628164  //还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
git tag -s v0.2 -m "signed version 0.2 released" fec145a //还可以通过-s用私钥签名一个标签：签名采用PGP签名，因此，必须首先安装gpg（GnuPG），如果没有找到gpg，或者没有gpg密钥对，就会报错：
git tag -d v1.0 //删除标签
git push origin v1.0 //推送至GitHub
git push origin --tags //一次性推送全部尚未推送到远程的本地标签
git push origin :refs/tags/v0.9 //删除GitHub上的标签
```




* 配置git
```
git config --global color.ui true //输出文字颜色醒目
.gitignore  //设置git忽略文件的样式。https://github.com/github/gitignore
git check-ignore //查看.gitignore(git定义忽略提醒的文件格式)错误。

rm <file> // 删除文件
git rm <file> //删除提交的文件
```

* 解决中文乱码
```
$ git config --global core.quotepath false  
$ git config core.quotepath false  
```

