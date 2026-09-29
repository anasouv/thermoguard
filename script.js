const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("nav-open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("nav-open")));

let temp=34.2, hot=false;
const tempEl=document.getElementById("temp"),tempState=document.getElementById("tempState");
const vent=document.getElementById("vent"),ventState=document.getElementById("ventState");
const buzzer=document.getElementById("buzzer");

function render(){
  tempEl.innerHTML=temp.toFixed(1)+'<span>°C</span>';
  if(temp>=35){
    tempState.textContent="HIGH TEMPERATURE";
    tempState.style.color="#e07b18";
    vent.textContent="OPEN";
    ventState.textContent="VENTILATION ACTIVE";
    buzzer.textContent="ON";
  }else{
    tempState.textContent="NORMAL";
    tempState.style.color="#15976a";
    vent.textContent="CLOSED";
    ventState.textContent="NORMAL POSITION";
    buzzer.textContent="OFF";
  }
}
document.getElementById("heatBtn").addEventListener("click",()=>{
  temp=Math.min(42,temp+0.8); render();
});
document.getElementById("resetBtn").addEventListener("click",()=>{
  temp=34.2; render();
});
render();
