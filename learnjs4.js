//learning functions in JS

function hello() {
    console.log("hello world")
}
hello()
hello()

function abc(){
    console.log("deepanshu")
}
abc()

//arguements
 function add(a,b){
    console.log(a+b)
 }
add(2,2)
 function sub(c,d) {
    console.log(c-d)
 }
 sub(5,4)
 
 //global and local scopes

 var x = 2
 function hi(){
    return x
 }
 console.log(hi())

 function hii(){
    var x = 5
    return  x
 }
 console.log(hii())

 //switch statements

 function case2(val){
 var answer = ""
 switch(val){
    case 1:
         answer = "one"
         break;
    case 2:
        answer = "two"
        break;
    case 3:
        answer = "three"
        break;
    }
    return answer
 }
 console.log(case2(3))