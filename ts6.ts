enum Direction{
	up = 1,
	down,
	left,
	right,
}
/*
如上，我们定义了一个数字枚举， Up使用初始化为 1。 
其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
枚举成员的每一个值都是不相同的。
*/
/*  error？？？
enum Response{
	Yes = 1,
	No = 0,
}
function responed(recipient:string,message:Response):void{
	if(message) console.log(recipient);
}
responed('hello ts',Response.Yes);
*/








































