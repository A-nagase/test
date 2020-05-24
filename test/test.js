var msg1 = 'こんにちは!!!!! He\'s fine!';
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

//分割代入（オブジェクト）
let book = {title : 'java',publish : '技術',price1 : 2680};
let {price1,title,memo = 'なし'} = book;
console.log(title);
console.log(price1);
console.log(memo);

//条件演算子(?:)
let x = 80;
console.log((x >= 70) ? '合格' : '不合格');

//ショートカット演算子
let msg2 = '';
msg2 = msg2 || 'Hello';
console.log(msg2);

let msg3 = '';
msg3 = (msg3 === undefined ? 'Hello' : msg3);
console.log(msg3);

//delete演算子
let ary = ['java','php','asp'];
console.log(delete ary[0]);
console.log(ary);

//typeof演算子
let num = 1;
console.log(typeof num);

let str1 = 'ハロー';
console.log(typeof str1);

let flag = true;
console.log(typeof flag);

let ary1 = ['a','b','c'];
console.log(typeof ary1);

let obj1 = {x:1,y:2};
console.log(typeof obj1);

//制御構文から
