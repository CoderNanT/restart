# 认识版本控制

- 什么是版本控制？
  - 版本控制的英文是**Version control**
  - 是维护**工程蓝图**的标准作法，能**追踪工程蓝图从诞生一直到定案的过程**
  - 版本控制也是**一种软件工程技巧**，借此能在软件开发的过程中，**确保由不同人所编辑的同一程序文件都得到同步**

- 简单来说，版本控制在软件开发中，可以帮助程序员进行代码的**追踪、维护、控制**等等一系列的操作



# 版本控制的功能

- 不同版本的存储管理
  - 一个项目会不断进行版本的迭代，来修复之前的一些问题、增加新的功能、需求，甚至包括项目的重构
  - 如果我们通过手动来维护一系列的项目备份，简直是一场噩梦
- 重大版本的备份维护
  - 对于很多重大的版本，我们会进行备份管理
- 恢复之前的项目版本
  - 当我们开发过程中发生一些严重的问题时，想要恢复之前的操作或者回到之前某个版本
- 记录项目的点点滴滴
  - 如果我们每一个功能的修改、bug的修复、新的需求更改都需要记录下来，版本控制可以很好的解决
- 多人开发的代码合并
  - 项目中通常都是多人开发，将多人代码进行合并，并且在出现冲突时更好的进行处理



# 版本控制的历史

- 版本控制的史前时代（没有版本控制）
  - 人们通常通过文件备份的方式来进行管理，再通过diff命令来对比两个文件的差异
- CVS（Concurrent Versions System）
  - **第一个被大规模使用的版本控制工具**，诞生于1985年
  - 由荷兰阿姆斯特丹VU大学的Dick Grune教授实现的，也算是SVN的前身（SVN的出现就是为了取代CVS的）
- SVN（Subversion）
  - 因其命令行工具名为**svn**因此通常被简称为SVN
  - SVN由CollabNet公司于2000年资助并发起开发，目的是取代CVS，对CVS进行了很多的优化
  - SVN和CVS一样，也属于**集中式版本控制工具**
  - SVN在**早期公司开发中使用率非常高**，但是**目前已经被Git取代**
- Git（Linus的作品）
  - 早期的时候，Linux社区使用的是**BitKeeper来进行版本控制**
  - 但是因为一些原因，**BitKeeper想要收回对Linux社区的免费授权**
  - 于是Linus用了**大概一周**的时间，开发了**Git用来取代BitKeeper**
  - Linus完成了Git的核心设计，在之后Linus功成身退，将Git交由另外一个Git的主要贡献者Junio C Hamano来维护



# 集中式版本控制

- CVS和SVN都是属于**集中式版本控制系统**（Centralized Version Control Systems，简称 CVCS）
  - 它们的主要特点是单一的**集中管理的服务器**，**保存所有文件的修订版本**
  - 协同开发人员通过客户端**连接到这台服务器**，**取出最新的文件或者提交更新**

- 这种做法带来了许多好处，特别是相较于老式的本地管理来说，每个人都可以在一定程度上看到项目中的其他人正在做些什么
- 但是集中式版本控制也有一个核心的问题：**中央服务器不能出现故障**
  - 如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作
  - 如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问你将丢失所有数据



# 分布式版本控制

- Git是属于**分布式版本控制系统**（Distributed Version Control System，简称 DVCS）

  - 客户端并不只提取最新版本的文件快照， 而是**把代码仓库完整地镜像下来，包括完整的历史记录**
  - 这么一来，任何一处协同工作用的**服务器发生故障**，事后都**可以用任何一个镜像出来的本地仓库恢复**

  - 因为每一次的克隆操作，实际上都是一次**对代码仓库的完整备份**



# Bash – CMD – GUI 区别

- Bash，Unix shell 的一种，Linux 与 Mac OS X 都将它作为默认 shell
  - Git Bash 就是一个 shell，是 **Windows 下的命令行工具**，可以**执行 Linux 命令**
  - Git Bash 是**基于 CMD** 的，在 **CMD 的基础上增添一些新的命令与功能**

- Git CMD
  - 命令行提示符（CMD）是 **Windows 操作系统上的命令行解释程序**
  - 当你在 Windows 上安装 git 并且习惯使用命令行时，可以使用 cmd 来运行 git 命令

- Git GUI
  - 基本上针对那些不喜欢黑屏（即命令行）编码的人
  - 它提供了一个**图形用户界**面来运行 git 命令



# Git的配置选项

- 安装Git后，要做的第一件事就是设置你的用户名和邮件地址

  - 这一点很重要，因为**每一个 Git 提交都会使用这些信息**，它们**会写入到你的每一次提交**中，不可更改
  - 如果使用了 **--global 选项，那么该命令只需要运行一次**，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息

  ```bash
  git config --global user.name "xxx"
  git config --global user.email "xxx@.com"
  ```



# 获取Git仓库 – git init/git clone

