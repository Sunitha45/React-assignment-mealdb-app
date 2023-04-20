import './App.css';
import React, {useState} from 'react'
import Products from './Products';
const App=()=>{
    const[search, setsearch]=useState('');
    const[data, setdata]=useState([]);
    const YOUR_APP_ID = "8c01b491";
    const YOUR_APP_KEY="a8b8142b13601a9178abd6fd14e28066";	
    const submitHandler=e=>{
        e.preventDefault();
        fetch(`curl "https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"`).then(
            response=>response.json()
            ).then(data=>setdata(data.hits))}
        return(
          <>
          <div>
            <center>
                <h4>Food receipe App</h4><br/>
                <form onSubmit={submitHandler}>
                 <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/><br/>
                 <input type="submit" className="btn btn-primary" value="search"/>
                </form>
                {data.length>=1?<products data={data}/>:null}
            </center>
        </div>
          </>
        
        )     
      }
    export default App
        

        
