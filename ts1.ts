let tempBolean:boolean = true;    //bool
let tempNumber:number = 9;     //number

let tempStr:string = 'hello';  //string
tempStr += 'world';    

let myName:string = 'hello';
let age:number = 33;

console.log(`${myName} my age is ${age}`); 

let list:number[] = [1,2,3] //   指定数字类型元素数组
let list2:Array<string|number|boolean> = [1,'2','3',true];   //数组范型，指定数组允许的元素类型

//tuple 元组，类似于数据库表的每一条记录，这条数据具有多个字段，字段值是不同的类型。
let tuple1:[number,string];
tuple1 = [1,'a'];   
//tuple1 = ['1','3']    //err   每一个元素必须与其定义的类型相匹配
//tuple1[3] = true;   //err 未定义的类型，新增的数据只能是已定义数据类型
//  typeof(tuple1);    //object

//enum  枚举类型
enum Color{ red=1,green=3,blue };   //red = 1   指定编号起始值，也可以全员指定
let c1:Color = Color.green;
let c2:Color = Color.blue;

console.log(c1,c2,Color[1]);   //3,4,'red'

let notsure:any = 'aaa';   //任意类型
let list3:Array<any> = [1,'2',true];   //任意类型数据数组

//void 没有任何类型的类型，最常见的就是执行一段逻辑但是没有任何返回值的函数就是void
function noReturn(arg1,arg2):void{
	console.log(arg1,arg2);
}
noReturn('test void','ok!');
//void 类型的变量只能赋予undefined null两个值


//undefined null
let u:undefined = undefined;
let n:null = null;  //唯一值 null undefined
//null和undefined是所有类型的字类型，也就是说，你可以把这两个值赋值给任意类型的数据；
let nnumber1:number = null;    //ok
let nnumber2:number = undefined;    //ok

//never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//断言  <type>value；value as string.length
let someValue1:any = 'this is string';
let strLength:number = (<string>someValue1).length; //必须为一个string
console.log(strLength);
/*
let someValue1:any = 'this is string';
let strLength:number = (someValue1 as string).length; //必须为一个string
console.log(strLength);
*/

//解构赋值
let o = {a:1,b:2};
let { a:a1,b:b1} = o;
console.log(a1);  //为属性重命名


//函数声明  
type C = {a:string,b?:number}; //type关键字声明类型别名;
function f({a,b}:C):void{  //冒号前面添加一个问号，则表明该参数是可选的
	/*
		说明：  
	*/
	console.log('test')
}
// 等同于
let g = {
	d:'string',
	e:123
};
let {d,e}:{d:string,e:number} = g; 

/*
  这里有一个obj: g 里面有d,e两个属性，现在获取到d,e分别指定类型为d,e；
*/
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

let f1:string[] = ['a','b','c'];
let f2:Array<number> = [1,2,3];

function ff1(name:string,arg1?:number ,...arg2:string[]) :void{
	console.log(name,arg1,arg2.join("|")); //将之后的参数序列化为一字符数组
}
ff1('打印：',23,'a','b','c','d');
