- 我们需要一个Git来管理源代码，那么我们本地也需要有一个Git仓库
- 通常有两种获取 Git 项目仓库的方式
  - 方式一：**初始化一个Git仓库**，并且可以将当前项目的文件都添加到Git仓库中（目前很多的脚手架在创建项目时都会默认创建一个Git仓库）
  - 方式二：**从其它服务器 克隆（clone） 一个已存在的 Git 仓库**（第一天到公司通常我们需要做这个操作）
- 方式一：初始化Git仓库
  - **git init**
  - 该命令将创建一个名为 .git 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的核心
  - 但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪

- 方式二：从Git远程仓库
  - **git clone https://github.com/coderwhy/hy-react-web-music.git**



# 文件的状态划分

- 现在我们的电脑上已经有一个Git仓库
  - 在实际开发中，你需要将**某些文件交由这个Git仓库**来管理
  - 并且我们之后**会修改文件的内容**，当**达成某一个目标时，想要记录下来这次操作**，就**会将它提交到仓库**中
  
- 那么我们需要对文件来划分不同的状态，以确定这个文件是否已经归于Git仓库的管理

  - **未跟踪**：默认情况下，Git仓库下的文件也没有添加到Git仓库管理中，我们需要通过add命令来操作
  - **已跟踪**：添加到Git仓库管理的文件处于已跟踪状态，Git可以对其进行各种跟踪管理
    - staged：暂缓区中的文件状态
    - Unmodified：commit命令，可以将staged中文件提交到Git仓库
    - Modified：修改了某个文件后，会处于Modified状态

