import{_ as p,c as e,j as s,a as i,G as t,a5 as l,o as c,B as o}from"./chunks/framework.C_A3z-40.js";const v=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"知识库/部署/nginx/main.md","filePath":"知识库/部署/nginx/main.md","lastUpdated":1726739291000}'),r={name:"知识库/部署/nginx/main.md"};function d(h,n,m,g,x,u){const a=o("ArticleMetadata");return c(),e("div",null,[n[0]||(n[0]=s("h1",{id:"nginx",tabindex:"-1"},[i("nginx "),s("a",{class:"header-anchor",href:"#nginx","aria-label":'Permalink to "nginx"'},"​")],-1)),t(a),n[1]||(n[1]=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>启动</span></span>
<span class="line"><span>start nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重启</span></span>
<span class="line"><span>nginx -s reload</span></span></code></pre></div><h2 id="配置-nginx-conf" tabindex="-1">配置 nginx.conf <a class="header-anchor" href="#配置-nginx-conf" aria-label="Permalink to &quot;配置 nginx.conf&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>worker_processes 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections 1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include mime.types;</span></span>
<span class="line"><span>    default_type application/octet-stream;</span></span>
<span class="line"><span>    sendfile on;</span></span>
<span class="line"><span>    keepalive_timeout 65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 8101; #1.你想让你的这个项目跑在哪个端口</span></span>
<span class="line"><span>        server_name localhost; #2.当前服务器ip</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root html/web/; #3.dist文件的位置(根据自己dist包放置的位置决定)</span></span>
<span class="line"><span>            try_files $uri $uri/ /index.html; #4.重定向,内部文件的指向(照写，history和bash通用，这里配置主要是兼容history模式，进行一 个404的重定向)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3))])}const b=p(r,[["render",d]]);export{v as __pageData,b as default};
