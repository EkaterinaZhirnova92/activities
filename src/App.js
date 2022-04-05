import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // const MY_ID='';
  // const MY_KEY='';

  const [mySearch, setMySearch] = useState('');


  useEffect(()=> {
   getActivity()
  }, [])

  const getActivity = async() => {
  const response = await fetch(`https://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setMySearch(data.activity)
  }
  const final = (e) => {
    e.preventDefault();
  }


  return (
    <form onSubmit={final}>
      <br/>
      <h1>Random activity</h1>
      <p>{mySearch}</p>
      <button onClick={getActivity}>change</button>
    </form>
  );
}

export default App;
