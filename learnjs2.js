var a = 11
var b = 21
var c = 13
var d = 12
a -= 2
b += 4
c *= 2
d /= 4
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var e = "i am a \"double quoted\" string"
console.log(e)
var str = "firstline\n\t\\secondline\nthirdline"
console.log(str)
var concate = "hi i am " + "deepanshu"
console.log(concate)
var sent = "puma is the"
var adj = " best friend grp"
console.log(sent + adj)
concatelength = concate.length
console.log(concatelength)
firstletterofsent = sent[0]
console.log(firstletterofsent)
experiment = sent.length - 4
console.log(experiment)
exp2 = sent[sent.length - 2]
console.log(exp2)
function wordblanks(mynoun, myadjective, myverb, myadverb){
var result = "";
result += "the " + mynoun + " is " + myadjective + " but still " + myverb + " very " + myadverb
return result
}
console.log(wordblanks("dog","big","runs","fast"))