import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import {doctors} from "../mocks";
import {observer} from "mobx-react";


const Main=observer((id)=>{

    const [state, setDoctors]=useState(doctors);

    const removeItem = (id) => {
        setDoctors(prevState => prevState.filter(el => el.id !== id));
    };

    return (
        <section className="main">
            <Navbar/>
            <Profile doctors={state} removeItem={removeItem} />
        </section>
    )
});
export default Main;