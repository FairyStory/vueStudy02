//字符串
function extendsString(){
  //范围 \u0000~\uFFFF
  console.log("\u0061","\uD842\uDFB7");//a  𠮷
  //只要将码点放入大括号，就能正确解读该字符
  console.log("\u{20BB7}") //𠮷

  //字符串遍历器接口
  // 字符串可以使用for...of接口
  let text = String.fromCodePoint(0x20BB7);
  for(let i of text){
    console.log(i) //𠮷
  }
  // JavaScript 规定有5个字符，不能在字符串里面直接使用，只能使用转义形式。
  //   U+005C：反斜杠（reverse solidus)
  //   U+000D：回车（carriage return）
  //   U+2028：行分隔符（line separator）
  //   U+2029：段分隔符（paragraph separator）
  //   U+000A：换行符（line feed）
  //ES2019 允许 JavaScript 字符串直接输入 U+2028（行分隔符）和 U+2029（段分隔符）

  const json = '"\u2029"';
  JSON.parse(json); // 可能报错
  const PS = eval("'\u2029'");
  // ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。
 
  //模板字符串
  console.log(`nihao
  dkjfk f`)
  let name= "weiling",time = "2019-11-6"
  console.log(`hello ${name},how are you ${time}`)
  const tmpl = addrs=>`
    <table>
    ${addrs.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td></tr>
      `).join('')}
    </table>;`
  const data = [
    {first:'<Jane>',last:'Bond'},
    {first:'Lars',last:'<Croft>'},
  ]
  console.log(tmpl(data))

// ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，不能识别码点大于0xFFFF的字符。
// ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
// repeat方法返回一个新字符串，表示将原字符串重复n次。
//ES7 padStart()用于头部补全，padEnd()用于尾部补全。
//ES9 trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格
//matchAll()方法返回一个正则表达式在当前字符串的所有匹配
}
 //解构
function Destructuring(){
  DestructuringArray()
  DestructuringObject()
  DestructuringString()
  DestructuringFuncParams()
}
//数组的解构赋值
function DestructuringArray(){
  let [a, b, c] = [1, 2, 3];
  console.log(a,b,c); // 1 2 3

  let [foo, [[bar], baz]] = [1, [[2], 3]];
  console.log(foo,bar,baz)// 1 2 3

  let [ , , third] = ["foo", "bar", "baz"];
  console.log(third);// baz

  let [x, , y] = [1, 2, 3];
  console.log(x,y);//1 3 ;

  let [head,...tail] = [1,2,3,4,5]
  console.log(head,tail);// 1 [2,3,4,5]

  let [m, n, ...z] = ['a'];
  console.log(m,n,z);//a undefined  []

  //解构不成功，值为undefined
  let [fo] = [];
  console.log(fo);//undefined

  //不完全解构 左边和右边不能一一对应，只匹配对应的值
  let [d, [e], f] = [1, [2, 3], 4];
  console.log(d,e,f);//1 2 4

  //如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。


  //默认值
  let [val = true] = []
  console.log(val);//true
  let [top,bottom = 'b' ] = ['a']
  console.log(top,bottom);// a b
  let [hand,foot = 'b'] = ['a' , undefined]
  console.log(hand,foot);//a b

  // ES6 内部使用严格相等运算符（===），判断一个位置是否有值
  // 只有当一个数组成员严格等于undefined，默认值才会生效。
  let [leg = 1] = [undefined]
  console.log(leg);// 1
  let [finger = 1] = [null]
  console.log(finger);// null 


}

//对象的解构赋值
function DestructuringObject(){
  //变量必须与属性同名，才能取到正确的值
  let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
  console.log(foo,bar);//aaa bbb

    let { tan, sin, cos } = Math;//分别对应Math.tan() Math.sin() Math.cos()方法
    console.log(tan(30),sin(1),cos)
    const { log } = console; 
    log('hello') // hello
    //对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
    let {p:pVal} = {p:"123"}
    //console.log(pVal,p);//123 报错 可以看出实际被赋值的是pVal ，p未被赋值  p可以看成是模块的标签  pVal是实际的内容

    const node = {
      loc: {
        start: {
          line: 1,
          column: 5
        }
      }
    };
    
    let { loc, loc: { start }, loc: { start: { line }} } = node;
    console.log(loc,start,line);//{start{line:1,column:5}}  {line1,column:5} 1

    let {m: n = 3} = {m: 5}; 
    console.log(n);//5 m报错 
    let {x: y = 3} = {x: undefined}; //给默认值
    console.log(y);//3 x报错 

    // 正确的写法
    let head; //{}打头会被当成代码块
    ({head} = {head: 1});
    console.log(head)

}

//字符串的解构赋值
 function DestructuringString(){
  const [a, b, c, d, e] = 'hello';
  console.log(a,b,c,d,e);//h e l l o 
  let {length : len} = 'hello'; //匹配的字符串的length属性
  console.log(len) //5
 }
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
// 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。


// 函数参数的解构
function DestructuringFuncParams(){
  

  add([1, 2]); // 3

 let sum =  [[1, 2], [3, 4]].map(([a, b]) => a + b);
 console.log(sum);//[3,7]
 move({x: 3, y: 8}); // [3, 8]
 move({x: 3}); // [3, 0]
 move({}); // [0, 0]
 move(); // [0, 0]


 moveY({x: 3, y: 8}); // [3, 8]
 moveY({x: 3}); // [3, undefined]
 moveY({}); // [undefined, undefined]
 moveY(); // [0, 0]
}

function add([x, y]){
  let sum = x + y;
  console.log(sum)
  return sum;
}
//初始化的值在前面 对象默认值的赋值方法
function move({x = 0, y = 0} = {}) {
  let arr =[x, y]
  console.log(arr)
  return arr;
}
function moveY({x,y}={x:0,y:0}) {
  let  {m=3,n=5}={m:x,n:y}
  console.log(m,n,"21212121")
  console.log(x,y);
  return [x, y];
}

// 不能使用圆括号的情况 ：变量声明语句、函数参数、赋值语句的模式
// 赋值语句的非模式部分，可以使用圆括号。

//用途：1、交换变量的值；2、从函数返回多个值；3、函数参数的定义；4、提取JSON数据
// 5、函数参数的默认值；6、遍历Map结构；7、输入模块的指定方法
