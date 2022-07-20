import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReviewItem.css';

const OrderReviewItem = (props) => {
    const {product,handleRemoveProduct} = props;
    const {name,img,price,shipping,quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                <p className="product-name" title={name}>
                    {name.length>20?name.slice(0,20)+'...':name}
                </p>
                <p>price:<span className='orange-color'>${price}</span></p>
                <p><small>shipping:<span className='orange-color'>${shipping}</span></small></p>
                <p><small>quantity:<span className='orange-color'>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReviewItem;