
//接口
function printLabel(labelObj: {label:string} ):void{
    console.log(labelObj.label);
    //表明这里传入的参数需要拥有一个字段为：label，并且是string类型的。
}
let myLabelObj ={
    size:10,
    label:'size 10 obj',
}
printLabel(myLabelObj);

//定义一个接口，参数不确定是否一定有
interface SquareConfig{
    color?:string;
    width?:number;
}
function CreateSquare(config:SquareConfig):{color:string,area:number}{
    //这里表明参数config都必须遵循  SquareConfig 接口定义的类型
    //额外新增area参数，并且为number类型，   
    let newSquare = {color:'white',area:100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
CreateSquare({width:15}); //CreateSquare({height:15}); //Error

let mySquare = CreateSquare(<SquareConfig>{width:100,height:100});//同名支持类型检查，不存在则绕过
//let mySQuare = CreateSquare({width:100,height:100} as SquareConfig);

interface Point{//属性同名,只读属性，赋值报错
    readonly x:number;
    readonly y:number;
}
let p1:Point = {x:10,y:5}

let arr1:number[] = [1,2,3,4]; //声明一个数字数组
//let arr1:Array<number> =  [1,2,3,4];//相同
let ro:ReadonlyArray<number> = arr1;
//这里的ro将只允许读操作，不允许写和赋值。

let arr2 = ro as Array<number>; //允许类型断言重写
// 参数类型断言 <string>someValue  someValue as string

//索引签名
interface CatConfig{
    height:number;
    weight:number;
    [propName:string]:any; //属性名是string类型，值是any类型
}

//函数类型
interface SearchFunc {
    (source:string,subString:string):boolean;
    //定义一个函数类型的接口
    //第一个参数，第二个参数均为 string类型，返回值为boolean类型。
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
/*
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
*/

//可索引类型
interface StringArray{
    [index:number]:string;
}
let myArray:StringArray = ['seaseeyoul','mogoethe'];
console.log(<string>myArray[0]);


interface NumberDictionary{
    [index:string]:number;
    length:number;
    // name:string; //error返回值的类型不匹配
}

interface NumberDictionartReadonly{
    readonly[index:number]:string;
}
let myArray2:NumberDictionartReadonly = ['seaseeyoul','mogoethe','mgdi'];
//myArray2[2] = "wilde"; //error
/*
    说明： 
    1. NumberDictionartReadonly 是一个索引接口
    2. myArray2 是具有 NumberDictionartReadonly 这个索引接口的数据
    3. myArray2[2]目前不能写，myArray2[2] = "wilde" 这个是对索引进行赋值，只能读取，不能赋值。
*/

//类类型
interface ClockInterface{
    currentTime: Date;   //定义一个currentTime 类型为Date
}
class Clock implements ClockInterface{
    currentTime : Date;
    constructor(h:number,m:number){}
}

//在接口中描述了一个方法，类里必须对他实现
interface PersonInterface{
    name:string;
    eat(foodName:string);
}
class Chinese implements PersonInterface{
    name:string;
    eat(name:string){
        this.name = name;
    }
    constructor(height:number,weight:number){}
}

interface ClockConstructor {
    cclock (hour: number, minute: number);
}

class ClockBig implements ClockConstructor {
    currentTime: Date;
    cclock(h:number,m:number){
        //
    }
    constructor(h: number, m: number) { }
}

//接口继承
interface Shape{
    color:string;
}
interface Cycile extends Shape{
    r:number;
}
let bCycile = <Cycile>{};
bCycile.color = 'red';
bCycile.r = 5;
let bCycile2:Cycile = {color:'red',r:5}; //此形式必须指定数据
//接口可以继承多个，以逗号分隔
// interface Cycild extends Shap1,Shap2,Shap3{}

//混合类型
interface Counter{
    (start:number):number;
    interval:number;
    reset(isEnd:string):void;
}

function getCounter():Counter{
    let counter = <Counter>function(start:number){
        this.start = start;
    }
    counter.interval = 60;
    counter.reset = function(end:string){
        this.end = end;
    }
    return counter;   //需要有返回值
}

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image1 extends Control implements SelectableControl {
    select() { }
}

/*
接口总结：
  1. 作为参数使用，指定参数，不定参数，额外参数
  2. 作为函数接口使用
  3. 作为类类型使用
  4. 接口可以互相继承
*/



