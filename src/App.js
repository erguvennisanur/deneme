import './App.css';
// import {
//   BrowserRouter as Router, Switch,Route,Link } from "react-router-dom" ;
// import Home from './components/Home';
// import Users from './components/Users';
// import About from './components/About';
import SignUp from "./components/SignUp"

function App() {
 return ( 
  <div className='App'>
     <SignUp/>
  
            {/* <label htmlFor="firstName">First Name</label>
            <input  name="firstName" value={values.firstName} onChange={handleChange}/>
              <br/>
              <br/>
            <label htmlFor="lastName">Last Name</label>
            <input  name="lastName" value={values.lastName} onChange={handleChange}/>
              <br/>
              <br/> */}
            {/* <label htmlFor="gender">Gender</label>
            <span>Male</span>
            <input type="radio" name="gender" value="male"
            checked={values.gender==="male"}  onChange={handleChange}/>
            <span>Female</span>
            <input type="radio"  name="gender" value="female"
            checked={values.gender==="female"}   onChange={handleChange}/>
            <br/>
            <br/>
            <div>
              <input type="checkbox" name='hobies' value="Football" onChange={handleChange}/>
              Footbal      
            </div>
            <div>  
              <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange}/>
            Cinema
            </div>
            <div>
              <input type="checkbox" name='hobies' value="Photography" onChange={handleChange}/>
            Photography 
            </div>
            <br/><br/>

            <select name="contry" value={values.country} onChange={handleChange}>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option> 
            </select> */}

            
 
</div>

    //  <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
   
  );
}

export default App;
