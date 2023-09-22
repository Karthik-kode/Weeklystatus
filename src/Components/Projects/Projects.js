import React from "react";
import '../../Styles/Projects.css';
import { Link, useNavigate } from "react-router-dom";


export default function Projects() {
    const navigate = useNavigate();
    const project_name = 'enhesa';
    const handlenavigate = (name) => {
        navigate('/reports',  { state: { name } })
        // console.log(name)
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div>
                        <h5 className="card-title">Enhesa</h5>
                    </div>
                    <div>
                        <button 
                        className="btn btn-primary" 
                        onClick={() => handlenavigate(project_name)}
                        >
                            Weekly report
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}