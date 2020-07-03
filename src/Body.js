import React, { useState, useEffect } from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body(props){
const [items, setiteams]=useState([])

useEffect(()=>{

    fetch('https://themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then(response=>response.json())
    .then(data=>{setiteams(data.meals)})

},[])

const iteamslist = items.map(item=>{
    return(
        <div class="col-md-4">
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb}/>
            <p>{item.idMeal}</p>
        </div>
    )
})

    return(
        <div>
            <div class="row mt-5">
            {iteamslist}

            </div>

        </div>
    )
}

export default Body;