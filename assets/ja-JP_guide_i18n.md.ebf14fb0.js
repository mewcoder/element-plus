import{_ as n,c as a,o as s,e}from"./app.0c76b38c.js";const t='{"title":"国際化","description":"","frontmatter":{"title":"国際化"},"headers":[{"level":2,"title":"グローバルコンフィギュレーション","slug":"グローバルコンフィギュレーション"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"CDN の使用状況","slug":"cdn-の使用状況"},{"level":2,"title":"よくあるご質問","slug":"よくあるご質問"},{"level":3,"title":"デフォルトの言語パックを置き換えてサイズを小さくしたい場合は、どうすればいいですか?","slug":"デフォルトの言語パックを置き換えてサイズを小さくしたい場合は、どうすればいいですか"}],"relativePath":"ja-JP/guide/i18n.md","lastUpdated":1632714748907}',l={},p=[e('<h1 id="国際化" tabindex="-1">国際化 <a class="header-anchor" href="#国際化" aria-hidden="true">#</a></h1><p>Element Plus components are using English <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h2 id="グローバルコンフィギュレーション" tabindex="-1">グローバルコンフィギュレーション <a class="header-anchor" href="#グローバルコンフィギュレーション" aria-hidden="true">#</a></h2><p>Element Plus provides global configurations</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor" href="#configprovider" aria-hidden="true">#</a></h2><p>Element Plus also provides a Vue component <a href="/en-US/component/config-provider.html">ConfigProvider</a> for globally configuring locale and other settings.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n\n  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      ElConfigProvider<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="cdn-の使用状況" tabindex="-1">CDN の使用状況 <a class="header-anchor" href="#cdn-の使用状況" aria-hidden="true">#</a></h2><p>If you are using Element Plus via CDN, then you need to do this, let&#39;s again take unpkg as an example</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    locale<span class="token operator">:</span> ElementPlus<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>zhCn\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>完全なドキュメント 参照: <a href="/en-US/component/config-provider.html">ConfigProvider</a></p><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noopener noreferrer">サポートしている言語リスト</a></p><ul class="language-list"><li>簡体字中国語 (zh-cn)</li><li>アメリカ英語（en）</li><li>ドイツ語 (de)</li><li>ポルトガル語 (pt)</li><li>スペイン語 (es)</li><li>デンマーク語 (da)</li><li>フランス語 (fr)</li><li>ノルウェー語 (nb-NO)</li><li>繁体字中国語 (zh-tw)</li><li>イタリア語(it)</li><li>韓国語（ko）</li><li>Japanese (ja)</li><li>オランダ語（nl）</li><li>Vietnamese (vi)</li><li>ロシア語（ル）</li><li>トルコ語 (tr)</li><li>ポルトガル語 (pt-br)</li><li>Farsi (fa)</li><li>タイ (th)</li><li>インドネシア語（ID）</li><li>ブルガリア語 (bg)</li><li>ポーランド語（pl）</li><li>フィンランド語(fi)</li><li>スウェーデン語 (sv)</li><li>ギリシャ語(el)</li><li>Slovak (sk)</li><li>Catalunya (ca)</li><li>チェコ語 (cs)</li><li>ウクライナ語 (uk)</li><li>トルクメン（tk）</li><li>Tamil (ta)</li><li>ラトビア語(レベル)</li><li>Afrikaans (af)</li><li>Estonian (et)</li><li>Slovenian (sl)</li><li>Arabic (ar)</li><li>ヘブライ語（彼）</li><li>リトアニア語 (左)</li><li>Mongolian (mn)</li><li>Kazakh (kk)</li><li>ハンガリー語（hu）</li><li>ルーマニア語 (ro)</li><li>クルド語（ク）</li><li>Uighur (ug-cn)</li><li>クメール語 (km)</li><li>セルビア語 (sr)</li><li>バスク語（eu）</li><li>Kyrgyz (ky)</li><li>アルメニア語 (hy-am)</li><li>クロアチア語 (hr)</li><li>Esperanto (eo)</li></ul><p>If you need any other languages, <a href="https://github.com/element-plus/element-plus/pulls" target="_blank" rel="noopener noreferrer">PR</a> is always welcomed, you only need to add a language file at <a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="よくあるご質問" tabindex="-1">よくあるご質問 <a class="header-anchor" href="#よくあるご質問" aria-hidden="true">#</a></h2><h3 id="デフォルトの言語パックを置き換えてサイズを小さくしたい場合は、どうすればいいですか" tabindex="-1">デフォルトの言語パックを置き換えてサイズを小さくしたい場合は、どうすればいいですか? <a class="header-anchor" href="#デフォルトの言語パックを置き換えてサイズを小さくしたい場合は、どうすればいいですか" aria-hidden="true">#</a></h3><p>When the default language of your app is not <strong>English</strong>, you will be going to need to import another language file, which will increase the bundle size since you have both <strong>English</strong> and <strong>Your desired language</strong> bundled, you can use the plugin <a href="https://webpack.js.org/plugins/normal-module-replacement-plugin/#root" target="_blank" rel="noopener noreferrer">NormalModuleReplacementPlugin</a> provided by <a href="https://webpack.js.org" target="_blank" rel="noopener noreferrer">webpack</a> to replace the default language file, so that you will only get <strong>1</strong> language file bundled. 以下のコードを <code>webpack.config.js</code> に追加して動作します。</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-typescript"><pre><code><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack</span><span class="token punctuation">.</span><span class="token function">NormalModuleReplacementPlugin</span><span class="token punctuation">(</span>\n      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n      <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',20)];var o=n(l,[["render",function(n,e,t,l,o,i){return s(),a("div",null,p)}]]);export{t as __pageData,o as default};
