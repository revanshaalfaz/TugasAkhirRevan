import React from "react";
import { NavLink } from "react-router-dom";

const CatatanKeuangan = () => {
  return (
    <NavLink to="/keuangan">
      <div className="flex flex-col items-center justify-center bg-[#0C8F8F] rounded-[24px] h-[160px] shadow-md shadow-black">
        <img alt="keuangan" src="/images/IconCatatanKeuangan.png" className="w-[150px] h-[150px] rounded-full mt-[-30px]" />
        <h1 className="text-[17px] font-semibold text-center mt-[-30px]">Catatan</h1>
        <h1 className="text-[17px] font-semibold text-center">Keuangan</h1>
      </div>
    </NavLink>
  );
};

export default CatatanKeuangan;
