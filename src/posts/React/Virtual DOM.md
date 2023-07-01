## What
虚拟 DOM 的**工作原理**是通过 JS 对象模拟 DOM 的节点
## Why
在 Facebook 构建 React 初期时，考虑到要提升代码抽象能力、避免人为的 DOM 操作、降低代码整体风险等因素，所以引入了虚拟 DOM。
## How
虚拟 DOM 在**实现上**通常是 Plain Object，以 React 为例，在 render 函数中写的 JSX 会在 Babel 插件的作用下，编译为 React.createElement 执行 JSX 中的属性参数。
React.createElement 执行后会返回一个 Plain Object，它会描述自己的 tag 类型、props 属性以及 children 情况等。这些 Plain Object 通过树形结构组成一棵虚拟 DOM 树。当状态发生变更时，将变更前后的虚拟 DOM 树进行差异比较，这个过程称为 diff，生成的结果称为 patch。计算之后，会渲染 Patch 完成对真实 DOM 的操作。

## 优缺点
虚拟 DOM 的**优点**主要有三点：

- 改善大规模 DOM 操作的性能
- 规避 XSS 风险
- 能以较低的成本实现跨平台开发。

虚拟 DOM 的**缺点**在社区中主要有两点。

- 内存占用较高，因为需要模拟整个网页的真实 DOM。
- 高性能应用场景存在难以优化的情况，类似像 Google Earth 一类的高性能前端应用在技术选型上往往不会选择 React。

