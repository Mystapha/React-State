import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import mustaphaImage from './mustapha.png';
function App() {
  
  const [name, setname] = useState("Mustapha");
  const [counter, setcounter] = useState(0);
  const [person, setperson] = useState({
    im1:mustaphaImage,
    name:"Mustapha",
    lastname:"Amara",
    age:35
  })
  const [students, setstudents] = useState([
    {name:"ahmed",age:28,img:"https://www.shutterstock.com/image-vector/ahmed-written-arabic-calligraphy-260nw-1626822784.jpg" },
    {name:"hatem",age:25,img:"https://logowik.com/content/uploads/images/821_ozel_hatem_hastanesi_logo.jpg" },
    {name:"kais",age:38,img:"https://img.freepik.com/vecteurs-premium/nom-qais-dans-art-calligraphie-arabe-thuluth_587453-726.jpg" },
    {name:"wael",age:35,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1equOUvb0db-AX_QBJ26wwyVuwiBb2vfHcWJZMu27g&s" },
    {name:"ali",age:45,img:"https://static.vecteezy.com/system/resources/previews/024/750/423/original/imam-ali-calligraphy-ya-ali-free-png.png" },
    {name:"ali",age:45,img:"https://static.vecteezy.com/system/resources/previews/024/750/423/original/imam-ali-calligraphy-ya-ali-free-png.png" }
  ]);
   const [show,setshow] = useState(false)
  return (
    <div className="App">
      
     <div className='div1'>
    <h3 style={{fontSize:"25px",color:"black"}}>{name}</h3>
    <button className='btn' onClick={()=>setname("Mustapha Amara")}>Click here to change name</button>
    <div className='text1'>
    <h5 >{counter} $</h5>
    </div>
    <div className='dd2'><button onClick={()=>setcounter(counter+1)}>+</button> <button onClick={()=>setcounter(counter-1)}>-</button> <button onClick={()=>setcounter(0)}>Reset</button></div>
    
    <img  src={person.im1}/>
    
    <h4>{person.name}</h4>
    <input type='text' onChange={(e)=>setperson({...person,name:e.target.value})}/>
    <h4>{person.lastname}</h4>
    <input type='text' onChange={(e)=>setperson({...person,lastname:e.target.value})}/>
    <h4>{person.age}</h4>
    <input type='number' onChange={(e)=>setperson({...person,age:e.target.value})}/>
    </div>
    <div className='btn2'>
      <button onClick={()=>setshow(!show)}>Click to show all they Students </button>
    </div>
   {show? <div className='card1'>
      {students.map((el)=><div className='card'>
        <img src={el.img}/>
        <hr style={{width:"248px",border:"solid 1px"}}/>
        <h4>{el.name}</h4>
        <h4>{el.age}</h4>
      </div>)}
    </div>:null}
    </div>
  );
}

export default App;
