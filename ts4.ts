function add(x:number,y:number):number{
	return x+y;
}

let myAdd:(x:number,y:number)=> number = function(x:number,y:number):number{
	return x+y;
}

function buildName1(firstName:string,lastName:string):string{
	return firstName + '' + lastName;
}
//ts的函数参数每一个都是必须的，不能多或者少一个
function buildName2(firstName:string,lastName='simith'){
	//参数默认值
	return firstName + '' +lastName;
}

function buildName3(firstName:string,lastName?:string){
	//可选参数,可选参数必须放在末尾
	return firstName + '' +lastName;
}

function buildName4(firstName:string,...resetOfName:string[]):string{
	return firstName + ' '+resetOfName.join("");
}
let employeeName = buildName4('Mo','Goethe','Sea','seeyoul');

{
	interface Card{
		suit:string,
		card:number,
	}
	interface Deck{
		suits:string[],
		cards:number[],
		createCardPicker(this:Deck):()=>Card,
	}
	let deck:Deck ={
		suits:['cat','dog','pig','fish','house'],
		cards:Array(52),
		createCardPicker:function(this:Deck){
			return ()=>{
				let pickedCard = Math.floor(Math.random() * 52);
            	let pickedSuit = Math.floor(pickedCard / 13);
				return{suit: this.suits[pickedSuit], card: pickedCard % 13}
			}
		}
	}
	let cardPicker = deck.createCardPicker();
	let pickedCard = cardPicker();
	console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
	/*
		现在TypeScript知道createCardPicker期望在某个Deck对象上调用。 
		也就是说 this是Deck类型的，而非any，因此--noImplicitThis不会报错了。
	*/
}


interface UIElement{
	addClickListener(onClick:(this:void,e:Event)=>void):void
}
/*
class Handler{
	info:string;
	onClickBad(this:Handler,e:Event){
		this.info = e.message;
	}
}
*/

class Handler{
	info:string;
	onClickGood(this:void,e:Event){
		console.log('clicked!');
	}
}


//重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);





































