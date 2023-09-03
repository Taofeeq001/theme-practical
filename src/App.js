import logo from './logo.svg';
import './App.css';
import {MdOutlineLightMode} from 'react-icons/md'
import {BsMoon} from 'react-icons/bs'
import { useState } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(false)

  const handleLightMode = (e) =>{
    e.preventDefault();
    const newTheme = lightMode === 'light'? 'dark': 'light';
    setLightMode(newTheme)
    
  }
  return (
    <div className="App" data-theme={lightMode}> 
      <form>
        <div>
          <button style={{backgroundColor:'transparent', border:'none'}} onClick={handleLightMode}>
            {
              lightMode? <MdOutlineLightMode/> : <BsMoon/>
            }
          </button>
        </div>
        <h1>Login</h1>
        <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          <span>
            <label>Username</label>
            <input type='email'/>
          </span>
          <span>
            <label>Password</label>
            <input type='password'/>
          </span>
        </div>
        <button className='btn'>Login</button>
      </form>
    </div>
  );
}

export default App;
