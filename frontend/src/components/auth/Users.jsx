
import React from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import AxiosContext from "../../Services/context";
import users  from "../../users";


//  return products.map((p) => <Product name={p.name} id={p.id} />);

export default function(){

   // return users.map((element) => <users name={element.name} email={element.email}/>);

     const list  = users.map((el)=>{
     return <li key ={el.__id}>
      <h2>{el.category}</h2>
       <h3>{el.title} <br></br></h3> 
       <img className="imageProduct" src={el.image}></img><br></br>
       {"Rating:"} {el.rating.rate}  {el.rating.count}<br></br>
        {el.description}<br></br>
        {"Price: "}{el.price}<br></br>
  
        </li>}) 
  return(
    <div className="Product_list">
      <div className="mo">
      <ul>
        {list}
      </ul>
      </div>
    </div>
  )
}

