document.addEventListener('DOMContentLoaded',()=>{
const button1=document.getElementById('button1');
button1.addEventListener('click',()=>{
  var no1=Math.floor(Math.random()*6+1);
  var no2=Math.floor(Math.random()*6+1);
  var no3=Math.floor(Math.random()*6+1);
  var no4=Math.floor(Math.random()*6+1);
  var no5=Math.floor(Math.random()*6+1);
  var no6=Math.floor(Math.random()*6+1);
  var random1= roll(no1);
  var random2= roll(no2);
  var random3= roll(no3);
  var random4= roll(no4);
  var random5= roll(no5);
  var random6= roll(no6);
  document.getElementById('image1').innerHTML=`<img src="image/${random1}.png"/>`;
  document.getElementById('image2').innerHTML=`<img src="image/${random2}.png"/>`;
  document.getElementById('image3').innerHTML=`<img src="image/${random3}.png"/>`;
  document.getElementById('image4').innerHTML=`<img src="image/${random4}.png"/>`;
  document.getElementById('image5').innerHTML=`<img src="image/${random5}.png"/>`;
  document.getElementById('image6').innerHTML=`<img src="image/${random6}.png"/>`;
  randomlist=[random1,random2,random3,random4,random5,random6];
  console.log(randomlist);
  var choice=bet();
  var money=parseInt(betMoney());
  console.log(choice,money);
  const count=elCounter(randomlist,choice);
  if (count>1){
    moneyWon=money*count;
    alert(`Congrats You Won ,${moneyWon}`);
  }else {
    alert(`You lose  ${money}`);
  }
});
console.log("working");
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
function bet (){
  let userChoice=prompt("Enter a choice");
  return userChoice;
}
function betMoney(){
  let money=prompt("Enter amount to bet");
  return money;
}
function elCounter(array,el){
  return array.filter(i=>i===el).length;
}
