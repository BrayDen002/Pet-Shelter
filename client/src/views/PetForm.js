import React, {useState} from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'


const PetForm = () => {
    const history = useHistory()
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState(""); 
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState([])
    

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet/new", {
            name, type, description, skillOne, skillTwo, skillThree
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
        <body>
            <form onSubmit={submitHandler}>
            <nav>
                <div class="navTitle">
                    <img src="./images/assets/leaf.png" alt="EasyBay Logo"></img>
                    <h1>EasyBay</h1>            
                </div>
                   
                <div class="searchBar">
                    <input type="text" class="searchBox" placeholder="Search for anything"></input>
                    <a id="search" href="#"><img src="./images/assets/search-dark.png" alt="Search"></img></a>
                </div>
                <a href="#"><input type="button" class="btn" value="Sign In" id="loginButton"></input></a>
                <a id="cart" href="#"><img class="navIcon" src="./images/assets/cart-dark.png" alt="Shopping Cart"  onclick="cartClicked()"></img><span id="cartCount"></span></a>
            </nav>
                <p>
                    Pet Name:<br />
                    <input 
                    type="text" 
                    name="name" 
                    onChange={(e)=>setName(e.target.value)} 
                    value={name} 
                    placeholder="Enter a name" />
                </p>
                <p>
                    Pet Type:<br />
                    <input type="text" 
                    name="type" 
                    onChange={(e)=>setType(e.target.value)} 
                    value={type} 
                    placeholder="Enter a type" />
                </p>
                <p>
                    Description:<br />
                    <input type="text" 
                    name="description" 
                    onChange={(e)=>setDescription(e.target.value)} 
                    value={description} 
                    placeholder="Describe The Pet" />
                </p>
                <h4>Skills (optional):</h4>
                <p>
                    Skill 1:<br />
                    <input type="text" 
                    name="skillOne" 
                    onChange={(e)=>setSkillOne(e.target.value)} 
                    value={skillOne} 
                    placeholder="Optional Skill" />
                    
                </p>
                <p>
                    Skill 2:<br />
                    <input type="text" 
                    name="skillTwo" 
                    onChange={(e)=>setSkillTwo(e.target.value)} 
                    value={skillTwo} 
                    placeholder="Optional Skill" />
                </p>
                <p>
                    Skill 3:<br />
                    <input type="text" 
                    name="skillThree" 
                    onChange={(e)=>setSkillThree(e.target.value)} 
                    value={skillThree} 
                    placeholder="Optional Skill" />
                </p>
                <button type="submit">Add Pet</button>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            </form>
            </body>
    )
}

export default PetForm