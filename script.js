// ------- word vs keyword ---------
// bhaiya = word
// for , if, else, var = keyword

// ----------- variable and constants --------------

// vaiable
// code mein koi bhi data store karne ke liye jiska use hota hai use kahte hai variable 
// aur jiski value badle use variable kahte hai


// constant
// jiski value change nhi ki ja sake use kahte hai constant 

// ----------- hoisting -------------
// variable and functions are hoisted which means there declaration is moved on the top of code


// console.log(a);    // undefined
// var a = 12;

// jis cheej ka existence hi nhi hai that is not-define
// jis cheej ka existence hai par pta nhi hai value kya hai that is undefined

// ------ types in js ------
// primitive and reference

// primitive = number, string, null, undefined
// reference = [] () {}

// aisi koi bhi value jisko copy karne par real copy nhi hota, balki us main value ka reference pass ho jaata hai,
//  use hum reference value kahte hai, aur jiska copy karne par real copy ho jaye wo value primitive type 
// value hoti hai

// var a=[2,4,6,3]
// var b=a;
// b.pop()
// console.log(b); // [2,4,6]

// ---------- conditionals - if else else-if  ---------------
// jab bhi bat agar magar par aayegi, yaa fir baat aayegi aisa hua to ye karo waisa hua to bo karo 

// if(4>1){

// }
// else if(4>6){

// }
// else{

// }

// --------- loop - for --------------
// loop ka matlab  repeat 
// for(var i=0; i<10; i++){
//     console.log(i);
// }

// --------- loop - while --------------
// var a =1;
// while(a<=20){
//     console.log(a);
//     a++;
// }

// -------------- functions -----------------
// function ka matlab aap kuch code likh kar koi naam de sakte ho and baad mein usey use kar sakte ho 
// with that name as many times

// function mainly teen kaam ke liye hote hai
// 1) jab apka code aap turant nahi chalana chahte future main chalana chahte ho
// 2) jab apka code aap  reuse karna chahte ho
// 3) jab aap code chalana chaahte ho har baar with diffrent data 

// function helobolo(){
//     console.log("hello");
// }
// helobolo()

// function abcd(a){
//     console.log(a);
// }
// abcd(12)

// arguments = real value jo hum dete hai fnc chalaate waqt
// parameter = variales jinme value store hoti hai arguments waali

// ------------------ arrays ----------------------
// hum ek variable mein ek value store kar paate hai par jab humein ek se jaada value store karni ho
//  tab fir use hota hai array ka, matlab ki array freedom deta hai ek se jaada value use karne ki
// array = group of values

// var arr = [12, 23, 16]

// push pop shift unshift

var arr = [1,2,5,3,8];
// arr.pop(); // [1, 2, 5, 3]
// arr.unshift(0) //[0, 1, 2, 5, 3, 8]
// arr.shift() // [2, 5, 3, 8]
arr.splice(2,2) // [1, 2, 8]

// console.log(arr);

// ------------------- object ------------------
// ek se jaada bande ki baat ki to hua array, ek bande ke baare mein saari bat ki to hua object

// object hai ek bande ki details ko hold karna, in a key value pair

// 1) blank obj
// var a = {};

// 2) filled obj
// var a = {
//     age:23,
//     name: "vikas",
//     email: "itsvikas94@gmail.com",
//     contact: 9576456786
// }

// var ghadi = {
//     brand: "Kenneth Cole",
//     price: "10K",
//     color: "silver",
//     type: "automatic",
//     digital: false,
//     kuchbolo: function(){}
// }
// ghadi.brand= "Titan Kenneth Cole";

// -------------------   -- topic ---------------------

// ------------ var const let -----------------
// js type 
// (1)ES5 (2)ES6

// 1. ES5 me var hai ye older js hai 
// 2. ES6 me let const => aaya aur aur var pahle se tha  
// js version preinstalled aate hai browser me
// hum dono ko mix karke use karte hai kaise jab hum browser update karte to property upate ho jati hai
// var function scoped hota hai
// let braces scoped hota hai
// var adds itself to the widow object
// let const doesn't adds

// function abcd(){
//     for(var i=1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();

/*
js luanguage mein kuch cheeje nahi hai jo hum use kar sakte hai aur wo cheeje hume js se nahi balki 
browser milti hai, aise saare features jo js ka part nahi hai but fir bhi use kar sakte hai unhe hum 
dhoond sakte hai ek prticular object mein jiska naam hai window
*/

