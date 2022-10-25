import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function TechnoAdd(props) {
    const [techno, setTechno] = useState({
        technoName: '',
        technoCategory: '',
        technoDesc: ''
    });

    const {handleAddTechno} = props;

    // Alerte de succès
    const notify = () => toast.success("Techno added!");


    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno);
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setTechno({...techno, [name]: value});
    }

    return(
        <div className="technoAdd">
            <h1>Add techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <div className="form">
                        <label htmlFor="technoName">Name</label>
                        <input type="text" name="technoName" id="technoName" value={techno.technoName} onChange={(evt)=>handleChange(evt)}/>
                        <br/>
                        <label htmlFor="technoCategory">Category</label>

                        <select name="technoCategory" id="technoCategory" value={techno.technoCategory} onChange={(evt)=>handleChange(evt)}>
                            <option value="">Select a category</option>
                            <option value="Front-End">Front-End</option>
                            <option value="Back-End">Back-End</option>
                            <option value="Autre">Autre</option>
                        </select>
                        <br/>
                        <label htmlFor="technoDesc">Description</label>
                        <input type="text" name="technoDesc" id="technoDesc" value={techno.technoDesc} onChange={(evt)=>handleChange(evt)}/>
                    </div>
                    <ToastContainer />
                    <div className="btn">
                        <input type="submit" onClick={notify} value="Add techno"/>
                    </div>
                </form>
            </div>
        </div>
    )
}