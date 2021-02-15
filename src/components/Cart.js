import React from 'react';
import axios from "axios";
import styled from 'styled-components';
// import CartItem from './CartItem';


const ProductStyle = styled.div`
.container{
  padding: 10px;
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-gap: 1.5em;
}
.card{
	height: max-content;
}
.content{
    padding: 10px;
}
.button{
    background-color: #FF5147;
    font-size: 18px;
    width: 100%;
}
`;


class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cartdata: []
      }
    }


    deleteItem = (item) => {

      const path = 'http://0.0.0.0:5000/deleteItem';
      axios.post(path,
                  JSON.stringify(item),
          {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
          .then((result) => {
              console.log('im back from deleting')
              this.setState({cartdata: result.data['cart']}) ;

          })
          .catch((error) => {
              console.error(error);
      });

    }



    render() {

      return (
        <ProductStyle>
          <div className="container">
          {this.state.cartdata.map(item => (
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
            <button className="button" onClick={() =>this.deleteItem(item.id)}>Delete</button>
            </div>
        ))}
          </div>
        </ProductStyle>
      );
    }

    componentDidMount() {
        console.log('farts galore')

        const path = 'http://0.0.0.0:5000/fetchCart';
        axios.get(path)
            .then((res) => {
                console.log('im back')
                this.setState({cartdata: res.data['cart']}) ;
                // this.cartdata = [1,2,3]
                console.log('afra: ',this.state.cartdata)
            })
            .catch((error) => {
                console.error(error);
        });
    }
  }

  export default Cart;