# 周亮的学术个人主页

账号：`liangzhou4312-afk`  
目标仓库：`liangzhou4312-afk.github.io`  
发布后的地址：https://liangzhou4312-afk.github.io/

这是一个无需安装依赖、无需编译的静态网站。双击 `index.html` 即可查看。网页支持英文 / 中文切换、手机布局、论文框架图放大、视频播放与邮箱复制。

布局参考你提供的 [Shuang Zeng 个人主页](https://stevezs315.github.io/) 和 [academic-homepage 模板](https://github.com/luost26/academic-homepage)：深色导航、左侧个人资料卡、右侧白色内容卡片。此版本使用纯静态 HTML / CSS / JavaScript 实现，不依赖原模板的 Ruby / Jekyll 环境。模板来源链接与许可已保留。

三个页面：`index.html`（主页）、`publications.html`（三篇研究论文）、`showcase.html`（全部四段视频）。

## 内容

- 本人照片、邮箱、电话与 GitHub 链接。
- 三篇研究：DeViGrasp、HumanWay、UniGuide。仅包含主框架图，没有完整论文 PDF。
- 四段完整视频：UniGuide 实物部署、移动机器人、人形机器人、四足机器人仿真。仿真已单独标注。
- 教育经历按提供的信息整理；没有推断专业、导师、实验室、学位授予情况或论文录用状态。

## 发布方式一：网页上传（无需命令行）

1. 登录 GitHub，创建 **Public** 仓库，名称必须为 `liangzhou4312-afk.github.io`。
2. 解压网站压缩包，进入包含 `index.html` 的文件夹。将其中的三个 HTML 文件、`styles.css`、`script.js`、`THIRD_PARTY_NOTICES.txt` 和整个 `assets` 文件夹拖到仓库的 **uploading an existing file** 页面，提交到 `main`。不要上传压缩包本身，也不要再套一层外部文件夹。
3. 打开仓库 **Settings → Pages**，在 **Build and deployment → Source** 选择 **Deploy from a branch**，选择 `main` 和 `/ (root)`，保存。
4. 等 GitHub 部署完成后，页面会显示访问地址。图片、视频会随网站一起发布。

这种方式只需上传以上网站文件；`.github` 文件夹用于下面的可选 Actions 部署方式。

## 发布方式二：Git + GitHub Actions

先创建同名的空仓库。在本文件所在目录执行（需要先完成 GitHub 登录）：

```bash
git init -b main
git add .
git commit -m "Create Liang Zhou's academic homepage"
git remote add origin https://github.com/liangzhou4312-afk/liangzhou4312-afk.github.io.git
git push -u origin main
```

在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**，然后在 **Actions → Deploy personal homepage → Run workflow** 手动运行一次。之后修改并推送 `main` 会自动部署。工作流只打包网页和 `assets`，不发布这份说明文件。

配置依据：[GitHub 官方 Pages 工作流文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 日后修改

| 修改内容 | 位置 |
| --- | --- |
| 姓名、教育经历、论文标题、联系方式 | 三个 HTML 页面（对应内容保持一致） |
| 中英文简介和文案 | `script.js` 的 `translations` |
| 配色、字体、布局 | `styles.css` |
| 照片、三张主框架图、视频封面 | `assets/images/` |
| 视频 | `assets/videos/` |

中英文共用的内容在相应 HTML 修改；带 `data-i18n` 标记的文字同时需要修改 `script.js` 中的对应翻译。主页与论文页都展示的论文标题需要在两处同步修改。

## 素材来源

- DeViGrasp：用户提供 PDF 第 4 页，Fig. 2。
- HumanWay：用户提供 PDF 第 2 页，Fig. 2。
- UniGuide：用户提供 PDF 第 5 页，Fig. 4（完整执行框架）。
- 四段视频来自用户指定的四个 MP4。已转换为 H.264 / yuv420p，优化网页加载；保留完整内容与原始分辨率。前两段视频无有效声音的静音轨被移除，另两段保留原音频。
- 头像来自用户提供的照片。

网站没有引用外部字体、统计脚本或第三方前端库。
