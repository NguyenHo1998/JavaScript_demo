function showResult(){
    var money=document.getElementById('tipMoney').value;
    var lv=document.getElementById('level').value;
    var numberTip= document.getElementById('numPeople').value;

    var flag1 = true;
    var flag2 = true;

    if (money==''|| money==NaN||numberTip==''){
        alert('Invalid data')
    } else {
        alert(calcTip());
    }
}

function calcTip(){
    var money=document.getElementById('tipMoney').value;
    var lv=document.getElementById('level').value;
    var numberTip= document.getElementById('numPeople').value;
    var result;

    if (lv==good){
        result=money*0.1/numberTip;

    } else {
        result=money*0.07/numberTip;
    }
    console.log(calcTip())
}