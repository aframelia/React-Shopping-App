import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Squidgies from './squidgies.svg';



const Styles = styled.div`
  .navbar {
    background-color: #CBF1FD;
    z-index: 0;
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000000;
    &:hover { color: gray; }
  }
  .navbar-item{
    position: absolute;
    right: 180px;
    top: 12px;
  }
  .navbar-brand, .logo{
    width: 150px;
    margin-top: 8px;
    margin-left: 10px;
  }
  .navbar-end{
    margin-right: 10px;
  }
  .logo {
    width: 150px;
    margin-top: 8px;
  }
`;

class NavigationBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cart: []
//     };
//   }

//   componentDidUpdate(cart){
//     console.log('product.js')

//     const path = 'http://0.0.0.0:5000/fetchCart';
//     axios.get(path)
//         .then((resu) => {
//             console.log('im nav')
//             this.setState({cart : resu.data['cart']})
//             console.log('afra: ',this.state.cart)
//             this.render()
//         })
//         .catch((error) => {
//             console.error(error);
//     });
// }

render(){
  return(
    <Styles>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" ><img src={Squidgies} className="logo" alt="logo"/></NavLink>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/">Products</NavLink>
          </div>
        </div>
      </nav>
    </Styles>
  )
}

}
export default NavigationBar;

