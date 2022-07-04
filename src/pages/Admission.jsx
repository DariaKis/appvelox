import React, {useState} from "react";
import Navbar from "../components/Navbar";
import {doctors} from "../mocks";
import {observer} from "mobx-react";
import PersonalArea from "../components/PersonalArea";



const Admission=observer(()=>{

    const [state, setDoctors]=useState(doctors);
    const removeItem = (id) => {
        setDoctors(prevState => prevState.filter(el => el.id !== id))
    };

    return (
        <section className="main">
            <Navbar/>
            <PersonalArea doctors={state} removeItem={removeItem} />
        </section>
    )
});
export default Admission;