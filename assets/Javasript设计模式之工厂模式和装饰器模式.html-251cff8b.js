import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as l,a as e,b as n,d as r,f as t}from"./app-2d139388.js";const v={},c=t(`<h1 id="工厂模式和装饰器模式" tabindex="-1"><a class="header-anchor" href="#工厂模式和装饰器模式" aria-hidden="true">#</a> 工厂模式和装饰器模式</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>前面分享了四个设计模式，分别是策略模式、观察者模式、状态模式以及代理模式，其中前三个都属于设计模式中的行为模式，最后一个为结构型模式。那么其实到目前为止，我们还没有接触过创建型模式。</p><p>在这里引入23个设计模式的分类，它总体分被为三大类：行为型模式、结构型模式、创建型模式。</p><p>简言之，</p><ul><li>创建型模式——关注于分离对象的创建和使用</li><li>结构型模式——描述如何将类或者对象结合在一起形成更大的结构</li><li>行为型模式——不仅仅关注类和对象的结构，而且重点关注它们之间的相互作用</li></ul><p>有关于行为型模式，文杰同学在前两期已经分享过三个相关模式了，相信大家应该深有体会了，那么关于结构型和创建型这两种模式分类，我希望能够以更具体形象的方式来描述其概念，这里我选了两张图片：</p><ul><li>创建型：</li></ul><figure><img src="https://pan.udolphin.com/files/image/2022/4/46c7d63c897581583fdc77a214f0098d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们说，创建型模式的作用是将模块中对象的创建和对象的使用分离。为了使软件的结构更加清晰 ——就像乐高，相同的零件组合拼接成各种结构，使用不同零件的过程中我们不需要关注这些零件如果被生产出来。</p><ul><li>结构型</li></ul><figure><img src="https://pan.udolphin.com/files/image/2022/4/afe6b3c2edb43967bed5fe35c740e5b2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而结构型，描述如何将类或者对象组装在一起形成更大的结构-——就像搭积木，可以通过简单积木的组合形成功能更强大更复杂的的结构。</p><p>接下来我们去看看具体的创建型模式分类里的工厂模式和结构型模式分类里的装饰器模式，去具体感受下他们的区别吧。</p><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><p>首先说到工厂模式，不得不提到这个与之非常相似的构造器模式，它与工厂模式有很多 相似之处。</p><h3 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h3><p>这里我有一个非常简单的场景，我需要记录小组成员信息，那么需要创建一些对象用来描述成员姓名和年龄，这时我写出如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const aa = {
	name: &#39;aa&#39;,
	age: 25
}

const bb = {
	name: &#39;bb&#39;,
	age: 24
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可是如果小组成员太多的话，我们不能每一位成员都要这样手动去创建一个对象呀。</p><p>还好我们知道，ECMAScript的构造函数就是能创建对象的函数，那么我们有了如下写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//构造器
function User(realName, age) {
	this.name = realName;
	this.age = age;
}
const user = new User(realName, age);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么之后当我们创建对象的时候，只需要进行一下简单的调用。在这个过程中，我们使用构造函数去初始化对象，就是应用了<strong>构造器模式</strong>。</p><p>记不记得我们前面说，创建型模式关注于分离对象的创建和使用。</p><p>这里我们可以看到，构造器将 name、age 赋值给对象的过程封装起来，确保每个对象都有这些属性，但同时可以确保name、age取值的不同。我们是不是可以说，构造器本质上是去抽象了每个对象实例的变与不变，不变的是每个对象上都可以有相同的属性，变化的是这些属性的取值可以不同。</p><p>好，这是抽象对象的变与不变，那么抽象不同构造函数（类）之间的变与不变，便是我们这一part的主角：工厂模式。</p><h3 id="工厂模式-1" tabindex="-1"><a class="header-anchor" href="#工厂模式-1" aria-hidden="true">#</a> 工厂模式</h3><p>接下来我们添加一需求，上面每位成员我们还需要录入他的工种及工种职责，由于大家的工种不一样，这个时候我们就需要不同的构造函数了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Coder(name, age) {
	this.name = name
	this.age = age
	this.career = &#39;coder&#39;
	this.work = [&#39;写代码&#39;,&#39;技术分享&#39;,&#39;取奶茶&#39;]
}

function ProductManager(name, age) {
	this.name = name
	this.age = age
	this.career = &#39;productManager&#39;
	this.work = [&#39;提需求&#39;,&#39;开会&#39;,&#39;点奶茶&#39;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以发现这两个构造函数都存在变与不变的部分，不变的是他们都拥有name，age，career，work这四个属性，变化的是不同的工种，对应的工作不同。那么接下来我们再判断不同工种应该返回什么样的对象时，可以把这个逻辑写在如下这样的函数里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function User(name, age, career, work) {
	this.name = name
	this.age = age
	this.career = career
	this.work = work
}

function Factory(name, age, career) {
	let work
	swith(career) {
		case &#39;coder&#39;:
			work = [&#39;写代码&#39;,&#39;技术分享&#39;,&#39;取奶茶&#39;]
			break
		case &#39;boss&#39;:
			work = [&#39;提需求&#39;,&#39;开会&#39;,&#39;点奶茶&#39;]
			break
		case &#39;xxx&#39;:
			//其他工种
			break
	return new User(name, age, career, work)			
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就无需创建多个构造函数，只需要调用Factory无脑传参就可以了。</p><p>此时这个Factory函数做的事就属于工厂模式，我们可以看到它封装了创建对象的过程，而我们要做的就是无脑传参就可以了。</p><h3 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例" aria-hidden="true">#</a> 应用实例</h3><p>上述例子还是很容易理解的，那我们接下来来一个前端应用实例看看，这里我举一个前端开发中常用的消息提示框的例子。</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/a10410a5e568b060ce44623be59f69a8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个例子中，我们有几个简单元素：三个按钮和一个消息提示框。</p><p>需求是，我需要在点击成功按钮时，将提示框的背景色设置为绿色，点击警告按钮时，将背景色设置为黄色，失败时就是红色，这里我通过点击按钮时，切换消息提示框的class来实现简单的html代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//body:
  &lt;body&gt;
    &lt;div class=&quot;wrapper&quot;&gt;
      &lt;!-- &lt;div class=&quot;modal error&quot;&gt;
        &lt;header&gt;sdf&lt;/header&gt;
      &lt;/div&gt; --&gt;
      &lt;div class=&quot;btn-wrap&quot;&gt;
        &lt;button data-status=&quot;S&quot;&gt;成功&lt;/button&gt;
        &lt;button data-status=&quot;W&quot;&gt;警告&lt;/button&gt;
        &lt;button data-status=&quot;E&quot;&gt;失败&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
  
  //style:
   &lt;style&gt;
    .modal.S {
        background-color: #67c23a;
      }
      .modal.E {
        background-color: #f56c6c;
      }
      .modal.W {
        background-color: #e6a23c;
      }
    &lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是我们给按钮绑定的点击事件的js代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  const changeStatus = (status: string) =&gt; {
    switch (status) {
      case &quot;S&quot;:
        oModal.className = &quot;modal success&quot;;
        break;
      case &quot;W&quot;:
        oModal.className = &quot;modal warning&quot;;
        break;
      case &quot;E&quot;:
        oModal.className = &quot;modal error&quot;;
        break;
      default:
        break;
    }
  };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，最主要的是，changeStatus这个函数，这里我们只是做了简单的class切换。</p><p>那如果此时，产品经理慢慢走到你面前，说：“我要点击成功的时候，你给我放个五彩斑斓的烟花，点击警告的时候在控制台打印个警告信息，点击错误的时候跳转登陆页~巴拉巴拉吧......”，我们知道，产品经理的嘴是捂不住的，那我们怎么办，难道要在这个changeStatus函数里原地更改每个状态对应要做的事吗？</p><p>显然这样做是不好的，明显违背了我们经常强调的开闭原则，那么此时，我们可以借助工厂模式来实现这一需求。</p><p>这里其实跟前面那个根据不同工种返回不同构造函数的例子很像，我们可以造一个工厂函数，根据点击的不同按钮传入不同的状态，然后自动去实例化不同状态对应的类，实现如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//*枚举状态
export enum MType {
  success = &quot;S&quot;,
  warning = &quot;W&quot;,
  error = &quot;E&quot;,
}
//*创建一个公共类，承载一些公共的方法属性
class Modal {
  status: MType;
  constructor(status: MType) {
    this.status = status;
  }
  
  get className(): string {
    let classStr = &quot;modal &quot;;
    
    switch (this.status) {
      case MType.success:
        classStr += &quot;success&quot;;
        break;
      case MType.warning:
        classStr += &quot;warning&quot;;
        break;
      case MType.error:
        classStr += &quot;error&quot;;
        break;
      default:
        break;
    }
    return classStr;
  }
}

//*不同的状态对应的类分开写，可以在对应类里实现各自不同的功能扩展
class SuccessModal extends Modal {
  constructor() {
    super(MType.success);
  }
  //放一个五彩斑斓的烟花
}
class WarningModal extends Modal {
  constructor() {
    super(MType.warning);
  }
  //控制台打印信息
}
class ErrorModal extends Modal {
  constructor() {
    super(MType.error);
  }
  //跳转登陆页
}

//*工厂函数，通过传入的状态来自动帮我们实例化相应的类
class ModalFactory {
  dom: HTMLElement;
  constructor(dom1: HTMLElement) {
    this.dom = dom1;
  }
  modal: any = null;
  
  create(status: MType) {
    switch (status) {
      case MType.success:
        this.modal = new SuccessModal();
        break;
      case MType.warning:
        this.modal = new WarningModal();
        break;
      case MType.error:
        this.modal = new ErrorModal();
        break;
      default:
        break;
    }
    this.dom.className = this.modal.className;
  }
}

export default ModalFactory;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们使用的时候，就可以在点击事件里这样使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const handleClick = (e: Event) =&gt; {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();
    if (tagName === &quot;button&quot;) {
      const status = tar.dataset.status;
      
      modalFactory.create(status as MType); //通过传入的状态来自动实例化相应的类
      
    }
  };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看效果：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/7acfa3a6246a44fef748ca09f5b32c0f.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样，我们就可以愉快地扩展功能了。</p><p>现在我们一起来总结一下什么是工厂模式：工厂模式其实就是**将创建对象的过程单独封装。**顺便我们还能无脑传参！</p><h2 id="装饰器模式" tabindex="-1"><a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a> 装饰器模式</h2><p>装饰器模式属于结构性，前面说，结构型模式描述如何将类或者对象结合在一起形成更大的结构。那么装饰器模式呢，属于其中一小部分，就是对原对象进行包装扩展，这个过程并不改变原对象，从而实现产品经理的复杂需求。</p><p>下面还是说一个小需求来介绍装饰器模式：</p><p>这里有一段别人的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//别人代码
let eg = () =&gt; {
	alert(1)
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求就是，你要在执行eg函数的时候，顺便再弹出一个2。</p><p>这里正常改的话，可能就写成这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//修改代码
let eg = () =&gt; {
	alert(1)
	alert(2)
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但，我们说这样写其实就违反了开闭原则，而且，如果这里的alert（1）并不是一句简单的执行语句，而是一堆复杂的逻辑代码，而alert（2）也并不是简单的alert（2），这个时候，怎么办呢？</p><p>我们可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//扩展函数
const _eg = eg;
eg = () =&gt; {
	_eg();
	alert(2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以新建一个变量_eg先将原函数保存一下原函数的引用，然后扩展一下eg，执行刚保存的原函数_eg，然后将自己的功能扩展在原函数的下面。</p><p>回顾装饰器模式的定义：“在不改变原对象的基础上，对原对象进行包装扩展”，我们发现这里就是一个装饰器模式的应用。</p><p>这里我扯一个设计思想——AOP（Aspect Oriented Programing）：</p><p>为了更好的介绍AOP，我们再把它跟我们平时比较熟悉的OOP对比下：</p><p>我们常说要用OOP（Object Oriented Programing）——面向对象编程，那么AOP呢，就是面向切面编程，这两者并不是一个互斥的关系，他们的区别是：</p><p>|OOP|AOP| |---|---|---| |封装|封装的是方法和属性|封装的是业务| |最小操作单元|对象|切面| |特点|属性和方法都要通过对象才能调|将主业务和通用业务区分，将通用业务划分为切面| |特点|把系统看成多个对象的交互|把系统分为不同的关注点，或者称之为切面|</p><p>为什么要扯AOP过来呢，因为AOP跟装饰器模式是有点像的，接下简单来说明下：</p><p>AOP在Java Spring的应用中，有三种通知，before（前置通知）、after（后置通知）、arround（环绕通知）。</p><p>什么意思呢？具体我们用ES5实现下其中一种通知，“before”就明了了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.before = function (beforefn) {
  const __self = this;
  return function () {
    beforefn.apply(this, arguments);
    return __self.apply(this, arguments);
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们在Function的原型里加了一个before，那其实我们前面那个实现装饰器模式的例子就可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function  myFn(){
  alert(2)
}

eg=eg.before(myFN)
eg()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那可能有的同学会说，你这样用js去实现AOP，污染原型嘛！</p><p>那我们不写在原型上:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  const before=function(fn,beforeFn){
    return function(){
      beforeFn.apply(this,arguments);
      return fn.apply(this,arguments);
    }
  }
  cosnt eg = function(){alert(2)};
  eg=before(eg,function(){alert(1)});
  eg()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对吧，这样我们就用一种相对比较优雅的方式实现了这个扩展需求。</p><p>这种方式其实在前端的应用很多，我们可以随便头脑风暴下都可以应用到哪些方面，想想有哪些不需要改变主业务，只是处理一些通用业务的部分，或者说，不改变原对象，仅仅只是对原对象进行功能的扩展。</p><p>那其实，ES7已经支持装饰器的语法糖，写起来更加清爽简洁（但是装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升），接下来我们一起看一看。</p><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><p>装饰器是es7 中的一个提案，是一种与类（class）相关的语法，用来注释或修改类和类方法。它也是实现 AOP编程的一种重要方式。接下来看一个实例。</p><p>还是刚刚消息弹窗的例子，我现在要完善这个弹窗，就是我这个按钮想变成一次性的，点击完后就不允许再次点击，那么这个需求很简单，就是在按钮点击后，将按钮的disable置否。</p><p>我们可以这么实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function disableBtn(target: any, name: string, descriptor: PropertyDescriptor) {
  const oldValue = descriptor.value;
  descriptor.value = function (status: string) {
    const btn = document.querySelector(\`button[data-status=&quot;\${status}&quot;]\`);
    btn.setAttribute(&quot;disabled&quot;, &quot;true&quot;);
    oldValue.call(this, status);
  };
}


class ModalFactory {
  dom: HTMLElement;
  constructor(dom1: HTMLElement) {
    this.dom = dom1;
  }
  modal: any = null;
  
 @disableBtn             //******************使用的地方在这里~！*******************//
 create(status: MType) {

    switch (status) {
      case MType.success:
        this.modal = new SuccessModal();
        break;
      case MType.warning:
        this.modal = new WarningModal();
        break;
      case MType.error:
        this.modal = new ErrorModal();
        break;
      default:
        break;
    }
    this.dom.className = this.modal.className;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看效果：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/38da2816644cb58a2af167c06a5fc625.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样，我们就可以很方便地去扩展功能啦。</p><p>当然，由于浏览器还不支持装饰器，现在使用还是需要一些额外操作，你需要开启 tsconfig.json里的实验选项：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/a05ce731068439e5c4ccc51b899c09f2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里的disableBtn是一个方法装饰器，相关的还有类装饰器、属性装饰器、参数装饰器、访问装饰器。</p><h4 id="类装饰器、方法装饰器、属性装饰器、参数装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器、方法装饰器、属性装饰器、参数装饰器" aria-hidden="true">#</a> 类装饰器、方法装饰器、属性装饰器、参数装饰器</h4><p>类装饰器、方法装饰器、属性装饰器、参数装饰器，他们各自的参数不同，我们可以通过查看其类型得知这些参数是什么。</p><p>下图为ts中每种装饰器的类型定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//类装饰器
declare type ClassDecorator = &lt;TFunction extends Function&gt;(target: TFunction) =&gt; TFunction | void;
//属性装饰器
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) =&gt; void;
//方法装饰器
declare type MethodDecorator = &lt;T&gt;(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor&lt;T&gt;) =&gt; TypedPropertyDescriptor&lt;T&gt; | void;
//参数装饰器 
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol,parameterIndex: number) =&gt; void;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印不同装饰器的每一个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//类
const aa: ClassDecorator = (target) =&gt; {
  console.warn(&quot;------------------------------------类装饰器&quot;);

  console.log(target);
};
@aa
class A {}

//方法
const bb: MethodDecorator = (target, name, descriptor) =&gt; {
  console.warn(&quot;------------------------------------方法装饰器&quot;);

  console.log(target);
  console.log(name);
  console.log(descriptor);
};

class B {
  @bb
  method() {}
}

//属性
const cc: PropertyDecorator = (target, name) =&gt; {
  console.warn(&quot;-----------------------------------属性装饰器&quot;);

  console.log(target);
  console.log(name);
};

class C {
  @cc
  name: string;
}

//参数
const dd: ParameterDecorator = (target, name, index) =&gt; {
  console.warn(&quot;------------------------------------参数装饰器&quot;);

  console.log(target);
  console.log(name);
  console.log(index);
};

class D {
  method(@dd param: string) {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pan.udolphin.com/files/image/2022/4/08b1a60d63e496b1b89bf5eafd741a47.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，类装饰器的参数只有一个，就是它本身。</p><p>方法装饰器的参数有三个，分别为当前装饰的函数的原型、当前修饰的函数名称以及一个description，里面可以看到可以拿到一些当前修饰的函数的控制权，那么有了这些控制权，我们可以做很多事。</p><p>属性装饰器的参数就是修饰的函数原型和修饰的属性名。</p><p>参数装饰器的参数就是修饰的函数原型和修饰的方法名以及参数索引。</p><p>其实我们平时最常用的就是方法装饰器，我们刚刚说，方法装饰器里可以拿到当前修饰函数的控制权，可以做很多事，就比如说刚刚的disableBtn，我们先通过第三个参数拿到的旧的函数值，然后添加一些自己要扩展的功能，再返回，这样就完成了一个不破坏原有结构的扩展。</p><h3 id="装饰器工厂" tabindex="-1"><a class="header-anchor" href="#装饰器工厂" aria-hidden="true">#</a> 装饰器工厂</h3><p>还是消息提示框的例子，我们再添一个需求，就是根据点击的不同按钮，创建对应状态的消息提示框，然后消息提示框展示一秒后消失。</p><p>要根据点击的不同按钮，创建对应状态的消息提示框，我们首先创建一个createModal的装饰器工厂：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const createModal = (status: MType) =&gt; {
  return (target: any, name: string, descriptor: PropertyDescriptor) =&gt; {
    const oldValue = descriptor.value;
    descriptor.value = function (status: string) {
      const div = document.createElement(&quot;div&quot;);
      div.className = \`modal \${status}\`;
      div.innerHTML = \`&lt;header&gt;\${status}&lt;/header&gt;\`;
      document.body.appendChild(div);
      oldValue.call(this, status);
    };
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们传递了一个状态参数进来，然后根据不同的状态返回相应的装饰器，相当于将正常的装饰器函数外面包了一层，可以用来传参。</p><p>接着我们写下一秒消失的装饰器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const after = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) =&gt; {
  const oldValue = descriptor.value;
  descriptor.value = function (status: string) {
    setTimeout(() =&gt; {
      const oModal: Element = document.querySelector(&quot;.modal&quot;);
      document.body.removeChild(oModal);
    }, 1000);
    oldValue.call(this, status);
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们将这两个装饰器叠加在修饰方法上：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ModalFactory {
  dom: HTMLElement;
  constructor(dom1: HTMLElement) {
    this.dom = dom1;
  }
  modal: any = null;

  @before(MType.success)
  @after
  create(status: MType, title: string) {
      //.......
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看效果：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/dcdf41e56ec36abc0075a08fd585b14a.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样我们就实现需求啦。</p><h3 id="装饰器模式的应用" tabindex="-1"><a class="header-anchor" href="#装饰器模式的应用" aria-hidden="true">#</a> 装饰器模式的应用</h3><p>前文说让大家想想装饰器模式在前端的应用，不知道大家想起了多少呢？</p><p>其实在装饰器模式在前端的应用很多，比如说，localStorage设置过期时间、路由守卫、请求公共参数等，其中也有很著名的应用例如React高阶组件(HOC)：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;

export default Component =&gt; class extends React.Component {
  render() {
    return &lt;div style={{cursor: &#39;pointer&#39;, display: &#39;inline-block&#39;}}&gt;
      &lt;Component/&gt;
    &lt;/div&gt;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里这个装饰器（高阶组件）接受一个 React 组件作为参数，然后返回一个新的 React 组件。可以看出，就是包裹了一层 div，添加了一个 style，就这么修饰一下，以后所有被它装饰的组件都会具有这个特征。</p><p>我们前面说，ts的装饰器是AOP思想在前端的应用，AOP有一个特点是就是区分开主要业务和通用业务，着眼于处理通用业务。而装饰器就是用来封装通用业务，并不依赖于其他任何逻辑，这也提醒我们，其实很多通用业务我们没必要自己去造轮子嘛，说不定网上已经有现成的实现了。</p>`,122),u={href:"https://github.com/jayphelps/core-decorators",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"里面有一些使用频率较高的装饰器，里面的实现也都是简单又通用的功能。非常推荐有兴趣的同学去看看。",-1),o=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(" 总结")],-1),b=e("p",null,"好啦，以上就是我今天分享的全部内容啦，我们今天好好体会了下设计模式中，结构型和创建型两种类型里的具体模式，也始终贯彻了开闭原则，认识了工厂模式和装饰器模式，也去看了对应于前端的实例，那么希望通过今天的分享能让您有所收获，特别是装饰器模式，记得用起来哦！",-1),p=e("p",null,"感谢您的耐心阅读，我是数字办的郭亦奇，期待与您一起成长~",-1);function g(h,f){const i=d("ExternalLinkIcon");return a(),l("div",null,[c,e("p",null,[n("接下来给大家推荐一个网站："),e("a",u,[n("https://github.com/jayphelps/core-decorators"),r(i)])]),m,o,b,p])}const q=s(v,[["render",g],["__file","Javasript设计模式之工厂模式和装饰器模式.html.vue"]]);export{q as default};
