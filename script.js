//your code here
let ans1 ="";
let num ="";
function add(value){
    console.log(value);
    num=num+value;
    document.getElementById('input').value=num;

}


function ans(){
    ans1=eval(num);
    document.getElementById('input').value=ans1;
    ans1="";
    num="";
}

function clear(){
    num="";
    document.getElementById('input').value="";
}
