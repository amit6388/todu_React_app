import React from "react";
import ControlPannel from "./ControlPannel";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tasks from "./Tasks";
const auth=window.localStorage.getItem('id')
export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
              
                    <Route path="/todu_React_app" element={<ControlPannel/>}/>
                    {auth?  <Route path="/todu_React_app/task" element={<Tasks/>}/>:<Route path="/" element={<ControlPannel/>}/> }
                   
                </Routes>
            </BrowserRouter>
        </>
    )
}