import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// import Item from './Item';


const ProductStyle = styled.div`
.container{
  padding: 10px;
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-gap: 1.5em;}
.card{
	height: max-content;
}
.content{
    padding: 10px;
}
.button{
    background-color: #77D9FB;
    font-size: 18px;
    width: 100%;
  }
.cart-link{
  z-index: 1;
}
.cart-button{
  background-color: Transparent;
  border: none;
  position: absolute;
  right: 0px;
  top: -38px;
  font-size: 16px;
}
`;

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          products: [],
          cart: 0,
        };
       }

       sendData = () => {
         this.props.parentCallback();
    }


    addtocartcall = (item) => {

        const path = 'http://0.0.0.0:5000/addtocart';
        axios.post(path,
                    JSON.stringify(item),
            {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((result) => {
                console.log('im back')
                // console.log(result.data['cartlength'])
                this.setState({cart: result.data['cartlength'] })
                // console.log(this.state.cart)
            })
            .catch((error) => {
                console.error(error);
        });
      }



      addtoCart(){
          const path = 'http://0.0.0.0:5000/fetchCart';
          axios.get(path)
              .then((resu) => {
                  console.log('im nav')
                  this.setState({cart : resu.data['cart']})
                  console.log('afra: ',this.state.cart)
                  this.render()
              })
              .catch((error) => {
                  console.error(error);
              });
      }



    addProductToCart(products){
        this.cart = [...this.cart, products];
        this.addtocartcall()
    }

    render() {

        return (
            <ProductStyle>
            <div className="container">
            {this.state.products.map(item => (
              <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={item.image}  alt=""/>
                    </figure>
                </div>
                <div className="content">
                <h6>{item.name}</h6>
                <p>{item.price}</p>
                </div>
                <button className="button" onClick={() =>this.addtocartcall(item)}>Add to Cart</button>
              </div>
            ))}
            <Link className="cart-link" to="/Cart">
            <button className="cart-button">Cart({this.state.cart})</button>
            </Link>
            </div>
            </ProductStyle>
        );

    }

    componentDidMount() {
        console.log('product.js')

        const path = 'http://0.0.0.0:5000/fetchProducts';
        axios.get(path)
            .then((result) => {
                console.log('im back')
                this.setState({products : result.data['products']})
                console.log('afra: ',this.state.products)
                this.render()
            })
            .catch((error) => {
                console.error(error);
        });
    }


}
export default Products;
