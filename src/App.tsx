import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Course from "./components/course/course";
import {useState} from "react";
import Studys from "./components/Studys/Studys";

function App() {
    const [dark, setDark] = useState(false)

    function getDark() {
        setDark(!dark)
    }

    return (
        <div style={{
            background: dark ? '#FFF' : '',
            color: dark ? '#000' : '#FFF'
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Hero dark={dark}/>
            <Course dark={dark}/>
            <Studys dark={dark}/>
        </div>
    );
}

export default App;
