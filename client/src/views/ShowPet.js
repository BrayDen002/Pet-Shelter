import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useParams, Link, useHistory } from "react-router-dom";


const Show = () => {


    const { id } = useParams()
    const history = useHistory()
    const [petState, setPetState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setPetState(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    return (

        <div>
            {
                (petState) ?
                    <div>

                        <h1>Pet Name: {petState.name}</h1>
                        <h1>Pet Type: {petState.type}</h1>
                        <h1>Description: {petState.description}</h1>
                        <h1>Skill 1: {petState.skillOne}</h1>
                        <h1>Skill 2: {petState.skillTwo}</h1>
                        <h1>Skill 3: {petState.skillThree}</h1>
                        <button onClick={deleteHandler}>Adopt {petState.name}</button>
                    </div>
                    : <h1>Loading....</h1>
            }
        </div>

    )
}


export default Show;