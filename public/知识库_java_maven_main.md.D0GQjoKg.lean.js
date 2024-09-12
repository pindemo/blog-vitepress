import{_ as l,c as n,j as e,a as i,G as r,a4 as s,o,B as c}from"./chunks/framework.bh9iDcjP.js";const _=JSON.parse('{"title":"maven","description":"","frontmatter":{},"headers":[],"relativePath":"知识库/java/maven/main.md","filePath":"知识库/java/maven/main.md","lastUpdated":1726110169000}'),d={name:"知识库/java/maven/main.md"};function p(h,a,m,b,u,g){const t=c("ArticleMetadata");return o(),n("div",null,[a[0]||(a[0]=e("h1",{id:"maven",tabindex:"-1"},[i("maven "),e("a",{class:"header-anchor",href:"#maven","aria-label":'Permalink to "maven"'},"​")],-1)),r(t),a[1]||(a[1]=s(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://blog.csdn.net/qq_51447496/article/details/128046043" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_51447496/article/details/128046043</a></li><li><a href="https://blog.csdn.net/baomingshu/article/details/131456179?spm=1001.2101.3001.6650.5&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-131456179-blog-120388222.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-131456179-blog-120388222.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;utm_relevant_index=8" target="_blank" rel="noreferrer">https://blog.csdn.net/baomingshu/article/details/131456179?spm=1001.2101.3001.6650.5&amp;utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-5-131456179-blog-120388222.235^v43^pc_blog_bottom_relevance_base9&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-5-131456179-blog-120388222.235^v43^pc_blog_bottom_relevance_base9&amp;utm_relevant_index=8</a></li></ul></div><h3 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p><a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">https://maven.apache.org/download.cgi</a></p><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011345522.png" alt="alt text" loading="lazy"></p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><ul><li>新建一个系统变量: <code>变量名为MAVEN_HOME, 变量值为 D:\\maven\\apache-maven-3.6.3，点击确定</code></li><li>在 Path 中进行配置 新建一个，内容为<code>%MAVEN_HOME%\\bin</code></li></ul><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h3><p><code>mvn -v</code></p><h3 id="配置本地仓库" tabindex="-1">配置本地仓库 <a class="header-anchor" href="#配置本地仓库" aria-label="Permalink to &quot;配置本地仓库&quot;">​</a></h3><p>配置本地仓库</p><p>修改 conf/settings.xml 中的 为一个指定目录作为本地仓库，用来存储jar包。</p><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346339.png" alt="alt text" loading="lazy"></p><h2 id="配置idea" tabindex="-1">配置idea <a class="header-anchor" href="#配置idea" aria-label="Permalink to &quot;配置idea&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346159.png" alt="alt text" loading="lazy"></p><h3 id="导入maven项目" tabindex="-1">导入Maven项目 <a class="header-anchor" href="#导入maven项目" aria-label="Permalink to &quot;导入Maven项目&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346210.png" alt="alt text" loading="lazy"></p><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346620.png" alt="alt text" loading="lazy"></p><h3 id="配置-maven-helper-插件" tabindex="-1">配置 Maven-Helper 插件 <a class="header-anchor" href="#配置-maven-helper-插件" aria-label="Permalink to &quot;配置 Maven-Helper 插件&quot;">​</a></h3><p>右键</p><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346927.png" alt="alt text" loading="lazy"></p><h2 id="包" tabindex="-1">包 <a class="header-anchor" href="#包" aria-label="Permalink to &quot;包&quot;">​</a></h2><ul><li>groupId：定义当前Maven项目隶属组织名称（通常是域名反写，例如：com.itheima）</li><li>artifactId：定义当前Maven项目名称（通常是模块名称，例如 order-service、goods-service）</li><li>version：定义当前项目版本号</li></ul><p>表示一个项目</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;groupId&gt;com.study&lt;/groupId&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;artifactId&gt;maven-demo&lt;/artifactId&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span></span></code></pre></div><h3 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h3><ul><li>在项目的 pom.xml 中编写 标签</li><li>在 标签中 使用 引入坐标</li><li>定义坐标的 groupId，artifactId，version</li></ul><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011347459.png" alt="alt text" loading="lazy"></p><h3 id="快捷方式导入jar包" tabindex="-1">快捷方式导入jar包 <a class="header-anchor" href="#快捷方式导入jar包" aria-label="Permalink to &quot;快捷方式导入jar包&quot;">​</a></h3><ul><li>在 pom.xml 中 按 alt + insert，选择 Dependency</li></ul><h3 id="自动导入设置" tabindex="-1">自动导入设置 <a class="header-anchor" href="#自动导入设置" aria-label="Permalink to &quot;自动导入设置&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011347156.png" alt="alt text" loading="lazy"></p><h3 id="maven依赖范围" tabindex="-1">Maven依赖范围 <a class="header-anchor" href="#maven依赖范围" aria-label="Permalink to &quot;Maven依赖范围&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://blog.csdn.net/qq_51447496/article/details/128059639" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_51447496/article/details/128059639</a></li></ul></div><h3 id="maven打包" tabindex="-1">Maven打包 <a class="header-anchor" href="#maven打包" aria-label="Permalink to &quot;Maven打包&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://blog.csdn.net/qq_51447496/article/details/128059668" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_51447496/article/details/128059668</a></p></div>`,36))])}const k=l(d,[["render",p]]);export{_ as __pageData,k as default};