/* js me kai saare features hai par kuch features jo hum use karte hai wo features wo nahi hai fir bhi
   use kar paate hai kyonki wo features js language use kar leti hai window se , aur window hai ek 
   box of features given be browser to use with js 
    eg: alert,prompt etc  
   */
  
// ---------------heap----------------
/*
jitne  bhi variable ya data hum banaate hai unhe store kahi to karna padta hai uske liye hota hai heap memory
*/

// ---------------- execution context, lexical environment -------------------
/*
execution context matlab jab bhi hum function calaayenge fcn apna ek khudka ek imaginary container bana lega
jismein uski teen cheeje hogi:
1) variables
2) functions inside that parent fnc
3) lexical environment of that function
ye jo container hai imaginary ise hi hum execution context kahte hai    

          abcd
 ________________________           
|                       |
|   a           def     |
|                       |
|  (lexical en)         |
|_______________________|

execution context is a container where the function's code is executed and it's created whenever a function 
is callled, it containes 3 things, variable, functions and lexical environment.

lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function ki cheejo ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope and scope chain
*/

// function abcd(){
//     var a=12;
//     function def(){
//         var b = 12;
//     } 
// }

/* ------------how to copy reference value----------------
... spread operator 
*/
var a = [1,2,3,4,5];
// var b = [...a] // [1,2,3,4,5] 
// console.log(b);  // [1,2,3,4,5]
// b.pop();
// console.log(a); // [1, 2, 3, 4, 5]
// console.log(b);  // [1,2,3,4] 

var obj = {
    name: "vikas"
}
var copyobj = {...obj}
// console.log(copyobj);

/*
--------------------- truthy vs falsy ------------------------
js mein kuch bhi likho wo mainly do prakar mein se kisi ek prakaar ko belong karti hai

falsy value ye hai = 0 false undefined null NaN document.all

truthy values

*/

if(-1){           //truthy value
    // console.log("hey");
}else{
    console.log("hello");
}

/* -------------------- forEach lopp ---------------
foreach loop sirf array pe chalta hai matlab ki jab bhi tumhaare pass ek array ho, tab use main aata hai foreach loop 

foreach kabhi bhi by default aapke array mein change nahi karta wo aapko changes krke deta hai array ki temporary copy par jiske wajah se array humesha same rahta hai
*/
// var a = [21,12,43,54,85,16];
// a.forEach(function(val){
//     console.log(val+1);
// })

/*
------------- for-in loop ------------------
object par loop karne ke liye hota hai forin loop
*/
var obj = {
    name: "Vikas",
    age: 23,
    city: "Bareilly"
}

for (var key in obj) {
//    console.log(key, obj[key]);
}

/*
---------------------------- callback fncs -------------------------------------
jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyunki wo code code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke completion par js ko btaya jaata hai ke wo complete hogya aur aap use use chala sakte ho, ye bataane ka kaam callback ka hai

aisa code jo baad me chalta hai use hum ek function dedete hai ke bhaiya jab complete ho jaaba to ye function chala dena, aur wo function jo hum dete hai wo ek normal fnc hi hota hai aur use kahte hai callback fnc
*/

setTimeout(function(){
    // console.log("2 second baad chala")
},2000)

/*
------------------------------ first class fncs ----------------------------
js mein ek concept hai jiska matlab hota hai ki aap fnc ko use kar sakte ho as a value
eg: setTimeout()
*/
function abc(fun){
    fun();
}

// abc(function(){console.log("hey");})

////////////////////////////////////  Master Advance Javascript  ////////////////////////////////////////////

/* -----------------higher order function-------------------
aisa fnc jo accept karle ek fnc ya fir wo return karde ek fnc
*/
var arr = [2,4,2,65,7,5];
arr.forEach(function(){})  // yahan par foreach ek higher order function hai

/*
---------------- constructor function -----------------
normal fnc jimein this ka istmaal ho and aap fnc ko call karte waqt new keyword ka use karein

jab aapke paass aisa koi bhi mauka ho ke aapko ek jaisi properties waale bahut saare elements banaane hai us waqt aap constructor fnc use kar sakte ho
*/

function saanchaOfBiscuit(){
    this.width = 10;
    this.height = 10;
    this.color = "brown";
    this.test = "sweet";
}

