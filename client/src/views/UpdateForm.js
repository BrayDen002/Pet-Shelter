import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const UpdateForm = (props) => {

    const history = useHistory()
    const { id } = useParams()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
    }, []);

    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/update/' + id, {
            name, type, description, skillOne,  skillTwo, skillThree
        })
        .then(res => { history.push("/") })  // If successful, goes back to dashboard.
        .catch(err => {
            const error = err.response.data.errors;// Get the errors from err.response.data
            const errorArr = [] // Define a temp error array to push the messages in
            for (const key of Object.keys(error)) {
                errorArr.push(error[key].message) // Loop through all errors and get the messages
            }
            setErrors(errorArr)
        })
}

    return (
        <div>
            <h1>Update a Pet</h1>
            <form onSubmit={updatePet}>
                <p>
                    <label>Pet Name</label><br />
                    <input type="text"
                        name="name"
                        placeholder={name}
                        // value used to prefill the update form
                        value={name}
                        onChange={(e) => { 
                        setName(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Type</label><br />
                    <input type="text"
                        name="type"
                        value={type}
                        onChange={(e) => { 
                        setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { 
                        setDescription(e.target.value) }} 
                        />
                </p>
                <h3>Skills (optional): </h3>
                <p>
                    <label>Skill 1</label><br />
                    <input type="text"
                        name="skillOne"
                        value={skillOne}
                        onChange={(e) => { setSkillOne(e.target.value) }} 
                        placeholder="Optional Skill"
                        />
                </p>
                <p>
                    <label>Skill 2</label><br />
                    <input type="text"
                        name="skillTwo"
                        value={skillTwo}
                        onChange={(e) => { setSkillTwo(e.target.value) }} 
                        placeholder="Optional Skill"
                        />
                </p>
                <p>
                    <label>Skill 3</label><br />
                    <input type="text"
                        name="skillThree"
                        value={skillThree}
                        onChange={(e) => { setSkillThree(e.target.value) }} 
                        placeholder="Optional Skill"
                        />
                </p>
                <input type="submit" value="Update Pet" />
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            </form>
        </div>
    )
}

export default UpdateForm