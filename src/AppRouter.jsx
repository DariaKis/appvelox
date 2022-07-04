import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";

import Admission from "./pages/Admission";
import Profile from "./components/Profile";
import Main from "./pages/Main";
import {doctors} from "./mocks";



const AppRouter=()=>{

    return (

        <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/admission" element={<Admission/>} />
        </Routes>

    );
};

export default AppRouter;