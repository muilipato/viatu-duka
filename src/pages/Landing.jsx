import React from "react";
import { useState, useEffect, useContext } from "react";
import Header from '../components/Header'
import BelowHeader from '../components/BelowHeader'
import Display from "../components/Display";
export default function Landing(){
    return (
        <div>
            <Header/>
            <BelowHeader/>
            <Display/>


        </div>
    )


}
