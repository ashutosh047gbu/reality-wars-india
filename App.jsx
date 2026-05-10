import React,{useEffect,useState} from "react";
export default function App(){
const [coins,setCoins]=useState(500),[troops,setTroops]=useState(150),[hp,setHp]=useState(100),[enemyHp,setEnemyHp]=useState(100),[city,setCity]=useState("Lucknow"),[msg,setMsg]=useState("Choose city and battle!");
useEffect(()=>{const a=setInterval(()=>setCoins(c=>c+5),2000);const b=setInterval(()=>setHp(h=>Math.max(0,h-5)),5000);return()=>{clearInterval(a);clearInterval(b)}},[]);
const attack=()=>{if(enemyHp<=0||hp<=0)return;setEnemyHp(h=>Math.max(0,h-15));setCoins(c=>c+20);setMsg("Attack launched!")};
const build=()=>{if(coins>=50&&hp>0&&enemyHp>0){setCoins(c=>c-50);setTroops(t=>t+20);setMsg("Base upgraded!")}};
const restart=()=>{setCoins(500);setTroops(150);setHp(100);setEnemyHp(100);setMsg("Battle restarted")};
return <div className="container">
<div className="title">Reality Wars India</div>
<div className="grid" style={{marginTop:15}}>
{["Lucknow","Delhi","Varanasi","Mumbai"].map(c=><button key={c} onClick={()=>setCity(c)} className="btn dark">{c}</button>)}
</div>
<div className="center" style={{margin:'10px 0'}}>Selected: {city}</div>
<div className="card">
<div>{enemyHp<=0?"🏆 Victory!":hp<=0?"💀 Defeat!":msg}</div>
<div>Coins: {coins}</div><div>Troops: {troops}</div><div>Your HP: {hp}%</div><div>Enemy HP: {enemyHp}%</div>
</div>
<div className="grid" style={{marginTop:10}}>
<button onClick={attack} className="btn red">Attack</button>
<button onClick={build} className="btn green">Build</button>
<button onClick={restart} className="btn blue" style={{gridColumn:'1 / span 2'}}>Restart</button>
</div>
</div>
}