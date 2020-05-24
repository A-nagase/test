var msg = 'こんにちは!!!!! He\'s fine!';
//window.alert(msg);

//テンプレート文字列
let name = '田中';
let str = `こんにちは${name}さん
いい天気ですね`;
console.log(str);


const TAX = 1.1;
let price = 100;
console.log((TAX * 10) * price / 10);

//配列
var data = ['js','ajax','php',['aaa','bbb','ccc']];
console.log(data[3][0]);
//連想配列
var obj = {x:1 , y:2 , z:3};
console.log(obj.x); //ドット演算子
console.log(obj['y']); //ブランケット構文

var today = new Date();
console.log(today);

//分割代入
let dataA = [11,22,33,44,55,66,77];
let [x0,x1,x2,x3,...others] = dataA
console.log(x0);
console.log(x1);
console.log(others);



