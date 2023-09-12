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
                brand: "Nike",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


            },
            {
                name:"shoe 2",
                brand: "Adidas",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1659&q=80'

            },
            {
                name:"shoe 3",
                brand: "Nike",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'

            },
            {
                name:"shoe 4",
                brand: "Nike",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'

            },
            {
                name:"shoe 5",
                brand: "Nike",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'

            },
            {
                name:"shoe 6",
                brand: "Nike",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'

            },
            {
                name:"shoe 7",
                brand: "Nike",
                price: 6000,
                imageUrl:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'

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
                <div className="items-container">
                {shoeData.map((shoe, index)=>
                 <ShoeItem key={index} shoeData={shoe}/>
                 )}

                </div>

            </div>

        </div>
    )
}
