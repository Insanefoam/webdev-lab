var form = document;
var array = form.getElementsByClassName("field");

function parseData(){
    for(var i=0; i < array.length; i++){
        console.log(array[i].value);
    }
}

function checkAllFields(){
    for(var i=0; i < array.length; i++){
        if(array[i].value != ""){
            continue;
        }
        else{
            return;
        }
    }
    form.getElementById("submit").disabled = false;
}

form.addEventListener("submit", parseData);
form.addEventListener("input", checkAllFields);
