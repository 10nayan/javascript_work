document.addEventListener('DOMContentLoaded',()=>{
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
  console.log(noArray);
  for (let i of noArray){
    symbolArray.push(roll(i));
  }
  console.log(symbolArray);
  document.getElementById('image1').innerHTML=`<img src="image/${symbolArray[0]}.png"/>`;
  document.getElementById('image2').innerHTML=`<img src="image/${symbolArray[1]}.png"/>`;
  document.getElementById('image3').innerHTML=`<img src="image/${symbolArray[2]}.png"/>`;
  document.getElementById('image4').innerHTML=`<img src="image/${symbolArray[3]}.png"/>`;
  document.getElementById('image5').innerHTML=`<img src="image/${symbolArray[4]}.png"/>`;
  document.getElementById('image6').innerHTML=`<img src="image/${symbolArray[5]}.png"/>`;
  var choice=getSignFromId();
  var money=parseInt(getMoneyFromId());
  console.log(choice,money);
  const count=elCounter(symbolArray,choice);
  if (count>1){
    moneyWon=money*count;
    document.querySelector('h3').textContent=`Congrats You Won ${moneyWon}`;
  }else {
    document.querySelector('h3').textContent=`You lost ${money}`;
  }

});
console.log("working");
function getMoneyFromId(){
  var moneyChosen=0;
  for (let i of idArray){
    if (i.value>0){
      moneyChosen=i.value;
      i.value="0";
      break;
    }
    else if(i.value<0){
      i.value="0";
    }
  }
  return moneyChosen;
}
function getSignFromId(){
  var signChosen="invalid";
  for (let i of idArray){
    if (i.value!=0){
      signChosen=i.name;
      break;
    }
  }
  return signChosen;
}
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
