import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as r,a as e,b as s,d as t,f as l}from"./app-2d139388.js";const c={},p=l(`<h1 id="类型编程" tabindex="-1"><a class="header-anchor" href="#类型编程" aria-hidden="true">#</a> 类型编程</h1><h2 id="typescript的类型系统" tabindex="-1"><a class="header-anchor" href="#typescript的类型系统" aria-hidden="true">#</a> TypeScript的类型系统</h2><p>TypeScript给JavaScript增加了一套静态类型系统，通过 TS Compiler 编译为 JS，编译的过程做类型检查。</p><p>它并没有改变 JavaScript 的语法，只是在 JS 的基础上添加了类型语法，所以被叫做 JavaScript 的超集。</p><p>JavaScript 的标准在不断的发展，TypeScript 的类型系统也在不断完善，因为“超集”的设计理念，这两者可以很好的融合在一起，是不会有冲突的。</p><p>静态类型编程语言都有自己的类型系统，从简单到复杂可以分为 3 类：</p><h3 id="简单类型系统" tabindex="-1"><a class="header-anchor" href="#简单类型系统" aria-hidden="true">#</a> 简单类型系统</h3><p>变量、函数、类等都可以声明类型，编译器会基于声明的类型做类型检查，类型不匹配时编译器会报错。</p><p>这是最基础的类型系统，能保证类型安全，但有些死板。</p><p>比如一个 <code>identify</code> 函数，我们希望这个函数传入什么值可以原封不动的返回，如果我们想要传入的类型为 <code>number</code>或者<code>string</code>的话，我们需要这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function identify(x: number | string): 
  number | string {
  return x;
}

const res123 = identify(1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们还想传入<code>boolean</code>类型的话：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function identify(x: number | string | boolean): 
  number | string | boolean {
  return x;
}

const res123 = identify(false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话就会出现一个问题：每次传入一个新的类型就必须得重新修改函数的参数与返回值类型。</p><p>如果类型能传参数就好了，传入<code>number</code>就会返回<code>number</code>，传入<code>string</code>就返回<code>string</code>。</p><p>所以有了第二种类型系统。</p><h3 id="支持泛型的类型系统" tabindex="-1"><a class="header-anchor" href="#支持泛型的类型系统" aria-hidden="true">#</a> 支持泛型的类型系统</h3><p>泛型的英文是Generic Type，译为‘通用的类型’，它可以表示任何一种类型，也可以叫<strong>类型参数</strong>。</p><p>比如上面的例子，有了泛型之后我们可以这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function identify(x: T): T {
  return x;
}

identify(true);
identify(3.1415926);
identify(&#39;我不是string&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明时把会变化的类型声明成泛型（也就是类型参数），在调用的时候再确定类型。</strong></p><p>很多语言，类如Java、Dart等用的就是这种类型系统，泛型确实是一个可以很好地增加类型系统灵活性的特性。</p><p>但是，这种类型系统的灵活性对于 JavaScript 来说还不够，因为 JavaScript 太过灵活了。</p><p>比如，在 Java 里，对象都是由类 new 出来的，你不能凭空创建对象，但是 JavaScript 却可以，它支持对象字面量。</p><p>那如果是一个返回对象某个属性值的函数，类型该怎么写呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getPropValue(obj: T, key: string) {
    return obj[key];
}

const res = getPropValue({a: 1, b: 2}, &#39;a&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/812c6e73b37924038d7515279133b741.png" alt="泛型" tabindex="0" loading="lazy"><figcaption>泛型</figcaption></figure><p>我们可以看到类型返回值为<code>any</code>。</p><p>好像拿到了<code>T</code>也拿不到它的属性值与属性值，如果我们可以对类型参数<code>T</code>做一些处理就好了。</p><p>所以，有了第三种类型系统。</p><h3 id="支持类型编程的类型系统" tabindex="-1"><a class="header-anchor" href="#支持类型编程的类型系统" aria-hidden="true">#</a> 支持类型编程的类型系统</h3><p>在 Java 里面，拿到了对象的类型就能找到它的类，进一步拿到各种信息，所以类型系统支持泛型就足够了。</p><p>但是在 JavaScript 里面，对象可以字面量的方式创建，还可以灵活的增删属性，拿到对象并不能确定什么，所以要支持对传入的类型参数做进一步的处理。</p><p>对传入的类型参数（泛型）做各种逻辑运算，产生新的类型，这就是类型编程。</p><p>比如上面那个 getProps 的函数，类型可以这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getPropValue&lt;T extends object, Key extends keyof T&gt;(
  obj: T, key: Key): T[Key] {
    return obj[key];
}

const res1 = getPropValue({a: 1, b: 2}, &#39;a&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/d326adb00540b1e26c7f6d4bc7cc035f.png" alt="类型编程" tabindex="0" loading="lazy"><figcaption>类型编程</figcaption></figure><p>这里我们成功地拿到了返回值的类型！</p><p>这里的 <code>keyof T</code>、<code>T[Key]</code> 就是对类型参数 <code>T</code> 的类型运算。</p><p>TypeScript 的类型系统就是第三种，支持对类型参数做各种逻辑处理，可以写很复杂的类型逻辑。</p><h3 id="类型逻辑能有多复杂" tabindex="-1"><a class="header-anchor" href="#类型逻辑能有多复杂" aria-hidden="true">#</a> 类型逻辑能有多复杂？</h3><blockquote><p>类型逻辑是对类型参数的各种处理，可以实现很多强大的功能。</p></blockquote><p>比如这个 <code>ParseQueryString</code> 的类型：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/04f6d4a9ae4181d2b6a995fa52a50d86.png" alt="ParseQueryString" tabindex="0" loading="lazy"><figcaption>ParseQueryString</figcaption></figure><p>它可以对传入的字符串的类型参数做解析，返回解析以后的结果。</p><p>如果是一些只支持泛型的类型系统是不能做到这一点的。但是 TypeScript 的类型系统就可以，因为它可以对泛型（类型参数）做各种逻辑处理。</p><p>只不过，这个类型的类型逻辑的代码比较多：</p><blockquote><p>下面的 <code>ts</code> 类型暂时看不懂没关系，这里只是展示一下TS类型编程的复杂度，相信大家在看完这篇文章之后也可以实现这样的复杂类型。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ParseParam = 
    Param extends \`\${infer Key}=\${infer Value}\`
        ? {
            [K in Key]: Value 
        } : {};

type MergeValues = 
    One extends Other 
        ? One
        : Other extends unknown[]
            ? [One, ...Other]
            : [One, Other];

type MergeParams&lt;
    OneParam extends Record,
    OtherParam extends Record
&gt; = {
  [Key in keyof OneParam | keyof OtherParam]: 
    Key extends keyof OneParam
        ? Key extends keyof OtherParam
            ? MergeValues
            : OneParam[Key]
        : Key extends keyof OtherParam 
            ? OtherParam[Key] 
            : never
}

type ParseQueryString = 
    Str extends \`\${infer Param}&amp;\${infer Rest}\`
        ? MergeParams, ParseQueryString&gt;
        : ParseParam;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对类型参数的编程是 TypeScript 类型系统最强大的部分，可以实现各种复杂的类型计算逻辑，是它的优点。但同时也被认为是它的缺点，因为除了业务逻辑外还要写很多类型逻辑。</p><p>不过，我倒是觉得这种复杂度是不可避免的，因为 JS 本身足够灵活，要准确定义类型那类型系统必然也要设计的足够灵活。</p><h2 id="typescript类型系统中的类型" tabindex="-1"><a class="header-anchor" href="#typescript类型系统中的类型" aria-hidden="true">#</a> TypeScript类型系统中的类型</h2><p>静态类型系统的目的是把类型检查从运行时提前到编译时，那 TS 类型系统中肯定要把 JS 的运行时类型拿过来，也就是 <code>number、boolean、string、object、bigint、symbol、undefined、null</code> 这些类型，还有就是它们的包装类型 <code>Number、Boolean、String、Object、Symbol。</code></p><p>引用类型方面，JS 有 class、Array，这些 TypeScript 类型系统也都支持，但是又多加了三种类型：元组（Tuple）、接口（Interface）、枚举（Enum）。</p><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h3><p><code>元组(Tuple)</code>就是元素个数和类型固定的数组类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Tuple = [number, string];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><p><code>接口(Interface)</code>可以描述对象、函数、构造器的结构：</p><h4 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface IPerson {
    name: string;
    age: number;
}

class Person implements IPerson {
    name: string;
    age: number;
}

const obj: IPerson = {
    name: &#39;h&#39;,
    age: 18
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface SayHello {
    (name: string): string;
}

const func: SayHello = (name: string) =&gt; {
    return &#39;hello,&#39; + name
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface PersonConstructor {
    new (name: string, age: number): IPerson;
}

function createPerson(ctor: PersonConstructor): IPerson {
    return new ctor(&#39;a&#39;, 18);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象类型、class 类型在 TypeScript 里也叫做索引类型，也就是索引了多个元素的类型的意思。对象可以动态添加属性，如果不知道会有什么属性，可以用可索引签名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface IPerson {
    [prop: string]: string | number;
}

const obj: IPerson = {};

obj.name = &#39;i&#39;;
obj.age = 18;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，接口可以用来描述函数、构造器、索引类型（对象、class、数组）等复合类型。</p><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><p>枚举（Enum）是一系列值的复合：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>enum Transpiler {
    Babel = &#39;babel&#39;,
    Postcss = &#39;postcss&#39;,
    Terser = &#39;terser&#39;,
    Prettier = &#39;prettier&#39;,
    TypeScriptCompiler = &#39;tsc&#39;
}

const transpiler = Transpiler.TypeScriptCompiler;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，<code>TypeScript</code> 还支持字面量类型，也就是类似 <code>1111</code>、<code>&#39;aaaa&#39;</code>、<code>{ a: 1 }</code> 这种值也可以做为类型。</p><p>还有四种特殊的类型：<code>void、never、any、unknown</code>：</p><ul><li><code>void</code> 代表空，可以是 <code>null</code> 或者 <code>undefined</code>，一般是用于函数返回值。</li><li><code>any</code> 是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型（除了 <code>never</code>）。</li><li><code>unknown</code> 是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。</li><li><code>never</code> 代表不可达，比如函数抛异常的时候，返回值就是 <code>never</code>。</li></ul><p>这些就是 <code>TypeScript</code> 类型系统中的全部类型了，大部分是从 <code>JS</code> 中迁移过来的，比如基础类型、- <code>Array、class</code> 等，也添加了一些类型，比如 枚举（<code>enum</code>）、接口（<code>interface</code>）、元组等，还支持了字面量类型和 <code>void、never、any、unknown</code> 的特殊类型。</p><h3 id="类型的装饰" tabindex="-1"><a class="header-anchor" href="#类型的装饰" aria-hidden="true">#</a> 类型的装饰</h3><p><code>TypeScript</code>还支持描述类型的属性，比如是否可选，是否只读等：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface IPerson {
    readonly name: string;
    age?: number;
}

type tuple = [string, number?];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们进入一个重点，大家以后去解包一些类型都是以下一章讲的这些Api为基础来进行的。</p><h3 id="typescript-类型系统中的类型运算" tabindex="-1"><a class="header-anchor" href="#typescript-类型系统中的类型运算" aria-hidden="true">#</a> TypeScript 类型系统中的类型运算</h3><h4 id="条件类型-extends" tabindex="-1"><a class="header-anchor" href="#条件类型-extends" aria-hidden="true">#</a> 条件类型: extends ?</h4><p>条件类型语法类似与JS的三元表达式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type res = 1 extends 2 ? true : false;

type isTwo = T extends 2 ? true: false;

type res1 = isTwo&lt;1&gt;;
type res2 = isTwo&lt;2&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果<br><img src="https://pan.udolphin.com/files/image/2022/3/f6112e41cf5d8e260602b38983bd1e39.png" alt="res1" loading="lazy"></p><figure><img src="https://pan.udolphin.com/files/image/2022/3/48e12f4c2457eac834cb66f14dd020a4.png" alt="res2" tabindex="0" loading="lazy"><figcaption>res2</figcaption></figure><p>这种类型也叫<strong>高级类型</strong></p><p><strong>高级类型的特点是传入类型参数，经过运算之后返回一个新的类型。</strong></p><h4 id="推导类型-infer" tabindex="-1"><a class="header-anchor" href="#推导类型-infer" aria-hidden="true">#</a> 推导类型: infer</h4><p>推导类型的关键字为<code>infer</code>，作用类似与是声明一个局部变量，获取类型的某一部分。</p><p>例，获取元组中第一个属性的类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  type First = Tuple extends [infer T, ...unknown[]] ? T : never;

  type res = First&lt;[1, 2, 3]&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>res</code>类型为：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/ecfffc0ee17d1553ba16d5682ab17f15.png" alt="infer" tabindex="0" loading="lazy"><figcaption>infer</figcaption></figure><p><strong>注意</strong>：这里的在等式左边有一个<code>Tuple extends unknown[]</code>这里的<code>extends</code>关键字并不是条件类型，条件类型是：<code>extends ? :</code>，这里的意思是约束类型参数（泛型）只能是数组类型。</p><p>PS：因为不知道数组元素的具体类型，所以使用<code>unknown</code>。</p><h4 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型: |</h4><p>联合类型（Union）类似 js 里的或运算符 |，但是作用于类型，代表类型可以是几个类型之一。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Union = 1 | 2 | 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型: &amp;</h4><p>交叉类型（Intersection）类似 js 中的与运算符 <code>&amp;</code>，但是作用于类型，代表对类型做合并。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ObjType = {a: number } &amp; {c: boolean};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/89f6be00f2c47b5dd832ae4e575e553a.png" alt="交叉" tabindex="0" loading="lazy"><figcaption>交叉</figcaption></figure><p><strong>注意</strong>：同一类型可以合并，不同的类型没法合并，会被舍弃：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/0c85490c2febbe40b38ba0787c94bb10.png" alt="舍弃" tabindex="0" loading="lazy"><figcaption>舍弃</figcaption></figure><h4 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型" aria-hidden="true">#</a> 映射类型</h4><p>对象、class在TypeScript对应的类型是索引类型，那么如何对索引类型修改呢？</p><p>答案就是<strong>映射类型</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type MapType = {
  [Key in keyof T]?: T[Key]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中涉及到三个关键字：</p><ol><li><code>keyof T</code> 是查询索引类型中所有的索引，叫做<strong>索引查询</strong>。</li><li><code>T[Key]</code> 是取索引类型某个索引的值，叫做<strong>索引访问</strong>。</li><li><code>in</code> 是用于遍历联合类型的运算符。</li></ol><p>比如我们把一个索引类型的值变成一个字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type MapType = {
    [Key in keyof T]: &#39;hello world&#39;
}

type res = MapType&lt;{a: 1, b: 2}&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/045b8f1b097111d73ed4b9b20956ac3d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>映射类型就相当于把一个集合映射到另一个集合，这是它名字的由来。</p><p>除了值可以变化，索引也可以变化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type MapType = {
    [
        Key in keyof T 
            as \`\${Key &amp; string} qq\`
    ]: T[Key]
  };

type res = MapType&lt;{&#39;1&#39;: 1, &#39;2&#39;: 2}&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/3798e7d84077cae3f548ff8c53914eb4.png" alt="索引映射" tabindex="0" loading="lazy"><figcaption>索引映射</figcaption></figure><p>我们用 as 把索引也做了修改，改成了原本的Key后加一个‘ qq’</p><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4><p>给 JavaScript 添加静态类型系统，那肯定是能复用的就复用，所以在 TypeScript 里，基础类型和 class、Array 等复合类型都是和 JavaScript 一样的，只是又额外加了接口（interface）、枚举（enum）、元组这三种复合类型（对象类型、class 类型在 TypeScript 里叫做索引类型），还有 void、never、any、unkown 四种特殊类型，以及支持字面量做为类型。此外，TypeScript 类型系统也支持通过 readonly、？等修饰符对属性的特性做进一步的描述。</p><p>此外，TypeScript 支持对类型做运算，这是它的类型系统的强大之处，也是复杂之处。</p><p>TypeScript 支持条件、推导、联合、交叉等运算逻辑，还有对联合类型做映射。</p><p>这些逻辑是针对类型参数，也就是泛型（类型参数）来说的，传入类型参数，经过一系列类型运算逻辑后，返回新的类型的类型就叫做高级类型，如果是静态的值，直接算出结果即可，没必要写类型逻辑。</p><p>这些语法看起来没有多复杂，但是他们却可以实现很多复杂逻辑，就像 JS 的语法也不复杂，却可以实现很多复杂逻辑一样。</p><p>后面我们会大量用到这些类型编程语法来实现各种复杂的类型逻辑。</p><h2 id="编写类型技巧" tabindex="-1"><a class="header-anchor" href="#编写类型技巧" aria-hidden="true">#</a> 编写类型技巧</h2><blockquote><p>TypeScript 类型编程的代码看起来比较复杂，但其实这些逻辑用 JS 大家都会写，之所以到了类型体操就不会了，那是因为还不熟悉一些套路。<br> 所以，这节开始我们就来学习一些类型编程的套路，熟悉这些套路之后，各种类型体操逻辑就能够很顺畅的写出来。</p></blockquote><p>首先，我们来学习类型编程的第一个套路：<br> 模式匹配。</p><h3 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h3><p>我们知道，字符串可以和正则做模式匹配，找到匹配的部分，提取子组，之后可以用 1,1,2 等引用匹配的子组。</p><p>Typescript 的类型也同样可以做模式匹配。</p><p>比如这样一个 Promise 类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type p = Promise&lt;&#39;haha&#39;&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们想提取 value 的类型，可以这样做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type GetValueType = P extends Promise ? Value : never;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 extends 对传入的类型参数 P 做模式匹配，其中值的类型是需要提取的，通过 infer 声明一个局部变量 Value 来保存，如果匹配，就返回匹配到的 Value，否则就返回 never 代表没匹配到。</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/a7e2782c61ff0db18c9782f034f9c1ee.png" alt="GetValueType" tabindex="0" loading="lazy"><figcaption>GetValueType</figcaption></figure><p>这就是 Typescript 类型的模式匹配：</p><p>Typescript 类型的模式匹配是通过 extends 对类型参数做匹配，结果保存到通过 infer 声明的局部类型变量里，如果匹配就能从该局部变量里拿到提取出的类型。</p><p>这个模式匹配的套路有多有用呢？我们来看下在数组、函数等类型里的应用。</p><h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h4><h5 id="last" tabindex="-1"><a class="header-anchor" href="#last" aria-hidden="true">#</a> Last</h5><p>前几章我们介绍了获取数组第一个元素的First，既然可以提取第一个元素，当然也可以提取最后一个元素，修改下模式类型就行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type arr = [1,2,3]

type Last = T extends [...unknown[], infer U] ? U : never;

type Ans = Last;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/b41afc9496f5ec4ab3883fec1db4f417.png" alt="last" tabindex="0" loading="lazy"><figcaption>last</figcaption></figure><h4 id="函数-1" tabindex="-1"><a class="header-anchor" href="#函数-1" aria-hidden="true">#</a> 函数</h4><h5 id="getparameters" tabindex="-1"><a class="header-anchor" href="#getparameters" aria-hidden="true">#</a> GetParameters</h5><p>类型参数 Func 是要匹配的函数类型，通过 extends 约束为 Function。</p><p>Func 和模式类型做匹配，参数类型放到用 infer 声明的局部变量 T 里，返回值可以是任何类型。</p><p>返回提取到的参数类型 AnsFunc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type GetParameters = Func extends (...args: infer T)=&gt; any ? T : never;

type AnsFunc = GetParameters&lt;(a: number, b: string) =&gt; void&gt;; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/3/34a53710fce426f65b34ff359dc011c5.png" alt="GetParameters" tabindex="0" loading="lazy"><figcaption>GetParameters</figcaption></figure><h5 id="getreturntype" tabindex="-1"><a class="header-anchor" href="#getreturntype" aria-hidden="true">#</a> GetReturnType</h5><p>能提取参数类型，同样也可以提取返回值类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type GetReturnType = 
    Func extends (...args: any[]) =&gt; infer ReturnType 
        ? ReturnType : never;

type AnsRT = GetReturnType&lt;(a: number, b: string) =&gt; number | string&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Func</code> 和模式类型做匹配，提取返回值到通过 <code>infer</code> 声明的局部变量 <code>ReturnType</code> 里返回。</p><p>参数类型可以是任意类型，也就是 <code>any[]</code>（注意，这里不能用 <code>unknown</code>，因为参数类型是要赋值给别的类型的，而 <code>unknown</code> 只能用来接收类型，所以用 <code>any</code>）。</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/e3852b2be702cd445dee61395579f6cf.png" alt="GetReturnType" tabindex="0" loading="lazy"><figcaption>GetReturnType</figcaption></figure><h3 id="重新构造" tabindex="-1"><a class="header-anchor" href="#重新构造" aria-hidden="true">#</a> 重新构造</h3><p>类型编程主要的目的就是对类型做各种转换，那么如何对类型做修改呢？</p><p><code>TypeScript</code> 类型系统支持 3 种可以声明任意类型的变量： type、infer、类型参数。</p><p>type 叫做类型别名，其实就是声明一个变量存储某个类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ttt = Promise;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>infer 用于类型的提取，然后存到一个变量里，相当于局部变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type GetValueType = P extends Promise ? Value : never;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型参数用于接受具体的类型，在类型运算中也相当于局部变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type isTwo = T extends 2 ? true: false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，严格来说这三种也都不叫变量，因为它们不能被重新赋值。</p><p>TypeScript 设计可以做类型编程的类型系统的目的就是为了产生各种复杂的类型，那不能修改怎么产生新类型呢？</p><p>答案是重新构造。</p><h4 id="数组-1" tabindex="-1"><a class="header-anchor" href="#数组-1" aria-hidden="true">#</a> 数组</h4><h5 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> Push</h5><p>有这样一个元组类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type tuple = [1,2,3];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我想给这个元组类型再添加一些类型，怎么做呢？</p><p>TypeScript 类型变量不支持修改，我们可以构造一个新的元组类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Push = [...Arr, Ele];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型参数 <code>Arr</code> 是要修改的数组/元组类型，元素的类型任意，也就是 <code>unknown</code>。</p><p>类型参数 <code>Ele</code> 是添加的元素的类型。</p><p>返回的是用 <code>Arr</code> 已有的元素加上 <code>Ele</code> 构造的新的元组类型。</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/9846d9e49553d5e3a310dd45d535f29a.png" alt="Push" tabindex="0" loading="lazy"><figcaption>Push</figcaption></figure><h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h4><h5 id="capitalizestr" tabindex="-1"><a class="header-anchor" href="#capitalizestr" aria-hidden="true">#</a> CapitalizeStr</h5><p>我们想把一个字符串字面量类型的 <code>&#39;hello&#39;</code> 转为首字母大写的 &#39;Hello&#39;。</p><p>需要用到字符串类型的提取和重新构造：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type CapitalizeStr = 
    Str extends \`\${infer First}\${infer Rest}\` 
        ? \`\${Uppercase}\${Rest}\` : Str;

type AnsStr = CapitalizeStr&lt;&#39;hello&#39;&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们声明了类型参数 Str 是要处理的字符串类型，通过 extends 约束为 string。</p><p>通过 infer 提取出首个字符到局部变量 First，提取后面的字符到局部变量 Rest。</p><p>然后使用 TypeScript 提供的内置高级类型 Uppercase 把首字母转为大写，加上 Rest，构造成新的字符串类型返回。</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/9be59b5f134ab564eca5dd1ff7085c1a.png" alt="CapitalizeStr" tabindex="0" loading="lazy"><figcaption>CapitalizeStr</figcaption></figure><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><p>TypeScript 类型系统中有些类型比较特殊，比如 any、never、联合类型，比如 class 有 public、protected、private 的属性，比如索引类型有具体的索引和可索引签名，索引还有可选和非可选。。。</p><p>如果给我们一种类型让我们判断是什么类型，应该怎么做呢？</p><h4 id="isany" tabindex="-1"><a class="header-anchor" href="#isany" aria-hidden="true">#</a> IsAny</h4><p>如何判断一个类型是 <code>any</code> 类型呢？要根据它的特性来：</p><p><code>any</code> 类型与除<code>never</code>之外的任何类型的交叉都是 <code>any</code>，也就是 <code>1 &amp; any</code> 结果是 <code>any</code>。</p><p>所以，可以这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type IsAny = &#39;T&#39; extends (&#39;S&#39; &amp; T) ? true : false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的 <code>&#39;T&#39;</code> 和 <code>&#39;S&#39;</code> 可以换成任意类型。</p><p>当传入 <code>any</code> 时：<br><img src="https://pan.udolphin.com/files/image/2022/3/892e06644df96bd886d7df8eb09626f6.png" alt="" loading="lazy"></p><p>当传入其他类型时：<br><img src="https://pan.udolphin.com/files/image/2022/3/a87849bcccfef24c1df38c71bd08c230.png" alt="" loading="lazy"></p><h4 id="isnever" tabindex="-1"><a class="header-anchor" href="#isnever" aria-hidden="true">#</a> IsNever</h4><p><code>never</code> 在条件类型中也比较特殊，如果条件类型左边是类型参数，并且传入的是 <code>never</code>，那么直接返回 <code>never</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type TestNever = T extends never ? true : false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>T</code> 为 <code>never</code> 时：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/6a385b3980c4a8479eb27b13ab2e3594.png" alt="TestNever" tabindex="0" loading="lazy"><figcaption>TestNever</figcaption></figure><p>所以，要判断 <code>never</code> 类型，就不能直接 <code>T extends never</code>，可以这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type IsNever = [T] extends [never] ? true : false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就能正常判断 never 类型了：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/5d0eca65dfeba3b9aec33a9932f56235.png" alt="isNever" tabindex="0" loading="lazy"><figcaption>isNever</figcaption></figure><h4 id="getoptional" tabindex="-1"><a class="header-anchor" href="#getoptional" aria-hidden="true">#</a> GetOptional</h4><p>如何提取索引类型中的可选索引呢？</p><p>这也要利用可选索引的特性：可选索引的值为 <code>undefined</code> 和值类型的联合类型。</p><p>过滤可选索引，就要构造一个新的索引类型，过程中做过滤：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type GetOptional&gt; = {
    [
        Key in keyof Obj 
            as {} extends Pick ? Key : never
    ] : Obj[Key];
}

type res = GetOptional&lt;{a?: 1, b: 2}&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型参数 <code>Obj</code> 为待处理的索引类型，类型约束为索引为 <code>string</code>、值为任意类型的索引类型 <code>Record&lt;string, any&gt;</code>。</p><p>用映射类型的语法重新构造索引类型，索引是之前的索引也就是 <code>Key in keyof Obj</code>，但要做一些过滤，也就是 <code>as</code> 之后的部分。</p><p>过滤的方式就是单独取出该索引之后，判断空对象是否是其子类型。</p><p>这里的 <code>Pick</code> 是 <code>ts</code> 提供的内置高级类型，就是取出某个 Key 构造新的索引类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Pick&lt;T, K extends keyof T&gt; = { [P in K]: T[P]; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 <code>a</code> 可能为 <code>undefined</code>，也就是索引类型可能是 <code>{}</code>，所以 <code>{} extends Pick&lt;Obj, Key&gt;</code> 就能过滤出可选索引。（可选的意思就是有或者没有，没有的时候就是空的索引类型）</p><p>值的类型依然是之前的，也就是 <code>Obj[Key]</code>。</p><p>这样，就能过滤出所有可选索引，构造成新的索引类型：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/10d144f3d6719da2705d87250db2e55f.png" alt="GetOptional" tabindex="0" loading="lazy"><figcaption>GetOptional</figcaption></figure><h2 id="typescript内置高级类型" tabindex="-1"><a class="header-anchor" href="#typescript内置高级类型" aria-hidden="true">#</a> TypeScript内置高级类型</h2><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>Parameters 用于提取函数类型的参数类型。</p><p>源码是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Parameters&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型参数 T 为待处理的类型，通过 extends 约束为函数，参数和返回值任意。</p><p>通过 extends 匹配一个模式类型，提取参数的类型到 infer 声明的局部变量 P 中返回。</p><p>这样就实现了函数参数类型的提取：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/9b8a6a671a491c4734bfb412b9c391d5.png" alt="Parameters" tabindex="0" loading="lazy"><figcaption>Parameters</figcaption></figure><h3 id="returntype" tabindex="-1"><a class="header-anchor" href="#returntype" aria-hidden="true">#</a> ReturnType</h3><p>ReturnType 用于提取函数类型的返回值类型。</p><p>源码是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型参数 T 为待处理的类型，通过 extends 约束为函数类型，参数和返回值任意。</p><p>用 T 匹配一个模式类型，提取返回值的类型到 infer 声明的局部变量 R 里返回。</p><p>这样就实现了函数返回值类型的提取：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/4450db68c428e9aad9854fae25d520d9.png" alt="ReturnType" tabindex="0" loading="lazy"><figcaption>ReturnType</figcaption></figure><h3 id="constructorparameters" tabindex="-1"><a class="header-anchor" href="#constructorparameters" aria-hidden="true">#</a> ConstructorParameters</h3><p>构造器类型和函数类型的区别就是可以被 new。</p><p><code>Parameters</code> 用于提取函数参数的类型，而 <code>ConstructorParameters</code> 用于提取构造器参数的类型。</p><p>源码是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ConstructorParameters&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: infer P) =&gt; any ? P : never;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型参数 <code>T</code> 是待处理的类型，通过 <code>extends</code> 约束为构造器类型，加个 <code>abstract</code> 代表不能直接被实例化（其实不加也行）。</p><p>用 <code>T</code> 匹配一个模式类型，提取参数的部分到 <code>infer</code> 声明的局部变量 <code>P</code> 里，返回 <code>P</code>。</p><p>这样就实现了构造器参数类型的提取：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/e933b2381b696b710fa03cb783424fd6.png" alt="ConstructorParameters" tabindex="0" loading="lazy"><figcaption>ConstructorParameters</figcaption></figure><h3 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h3><p>索引类型可以通过映射类型的语法做修改，比如把索引变为可选。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Partial&lt;T&gt; = {
    [P in keyof T]?: T[P];
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型参数 T 为待处理的类型。</p><p>通过映射类型的语法构造一个新的索引类型返回，索引 P 是来源于之前的 T 类型的索引，也就是 P in keyof T，索引值的类型也是之前的，也就是 T[P]。</p><p>这样就实现了把索引类型的索引变为可选的效果：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/0809d138e65052ce8fc26659f4483094.png" alt="Partial" tabindex="0" loading="lazy"><figcaption>Partial</figcaption></figure><h3 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> Required</h3><p>可以把索引变为可选，也同样可以去掉可选，也就是 <code>Required</code> 类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Required&lt;T&gt; = {
    [P in keyof T]-?: T[P];
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型参数 <code>T</code> 为待处理的类型。</p><p>通过映射类型的语法构造一个新的索引类型，索引取自之前的索引，也就是 <code>P in keyof T</code>，但是要去掉可选，也就是 <code>-?</code>，值的类型也是之前的，就是 T[P]。</p><p>这样就实现了去掉可选修饰的目的：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/cc07e236c4add12a403527a6c3d5e4d3.png" alt="Required" tabindex="0" loading="lazy"><figcaption>Required</figcaption></figure><h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> Readonly</h3><p>同样的方式，也可以添加 readonly 的修饰：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Readonly&lt;T&gt; = {
    readonly [P in keyof T]: T[P];
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型参数 T 为待处理的类型。</p><p>通过映射类型的语法构造一个新的索引类型返回，索引和值的类型都是之前的，也就是 P in keyof T 和 T[P]，但是要加上 readonly 的修饰。</p><p>这样就实现了加上 readonly 的目的：</p><figure><img src="https://pan.udolphin.com/files/image/2022/3/5868eec3a1b22b6bf53808054fe86502.png" alt="Readonly" tabindex="0" loading="lazy"><figcaption>Readonly</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>虽然很多常用的高级类型TS已经内置了，但是从我个人的角度来说并不建议去死记硬背，因为掌握了TS类型编程套路的我们有很多内置类型都是可以自己去很快实现的，我们还是需要将重点放到提高类型运算中说到的Api的使用熟练度上来。</p><p>在这里也给大家推荐一个很好用的练习网站：</p>`,274),o={href:"https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const i=a("ExternalLinkIcon");return d(),r("div",null,[p,e("p",null,[e("a",o,[s("https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md"),t(i)])])])}const h=n(c,[["render",u],["__file","TypeScript类型编程.html.vue"]]);export{h as default};