![](https://s1.ax1x.com/2022/07/12/jcbySU.png)



# 文件添加到暂存区 – git add

- 跟踪新文件命令：**git add xxx.js**

- 通过 **git add .** 将所有的文件添加到暂存区中



# 文件更新提交 – git commit

- 现在的暂存区已经准备就绪，可以提交了
  - 每次准备提交前，先用 git status 看下，你所需要的文件是不是都已暂存起来了
  - 再运行提交命令 git commit
  - 可以在 commit 命令后添加 -m 选项，将提交信息与命令放在同一行
    - **git commit –m "提交信息"**
- 可以将两个命令结合来使用
  - **git commit -a -m "修改了bbb文件"**



# git忽略文件

- 一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表
  - 通常都是些**自动生成的文件**，比如日志文件，或者编译过程中创建的临时文件等
  - 我们可以创建一个名为 **.gitignore 的文件**，列出要忽略的文件的模式



# Git的校验和

- Git 中所有的数据在存储前都要计算校验和，然后以 **校验和** 来引用
  - Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）
  - 这是一个由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容或目录结构计算出来



# 查看提交的历史 – git log

- 在提交了若干个更新，又或者克隆了某个项目之后，有时候我们想要查看一下所有的历史提交记录
- 这个时候我们可以使用git log命令
  - 不传入任何参数的默认情况下，git log 会按时间先后顺序列出所有的提交，最近的更新排在最上面
  - 这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明
    - **git log**
  - **git log --pretty=oneline**
  - **git log --pretty=oneline --graph**



# 版本回退 – git reset

- 如果想要进行版本回退，我们需要先知道目前处于哪一个版本：Git通过HEAD指针记录当前版本
  - HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交
  - 理解 HEAD 的最简单方式，就是将它看做 **该分支上的最后一次提交** 的快照
- 我们可以通过HEAD来改变Git目前的版本指向
  - 上一个版本就是HEAD^，上上一个版本就是HEAD^^
    - **git reset --hard HEAD^**
  - 如果是上1000个版本，我们可以使用HEAD~1000
    - **git reset --hard HEAD~1000**
  - 我们可以可以指定某一个commit id
    - **git reset --hard 2d44982**



# 什么是远程仓库

- 什么是远程仓库（Remote Repository）呢
  - 目前我们的代码是保存在一个本地仓库中，也就意味着我们只是在进行本地操作
  - 在真实开发中，我们通常是多人开发的，所以我们会将管理的代码共享到远程仓库中
- 那么如何创建一个远程仓库呢
  - 远程仓库通常是搭建在某一个服务器上的（当然本地也可以，但是本地很难共享）
  - 所以我们需要在Git服务器上搭建一个远程仓库
- 目前我们有如下方式可以使用Git服务器
  - 使用第三方的Git服务器：比如GitHub、Gitee、Gitlab等等
  - 在自己服务器搭建一个Git服务



# 远程仓库的验证

- 常见的远程仓库有哪些呢？目前比较流行使用的是三种
  - GitHub：https://github.com/
  - Gitee：https://gitee.com/
  - 自己搭建Gitlab
- 对于私有的仓库我们想要进行操作，远程仓库会对我们的身份进行验证
  - 如果没有验证，任何人都可以随意操作仓库是一件非常危险的事情
- 目前Git服务器验证手段主要有两种
  - 方式一：基于**HTTP的凭证存储**（Credential Storage）
  - 方式二：基于**SSH的密钥**



# 远程仓库的验证 – 凭证

- 因为本身HTTP协议是无状态的连接，所以每一个连接都需要用户名和密码
  - 如果每次都这样操作，那么会非常麻烦
  - 幸运的是，Git 拥有一个凭证系统来处理这个事情
- 下面有一些 Git Crediential 的选项
  - 选项一：默认所有都不缓存。 每一次连接都会询问你的用户名和密码
  - 选项二：“cache” 模式会将凭证存放在内存中一段时间。 密码永远不会被存储在磁盘中，并且在15分钟后从内存中清除
  - 选项三：“store” 模式会将凭证用明文的形式存放在磁盘中，并且永不过期
  - 选项四：如果你使用的是 Mac，Git 还有一种 “osxkeychain” 模式，它会将凭证缓存到你系统用户的钥匙串中（加密的）
  - 选项五：如果你使用的是 Windows，你可以安装一个叫做 “Git Credential Manager for Windows” 的辅助工具
    - 可以在 https://github.com/Microsoft/Git-Credential-Manager-for-Windows 下载
    - 默认安装Git时会帮你安装



# 远程仓库的验证 – SSH密钥

- Secure Shell（安全外壳协议，简称SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境
-  SSH以非对称加密实现身份验证
  - 例如其中一种方法是使用自动生成的公钥-私钥对来简单地加密网络连接，随后使用密码认证进行登录
  - 另一种方法是人工生成一对公钥和私钥，通过生成的密钥进行认证，这样就可以在不输入密码的情况下登录
  - 公钥需要放在待访问的电脑之中，而对应的私钥需要由用户自行保管
- 如果我们以SSH的方式访问Git仓库，那么就需要生产对应的公钥和私钥
  - **ssh-keygen -t ed25519 -C “xxx@qq.com"**
  - **ssh-keygen -t rsa -b 2048 -C “xxx@qq.com"**



# 管理远程服务器

- 查看远程地址：比如我们之前从GitHub上clone下来的代码，它就是有自己的远程仓库的
  - **git remote**
  - **git remote –v**
  - **-v是—verbose的缩写(冗长的)**
- 添加远程地址：我们也可以继续添加远程服务器（让本地的仓库和远程服务器仓库建立连接）
  - **git remote add <shortname> <url>**
  - **git remote add origin xxxx.git**
- 重命名远程地址：**git remote rename origin gitlab**

- 移除远程地址：**git remote remove origin**



# 本地分支的上游分支（跟踪分支）

- 问题一：当前分支没有track的分支

  ```bash
  $ git pull
  There is no tracking information for the current branch.
  Please specify which branch you want to merge with.
  See git-pull(1) for details.
  
      git pull <remote> <branch>
  
  If you wish to set tracking information for this branch you can do so with:
  
      git branch --set-upstream-to=origin/<branch> master
  ```

- 原因：当前分支没有和远程的origin/master分支进行跟踪

  - 在没有跟踪的情况下，我们直接执行pull操作的时候必须指定从哪一个远程仓库中的哪一个分支中获取内容

  ```bash
  $ git pull origin main
  From https://github.com/codingiove/get-demo
   * branch            main       -> FETCH_HEAD
  fatal: refusing to merge unrelated histories
  ```

- 如果我们想要直接执行git fetch是有一个前提的：必须给当前分支设置一个跟踪分支

  ```bash
  $ git branch --set-upstream-to=origin/main
  Branch 'master' set up to track remote branch 'main' from 'origin'.
  ```

  ```bash
  $ git pull
  fatal: refusing to merge unrelated histories
  ```



# 拒绝合并不相干的历史

- 问题一：合并远程分支时，拒绝合并不相干的历史

  ```bash
  $ git merge
  fatal: refusing to merge unrelated histories
  ```

- 原因：我们将两个不相干的分支进行了合并：https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase

  - 简单来说就是：过去git merge允许将两个没有共同基础的分支进行合并，这导致了一个后果：新创建的项目可能被一个毫无经验的维护者合并了很多没有必要的历史，到一个已经存在的项目中，目前这个命令已经被纠正，但是我们依然可以通过**--allow-unrelated-histories**选项来逃逸这个限制，来合并两个独立的项目

  ```bash
  $ git merge --allow-unrelated-histories
  Merge made by the 'recursive' strategy.
   README.md | 2 ++
   1 file changed, 2 insertions(+)
   create mode 100644 README.md
  ```



# 远程仓库的交互

- 从远程仓库clone代码：将存储库克隆到新创建的目录中
  - **git clone xxx**
-  将代码push到远程仓库：将本地仓库的代码推送到远程仓库中
  - 默认情况下是将当前分支（比如master）push到origin远程仓库的
    - **git push** 
    - **git push origin master**
- 从远程仓库fetch代码：从远程仓库获取最新的代码
  - 默认情况下是从origin中获取代码
    - **git fetch**
    - **git fetch origin**
  - 获取到代码后默认并没有合并到本地仓库，我们需要通过merge来合并
    - **git merge**
- 从远程仓库pull代码：上面的两次操作有点繁琐，我们可以通过一个命令来操作
  - **git pull**
  - **git fetch + git merge(rebase)**



