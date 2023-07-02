const e=JSON.parse('{"key":"v-26aed78f","path":"/posts/React/Diff.html","title":"Diff","lang":"zh-CN","frontmatter":{"description":"Diff What diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。 When React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历。 How React选择了深度优先遍历算法作为组件更新的方式。深度优先遍历会先遍历完整个子树，然后再返回遍历父节点的兄弟节点。这样可以确保在组件更新时，先处理完所有子组件的更新，再处理父组件的更新，保证了组件的生命周期时序的正确性。 但传统的深度优先遍历方式，效率较低，复杂程度为 。为了优化效率，使用了分治的方式将复杂度降低为 。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/kiki/posts/React/Diff.html"}],["meta",{"property":"og:site_name","content":"Kiki"}],["meta",{"property":"og:title","content":"Diff"}],["meta",{"property":"og:description","content":"Diff What diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。 When React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历。 How React选择了深度优先遍历算法作为组件更新的方式。深度优先遍历会先遍历完整个子树，然后再返回遍历父节点的兄弟节点。这样可以确保在组件更新时，先处理完所有子组件的更新，再处理父组件的更新，保证了组件的生命周期时序的正确性。 但传统的深度优先遍历方式，效率较低，复杂程度为 。为了优化效率，使用了分治的方式将复杂度降低为 。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-02T01:14:42.000Z"}],["meta",{"property":"article:author","content":"Miss.Kiki"}],["meta",{"property":"article:modified_time","content":"2023-07-02T01:14:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Diff\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-02T01:14:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Miss.Kiki\\",\\"url\\":\\"https://someqq.github.io/kiki/\\"}]}"]]},"headers":[{"level":2,"title":"What","slug":"what","link":"#what","children":[]},{"level":2,"title":"When","slug":"when","link":"#when","children":[]},{"level":2,"title":"How","slug":"how","link":"#how","children":[]},{"level":2,"title":"对比Vue、Preact","slug":"对比vue、preact","link":"#对比vue、preact","children":[]},{"level":2,"title":"对比Vue","slug":"对比vue","link":"#对比vue","children":[]}],"git":{"createdTime":1688200233000,"updatedTime":1688260482000,"contributors":[{"name":"guoyiqi","email":"guoyiqi@uino.com","commits":2}]},"readingTime":{"minutes":3.8,"words":1141},"filePathRelative":"posts/React/Diff.md","localizedDate":"2023年7月1日","excerpt":"<h1> Diff</h1>\\n<h2> What</h2>\\n<p>diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。</p>\\n<h2> When</h2>\\n<p>React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历。</p>\\n<h2> How</h2>\\n<p>React选择了深度优先遍历算法作为组件更新的方式。深度优先遍历会先遍历完整个子树，然后再返回遍历父节点的兄弟节点。这样可以确保在组件更新时，先处理完所有子组件的更新，再处理父组件的更新，保证了组件的生命周期时序的正确性。\\n但传统的深度优先遍历方式，效率较低，复杂程度为<img src=\\"https://cdn.nlark.com/yuque/__latex/4a7d22b39e93fbbcbe107e7a19e8bd34.svg#card=math&amp;code=O(n^3) &amp;height=23&amp;id=ldLnY\\" alt=\\"\\" loading=\\"lazy\\"> 。为了优化效率，使用了分治的方式将复杂度降低为 <img src=\\"https://cdn.nlark.com/yuque/__latex/7ba55e7c64a9405a0b39a1107e90ca94.svg#card=math&amp;code=O(n)&amp;height=20&amp;id=jLUOv\\" alt=\\"\\" loading=\\"lazy\\">。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。</p>","autoDesc":true}');export{e as data};