
function buildTile(){
    
var things = ['flower', 'beatles', 'hello', 'brooklyn', 'greece', 'guitar', 'england', 'georgia'];
var thing = things[Math.floor(Math.random()*things.length)];
var word2 = Array.from(thing);
var len = word2.length;
var word3 = document.getElementById("head").innerHTML = thing;



for (var i =0;i<len;i++){
    
    var node=document.createElement("LI");
    var textnode=document.createTextNode('');
    node.appendChild(textnode);
    document.getElementById("tileMaker").appendChild(node);
    node.id = "letter";
}
}

var count=0;
var myArray=[];
function changeLetter(formId){
    count++;
    var thing2 = document.getElementById("head").innerHTML;
    var inputLet = formId.textin.value;
    var word2 = Array.from(thing2);
    var len = word2.length;
    
    for(var i=0; i<=len;i++){

        if(inputLet === word2[i]){
            
            
            myArray.push(inputLet);
            var section = document.getElementById("tileMaker").children;
            section[i].innerHTML = inputLet;
            document.getElementById("letterArea").innerHTML += inputLet;
        } 
    }
 
        if(!word2.includes(inputLet)&& (count <=14)) {
     
            var wrong = "x";
            document.getElementById("attempt").innerHTML += wrong;
            document.getElementById("letterArea").innerHTML += inputLet;
        }
        else if(!word2.includes(inputLet)&& (count >14&&count<16)){
      
            alert("you have 3 tries left!"); 
            
        }else if(!word2.includes(inputLet)&& (count >18)){
            alert("you failed!!");

        }else if(myArray.length===len){
            document.getElementById("attempt").innerHTML = "Well done you've won!!";
            var myPara = document.getElementById("p0");
            myPara.remove();
        }
}
 function refresh(){
    window.location.reload();
 }






