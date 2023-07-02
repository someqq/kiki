import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as v,a as n,b as e,d as s,f as d}from"./app-2d139388.js";const c={},t=d(`<h1 id="状态模式和代理模式" tabindex="-1"><a class="header-anchor" href="#状态模式和代理模式" aria-hidden="true">#</a> 状态模式和代理模式</h1><blockquote><p>由许多杯好喝的生椰拿铁想到的。</p><p>马上就要进入夏天啦！要说夏天必备的饮料，冰凉的椰汁绝对算是其中一个。关于**夏天最好的期待，<strong>我脑海中时常会浮现出大海、沙滩、遮阳伞、一大颗</strong>椰子。<strong>特别喜欢椰汁的清爽和椰肉的甜香</strong>，**所以出去也会喜欢买椰子水；在一些海南餐厅或者泰式餐厅，椰奶冻，也是受大家所欢迎的。喜欢创新的咖啡人当然不会错过椰子这个绝佳的食材，这两年椰味咖啡饮料也上了不少咖啡馆的菜单。<strong>所以好喝的生椰拿铁</strong>火了起来，对了厚乳拿铁也很好喝哇。那么突然间就感觉咖啡机好厉害哇，除了可以制作生椰拿铁，还可以制作厚乳拿铁，香草拿铁等等，一台小小的咖啡机就能制作出不同口味的咖啡。其实咖啡机切换不同的状态制作出不同咖啡的过程其实就像是本文要讲的“状态模式”的过程。</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>现在的生活，工作和咖啡是不可分割的整体，每个人的口味都不同，一台咖啡机可以吐出很多种类的咖啡。那么在喝咖啡之余想一想，其实“咖啡机也是一个产品。它在不同的选择下有着不同的任务：当我们选择生椰拿铁时，它进入生椰拿铁的制作工序；当我们选择美式咖啡时，它进入美式咖啡的制作工序。一台小小的机器，可以根据用户的口味产出不同口味的咖啡，想想也好厉害啊！那么我们用程序把咖啡机制作咖啡的这个过程实现一下吧。</p><h2 id="例子1" tabindex="-1"><a class="header-anchor" href="#例子1" aria-hidden="true">#</a> 例子1</h2><p>假设一台咖啡机需要制作四种咖啡，这些不同的”选择“间的切换，本质就是状态的切换。</p><p>在这个能做五种咖啡的咖啡机体内，蕴含着五种状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>美式咖啡：黑咖啡
普通拿铁：黑咖啡+牛奶
生椰拿铁：黑咖啡+牛奶+厚椰乳
厚乳拿铁：黑咖啡+牛奶+炼乳
焦糖拿铁：黑咖啡+牛奶+焦糖酱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么一梳理，思路一下子清晰了起来。作为死性不改的 <code>if-else</code>侠，我很快的写出了一套功能完备的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

// 自助咖啡机
  class CoffeeMaker {
    constructor() {
      // 这里面略过与咖啡状态无关的一些初始化逻辑
      //初始化状态
      this.state = &#39;init&#39;;
    }
    changeState(state) {
      //记录当前的状态
      this.state = state;
      if (state === &#39;american&#39;) {
        //如果是美式咖啡
        // 这里面用console.log代替咖啡制作的业务逻辑
        console.log(&#39;咖啡机吐黑咖啡&#39;);
      } else if (state === &#39;ordinary&#39;) {
        //如果是普通拿铁
        console.log(&#39;咖啡机吐黑咖啡加点奶&#39;);
      } else if (state === &#39;raw-coconut&#39;) {
        //如果是生椰拿铁
        console.log(&#39;咖啡机吐黑咖啡加点奶再加点厚椰乳&#39;);
      } else if (state === &#39;thick-milk&#39;) {
        //如果是厚乳拿铁
        console.log(&#39;咖啡机吐黑咖啡加点奶再加点炼乳&#39;);
      }
    }
  }
  // 测试一下
  const mk = new CoffeeMaker();
  mk.changeState(&#39;american&#39;); //咖啡机吐黑牛奶
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不，我必不可能再做‘if-else’侠。我要进行改装！</p><h2 id="改造咖啡机的状态切换机制" tabindex="-1"><a class="header-anchor" href="#改造咖啡机的状态切换机制" aria-hidden="true">#</a> 改造咖啡机的状态切换机制</h2><h2 id="职责分离" tabindex="-1"><a class="header-anchor" href="#职责分离" aria-hidden="true">#</a> 职责分离</h2><p>首先，映入眼帘最大的问题，就是咖啡制作的过程不可复用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> changeState(state) {
  //记录当前的状态
  this.state = state;
  if (state === &#39;american&#39;) {
  //如果是美式咖啡
  // 这里面用console.log代替咖啡制作的业务逻辑
  console.log(&#39;咖啡机吐黑咖啡&#39;);
  } else if (state === &#39;ordinary&#39;) {
  //如果是普通拿铁
   console.log(&#39;咖啡机吐黑咖啡加点奶&#39;);
  } else if (state === &#39;raw-coconut&#39;) {
  //如果是生椰拿铁
  console.log(&#39;咖啡机吐黑咖啡加点奶再加点厚椰乳&#39;);
  } else if (state === &#39;thick-milk&#39;) {
  //如果是厚乳拿铁
  console.log(&#39;咖啡机吐黑咖啡加点奶再加点炼乳&#39;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题发现</strong>：这个<code>changeState</code>函数，它好好管好自己的事（状态切换）不行吗？怎么连做咖啡的过程也写在这里面？这不合理。</p><p>别的不说，就说好喝的生椰拿铁吧，它就是拿铁加点厚椰乳。那我就没必要再把做拿铁的逻辑在香草拿铁里再写一遍。可以直接调用拿铁制作工序对应的函数，然后末尾补个加厚椰乳的动作就行了呢。但是，我们现在所有的制作工序都没有提出来函数化，而是以一种极不优雅的姿势挤在了<code>changeState</code> 里面，谁也别想复用谁。太费劲了，咱们赶紧给它搞一搞职责分离：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 进行改装
  // 职责分离
  class CoffeeMaker {
    constructor() {
      this.state = state;
    }
    changeState(state) {
      //记录当前的状态
      this.state = state;
      if (state === &#39;american&#39;) {
        //如果是美式咖啡
        // 这里面用console.log代替咖啡制作的业务逻辑
        this.americanCoffee();
      } else if (state === &#39;ordinary&#39;) {
        //如果是普通拿铁
        this.ordinaryLatte();
      } else if (state === &#39;raw-coconut&#39;) {
        //如果是生椰拿铁
        this.rawCoconutLatte();
      } else if (state === &#39;thick-milk&#39;) {
        //如果是厚乳拿铁
        this.thickMilkLatte();
      }
    }

    americanProcess() {
      console.log(&#39;咖啡机吐黑咖啡&#39;);
    }
    ordinaryProcess() {
      this.americanProcess();
      console.log(&#39;再加点奶&#39;);
    }
    rawCoconutLatte() {
      this.ordinaryProcess();
      console.log(&#39;再加点厚椰乳&#39;);
    }
    thickMilkLatte() {
      this.ordinaryProcess();
      console.log(&#39;再加点炼乳&#39;);
    };
  }
  const mk1 = new CoffeeMaker();
  mk1.changeState(&#39;ordinaryProcess&#39;); //咖啡机吐黑咖啡 再加点奶  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开放封闭" tabindex="-1"><a class="header-anchor" href="#开放封闭" aria-hidden="true">#</a> 开放封闭</h2><p>上面只是解决了复用的问题</p><p>但 &#39;if-else &#39;仍然活得好好的 ，假如我现在想去增加焦糖拿铁这个咖啡品种，就不得不修改 changeState的函数逻辑，这就违反了“开放封闭”的原则。</p><p>同时一个函数里面有这么多的判断，也是十分不合理的。现在要像策略模式一样，想办法把咖啡机状态和咖啡制作工序之间的映射关系体现出来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const stateToProcessor = {
 americanProcess() {
   console.log(&#39;咖啡机吐黑咖啡&#39;);
 },
 ordinaryProcess() {
   this.americanProcess();
   console.log(&#39;再加点奶&#39;);
 },
 rawCoconutLatte() {
   this.ordinaryProcess();
   console.log(&#39;再加点厚椰乳&#39;);
 },
 thickMilkLatte() {
   this.ordinaryProcess();
    console.log(&#39;再加点炼乳&#39;);
  },
}
class CoffeeMaker {
 constructor() {
 /**
 这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
 **/
 // 初始化状态，没有切换任何咖啡模式
 this.state = &#39;init&#39;;
}
//关注咖啡机状态切换函数
changeState(state) {
//记录当前状态
this.state = state;
// 若当前状态不存在，则返回
 const func = this.stateToProcessor[state];
  if (!func) {
   return
    }
  func.bind(this)();
   }
 }
const mk2 = new CoffeeMaker();
mk2.changeState(&#39;rawCoconutLatte&#39;); // 咖啡机吐黑咖啡 再加点奶 再加点厚椰乳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面已经实现了一个js版本的状态模式</p><p>但这里有一点大家需要引起注意： 这种方法仅仅是看上去完美无缺， 其中却暗含一个非常重要的隐患——”stateToProcessor“里的工序函数， 感知不到咖啡机的内部状况。</p><p>所以需要进一步改造</p><p>把状态-行为映射对象作为主体类对应实例的一个属性添加进去就行了。</p><h2 id="进一步改造" tabindex="-1"><a class="header-anchor" href="#进一步改造" aria-hidden="true">#</a> 进一步改造</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  class CoffeeMaker {
      constructor() {
        /**
    这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
  **/
        // 初始化状态，没有切换任何咖啡模式
        this.state = &#39;init&#39;;
      }
      stateToProcessor = {
        americanProcess() {
          // 尝试在行为函数里拿到咖啡机实例的信息并输出
          console.log(&#39;咖啡机吐黑咖啡&#39;);
        },
        ordinaryProcess() {
          this.americanProcess();
          console.log(&#39;再加点奶&#39;);
        },
        rawCoconutLatte() {
          this.ordinaryProcess();
          console.log(&#39;再加点厚椰乳&#39;);
        },
        thickMilkLatte() {
          this.ordinaryProcess();
          console.log(&#39;再加点炼乳&#39;);
        },
      }
      // 关注咖啡机状态切换函数
      changeState(state) {
        this.state = state;
        const func = this.stateToProcessor[state];
        if (!func) {
          return
        }
        func.bind(this)();
      }
    }

    const mk = new CoffeeMaker();
    mk.changeState(&#39;rawCoconutLatte&#39;); //我只吐黑咖啡 再加点奶 再加点厚椰乳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>巩固一下，再给大家看一个超级玛丽的例子吧</p><h2 id="例子2" tabindex="-1"><a class="header-anchor" href="#例子2" aria-hidden="true">#</a> 例子2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> //创建超级玛丽状态类
    var MarryState = function () {
      //内部状态私有变量
      var _currentState = {};
      //动作与状态方法映射
      states = {
        jump: function () {
          //跳跃
          console.log(&#39;jump&#39;);
        },
        move: function () {
          //移动
          console.log(&#39;move&#39;);
        },
        shoot: function () {
          //射击
          console.log(&#39;shoot&#39;);
        },
        squat: function () {
          //蹲下
          console.log(&#39;squat&#39;);
        },
      };
      //动作控制类
      var Action = {
        //改变状态方法
        changeState: function () {
          //组合动作通过传递多个参数实现
          var arg = arguments;
          //重置内部状态
          _currentState = {};
          //如果有动作还添加动作
          if (arg.length) {
            //遍历动作
            for (var i = 0; i &lt; arg.length; i++) {
              //向内部状态添加动作
              _currentState[arg[i]] = true;
            }
          }
          //返回动作控制类
          return this;
        },
        //执行动作
        goes: function () {
          console.log(&#39;触发一次动作&#39;);
          //遍历内部保存的动作
          for (var i in _currentState) {
            //如果有动作
            states[i] &amp;&amp; states[i]();
          }
          return this;
        }
      }

      //返回接口方法change、goes
      return {
        change: Action.changeState,
        goes: Action.goes
      }
    };
    //第一种方法
    MarryState().change(&#39;jump&#39;, &#39;move&#39;, &#39;shoot&#39;, &#39;squat&#39;) //添加动作
      .goes() //添加动作
      .goes() //执行动作
      .change(&#39;shoot&#39;) //添加射击动作
      .goes(); //执行动作

    //第二种方法
    var marry = new MarryState();
    marry.change().goes().goes().change().goes();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以打印结果为：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/0b65b70200922fa6e787213415b46dd2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>现在通过两个例子，大家对状态模式是否更清晰一些了呢，但是大家有没有觉得它和策略模式有异曲同工之妙呢，下面我们来对比一下他们吧！</p><h2 id="对比策略模式" tabindex="-1"><a class="header-anchor" href="#对比策略模式" aria-hidden="true">#</a> 对比策略模式</h2><p>对比策略模式，这种方法更加灵活，可以把咖啡机的状态和咖啡制作工序分离开来，每个状态对应一个工序函数，这样就可以把咖啡机内部状况隐藏起来了。</p><p><strong>状态模式</strong>，更注重由状态的改变，引起的一连串方法的逻辑改变</p><p><strong>策略模式</strong>，更注重调用者如何调用，方法都是固定的。只是根据不同的状态，选择不同的状态的方法而已</p><p><strong>举例</strong>看一下 两种不同的状态</p><p>这里用策略模式来尝试模拟你的技能和兴趣。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var 绝技 = {
      思考: function () {
        console.log(&quot;思路清晰&quot;);
      },
      看书: function () {
        console.log(&#39;一气呵成&#39;);
      }
    };

    var 爱好 = {
      敲代码: function () {
        console.log(&quot;非常厉害&quot;);
      },
      解决bug: function () {
        console.log(&quot;是个高手&quot;);
      }
    };

    var 你 = {
      展示绝技: function (strategy) {
        绝技[strategy]();
      },
      展示爱好: function (strategy) {
        爱好[strategy]();
      }
    };

    你.展示绝技(&quot;思考&quot;); // 思路清晰
    你.展示绝技(&quot;看书&quot;); // 一气呵成
    你.展示爱好(&quot;敲代码&quot;); // 非常厉害
    你.展示爱好(&quot;解决bug&quot;); // 是个高手
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码封装了两组算法，每组算法内由外界来决定选择具体某种算法。</p><p>那么对于状态模式，也来写一下自己。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var 烦 = {
      思考: function () {
        console.log(&#39;头脑不灵活，思路不清晰&#39;);
        当前心情 = 爽;
      },
      敲代码: function () {
        console.log(&#39;容易敲出bug&#39;);
      }
    };

    var 爽 = {
      思考: function () {
        console.log(&#39;头脑灵活，思路清晰&#39;);
      },
      敲代码: function () {
        console.log(&#39;敲代码几乎不出错&#39;);
        当前心情 = 烦;
      }
    };

    var 当前心情 = 烦;

    var 他 = {
      思考: function () {
        当前心情[&quot;思考&quot;]();
      },
      敲代码: function () {
        当前心情[&quot;敲代码&quot;]();
      }
    };
    他.思考(); // 头脑不灵活，思路不清晰
    他.思考(); // 头脑灵活，思路清晰
    他.敲代码(); // 敲代码几乎不出错
    他.敲代码(); // 容易敲出bug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异同处" tabindex="-1"><a class="header-anchor" href="#异同处" aria-hidden="true">#</a> 异同处：</h2><p><strong>相同</strong>： 策略模式和状态模式确实是相似的，它们都封装行为、都通过委托来实现行为分发。</p><p><strong>异同</strong>： 但策略模式中的行为函数是”潇洒“的行为函数，它们不依赖调用主体、互相平行、各自为政，井水不犯河水。 而状态模式中的行为函数，首先是和状态主体之间存在着关联，由状态主体把它们串在一起；另一方面，正因为关联着同样的一个（或一类）主体，所以不同状态对应的行为函数可能并不会特别割裂。</p><h2 id="状态模式回顾" tabindex="-1"><a class="header-anchor" href="#状态模式回顾" aria-hidden="true">#</a> 状态模式回顾</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><blockquote><p>状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。另一种理解： 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。</p></blockquote><p>这个定义比较粗糙，可能你读完仍然 get 不到它想让你干啥。这时候，我们就应该把目光转移到它解决的问题上来：</p><blockquote><p>状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。</p></blockquote><p>状态模式既是解决程序中臃肿的分支判断语句问题，将每个分支转化为一种状态独立出来，方便每种状态的管理又不至于每次执行时遍历所有的分支。在程序中到底产出哪种行为结果，决定于选择哪种状态，而选择何种状态又是在程序运行中决定的。</p><h3 id="最终目的" tabindex="-1"><a class="header-anchor" href="#最终目的" aria-hidden="true">#</a> 最终目的</h3><p>简化分支判断流程。</p><h1 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h1><h2 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h2><p>代理模式，式如其名——在某些情况下，出于种种考虑/限制，一个对象<strong>不能直接访问</strong>另一个对象，需要一个<strong>第三者</strong>（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。</p><h2 id="举个栗子-例子" tabindex="-1"><a class="header-anchor" href="#举个栗子-例子" aria-hidden="true">#</a> 举个栗子（例子）</h2><p>下面这张图片大家都见过吧，当我们自己不用vpn翻墙去访问谷歌浏览器的时候，会出现下面的提示，无法访问此网站。</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/ed9c92c47389d57a0cf1f6a0efa4da53.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是为啥呢？这就要从网络请求的整个流程说起了。一般情况下，当我们访问一个 url 的时候，会发生下图的过程：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/4bf339cb79d2bef0a83ccc4973d11f9a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,64),u={href:"http://Google.com",target:"_blank",rel:"noopener noreferrer"},m={href:"http://Google.com",target:"_blank",rel:"noopener noreferrer"},o=d(`<figure><img src="https://pan.udolphin.com/files/image/2022/4/eb0eeddcaf6367ef1dd1ee5f67a6e1f4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>本节我们选取业务开发中最常见的四种代理类型：<strong>事件代理</strong>、<strong>虚拟代理</strong>、<strong>缓存代理</strong>和<strong>保护代理</strong>来进行讲解。</p><h2 id="事件代理" tabindex="-1"><a class="header-anchor" href="#事件代理" aria-hidden="true">#</a> 事件代理</h2><p>事件代理，可能是代理模式最常见的一种应用方式，也是一道实打实的高频面试题。它的场景是一个父元素下有多个子元素，像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
  &lt;title&gt;事件代理&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;father&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;链接1号&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;链接2号&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;链接3号&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;链接4号&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;链接5号&lt;/a&gt;
    &lt;a href=&quot;#&quot;&gt;链接6号&lt;/a&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们现在的需求是，希望鼠标点击每个 a 标签，都可以弹出“我是xxx”这样的提示。比如点击第一个 a 标签，弹出“我是链接1号”这样的提示。这意味着我们至少要安装 6 个监听函数给 6 个不同的的元素(一般我们会用循环，代码如下所示），如果我们的 a 标签进一步增多，那么性能的开销会更大。</p><p>假如不用代理模式，我们将循环安装监听函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const aNodes = document.getElementById(&#39;father&#39;).getElementsByTagName(&#39;a&#39;)
  
const aLength = aNodes.length

for(let i=0;i&lt;aLength;i++) {
    aNodes[i].addEventListener(&#39;click&#39;, function(e) {
        e.preventDefault()
        alert(\`我是\${aNodes[i].innerText}\`)                  
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果为：</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/581b5caf6e3a23e2a966c2721d4b068f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>考虑到事件本身具有“冒泡”的特性，当我们点击 a 元素时，点击事件会“冒泡”到父元素 div 上，从而被监听到。如此一来，点击事件的监听函数只需要在 div 元素上被绑定一次即可，而不需要在子元素上被绑定 N 次——这种做法就是<strong>事件代理</strong>，它可以很大程度上提高我们代码的性能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 获取父元素
 const father = document.getElementById(&#39;father&#39;)

 // 给父元素安装一次监听函数
 father.addEventListener(&#39;click&#39;, function (e) {
   // 识别是否是目标子元素
   if (e.target.tagName === &#39;A&#39;) {
   // 以下是监听函数的函数体
     e.preventDefault()
     alert(\`我是\${e.target.innerText}\`)
    }
 })
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟代理" tabindex="-1"><a class="header-anchor" href="#虚拟代理" aria-hidden="true">#</a> 虚拟代理</h2><p><strong>思想</strong>：先占位、后加载</p><p>此时我们会采取“<strong>先占位、后加载</strong>”的方式来展示图片 —— 在元素露出之前，我们给它一个 div 作占位，当它滚动到可视区域内时，再即时地去加载真实的图片资源，这样做既减轻了性能压力、又保住了用户体验。</p><p>除了图片懒加载，还有一种操作叫<strong>图片预加载</strong>。预加载主要是为了避免网络不好、或者图片太大时，页面长时间给用户留白的尴尬。<strong>常见的操作</strong>是先让这个 img 标签展示一个<strong>占位图，<strong>然后创建一个 <strong>Image 实例</strong>，让这个 Image 实例的 <strong>src</strong>指向</strong>真实的目标图片地址</strong>、观察该 Image 实例的加载情况 —— 当其对应的真实图片加载完毕后，即已经有了该图片的缓存内容，再将 DOM 上的 img 元素的 src 指向真实的目标图片地址。此时我们直接去取了目标图片的缓存，所以展示速度会非常快，从占位图到目标图片的时间差会非常小、小到用户注意不到，这样体验就会非常好了。</p><p>上面的思路，我们可以不假思索地实现如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 图片懒加载预加载等 
    class PreLoadImage {
      // 占位图的url地址
      static LOADING_URL = &#39;xxxxxx&#39;;

      constructor(imgNode) {
        // 获取该实例对应的DOM节点
        this.imgNode = imgNode;
      }
      // 该方法用于设置真实的图片地址
      setSrc(targetUrl) {
        // img节点初始化时展示的是一个占位图
        this.imgNode.src =
          PreLoadImage.LOADING_URL
        // 创建一个帮我们加载图片的Image实例
        const image = new Image();
        // 监听目标图片加载的情况，
        // 完成时再将DOM上的img节点的src属性设置为目标图片的url
        image.onload = () =&gt; {
          this.imgNode.src = targetUrl;
        }
        // 设置src属性，
        // Image实例开始加载图片
        image.src = targetUrl;
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>PreLoadImage</code> 乍一看没问题，但其实违反了我们设计原则中的<strong>单一职责原则</strong>。<code>PreLoadImage</code> 不仅要负责图片的加载，还要负责 DOM 层面的操作（img 节点的初始化和后续的改变）。这样一来，就<strong>出现了两个可能导致这个类发生变化的原因</strong>。</p><p>好的做法是将两个逻辑分离，让 <code>PreLoadImage</code> 专心去做 DOM 层面的事情（真实 DOM 节点的获取、img 节点的链接设置），再找一个对象来专门来帮我们搞加载——这两个对象之间缺个媒婆，这媒婆非代理器不可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class PreLoadImage {
    constructor(imgNode) {
        // 获取真实的DOM节点
        this.imgNode = imgNode
    }
     
    // 操作img节点的src属性
    setSrc(imgUrl) {
        this.imgNode.src = imgUrl
    }
}

class ProxyImage {
    // 占位图的url地址
    static LOADING_URL = &#39;xxxxxx&#39;

    constructor(targetImage) {
        // 目标Image，即PreLoadImage实例
        this.targetImage = targetImage
    }
    
    // 该方法主要操作虚拟Image，完成加载
    setSrc(targetUrl) {
       // 真实img节点初始化时展示的是一个占位图
        this.targetImage.setSrc(ProxyImage.LOADING_URL)
        // 创建一个帮我们加载图片的虚拟Image实例
        const virtualImage = new Image()
        // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
        virtualImage.onload = () =&gt; {
            this.targetImage.setSrc(targetUrl)
        }
        // 设置src属性，虚拟Image实例开始加载图片
        virtualImage.src = targetUrl
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ProxyImage</code> 帮我们调度了预加载相关的工作，我们可以通过 <code>ProxyImage</code> 这个代理，实现对真实 img 节点的间接访问，并得到我们想要的效果。</p><p>在这个实例中，<code>virtualImage</code> 这个对象是一个“幕后英雄”，它始终存在于 JavaScript 世界中、代替真实 DOM 发起了图片加载请求、完成了图片加载工作，却从未在渲染层面抛头露面。因此这种模式被称为“虚拟代理”模式。</p><h2 id="虚拟代理总结" tabindex="-1"><a class="header-anchor" href="#虚拟代理总结" aria-hidden="true">#</a> 虚拟代理总结</h2><p><code>ProxyImage</code> 帮我们调度了预加载相关的工作，我们可以通过 ProxyImage 这个代理， 实现对真实 img 节点的间接访问，并得到我们想要的效果。 在这个实例中，<code>virtualImage</code>这个对象是一个“幕后英雄”， 它始终存在于 JavaScript 世界中、代替真实 DOM 发起了图片加载请求、完成了 图片加载工作，却从未在渲染层面抛头露面。 因此这种模式被称为“虚拟代理”模式。</p><h2 id="缓存代理" tabindex="-1"><a class="header-anchor" href="#缓存代理" aria-hidden="true">#</a> 缓存代理</h2><p>缓存代理比较好理解， 它应用于一些计算量较大的场景里。 在这种场景下， 我们需要“ 用空间换时间”—— 当我们需要用到某个已经计算过的值的时候， 不想再耗时进行二次计算， 而是希望能从内存里去取出现成的计算结果。 这种场景下， 就需要一个代理来帮我们在进行计算的同时， 进行计算结果的缓存了。</p><p>一个比较典型的例子， 是对传入的参数进行求和：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // addAll方法会对你传入的所有参数做求和操作
    const addAll = function () {
      console.log(&#39;进行了一次新计算&#39;)
      let result = 0
      const len = arguments.length
      for (let i = 0; i &lt; len; i++) {
        result += arguments[i]
      }
      return result
    }
    // 为求和方法创建代理
    const proxyAddAll = (function () {
      // 求和结果的缓存池
      const resultCache = {}
      return function () {
        // 将入参转化为一个唯一的入参字符串
        const args = Array.prototype.join.call(arguments, &#39;,&#39;)

        // 检查本次入参是否有对应的计算结果
        if (args in resultCache) {
          // 如果有，则返回缓存池里现成的结果
          return resultCache[args]
        }
        return resultCache[args] = addAll(...arguments)
      }
    })();
    console.log(proxyAddAll(1, 2, 3, 4, 5, 6));
    console.log(proxyAddAll(1, 2, 3, 4, 5, 6));
    console.log(proxyAddAll(1, 2, 3, 4, 5, 6));
    console.log(proxyAddAll(1, 2, 3, 4, 5, 6));
    console.log(proxyAddAll(1, 2, 3, 4, 5, 6));
    console.log(proxyAddAll(1, 2, 3, 4, 5, 6));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果为</p><figure><img src="https://pan.udolphin.com/files/image/2022/4/ce3044eb239bf1cdeb0f8b05c5762abc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="保护代理" tabindex="-1"><a class="header-anchor" href="#保护代理" aria-hidden="true">#</a> 保护代理</h2><h3 id="前置知识-es6中的proxy" tabindex="-1"><a class="header-anchor" href="#前置知识-es6中的proxy" aria-hidden="true">#</a> 前置知识： ES6中的Proxy</h3><p>在 ES6 中，提供了专门以代理角色出现的代理器 ——<code>Proxy</code>。它的基本用法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const proxy = new Proxy(obj, handler)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一个参数是我们的目标对象，也就是接下来提到的<code>&quot;hotPot&quot;</code>。</p><p><code>handler</code> 也是一个对象，用来定义代理的行为，相当于接下来提到的&quot;某外卖平台&quot;。</p><p>当我们通过 <code>proxy</code>去访问目标对象的时候，handler会对我们的行为作一层拦截，我们的每次访问都需要经过<code>handler</code>这个第三方。</p><h3 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子" aria-hidden="true">#</a> <strong>举个例子</strong></h3><p>模拟某外卖平台充值vip会员，在vip身份内购买新的优惠券功能(一次只能选择一种优惠卷购买形式（比如10元4张，15元6张，20元8张...），不能混合购买，或者多购买)</p><h3 id="getting层面的拦截" tabindex="-1"><a class="header-anchor" href="#getting层面的拦截" aria-hidden="true">#</a> getting层面的拦截</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // 吃火锅 火锅基本信息
     const hotPot = {
      //名字
      name: &#39;麻辣香锅&#39;,
      //是否可以使用优惠券
      coupon: false,
      //是否是vip用户
      isVipUser: false,
    }
    
    // 购买人信息
    const buyerInfo = {
      // ...一些必要的信息,
      isValidated: true, //是否验证过 比如注册登录
      isVipUser: false,  //是否为vip用户

    };
    
    // 某团，某宝 代理 出现了（当前使用的这个平台）
    const platform = new Proxy(hotPot, {
    
      get: function (hotPot, key) {
        if (!buyerInfo.isValidated) {
          alert(&#39;您还没有完成验证哦&#39;)
          return
        }
        //...(此处省略其它有的没的各种校验逻辑)
        // 此处我们认为只有验证过（注册登录）的用户才可以购买VIP
        if (buyerInfo.isValidated &amp;&amp; !buyerInfo.isVipUser) {
          alert(&#39;只有VIP才可以使用优惠券哦&#39;)
          return
        }
      }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上主要是getter层面的拦截，</p><p>其实也可以在setter层面拦截。</p><p>假如已经购买过了，但是充会员时的四张优惠卷已经用完了，现在可以在vip身份里面花钱购买优惠券，继续享受优惠券</p><p>规定不同选择的优惠券不同，</p><p>规定优惠券的数据结构由number和value组成</p><h3 id="setting层面的拦截" tabindex="-1"><a class="header-anchor" href="#setting层面的拦截" aria-hidden="true">#</a> setting层面的拦截</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 假如已经是vip会员了，但是成为vip会员时的四张优惠卷已经用完了，现在可以在vip身份里面(vip身份有效期为一个月)花钱购买优惠券，继续享受优惠券
    // 规定不同选择的优惠券不同，
    // 规定优惠券的数据结构由number和value组成
    const newCoupon = {
      number: 4,
      value: 10,
    }
    // 为用户增开newCoupon字段存储购买新的优惠券
    const hotPotNew = {
      //名字
      name: &#39;麻辣香锅&#39;,
      //是否可以使用优惠券
      coupon: false,
      //是否是vip用户
      isVipUser: false,
      //新的优惠卷数组（数量(几组)）
      newCoupons: [],
      // 拒绝同时购买两次优惠券,同时开通优惠券
      topTime: 1,
      // 新购买的优惠券是否使用完,记录vip用户本月最近一次开通的优惠
      lastNewCoupon: newCoupon,
    }
    // 外卖平台推出充值vip成为vip会员 使用完 赠送的四次优惠券后 继续购买新的优惠券的功能
    const platform = new Proxy(hotPotNew, {
       get: function (hotPot, key) {
        if (!buyerInfo.isValidated) {
          alert(&#39;您还没有完成验证哦&#39;)
          return
        }
        //...(此处省略其它有的没的各种校验逻辑)
        // 此处我们认为只有验证过（注册登录）的用户才可以购买VIP
        if (buyerInfo.isValidated &amp;&amp; !buyerInfo.isVipUser) {
          alert(&#39;只有VIP才可以使用优惠券哦&#39;)
          return
        }
      },
      set: function (hotPotNew, key, val) {
        //已经重新购买优惠券，不能同时购买两次（只有新的优惠券使用完才能再次购买）
        if (key === &#39;newCoupons&#39;) {

          if (hotPotNew.topTime &gt; 1) {
            alert(&#39;尊敬的vip用户，您已经购买过优惠券了，请使用完再继续购买吧，不要重复购买哟！&#39;)
            return;
          }
        }
        hotPotNew.lastCoupon = val;
        hotPotNew.newCoupons = [...hotPotNew.newCoupons, val];
      }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),b={href:"https://es6.ruanyifeng.com/#docs/proxy",target:"_blank",rel:"noopener noreferrer"},g=n("h1",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),e(" 总结")],-1),h=n("p",null,"本文介绍了状态模式与代理模式两种设计模式。",-1),p=n("p",null,"希望可以让各位读者对这两种设计模式思想有一个更清楚的了解，能够在代码中可应用的地方应用上这两种思想，提高代码的可维护性与可复用性。如有疑问，可以与我交流，大家共同学习与进步。",-1),f=n("p",null,"感谢您的阅读，我是数字办的祁文杰，期待与您共同成长！！！",-1);function x(y,q){const i=a("ExternalLinkIcon");return r(),v("div",null,[t,n("p",null,[e("没错，比起常规的访问过程，多出了一个第三方 —— 代理服务器。这个第三方的 ip 地址，不在被禁用的那批 ip 地址之列，我们可以顺利访问到这台服务器。而这台服务器的 DNS 解析过程，没有被施加“咒语”，所以它是可以顺利访问 "),n("a",u,[e("Google.com"),s(i)]),e(" 的。代理服务器在请求到 "),n("a",m,[e("Google.com"),s(i)]),e(" 后，将响应体转发给你，使你得以间接地访问到目标网址 —— 像这种第三方代替我们访问目标对象的模式，就是代理模式。如下图")]),o,n("p",null,[e("代理模式到这里结束啦，因为代理模式比较偏底层，所以还是推荐大家去读一下，阮一峰的《ECMAScript 6 入门教程》里面的proxy，链接地址为："),n("a",b,[e("https://es6.ruanyifeng.com/#docs/proxy"),s(i)]),e("，这样可以大家去更好的了解代理模式。")]),g,h,p,f])}const I=l(c,[["render",x],["__file","Javasript设计模式之状态模式和代理模式.html.vue"]]);export{I as default};
