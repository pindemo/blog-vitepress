import{_ as t,c as e,j as i,a as l,G as n,a4 as p,o as r,B as h}from"./chunks/framework.bh9iDcjP.js";const F=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[],"relativePath":"知识库/git/main.md","filePath":"知识库/git/main.md","lastUpdated":1726216260000}'),d={name:"知识库/git/main.md"};function c(o,s,g,k,u,m){const a=h("ArticleMetadata");return r(),e("div",null,[s[0]||(s[0]=i("h1",{id:"git",tabindex:"-1"},[l("git "),i("a",{class:"header-anchor",href:"#git","aria-label":'Permalink to "git"'},"​")],-1)),n(a),s[1]||(s[1]=p(`<h2 id="多个commit合并成一个" tabindex="-1">多个commit合并成一个 <a class="header-anchor" href="#多个commit合并成一个" aria-label="Permalink to &quot;多个commit合并成一个&quot;">​</a></h2><ul><li>输入<code>git log -8</code> //查看前8条提交</li><li>按大写ZZ退出日志查看，输入<code>git rebase -i HEAD~3 </code> //表示最近的3条合并成一条(如果失败，检查有没有为提交或暂存的修改，提交或暂存它们)</li><li>输入完后界面如下，按i进入编译模式，将第2，3个pick改为s，表示将后2条合并到第一条中，然后按<code>esc</code>退出编译模式，然后按大写<code>ZZ</code>，再按ZZ彻底退出 <code>ctrl+w</code> 快速删了pick</li></ul><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011347740.png" alt="alt text" loading="lazy"></p><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011348771.png" alt="alt text" loading="lazy"></p><ul><li>可以通过<code>git log</code>看合并情况，如下图表示合并成功，然后输入<code>git push --force</code>推送到远程</li></ul><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011348452.png" alt="alt text" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://www.cnblogs.com/liuXiaoDi/p/17720189.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/liuXiaoDi/p/17720189.html</a></li><li><a href="https://blog.csdn.net/Albert_J/article/details/135759398" target="_blank" rel="noreferrer">https://blog.csdn.net/Albert_J/article/details/135759398</a></li></ul></div><h2 id="在-github-提交第一个-pull-request" tabindex="-1">在 GitHub 提交第一个 pull request <a class="header-anchor" href="#在-github-提交第一个-pull-request" aria-label="Permalink to &quot;在 GitHub 提交第一个 pull request&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://www.freecodecamp.org/chinese/news/how-to-make-your-first-pull-request-on-github/" target="_blank" rel="noreferrer">如何在 GitHub 提交第一个 pull request</a></li></ul></div><h2 id="审核-pull-request" tabindex="-1">审核 pull request <a class="header-anchor" href="#审核-pull-request" aria-label="Permalink to &quot;审核 pull request&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://blog.csdn.net/wohu1104/article/details/123218389" target="_blank" rel="noreferrer">GitHub 中 Merge pull request 的 3 中选项说明</a></li></ul></div><h2 id="git-merge" tabindex="-1">git merge <a class="header-anchor" href="#git-merge" aria-label="Permalink to &quot;git merge&quot;">​</a></h2><p>功能：</p><ul><li>git merge将两个分支的历史记录合并在一起，创建一个新的合并提交（merge commit）。</li><li>合并后，两个分支的历史都会保留，分支的提交历史将会有一个合并点。</li></ul><p>使用场景：</p><ul><li>保持完整历史记录：当你希望保留每个分支的完整历史记录，包括所有的提交和合并点时使用git merge。</li><li>多团队协作：在团队协作开发中，git merge可以清晰地显示出分支的合并历史，有助于追踪变化。</li></ul><p>命令示例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到主分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 合并 feature 分支到 master 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011349879.webp" alt="img" loading="lazy"></p><p>优点：</p><ul><li>保留完整的历史记录和分支结构。</li><li>解决冲突时可以明确看到冲突的来源。</li></ul><p>缺点：</p><ul><li>可能会产生多次合并提交，使历史记录较为复杂。</li></ul><h2 id="git-merge-squash" tabindex="-1">git merge --squash <a class="header-anchor" href="#git-merge-squash" aria-label="Permalink to &quot;git merge --squash&quot;">​</a></h2><p>功能：</p><ul><li>git merge --squash将一个分支的所有提交压缩成一个单独的提交进行合并。</li><li>不会产生合并提交，提交历史上只有一个新的提交。</li></ul><p>使用场景：</p><ul><li>简化历史记录：当你希望将一个功能分支的所有工作合并为一个提交，以简化提交历史时使用<code>git merge --squash</code>。</li><li>合并大量微小提交：如果一个分支上有大量的微小提交，可以使用squash将这些提交压缩成一个，避免提交历史过于冗长。</li></ul><p>命令示例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到主分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 压缩合并 feature 分支的所有提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --squash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交合并后的更改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Squashed commit for feature&quot;</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011349648.webp" alt="img" loading="lazy"></p><p>优点：</p><ul><li>提交历史更加简洁，便于阅读。</li><li>保持功能开发的独立性，合并时减少了历史记录的噪音。</li></ul><p>缺点：</p><ul><li>失去了详细的提交历史，无法追踪每个单独的提交。</li><li>也会产生一次提交，不过不是合并提交，就是普通提交。</li></ul><h2 id="git-rebase" tabindex="-1">git rebase <a class="header-anchor" href="#git-rebase" aria-label="Permalink to &quot;git rebase&quot;">​</a></h2><p>功能：</p><ul><li><code>git rebase</code>将一个分支的所有提交重新应用到另一个分支上，生成新的提交。</li><li>历史记录将被重写，避免创建合并提交。</li></ul><p>使用场景：</p><ul><li>保持线性历史：当你希望保持提交历史的线性结构，避免合并提交时使用<code>git rebase</code>。</li><li>整洁的提交历史：在个人开发或小团队合作中，可以使用<code>git rebase</code>保持整洁的提交历史，使日志记录更加简洁明了。</li></ul><p>命令示例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到 feature 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 feature 分支的提交重新应用到 master 分支上</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到 master 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 合并 feature 分支到 master 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011349083.webp" alt="image.png" loading="lazy"></p><p>优点：</p><ul><li>保持线性的提交历史，日志记录更整洁。</li><li>合并后的历史更容易阅读和理解。</li></ul><p>缺点：</p><ul><li>需要解决所有提交的冲突，可能比较繁琐。</li><li>在公共分支上使用rebase可能导致混乱，建议仅在私有分支上使用。</li></ul><table tabindex="0"><thead><tr><th>特性</th><th>git merge</th><th>git merge --squash</th><th>git rebase</th></tr></thead><tbody><tr><td>历史记录</td><td>保留完整的历史记录和分支结构</td><td>将多个提交压缩成一个提交</td><td>重写历史，保持线性</td></tr><tr><td>合并提交</td><td>生成一个合并提交</td><td>不生成合并提交，只创建一个新的提交</td><td>不生成合并提交</td></tr><tr><td>冲突处理</td><td>解决合并点的冲突</td><td>解决合并时的冲突</td><td>解决每个提交的冲突</td></tr><tr><td>适用场景</td><td>保留完整历史，团队协作</td><td>简化历史，合并大量微小提交</td><td>整洁历史，个人或小团队开发</td></tr><tr><td>优点</td><td>清晰显示合并历史，解决冲突清晰</td><td>提交历史简洁，减少噪音</td><td>保持线性历史，日志记录简洁</td></tr><tr><td>缺点</td><td>可能产生多次合并提交，历史复杂</td><td>失去详细的提交历史</td><td>需要处理每个提交的冲突，公共分支上使用有风险</td></tr></tbody></table><p>选择适当的合并方法应根据具体的开发流程和团队需求来决定。 <code>git merge</code>适合需要保留完整历史记录的场景，而<code>git merge --squash</code>适合需要简化提交历史的场景，<code>git rebase</code>适合需要简洁线性历史的场景。</p>`,49))])}const y=t(d,[["render",c]]);export{F as __pageData,y as default};
