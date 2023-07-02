import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,f as r}from"./app-2d139388.js";const t={},c=r('<h1 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h1><h2 id="what" tabindex="-1"><a class="header-anchor" href="#what" aria-hidden="true">#</a> What</h2><p>diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。</p><h2 id="when" tabindex="-1"><a class="header-anchor" href="#when" aria-hidden="true">#</a> When</h2><p>React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历。</p><h2 id="how" tabindex="-1"><a class="header-anchor" href="#how" aria-hidden="true">#</a> How</h2><p>React选择了深度优先遍历算法作为组件更新的方式。深度优先遍历会先遍历完整个子树，然后再返回遍历父节点的兄弟节点。这样可以确保在组件更新时，先处理完所有子组件的更新，再处理父组件的更新，保证了组件的生命周期时序的正确性。 但传统的深度优先遍历方式，效率较低，复杂程度为<img src="https://cdn.nlark.com/yuque/__latex/4a7d22b39e93fbbcbe107e7a19e8bd34.svg#card=math&amp;code=O(n^3) &amp;height=23&amp;id=ldLnY" alt="" loading="lazy"> 。为了优化效率，使用了分治的方式将复杂度降低为 <img src="https://cdn.nlark.com/yuque/__latex/7ba55e7c64a9405a0b39a1107e90ca94.svg#card=math&amp;code=O(n)&amp;height=20&amp;id=jLUOv" alt="" loading="lazy">。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。</p><ul><li>树比对：由于网页视图中较少有跨层级节点移动，两株虚拟 DOM 树只对同一层次的节点进行比较。</li><li>组件比对：如果组件是同一类型，则进行树比对，如果不是，则直接放入到补丁中。</li><li>元素比对：主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实的 DOM 剪裁操作。</li></ul><p>以上是经典的 React diff 算法内容。自 React 16 起，引入了 Fiber 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点。 整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点。</p><h2 id="对比vue、preact" tabindex="-1"><a class="header-anchor" href="#对比vue、preact" aria-hidden="true">#</a> 对比Vue、Preact</h2><ul><li>React 拥有完整的 Diff 算法策略，且拥有随时中断更新的时间切片能力（FiberNode 使用了<strong>双链表</strong>的结构，可以直接找到兄弟节点与子节点，使得整个更新过程可以随时暂停恢复），在大批量节点更新的极端情况下，拥有更友好的交互体验。</li><li>Preact 可以在一些对性能要求不高，仅需要渲染框架的简单场景下应用。</li><li>Vue 的整体 diff 策略与 React 对齐，虽然缺乏时间切片能力，但这并不意味着 Vue 的性能更差，因为在 Vue 3 初期引入过，后期因为收益不高移除掉了。除了高帧率动画，在 Vue 中其他的场景几乎都可以使用防抖和节流去提高响应性能。</li></ul><h2 id="对比vue" tabindex="-1"><a class="header-anchor" href="#对比vue" aria-hidden="true">#</a> 对比Vue</h2><p>Vue和React在更新策略上有一些不同之处，尽管它们的目标都是优化渲染性能。</p><ol><li>更新粒度：在React中，更新是基于组件树的深度优先遍历，而Vue则是基于组件的依赖追踪。React会比较整个组件子树的差异，并进行相应的更新。Vue通过跟踪组件内部的响应式数据，只更新受影响的组件。</li><li>Diff算法：Vue 2.x使用Virtual DOM diff算法进行比较和更新。它通过比较新旧虚拟DOM树的差异，最小化DOM操作的次数。Vue 3.x引入了静态标记和基于Proxy的响应式系统，进一步优化了更新策略。React也使用Virtual DOM diff算法，但它采用了双缓冲技术，将一次更新划分为两个阶段（reconciliation和commit），以提高性能。</li><li>组件实例复用：在React中，组件实例的复用非常重要。当组件在更新时，React会尽量复用已经存在的组件实例，以减少不必要的销毁和重建操作。Vue也支持组件实例的复用，但它在组件级别使用了更细粒度的更新策略。</li></ol><p>总体而言，Vue和React在更新策略上有一些差异，主要体现在更新粒度、Diff算法和组件实例复用等方面。它们都致力于通过优化更新过程和最小化DOM操作来提高渲染性能，但具体实现上有一些不同的优化技术和策略。</p>',15),d=[c];function h(l,n){return a(),i("div",null,d)}const s=e(t,[["render",h],["__file","Diff.html.vue"]]);export{s as default};
