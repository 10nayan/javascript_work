document.addEventListener('DOMContentLoaded',()=>{
var totalMoney=parseInt(prompt("How much money do you have?"));
const button1=document.getElementById('button1');
const sitton=document.getElementById('Sitton');
const munda=document.getElementById('Munda');
const iska=document.getElementById('Iska');
const rohi=document.getElementById('Rohi');
const dhandi=document.getElementById('Dhandi');
const hotton=document.getElementById('Hotton');
var idArray=[sitton,munda,iska,rohi,dhandi,hotton];
button1.addEventListener('click',()=>{
  noArray=[];
  symbolArray=[];
  for (let i=0;i<6;i++){
    noArray.push(getRandomNo());
  }
  for (let i of noArray){
    symbolArray.push(roll(i));
  }
  document.getElementById('image1').innerHTML=`<img src="image/${symbolArray[0]}.png"/>`;
  document.getElementById('image2').innerHTML=`<img src="image/${symbolArray[1]}.png"/>`;
  document.getElementById('image3').innerHTML=`<img src="image/${symbolArray[2]}.png"/>`;
  document.getElementById('image4').innerHTML=`<img src="image/${symbolArray[3]}.png"/>`;
  document.getElementById('image5').innerHTML=`<img src="image/${symbolArray[4]}.png"/>`;
  document.getElementById('image6').innerHTML=`<img src="image/${symbolArray[5]}.png"/>`;
  var choice=getSignFromId(idArray);
  var money=parseInt(getMoneyFromId(idArray));
  const count=elCounter(symbolArray,choice);
  if (totalMoney<=0){
    document.querySelector('h3').textContent=`Oops you have lost all your money!`;
  }
  else if (totalMoney<money){
    document.querySelector('h3').textContent=`Oops you dont have that much money!`;
  }
  else if (count>1){
    moneyWon=money*count;
    totalMoney=totalMoney+moneyWon;
    document.querySelector('h3').textContent=`Congrats You Won ${moneyWon}, you have ${totalMoney} now`;
  }else {
    totalMoney=totalMoney-money;
    document.querySelector('h3').textContent=`Oops You lost ${money}, you have ${totalMoney} now!`;
  }
});
});

function roll(no){
  switch (no) {
    case 1:
      return "Dhandi";
      break;
    case 2:
      return "Munda";
      break;
    case 3:
      return "Iska";
      break;
    case 4:
      return "Hotton";
      break;
    case 5:
      return "Sitton";
      break;
    default:
      return "Rohi";
  }
}

function elCounter(array,el){
  return array.filter(i=>i===el).length;
}

function getRandomNo(){
  return Math.floor(Math.random()*6+1);
}

function getSignFromId(idArray){
  var signChosen="invalid";
  for (let i of idArray){
    if (i.value!=0){
      signChosen=i.name;
      break;
    }
  }
  return signChosen;
}

function getMoneyFromId(idArray){
  var moneyChosen=0;
  for (let i of idArray){
    if (i.value>0){
      moneyChosen=i.value;
      i.value="0";
      break;
    }
  }
  return moneyChosen;
}
