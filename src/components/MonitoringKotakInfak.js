import React from "react";
import { NavLink } from "react-router-dom";

const MonitoringKotakInfak = () => {
  return (
    <NavLink to="/maps">
      <div className="flex flex-col items-center justify-center bg-[#0C8F8F] rounded-[24px] h-[160px] shadow-md shadow-black">
        <img alt="masjid" src="/images/iconKotakInfak.png" className="w-[110px] h-[110px] rounded-full mt-[-10px]" />
        <h1 className="text-[17px] font-semibold text-center mt-[-5px]">Monitoring Kotak</h1>
        <h1 className="text-[17px] font-semibold text-center">Infak</h1>
      </div>
    </NavLink>
  );
};

export default MonitoringKotakInfak;