var bis1 = new saanchaOfBiscuit();
var bis2 = new saanchaOfBiscuit();
var bis3 = new saanchaOfBiscuit();

// console.log(bis1);
// console.log(bis2);
// console.log(bis3);

/*
------------------------ new --------------
jab bhi new lagta hai humesha ek blank object apne man mein bana lo
eg blank object: {}
*/

// function newfun(){
//     this.age = 20;
// }

// new newfun(){
//     age:20
// }

/*
------------------------- iife -----------------------
immediately invoked function expression
iife hai fuunction ko turant chalane ki kala, is tareeke se ki hum log koi private vaiable bana paaye
*/

var ans = (function(){
    var privateval = 12;

    return{
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val;
        }
    }
})()

/*
----------------------- prototype --------------------
Ye ek tareeka hai JavaScript mein objects ke liye properties aur methods ko share karne ka

*/

/*
-------------- prototypal inheritance ---------------------
*/

/*
---------------------- this keyword ------------------------
jab bhi kuch likh rahe ho check karo kya usmein kabhi bhi koi function, object ya fir scope bana hai {}

jab bhi koi cheej {} brackets ke ander nahi hoti to hum use global scope kahte hai

ek function jo object ke ander ho use, use method kahte hai

*/

// in global scope
// console.log(this); // this ki value window

// in function scope 
function thisfun(){
    // console.log(this); // this ki value window
}
thisfun();

// in method scope 
var obj = {
    baatkaro: function(){
        // console.log(this); // this ki value object
    }
}
obj.baatkaro();

var button = document.querySelector("button");
button.addEventListener('click',function(){
    // console.log(this); // this ki value refer karegi button ko
    this.style.color="red";  // button ka color red hoga button ke click par 
})

/*
----------------------- call apply bind ---------------------------------
agar humhaare paas koi function hai and koi onject hai and tumhe fnc chalana hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kisi objact ki taraf
*/
//call
// function abcd( val, val2, val3){
//     console.log(this,val,val2,val3);  // {age: 20} 1 2 3
// }
// var obj = {age: 20}
// abcd.call(obj,1,2,3); 

// apply
// function abcd(val, val2, val3){
//     console.log(this, val, val2, val3);
// }
// abcd.apply((obj, [11,22,33]))

// // bind
// function abcd(){
//     console.log(this);
// }
// var obj = {age: 21}
// var bindedfnc = abcd.bind(obj)
// bindedfnc();

/*
----------------------- pure & impure function ------------------

*/

function abcd(a,b){
    return a*b;
}

var ans1 = abcd(1,2);
var ans2 = abcd(1,2);


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// callback 

// setTimeout(function(){
//     console.log("hey");
// }, 5000)

// promise

// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10);

//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans.then(function () {
//     console.log("below");
// })
// .catch(function () {
//     console.log("above ");
// })

// example 2

// var ans = new Promise(function (res, rej){
//     return res("sabse pahle ghar par aao")
// })

// var p2 = ans.then(function (data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("gate kholo gate lagao");
//     })
// })

// p3 = p2.then(function (data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana pakao khana khaao");
//     })
// })

// p3.then(function(data){
//     console.log(data);
// })

// async await

// function sheriance(){
//     fetch('http://randomuser.me/api')
//     .then(function (raw){
//         return raw.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
// }

async function sheriance(){
    let raw = await fetch('https://randomuser.me/api');
    let ans = await raw.json();
    console.log(ans);
}

// dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega

/////////////////////////////////////////////////// DOM ////////////////////////////////////////////

// 4 pillars of DOM 
// 1. Selecting of an Element
// 2. Changing HTMLAllCollection
// 3. Changing CSS 
// 4. Event Listener 

// var a = document.querySelector(".heading2");
// a.innerHTML = "hihihi"
// a.style.color = "red"
// a.addEventListener("click",function(){
//     a.innerHTML = "DOM (Document Object Model)"
// })
// console.log(a);

var bulb = document.querySelector(".bulb");
var btn = document.querySelector(".btnOn");

var flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.innerHTML = '<img style="width:50px; padding-top: 8px;" src="img/on.png">'
        flag = 1;
        btn.innerHTML = "OFF"
    }
    else{
        bulb.innerHTML = '<img style="width:50px; padding-top: 8px;" src="img/off.png">'
        btn.innerHTML = "ON"
        flag = 0;
    }
})