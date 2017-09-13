简单的选项卡插件开发,流程详解
jQuery插件机制

  jQuery为开发插件提拱了两个方法，分别是：

     jQuery.fn.extend(object); 给jQuery对象添加方法。

     jQuery.extend(object); 为扩展jQuery类本身.为类添加新的方法，可以理解为添加静态方法。

     这两个方法都接受一个参数，类型为Object，Object对应的"名/值对"分别代表"函数或方法体/函数主体"。
 
 jQuery.fn查看源码可知
 
 jQuery.fn = jQuery.prototype,原型链
