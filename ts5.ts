//泛型

//返回任意类型它所接受的参数
function identity1(arg:any):any{
	return arg;
}
/*
使用any类型会导致这个函数可以接收任何类型的arg参数，
这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 
这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
*/
function indentity2<T>(arg:T):T{
	return arg;
	// 这个函数即是泛型
}
/*
  理解： 这里的 T 是一个“类型变量”即它的值是一种类型，string，number，boolean等等
  T 用来约束传入值的类型，返回值也会是这个类型
  例：
*/

let indentity2Value1 = indentity2<string>('seaseeyoul');
// 这里的 indentity2Value 将会得到 string类型的 ‘seaseeyoul’
let indentity2Value2 = indentity2('seaseeyoul'); 
//不指定类型时候ts将使用类型推导自动补全

function logArgsLength<T>(arg: T[]):T[]{
	console.log(arg.length);
	return arg;
}
/*
	console.log(arg.length); no more error
	return arg.length;  error
*/
function logArgsLength2<T>(arg:Array<T>):Array<T>{	
	return arg;
}

function indentity3<T>(arg:T):T{
	return arg;
}
let myIndentity3:<U>(arg:U)=>U = indentity3;
let myIndentity4:{<T>(arg:T):T} = indentity3;

//泛型约束
interface Lengthwise{
	length:number;
}
function loggingIndentity<T extends Lengthwise>(arg:T):T{
	console.log(arg.length);
	return arg;
}
// loggingIndentity(3) //error 3没有length属性
loggingIndentity({length:4,info:'seaseeyoul'}) //传人任意一个包含length属性的obj即可
//

/*
function getProperty(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
*/

//泛型中使用类类型
function create<T>(c:{new(): T;}):T{
	return new c();
}


/*
	解释：
	    Bee和Lion都继承至Animal类，
	    Bee的持有者是BeeKeeper
	    Lion的持有者是LionKeeper
	    createInstance中限定传入的 A 必须继承至 Animal， 并且返回一个创建的新的尸体
*/
class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!































