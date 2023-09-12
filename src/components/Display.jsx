import React from "react";
import './styles/Display.css'
import ShoeItem from "./ShoeItem";
import { useEffect , useState } from "react"


export default function Display(){
    const [shoeData, setshoeData] = useState([])

    useEffect(()=>{
        const fakeData = [
            {
                name: "shoe 1",
                brand: "brand 1",
                price: 6000,
                imageUrl: ''

            },
            {
                name:"shoe 2",
                brand: "shoe 3",
                price: 6000,
                imageurl:''

            },
            {
                name:"shoe 2",
                brand: "shoe 3",
                price: 6000,
                imageurl:''

            },
            {
                name:"shoe 2",
                brand: "shoe 3",
                price: 6000,
                imageurl:''

            },
            {
                name:"shoe 2",
                brand: "shoe 3",
                price: 6000,
                imageurl:''

            }
        ];
        setshoeData(fakeData)


    },[])
    return (
        <div className="display-container">
            <div className="display-title">
                <h1>SHOP BY CATEGORIES</h1>
                <p>Pick a category you need</p>
            </div>
            <div className="shoes-container">

             {shoeData.map((shoe, index)=>
             <ShoeItem key={index} shoeData={shoe}/>
             )}

            </div>

        </div>
    )
}
