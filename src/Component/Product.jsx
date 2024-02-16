import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHeart  as unlike} from '@fortawesome/free-regular-svg-icons'
import { faHeart  as like} from '@fortawesome/free-solid-svg-icons'

function Product(props) {
    const [Color,setColor]=useState('black');
    const [heart,setLike]=useState(unlike);

    function changecolor(){
      Color=='black'?setColor('red'):setColor('black')
      heart==unlike?setLike(like):setLike(unlike)
      ;
    }
    return (
    
    <>
    <div>
    </div>
    <div className="w-[250px] h-auto  rounded-lg flex-shrink-0 cursor-pointer md:shadow-md" >
      <div className="bg-transparent w-full h-[150px] relative">
        <img  className="w-full h-full rounded-t-lg"
          src={props.img}
          alt=""
        />
      <div className={`w-[30px] h-[30px] bg-white absolute  top-0 right-0 rounded-md m-1 flex items-center justify-center shadow-xl`} onClick={()=>{changecolor()}}><p>
    <FontAwesomeIcon icon={heart} style={{color:Color}} className=""/>
        </p></div>
      </div>
      <div className="w-100 h-[75px] flex flex-col text-black py-2 px-2">
        <h1 className="text-[14px] lg:text-md font-bold">
          {props.title}
        </h1>
        <p className="text-[10px]">{props.p_name}</p>
        <p className="text-[16px] font-bold">{props.price}</p>
      </div>
      <div className="w-100 flex items-center py-1 px-2 my-1 ">
       <Link to='productpage' className="w-100 h-100"> 
        <button className="w-1/2 h-100 bg-black text-white rounded-3xl font-bold py-1.5 shadow-sm shadow-black" onClick={()=>{

          li()
        }
        }>Enroll now</button>
       </Link>
      </div>
    </div>
    </>
  );
}

export default Product;
