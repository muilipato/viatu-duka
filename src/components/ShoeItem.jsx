import React from "react"
export default function ShoeItem({shoeData}){
    const {name, brand, imageUrl, price} = shoeData;

    return(
        <div className="shoe-item">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>{brand}</p>
            <p>Price: {price}</p>

        </div>

    )
}
