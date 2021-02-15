import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import NavigationBar from './components/NavigationBar';
import Products  from './components/Products';
import Cart from './components/Cart';

class App extends React.Component {

  render(){

    return(
      <React.Fragment>
           <Router>
             <NavigationBar/>
             <Switch>
             <Route exact path="/">
               <Products/>
             </Route>
             <Route exact path="/Cart">
             <Cart/>
             </Route>
           </Switch>
           </Router>
         </React.Fragment>
    )
  }

}



// function App() {

//   return (
//     <React.Fragment>
//     <Router>
//       <NavigationBar/>
//       <Switch>
//       <Route exact path="/">
//         <Products/>
//       </Route>
//       <Route exact path="/Cart">
//       <Cart/>
//       </Route>
//     </Switch>
//     </Router>
//   </React.Fragment>
//   );
// }

export default App;
