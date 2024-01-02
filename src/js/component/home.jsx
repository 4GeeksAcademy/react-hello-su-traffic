import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight]= useState("Red")
	return (
		<div className="main ">
<div className="Stick"></div>
			<div className=" Whole text-center">
			<div className={activeLight==="Red"? "Red Light Glow":"Red Light"} onClick={()=>setActiveLight("Red")}></div>
			<div className={activeLight==="Yellow"? "Yellow Light Glow":"Yellow Light"} onClick={()=>setActiveLight("Yellow")}></div>
			<div className={activeLight==="Green"? "Green Light Glow":"Green Light"} onClick={()=>setActiveLight("Green")}></div>
		</div>
		</div>
	);
};

export default Home;
