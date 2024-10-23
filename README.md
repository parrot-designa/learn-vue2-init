🔥从零手写vue2 - new Vue中发生了什么？

[专栏文章一 - 🔥从零手写vue2 - 虚拟节点以及createElement函数](https://juejin.cn/post/7421103437607370806)

[专栏文章二 - 🔥从零手写vue2 - template模板解析](https://juejin.cn/post/7427468776995012627)

[专栏文章三 - 🔥从零手写vue2 - 源码目录结构](https://juejin.cn/spost/7428128754571116583)

[专栏文章四 - 🔥从零手写vue2 - 窥探入口 && 源码构建](https://juejin.cn/post/7428888167276429353)

本专栏是打算从零手写一个 vue2，并学习 vue2 中的一些核心理念。

目前我们已经实现了下面的目录。

```js
my-vue2
├─shared
|   └util.js
├─platforms
|     ├─web
|     |  ├─.DS_Store
|     |  ├─entry-runtime-with-compiler-esm.js
|     |  ├─runtime-with-compiler.js
|     |  ├─runtime
|     |  |    └index.js
|     |  ├─compiler
|     |  |    └index.js
├─core
|  ├─index.js
|  ├─vdom
|  |  ├─create-element.js
|  |  └vnode.js
|  ├─util
|  |  ├─debug.js
|  |  ├─index.js
|  |  └lang.js
|  ├─instance
|  |    └index.js
├─compiler
|    ├─index.js
|    ├─parse
|    |   ├─html-parser.js
|    |   └index.js
|    ├─codegen
|    |    └index.js
```

# 一、Vue.prototype._init

在上一篇专栏中，我们知道了Vue就是一个构造函数，所以在使用时需要使用 new关键字。

那么Vue构造函数内部肯定不仅仅是对调用方式进行校验。

还调用了实例上的_init方法。

```js
function Vue(options) { 
    if(__DEV__ && !(this instanceof Vue)){
        warn('Vue是一个构造函数，你应该使用 “new“ 关键字来调用')
    }
    this._init(options);
}
```