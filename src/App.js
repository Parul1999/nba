import React,{Component} from 'react';
import Header from './Header';
import { Link , BrowserRouter, Route} from 'react-router-dom';
import Teams from './Teams';
import Games from './Games';
class App extends React.Component {
 render()
 {
  const buttonStyle1={width:'25%',backgroundColor:'orange', height:'30px',marginLeft:'24%',color:'white'};
  const buttonStyle2={width:'25%',backgroundColor:'white', height:'30px',borderColor:'ghostwhite'}
  return (
    <div>
   <Header/>
   <div>
   <BrowserRouter>
    
    

          <Link to="/Teams"><button style={buttonStyle1}  >NBA Teams</button></Link> 
          <Link to="/Games"><button style={buttonStyle2} >NBA Games</button></Link>
      
         <Route path="/Teams" component={Teams} />
      <Route path="/Games" component={Games} />     
  
      </BrowserRouter>
   </div>
    </div>
  );
}
}

export default App;
