import React from "react";
import { NavLink } from "react-router-dom";

const PanduanMengajarTPA = () => {
  return (
    <NavLink to="/BerandaPanduanMengajar">
      <div className="flex flex-col items-center justify-center bg-[#0C8F8F] rounded-[24px] h-[160px] shadow-md shadow-black">
        <img alt="masjid" src="/images/iconPanduanMengajar.png" className="w-[110px] h-[110px] rounded-full mt-[-5px]" />
        <h1 className="text-[17px] font-semibold text-center mt-[-15px]">Panduan</h1>
        <h1 className="text-[17px] font-semibold text-center">Mengajar TPA</h1>
      </div>
    </NavLink>
  );
};

export default PanduanMengajarTPA;
