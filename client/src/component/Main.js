import React, { useEffect, useState } from 'react'
// import PetForm from '../views/PetForm';
import PetList from '../views/PetList';
import axios from 'axios';
const Main = (props) => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
           {loaded && <PetList pet={pet}/>}
        </div>
    )
}
    
export default Main;

