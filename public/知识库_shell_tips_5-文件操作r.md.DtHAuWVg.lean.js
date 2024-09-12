import{_ as s,c as i,j as l,a as n,G as d,w as t,B as o,o as a}from"./chunks/framework.bh9iDcjP.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"知识库/shell/tips/5-文件操作r.md","filePath":"知识库/shell/tips/5-文件操作r.md","lastUpdated":1726110169000}'),c={name:"知识库/shell/tips/5-文件操作r.md"};function p(g,u,k,b,h,m){const r=o("Card"),e=o("Collapse");return a(),i("div",null,[u[7]||(u[7]=l("h4",{id:"增-mkdir",tabindex:"-1"},[n("增 mkdir "),l("a",{class:"header-anchor",href:"#增-mkdir","aria-label":'Permalink to "增 mkdir"'},"​")],-1)),u[8]||(u[8]=l("hr",null,null,-1)),d(r,null,{title:t(()=>u[0]||(u[0]=[n(" 实例 ")])),_:1}),u[9]||(u[9]=l("hr",null,null,-1)),d(e,null,{default:t(()=>u[1]||(u[1]=[l("blockquote",null,[l("p",null,[l("strong",null,"作用")])],-1),l("hr",null,null,-1),l("blockquote",null,[l("p",null,[l("strong",null,"语法")])],-1),l("hr",null,null,-1),l("blockquote",null,[l("p",null,[l("strong",null,"选项")])],-1),l("hr",null,null,-1),l("blockquote",null,[l("p",null,[l("strong",null,"参数")])],-1)])),_:1}),u[10]||(u[10]=l("hr",null,null,-1)),u[11]||(u[11]=l("h4",{id:"改-vi-vim",tabindex:"-1"},[n("改 vi/vim "),l("a",{class:"header-anchor",href:"#改-vi-vim","aria-label":'Permalink to "改 vi/vim"'},"​")],-1)),u[12]||(u[12]=l("hr",null,null,-1)),d(r,null,{title:t(()=>u[2]||(u[2]=[n(" 编辑个文件 ")])),default:t(()=>[u[3]||(u[3]=n(" 1. 创建一个文件： touch wc.js 2. 进入编程：vi wc.js 3. 写代码 ")),u[4]||(u[4]=l("div",{class:"language-js vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"js"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),l("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1122"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1)),u[5]||(u[5]=l("p",null,"4.输入内容保存并推出：：wq 5.执行可执行文件 wc.js",-1))]),_:1}),u[13]||(u[13]=l("hr",null,null,-1)),d(e,null,{default:t(()=>u[6]||(u[6]=[l("blockquote",null,[l("p",null,[l("strong",null,"vim键盘图")])],-1),l("p",null,[l("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011343347.png",alt:"alt text",loading:"lazy"})],-1),l("hr",null,null,-1),l("blockquote",null,[l("p",null,[l("strong",null,"模式")])],-1),l("ul",null,[l("li",null,"命令行模式（无法编辑）:最初进入的模式，可以进行复制粘贴等操作"),l("li",null,"插入模式（insert:可输入文本）：进行文件编辑，按Esc可以回到命令行模式。"),l("li",null,"底行模式：光标位于屏幕的底行，可以进行文件的保存、退出、查找、替换、列出行号等")],-1),l("hr",null,null,-1),l("blockquote",null,[l("p",null,[l("strong",null,"vi模式切换命令")])],-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"命令"),l("th",null,"作用")])]),l("tbody",null,[l("tr",null,[l("td"),l("td")]),l("tr",null,[l("td",null,"a i o 命令行模式切换为插入模式"),l("td")]),l("tr",null,[l("td",null,[l("code",null,"a"),n("或"),l("code",null,"A"),n(" (append)进入插入模式")]),l("td",null,[n("A 可直接跳转到当前光标所在行的行末位置"),l("br"),n("a 从当前光标所在位置后一个位置开始插入键盘输入的字符")])]),l("tr",null,[l("td",null,[l("code",null,"i"),n("或"),l("code",null,"I"),n(" (insert)进入插入模式")]),l("td",null,[n("I 可直接跳转到当前光标所在行的行首位置"),l("br"),n("i 当前光标所在位置")])]),l("tr",null,[l("td",null,[l("code",null,"o"),n("或"),l("code",null,"O"),n(" (open)进入插入模式")]),l("td",null,[n("O光标所在行上一行生成一个空行"),l("br"),n("o光标所在行后生成一个空白行")])]),l("tr",null,[l("td",null,[l("code",null,":"),n("和"),l("code",null,"!"),n(" 外部命令")]),l("td",null,[n("在vi中执行外部命令，如 ："),l("code",null,"!pwd"),n("查看当前路径 "),l("code",null,"!date"),n(" 查看时间等，回车可回到vi")])]),l("tr",null,[l("td"),l("td")]),l("tr",null,[l("td",null,"Esc 进入命令行模式"),l("td")]),l("tr",null,[l("td"),l("td")]),l("tr",null,[l("td",null,[n("命令行模式下，键盘按下 "),l("code",null,"shift+:")]),l("td",null,"由命令行模式进入底行模式")]),l("tr",null,[l("td"),l("td")])])],-1),l("hr",null,null,-1),l("blockquote",null,[l("p",null,[l("strong",null,"命令输入")])],-1),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"命令"),l("th",null,"作用")])]),l("tbody",null,[l("tr",null,[l("td",null,"命令行命令：复制、粘贴、剪切等。[n]:从光标所在行选中的行数"),l("td")]),l("tr",null,[l("td",null,[l("code",null,"[n]x"),n(" 意思是在n行按"),l("code",null,"x")]),l("td",null,"删除，删除光标所在的位置内容，或从光标所在位置后的n个字符。")]),l("tr",null,[l("td",null,[l("code",null,"[n]dd"),n(" 意思是按两次d")]),l("td",null,"剪切/删除行，剪切光标所在行或光标所在行后的n行内容，删除光标所在行或光标所在行后的n行内容")]),l("tr",null,[l("td",null,[l("code",null,"[n]yy")]),l("td",null,"复制,复制光标所在行或光标所在行后的n行内容")]),l("tr",null,[l("td",null,[l("code",null,"p/P")]),l("td",null,"粘贴，p将复制或剪切的内容粘贴到光标的下一行，P是上一行，注意光标位置，")]),l("tr",null,[l("td",null,[l("code",null,"u"),n(" （undo）")]),l("td",null,"取消上一次操作（撤销/上一步）")]),l("tr",null,[l("td",null,[l("code",null,"ctrl+r")]),l("td",null,"反撤销")]),l("tr",null,[l("td",null,[l("code",null,"gg")]),l("td",null,"光标移动到首行")]),l("tr",null,[l("td",null,[l("code",null,"G")]),l("td",null,"光标移动到末行")]),l("tr",null,[l("td",null,[l("code",null,"1G"),n("同时按1和G")]),l("td",null,"移动光标到文件的第一行")]),l("tr",null,[l("td",null,[l("code",null,"0")]),l("td",null,"光标移动到当前行行首")]),l("tr",null,[l("td",null,[l("code",null,"$")]),l("td",null,"光标移动到当前行行尾")]),l("tr",null,[l("td",null,[l("code",null,"h"),n("左 "),l("code",null,"i"),n("下 "),l("code",null,"k"),n(" 上 "),l("code",null,"l"),n("右")]),l("td",null,"方向键")]),l("tr",null,[l("td",null,[l("code",null,"y0")]),l("td",null,"复制光标所在位置该行前的内容")]),l("tr",null,[l("td",null,[l("code",null,"y$")]),l("td",null,"复制光标所在位置该行后的内容")]),l("tr",null,[l("td",null,[l("code",null,"d0")]),l("td",null,"复制光标所在位置该行后的内容w")]),l("tr",null,[l("td",null,[l("code",null,"d$")]),l("td",null,"剪切光标所在位置该行后的内容")]),l("tr",null,[l("td",null,"指定行复制"),l("td")]),l("tr",null,[l("td",null,[l("code",null,"1，10 y")]),l("td",null,"一到十行")]),l("tr",null,[l("td",null,[l("code",null,"1，$ y")]),l("td",null,"第一行到最后一行")]),l("tr",null,[l("td",null,[l("code",null,".，$ y")]),l("td",null,"当前行到最后一行")]),l("tr",null,[l("td",null,[l("code",null,"% y")]),l("td",null,"全部")]),l("tr",null,[l("td",null,"指定行剪切/删除"),l("td",null,"把上面y换成d")]),l("tr",null,[l("td"),l("td")]),l("tr",null,[l("td"),l("td")]),l("tr",null,[l("td",null,[n("底行命令 在编辑器最后一行 ，前面带 "),l("code",null,":")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"q")]),l("td",null,"退出没有修改的文件，若修改过未保存则不能退出")]),l("tr",null,[l("td",null,[l("code",null,"q!")]),l("td",null,"强制退出，且不保存修改过的部分")]),l("tr",null,[l("td",null,[l("code",null,"w")]),l("td",null,"保存但不退出")]),l("tr",null,[l("td",null,[l("code",null,"w!")]),l("td",null,"强制保存")]),l("tr",null,[l("td",null,[l("code",null,"w 文件名")]),l("td",null,"可另存为新文件并保存本文件")]),l("tr",null,[l("td",null,[l("code",null,"x"),n(" 或 "),l("code",null,"wq")]),l("td",null,"保存文件并退出")]),l("tr",null,[l("td",null,[l("code",null,"r 文件名")]),l("td",null,"读入file指定的文件内容插入到本文件中")]),l("tr",null,[l("td",null,[l("code",null,"vps")]),l("td",null,[n("编译器分屏 底行输入"),l("code",null,"q"),n(" 退出")])]),l("tr",null,[l("td",null,[l("code",null,"数字")]),l("td",null,"移动光标到对应行")]),l("tr",null,[l("td",null,[l("code",null,"set number")]),l("td",null,"设置显示行号")]),l("tr",null,[l("td",null,[l("code",null,"set nonu")]),l("td",null,"取消显示行号")]),l("tr",null,[l("td",null,[l("code",null,"/aa"),n(" 查找字符串 aa")]),l("td",null,[l("code",null,"n "),n("继续查找 "),l("code",null,"N"),n("反向继续查找")])]),l("tr",null,[l("td"),l("td")]),l("tr",null,[l("td",null,[l("code",null,"s/旧文本/新文本/")]),l("td",null,"替换当前行的文本")]),l("tr",null,[l("td",null,[l("code",null,"s/旧文本/新文本/g")]),l("td",null,"替换当前行的所有匹配文本")]),l("tr",null,[l("td",null,[l("code",null,".,$s/旧文本/新文本/g")]),l("td",null,"从当前行到文件末尾")]),l("tr",null,[l("td",null,[l("code",null,"%s/旧文本/新文本/g")]),l("td",null,"全局替换（整个文件）")]),l("tr",null,[l("td",null,[l("code",null,"%s/旧文本/新文本/gc")]),l("td",null,"%s/旧文本/新文本/gc")]),l("tr",null,[l("td",null,[l("code",null,"[起始行数],[结束行数]s/旧文本/新文本/g")]),l("td",null,"替换指定范围内的文本")]),l("tr",null,[l("td",null,[l("code",null,"[起始行数],[结束行数]s/旧文本/新文本/gc")]),l("td",null,"替换指定范围内的文本（带确认）")]),l("tr",null,[l("td",null,[l("code",null,"1,.s/旧文本/新文本/g")]),l("td",null,"仅在当前行之前的行中替换")]),l("tr",null,[l("td",null,[l("code",null,"%"),n(" 表示整个文件。"),l("code",null,"g"),n(" 表示全局（行内所有匹配项）。"),l("code",null,"c"),n(" 表示确认（每次替换前询问确认）。")]),l("td")]),l("tr",null,[l("td"),l("td")])])],-1)])),_:1}),u[14]||(u[14]=l("hr",null,null,-1)),u[15]||(u[15]=l("br",null,null,-1))])}const f=s(c,[["render",p]]);export{y as __pageData,f as default};
