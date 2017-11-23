var bish=document.getElementById("bish");
var bosh=document.getElementById("bosh");
var loop=document.getElementById("count");
var result=document.getElementById("result");
var message=document.getElementById("message");


function print(){
    result.innerHTML="";
    message.innerHTML="";
    message.className="";
    if(ValidateBishBosh(bish.value,bosh.value,count.value)){
        result.innerHTML += printBishBosh(bish.value,bosh.value,count.value);
    }
    
} 

var printBishBosh = function(a,b,c){
    var resultString = "";
    for (var i=1; i<=c; i++){
            
        if((i % a == 0) && (i % b == 0)){
            resultString += "<span style=\"color: red\">Bish-Bosh</span>" + ", ";
        }
        else if (i % a == 0){
            resultString +=  "<span style=\"color: green\">Bish</span>" + ", ";
        }
        else if (i % b == 0){
            resultString += "<span style=\"color: blue\">Bosh</span>" + ", ";
        }
        else{
            resultString += i + ", ";
        }
    }
    return resultString.substring(0,resultString.length-2);
}

function ValidateBishBosh(para1, para2,para3){
    if (para1 == "" || para2 == "" || para3 == ""){
        message.innerHTML += "<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">Error:</span>";
        message.innerHTML += "  Inputed value can not be empty";
        message.className = "alert alert-danger";
        return false;
    }
    else if (para1 == para2){
        message.innerHTML += "<span class=\"glyphicon glyphicon-warning-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">Warning:</span>";        
        message.innerHTML += "  Bish and Bosh should not be the same";
        message.className = "alert alert-warning";
        return true;
    }
    else if (para1 % para2 == 0 || para2 % para1 == 0){
        message.innerHTML += "<span class=\"glyphicon glyphicon-warning-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">Warning:</span>";
        message.innerHTML += "  Bish and Bosh should not be the division of each other";
        message.className = "alert alert-warning";
        return true;
    }
    else{
        return true;
    }
}

