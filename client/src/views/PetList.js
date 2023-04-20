import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

    
const PetList = (props) => {
    const [pet, setPets] = useState([]);
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, [state])


    return (
        <div>
            <button>
            <Link to = {"/"}><h1>Pet Shelter</h1>
            </Link>
            
            </button>
            <h3> These pets are looking for a good home</h3>
            <h4><u>Name |   Type |  Actions</u></h4>
            {props.pet.map( (pet, i) =>
                <p key={i}>
                    {pet.name} | {pet.type} |
                    <Link to={`/pet/${pet._id}`}> Details</Link> |
                    <Link to={`/pet/${pet._id}/edit`}> Edit </Link> 
                    </p>
            )}
        </div>
    )
}
    
export default PetList;

