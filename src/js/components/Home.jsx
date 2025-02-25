import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[unit,setUnit]=useState(0)
	const[formateado,setFormateado]=useState(["0","0","0","0"])

	useEffect(()=>{
		const interval=setInterval(() => {
			setUnit((prevUnit)=>(prevUnit+1)%10000)
		},1000);

		return()=>{
			clearInterval(interval)
		}

	},[]) //se ejecuta una sola vez el ussefect

	useEffect(()=>{
		const digit= String(unit).padStart(4,"0").split("")
		setFormateado(digit)
	},[unit]) //se ejecuta cada vez que tenemos un cambio en unit


	return (
		<div className="text-center mt-2">
            <div className="d-inline-flex" style={{fontSize:"2rem"}}>
				{formateado.map((digito,index)=>(
					<p className="p-5 border border-dark border-2" key={index}>{digito}</p>
				))}
			</div>

			
		</div>
	);
};

export default Home;