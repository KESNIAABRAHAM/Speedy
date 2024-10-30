import { useState } from "react";
import logo from "../assets/images/speed.png";

function Speedy() {
  
const [downloadSpeed, setDownloadSpeed] = useState(null);

const startTest = ()=> {
if(window.Speedtest){
  const speedtest = new window.Speedtest();

  speedtest.onupdate = (data) =>{
    setDownloadSpeed(data.dlStatus);
  };

  speedtest.start();
}
}

  return (
    <div className="bg-white">
      <div className="min-h-screen flex flex-col justify-start items-center">
        <h2 className="text-black font-bold mt-8 text-3xl">
          Welcome to Speedy
        </h2>
        <img src={logo} className="mx-auto mt-5 w-40" />
        {/* <h2 className="text-black font-bold text-center mt-8 text-3xl">
       Your Internet speed
        </h2> */}
        <button
          onClick={startTest}
          className="bg-black text-yellow-500 rounded-lg text-center mt-10 w-40 h-10"
        >
           Check Speed
        </button>
        {downloadSpeed && <p className="text-black font-bold text-center mt-8 text-2xl lg:text-4xl">Your internet speed is : {downloadSpeed} Mbps</p>}
      </div>
     <h2 className="text-center text-black t absolute bottom-0 right-0 mb-4 mr-2">POWERED BY librespeed</h2> 
    </div>
  );
}

export default Speedy;
