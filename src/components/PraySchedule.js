import React from "react";
import { NavLink } from "react-router-dom";

const PraySchedule = () => {
  return (
    <NavLink to="/pray">
      <div className="flex flex-col items-center justify-center bg-[#0C8F8F] rounded-[24px] h-[160px] shadow-md shadow-black">
        <img alt="masjid" src="/images/masjid.png" className="w-[140px] h-[140px] rounded-full mt-[-30px]" />
        <h1 className="text-[17px] font-semibold text-center mt-[-20px]">Jadwal Waktu</h1>
        <h1 className="text-[17px] font-semibold text-center">Sholat</h1>
      </div>
    </NavLink>
  );
};

export default PraySchedule;
