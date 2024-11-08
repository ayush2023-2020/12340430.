          alert("me");
            console.warn("this is warning");
             console.error("this is an error");

//javascript variables
//numbers example
var number1=30;
var number2=20;
//console.log(number1 + number2);

//string
var str1="Ayush";
var str2="khelwal";
//console.log(str1);
//objects
var marks = {
ravi:44,
shubhum:55,
ayush:66,
}

//console.log(marks);

//booliens
var t=true;
var f=false;
//console.log(t,f);

var und=undefined;
//console.log(und);

var und;
//console.log(und);

var und=null;
//console.log(und);

//at a very high level there are two typre of data type in JS
//primitive data types :
//reference data types

var arr=[1,2,"bablu",4,5]
//console.log(arr);

//functions

function avg(a,b){
    return (a+b)/2;
}

function avg(a,b){
    c=(a+b)/2;
    return c;
}

 c1 = avg(4,5);
 c2 = avg(6,5);
//console.log(c1,c2);


//conditions in jS
/*var k=10;

if(k>20){
    console.log("you are ayush");
}
else console.log("you are not ayush");*/

//loops in JS
var arr=[1,2,3,4,5,6,7]

//for(var i=0;i<arr.length;i++){
 //   console.log(arr[i]);
//}

//let j=0;

//while(j<arr.length){
//console.log(arr[j]);
//j++;

//}

let myArr= ["Fan","camera",34,null,true];
//myArr.pop();
//myArr.push("harry");
//myArr.shift();
//myArr.unshift("harry");
//console.log(myArr.unshift("harry"));
//const newlen = myArr.unshift("harry");
//console.log(newlen);
//console.log(myArr);

//string methods in JS
let mylovelystring="Ayush is a good boy good";
//console.log(mylovelystring.length);
//console.log(mylovelystring.indexOf("Ayush"));
//console.log(mylovelystring.indexOf("good"));
//console.log(mylovelystring.lastIndexOf("good"));
//console.log(mylovelystring.slice(1,5));
//d=mylovelystring.replace("Ayush","spider");
//d=d.replace("good","bad");
//console.log(d,mylovelystring);


//DATES IN javascript
let myDate=new Date();
//console.log(myDate);
//console.log(myDate.getTime());
//console.log(myDate.getFullYear());
//console.log(myDate.getMinutes());
//console.log(myDate.getHours());

//Dom manipulation
//let elem=document.getElementById('click');
//console.log(elem);

let elemclass=document.getElementsByClassName('container');
console.log(elemclass);

//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");

//console.log(elem.innerHTML);
//console.log(elem.innerText);

//console.log(elemclass[0].innerHTML);
//console.log(elemclass[0].innerText);

//this is used to show all the tag name
tn =document.getElementsByTagName('div')
console.log(tn);

createdElement=document.createElement('p');
createdElement.innerText="this is my para"

createdElement2=document.createElement('b');
createdElement2.innerText="this is my bold"

tn[0].appendChild(createdElement);
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element)--->remove an element

//selecting using query
sel=document.querySelector('.container')
console.log(sel)

sel=document.querySelectorAll('.container')
console.log(sel)

//events in JS
function clicked(){
    console.log('function is clicked')
}

window.onload=function(){
    console.log("The document was loadeded")
}

/*firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked <\b>";
console.log("Click hua");
})*/

/*firstcontainer.addEventListener('mouseover',function(){
    console.log("mouse click hua ")
    })

    firstcontainer.addEventListener('mouseout',function(){
        console.log("mouse out of container ")
        })*/
  
     //   let prevhtml=document.querySelectorAll('.container')[1].innerHTML

      //  firstcontainer.addEventListener('mouseup',function(){
            //chodna(leave)
       //     document.querySelectorAll('.container')[1].innerHTML=prevhtml;
        //    console.log("mouse pe apne click kara tha vo aapne ap choddiya hai and mouse up when click on conatainer")
          //  })
            //dabaya or choda

           // firstcontainer.addEventListener('mouseout',function(){
             //   document.querySelectorAll('.container')[1].innerHTML="<b> we have //clicked <\b>";
             //   console.log("mouse down when click on conatiner ")
               // })    

           //    firstcontainer.addEventListener('mousedown',function(){
                //dabana
            //     document.querySelectorAll('.container')[1].innerHTML="<b> we have //clicked <\b>";
              //   console.log("mouse down when click on conatiner and isko matlab mouse ko click karkar hold karna")
                //  })    


         //Arrow functions
         //function summ(a,b){
           // return a+b;
         //}

         summ =(a,b)=>{
            return a+b
         }

         logkaro = ()=>{
            document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired<\b>";
            console.log("i am your log")
         }
        //set timeout and set interval
        //2 seconds k bad aapko koi kam karana ho to use set interval
        //setTimeout(logkaro,2000);
        //set interval use tab hota hai jab kisi kam ko repeat karana ho to
        //setInterval(logkaro,2000);

        //ye id return karega set interval ko clr ko dega process stop karne k liye 
        //ye id clearInterval(clr) console par daldena process will stop
        //use cleartimeout/cleartimeinterval to cancel settimeout/settimeinterval
        //clr=setInterval(logkaro,2000);
        //clr=settimeout(logkaro,5000);
        

        //javascript localstorage
       // localStorage.setItem('name','harry')
        //localStorage
     //localStorage.getItem('name')


     //Json
     