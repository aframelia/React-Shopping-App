import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
.card{
	height: max-content;
}
.content{
    padding: 10px;
}
.button{
    background-color: #77D9FB;
    font-size: 18px;
}
`;


function Item({product, onAddToCart}) {


    return (
        <CardStyle>
            <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={product.image}  alt=""/>
                </figure>
            </div>
            <div className="content">
            <h6>{product.name}</h6>
            <p>{product.price}</p>
            </div>
            <button className="button" onClick={() =>onAddToCart(product)}>Add to Cart</button>
            </div>
        </CardStyle>
    )

}

export default Item