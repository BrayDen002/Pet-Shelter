import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' +id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h2></h2>
        </div>
    )
}
    
export default Detail;