// import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";


function App() {
//making stateof our application

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  //logic

  let calcBmi = (e) => {

    e.preventDefault();
    
    if(weight===0 || height===0)
      {
        alert('please enter a valid weight and height')
      }
      else{
        let bmi =(weight/(height*height)*10000)
        setBmi(bmi.toFixed(1))

        //

        if(bmi<18.5){
          setMessage('You are Underweight')
        }

        else if (bmi>=18.5 && bmi<25){
          setMessage('You have Healthy weight')
        }

        else if (bmi>=25 && bmi<30){
          setMessage('You are Over weight')
        }

        else {
          setMessage('You are Obese')
        }
      }
  }


  //reload

  let reload = () => {
    window.location.reload()
  }

 
  return (
    <div className="App">
      {/* <div classname="box"> */}
      <div className='container'>
        <h2>BMI Calculator</h2> 
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(kg)</label>
            <input 
              type="text" 
              placeholder="Enter Weight value" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
               />

          </div>
          <div>
            <label>Height(cm)</label>
            <input 
              type="text" 
              placeholder="Enter Height value" 
              value={height} 
              onChange={(event) => setHeight(event.target.value)}
              />
          </div> 
           <div>
            <button classname='btn' type='submit'>Submit</button>
            <button classname='btn btn-outline' onClick={reload} type='submit'>Reload</button>
           </div>

           <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
           </div>
        </form>
       {/* </div> */}
      </div>

    </div>
  );
}

export default App;
