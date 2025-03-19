import { useState } from "react";
import "./App.css";
import { Home, Smartphone, Wifi, PhoneCall } from "lucide-react";
function App() {
  return (
    <>
      <div className="bg-green-600 w-full">
        <div className="w-[1100px] mx-auto max-sm:w-full px-3 max-sm:px-2">
          <nav className=" text-white py-3 w-full">
            <div className="flex justify-center gap-5 text-sm max-sm:gap-2">
              {/* Home */}
              <div className="flex items-center space-x-1 cursor-pointer">
                <Home size={20} />
                <span className="font-semibold">Snoop.pi</span>
              </div>

              {/* Sim Data */}
              <div className="flex items-center space-x-1 cursor-pointer">
                <Smartphone size={20} />
                <span className="font-semibold">Sim Data</span>
              </div>

              {/* Wifi Cầm Tay */}
              <div className="flex items-center space-x-1 cursor-pointer">
                <Wifi size={20} />
                <span className="font-semibold">Wifi cầm tay</span>
              </div>

              {/* Hỗ Trợ */}
              <div className="flex items-center space-x-1 cursor-pointer">
                <PhoneCall size={20} />
                <span className="font-semibold">Hỗ trợ</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/*  */}
      {/* <div className="w-[1100px] mx-auto max-sm:w-full">
        <div className="banner w-full">
          <img className="w-full" src="https://w.ladicdn.com/s700x600/61437b48d1330500bc4f9128/nhe-20220223033559.png" alt="" />
        </div>
      </div> */}
    </>
  );
}

export default App;
