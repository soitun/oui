import{_ as t,o,c as i,b as n,d as a,e as s,a as p,r as l}from"./app.0824adc8.js";const c={},r=n("h1",{id:"\u5FEB\u901F\u4E0A\u624B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4E0A\u624B","aria-hidden":"true"},"#"),s(" \u5FEB\u901F\u4E0A\u624B")],-1),u={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=s("\u9605\u8BFB\u672C\u6559\u7A0B\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u5177\u5907 "),m={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=s("Vue3"),k=s(" \u7684\u77E5\u8BC6\u3002"),g=s("Oui \u9ED8\u8BA4\u4F7F\u7528 "),b={href:"https://www.naiveui.com/",target:"_blank",rel:"noopener noreferrer"},_=s("Naive UI"),q=s(" \u4F5C\u4E3A\u5176 UI \u6846\u67B6\u3002\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u9700\u6C42\uFF0C\u9009\u62E9\u9002\u5408\u81EA\u5DF1\u7684 UI \u6846\u67B6\u3002"),x=p(`<h2 id="\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a> \u7F16\u8BD1</h2><p>\u6DFB\u52A0 feed</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;src-git oui https://github.com/zhaojh329/oui.git&quot;</span> <span class="token operator">&gt;&gt;</span> feeds.conf.default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66F4\u65B0feed</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./scripts/feeds update oui
./scripts/feeds <span class="token function">install</span> -a -p oui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED9 Nginx \u6253\u4E0A\u8865\u4E01 patches-nginx</p><p>\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>OUI  ---&gt;
    Applications  ---&gt;
        &lt;*&gt; oui-app-acl. ACL
        &lt;*&gt; oui-app-backup. Backup / Restore
        &lt;*&gt; oui-app-dhcp-lease. DHCP lease
        &lt;*&gt; oui-app-home. Home
        &lt;*&gt; oui-app-layout. Layout
        &lt;*&gt; oui-app-login. Login
        &lt;*&gt; oui-app-stations. Stations
        &lt;*&gt; oui-app-system. System Configure
        &lt;*&gt; oui-app-upgrade. Upgrade
        &lt;*&gt; oui-app-user. User
  -*- oui-rpc-core. Oui rpc core
  -*- oui-ui-core. Oui ui core
  [*] Use existing nodejs installation on the host system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52FE\u9009 CONFIG_OUI_USE_HOST_NODE\uFF0C\u53EF\u8282\u7EA6\u7F16\u8BD1\u65F6\u95F4</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u52FE\u9009 CONFIG_OUI_USE_HOST_NODE\uFF0C\u9700\u8981\u786E\u4FDD\u4E3B\u673A\u4E0A\u5B89\u88C5\u7684 Node \u7248\u672C\u4E0D\u4F4E\u4E8E 14.18\u3002</p></div><p>\u7F16\u8BD1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token assign-left variable">V</span><span class="token operator">=</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u9875\u9762" aria-hidden="true">#</a> \u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u9875\u9762</h2><p>\u4E00\u4E2A\u57FA\u672C\u7684\u9875\u9762\u7684\u76EE\u5F55\u7ED3\u6784\u662F\u8FD9\u6837\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oui-app-demo/
\u251C\u2500\u2500 files
\u2502   \u251C\u2500\u2500 menu.json
\u2502   \u2514\u2500\u2500 rpc
\u2502       \u2514\u2500\u2500 demo.lua
\u251C\u2500\u2500 htdoc
\u2502   \u251C\u2500\u2500 index.vue
\u2502   \u251C\u2500\u2500 locale.json
\u2502   \u251C\u2500\u2500 package.json
\u2502   \u251C\u2500\u2500 package-lock.json
\u2502   \u2514\u2500\u2500 vite.config.js
\u2514\u2500\u2500 Makefile

3 directories, 8 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83DC\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u83DC\u5355\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;/demo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui Demo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;en-US&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui Demo&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-CN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui \u793A\u8303&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-TW&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui \u793A\u7BC4&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;svg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-xmlns&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-xmlns:xlink&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/1999/xlink&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-viewBox&quot;</span><span class="token operator">:</span><span class="token string">&quot;0 0 512 512&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-d&quot;</span><span class="token operator">:</span><span class="token string">&quot;M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61l-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 0 1 0 .15a15.42 15.42 0 0 0-.53 1.58L15.86 352h51.78l45.45-55l96.77 2.17L135.24 464h63l133-161.75l57.77 1.54c4.29.23 16 .31 18.66.31c24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-fill&quot;</span><span class="token operator">:</span><span class="token string">&quot;currentColor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),f=s("\u5176\u4E2D\u7684 svg \u4E3A\u83DC\u5355\u56FE\u6807\u3002\u5230 "),w={href:"https://www.xicons.org/#/",target:"_blank",rel:"noopener noreferrer"},y=s("xicons"),O=s(" \u590D\u5236\u9700\u8981\u7684\u56FE\u6807\u7684 svg \u4EE3\u7801\uFF0C\u7136\u540E\u5230 "),j={href:"https://www.w3cschool.cn/tools/index?name=xmljson",target:"_blank",rel:"noopener noreferrer"},N=s("xml2json"),U=s(" \u8FD9\u4E2A\u7F51\u7AD9\u4E0A\u5C06 svg \u7684\u4EE3\u7801\u8F6C\u6362\u4E3A json \u683C\u5F0F\u3002");function I(C,L){const e=l("ExternalLinkIcon");return o(),i("div",null,[r,n("div",u,[d,n("p",null,[v,n("a",m,[h,a(e)]),k]),n("p",null,[g,n("a",b,[_,a(e)]),q])]),x,n("p",null,[f,n("a",w,[y,a(e)]),O,n("a",j,[N,a(e)]),U])])}var E=t(c,[["render",I],["__file","getting-started.html.vue"]]);export{E as default};
