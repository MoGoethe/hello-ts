//接口补充
interface Person{
	sex?:'man' | 'woman' | 'undeined';
	age:number;
	name:string;
}

function person(config:Person): void{
	console.log(config.age,config.name,config.sex);
}
let pConfig:Person = {
	sex:'man',
	age:18,
	name:'seaseeyoul',
}
person(pConfig)

//类
class Greeter{
	greeting:string;
	constructor(message:string){
		this.greeting = message;
	};
	greet(){
		return `hello ${this.greeting}`;
	}
}

let greeter = new Greeter("world");

console.log(greeter.greet());

/*
	constructor 在父类必须存在，子类才能调用super
	子类调用了super，父类才能接收到参数
*/
class Animal {
	name:string;
	constructor(theName:string){
		this.name = theName;
	}
	move(distanceInMeters:number=0){
		console.log(`${this.name} moved ${distanceInMeters}m.`)
	}
}
class Snake extends Animal{
	constructor(name:string){
		super(name);
	}
	move(distanceInMeters:number=5){
		console.log('snake is moving...')
		super.move(distanceInMeters);
	}
}
class House extends Animal{
	constructor(name:string){
		super(name);
	}
	move(distanceInMeters:number=45){
		console.log('house is moving...')
		super.move(distanceInMeters);
	}
}
let sam = new Snake('Sammy');
let tom = new House('Tommy');

sam.move();
tom.move(30);

//public
class Car{
	public name:string;
	public constructor(name:string){
		this.name = name;
	}
	public move(distanceInMeters:number){
		console.log(`${this.name} moved ${distanceInMeters}`);
	}
}

//private
class Tree{
	private name:string;
	constructor(theName:string){
		this.name = theName;
	}
}
//console.log(new Tree('Baiyang').name) error,name属性是私有的，外部不可访问

class Computer{
	protected name:string;
	constructor(theName:string){
		this.name = theName;
	}
}
class macbook extends Computer{ //extends 继承会使子类具有父类的属性
	private type:string;
	constructor(name:string,type:string){
		super(name);
		this.type = type;
	}
	public getComputerInfo(){
		console.log(`compuert name is ${this.name} and type is ${this.type}`);
	}
}

let mac2015 = new macbook('macbook-pro','2015');
mac2015.getComputerInfo();
//console.log(mac2015.name)  //error
//protect与private的区别是,private派生类/子类不可访问，protect派生类可访问，外部不可访问，public都可以

class Octopus{
	readonly name: string;
	readonly numberOfLegs:number = 8;
	constructor(theName:string){
		this.name = theName;
	}
}
let dad = new Octopus('Man with the 8 strong legs');
console.log(dad.name,)
//dad.name = 'Man with the 3 ...'  //error readonly

class Phone{
	constructor(private name:string){}
	f(telNumbers:number){
		console.log(`${this.name} is output`)
	}
	/*
		说明：如果在 constructor() 中不加上 private / protected 那么 name必须要在外部声明，否则将报错
	*/
}

class Point{
	private _x:number;
	private _y:number;

	get x():number{
		console.log('get value of x while doing this')
		return this._x;
	}
	xx():void{
		console.log('no get keyword!')
	}
	get y():number{
		console.log('get value of x while doing this')
		return this._y;
	}
}


class Grid{
	static origin = {x:0,y:0};
	constructor(public scale : number){ this.scale= scale }
	calculateDistanceFromOrigin(point:{x:number,y:number}){
		//定义一个参数point，他有两个属性分别是x，y都是number类型
		//static 属性需要通过 类名访问，非static可以通过this.
		let xdis = point.x - Grid.origin.x;
		let ydis = point.y - Grid.origin.y;
		return Math.sqrt(xdis*xdis + ydis*ydis) / this.scale;
	}
}

let G1 = new Grid(1.5);
console.log(G1.calculateDistanceFromOrigin({x:5,y:5}));


abstract class People{
	//abstract 定义一个抽象类，或者一个抽象的方法
	//此方法必须在派生类中与具体实现
	abstract makeSound() :void;
	move(): void{
		console.log('moving...');
	}
}
class Student extends People{
	//抽象类中定义的方法在派生类中必须有具体实现
	makeSound():void{
		console.log("I am a student!");
	}
}































