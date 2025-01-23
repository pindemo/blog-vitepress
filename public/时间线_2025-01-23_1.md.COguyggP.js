import{_ as t,c as s,j as a,a as l,G as n,a5 as o,B as i,o as c}from"./chunks/framework.CQgWBaaW.js";const x=JSON.parse('{"title":"使用cursor-auto-free,让cursor无限续杯","description":"","frontmatter":{},"headers":[],"relativePath":"时间线/2025-01-23/1.md","filePath":"时间线/2025-01-23/1.md","lastUpdated":1737619567000}'),p={name:"时间线/2025-01-23/1.md"};function d(h,e,u,m,b,f){const r=i("ArticleMetadata");return c(),s("div",null,[e[0]||(e[0]=a("h1",{id:"使用cursor-auto-free-让cursor无限续杯",tabindex:"-1"},[l("使用"),a("code",null,"cursor-auto-free"),l(",让"),a("code",null,"cursor"),l("无限续杯 "),a("a",{class:"header-anchor",href:"#使用cursor-auto-free-让cursor无限续杯","aria-label":'Permalink to "使用`cursor-auto-free`,让`cursor`无限续杯"'},"​")],-1)),n(r),e[1]||(e[1]=o(`<h2 id="仓库文档" tabindex="-1">仓库文档 <a class="header-anchor" href="#仓库文档" aria-label="Permalink to &quot;仓库文档&quot;">​</a></h2><p><a href="https://github.com/chengazhen/cursor-auto-free" target="_blank" rel="noreferrer">仓库</a></p><p><a href="https://cursor-auto-free-doc.vercel.app/zh/quick-start.html" target="_blank" rel="noreferrer">文档</a></p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li>安装Google Chrome <a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank" rel="noreferrer">https://www.google.cn/intl/zh-CN/chrome/</a></li><li>Cursor Web端必须登录账号 <a href="https://www.cursor.com/" target="_blank" rel="noreferrer">https://www.cursor.com/</a></li><li>国外的节点。并且不要开启全局代理</li><li>从 <a href="https://github.com/chengazhen/cursor-auto-free/releases" target="_blank" rel="noreferrer"><strong>GitHub Releases</strong></a> 下载最新版本</li><li>下载 <code>.env.example</code> 到跟<code>exe</code>同文件夹里并重命名为 <code>.env</code></li></ul><h2 id="配置cloudflare邮箱" tabindex="-1">配置<code>Cloudflare</code>邮箱 <a class="header-anchor" href="#配置cloudflare邮箱" aria-label="Permalink to &quot;配置\`Cloudflare\`邮箱&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://www.bilibili.com/opus/1009230191177760773" target="_blank" rel="noreferrer">轻松获取域名邮箱【保姆级教学】</a></li><li></li></ul></div><ul><li>注册账户，<a href="https://dash.cloudflare.com/" target="_blank" rel="noreferrer">https://dash.cloudflare.com/</a></li><li>点击账户主页,点击添加域</li><li>输入现有域名，点继续</li><li>选择免费的free计划，然后继续</li><li>出现两个DNS服务器，去<a href="https://console.cloud.tencent.com/cns" target="_blank" rel="noreferrer">腾讯云域名管理</a></li><li>在域名基本信息位置，修改DNS服务器，改为Cloudflare提供的两个服务器</li><li>等个20分钟验证成功</li><li>先点击域名里，然后进入电子邮件路由，设置邮件转发功能</li><li>后续参考<a href="https://cursor-auto-free-doc.vercel.app/zh/quick-start.html" target="_blank" rel="noreferrer">文档</a></li></ul><h2 id="配置-env" tabindex="-1">配置 <code>.env</code> <a class="header-anchor" href="#配置-env" aria-label="Permalink to &quot;配置 \`.env\`&quot;">​</a></h2><h3 id="使用临时邮箱-没效果" tabindex="-1">使用临时邮箱 (没效果) <a class="header-anchor" href="#使用临时邮箱-没效果" aria-label="Permalink to &quot;使用临时邮箱 (没效果)&quot;">​</a></h3><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DOMAIN=&#39;xxxxx.me&#39;    # 你的 Cloudflare 域名</span></span>
<span class="line"><span>TEMP_MAIL=&#39;xxxxxx&#39;   # tempmail.plus 生成的临时邮箱地址</span></span></code></pre></div><h3 id="使用-imap-邮箱" tabindex="-1">使用 IMAP 邮箱 <a class="header-anchor" href="#使用-imap-邮箱" aria-label="Permalink to &quot;使用 IMAP 邮箱&quot;">​</a></h3><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DOMAIN=&#39;wozhangsan.me&#39;  # 你的 Cloudflare 域名</span></span>
<span class="line"><span>TEMP_MAIL=null          # 设置为 null 启用 IMAP 模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IMAP服务器配置</span></span>
<span class="line"><span>IMAP_SERVER=imap.xxxxx.com  # 例如：QQ邮箱，Gmail</span></span>
<span class="line"><span>IMAP_PORT=993               # QQ: 995, Gmail: 993</span></span>
<span class="line"><span>IMAP_USER=xxxx@xxxx.com    # 接收邮箱地址</span></span>
<span class="line"><span>IMAP_PASS=xxxxxxxxxxxxx    # 邮箱授权码</span></span>
<span class="line"><span># IMAP_DIR=                  # [可选] 默认为收件箱(inbox)</span></span></code></pre></div><ul><li>开启imap，参考 <a href="https://www.berllo.com/faq/29225/" target="_blank" rel="noreferrer">https://www.berllo.com/faq/29225/</a></li><li>IMAP_SERVER 填入 imap.gmail.com</li><li>IMAP_PASS， 参考 <a href="https://blog.csdn.net/weixin_41549524/article/details/127572676" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_41549524/article/details/127572676</a></li></ul><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><p>直接双击运行 <code>CursorPro.exe</code></p><h2 id="后续问题" tabindex="-1">后续问题 <a class="header-anchor" href="#后续问题" aria-label="Permalink to &quot;后续问题&quot;">​</a></h2><ul><li>使用<code>cloudflare</code>后 网站会重定向的次数过多。 参考 <a href="https://blog.csdn.net/qq_21405949/article/details/144277026?spm=1001.2101.3001.6650.4&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-4-144277026-blog-144770932.235%5Ev43%5Epc_blog_bottom_relevance_base6&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-4-144277026-blog-144770932.235%5Ev43%5Epc_blog_bottom_relevance_base6&amp;utm_relevant_index=7" target="_blank" rel="noreferrer">华为云域名网站，域名切换到Cloudflare CDN出现访问报错：DNS 重定向次过多</a></li></ul>`,18))])}const g=t(p,[["render",d]]);export{x as __pageData,g as default};
