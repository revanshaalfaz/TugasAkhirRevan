import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaTajwidMakhraj = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-between">
            <div className="flex justify-start">
              <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
            </div>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Tajwid Dan</h1>
            <p className="text-[25px] font-bold mb-[15px]">Makharijil Huruf</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/MakharijilHuruf">
              <div className="flex items-center justify-start bg-[#ffffff] rounded-[24px] h-[85px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon1.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-start text-black ml-4">Makharijil Huruf</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/NunSukunTanwin">
              <div className="flex items-center justify-start bg-[#ffffff] rounded-[24px] h-[85px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon2.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-start text-black ml-4">Hukum Bacaan Nun Sukun dan Tanwin</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/MimSukunTanwin">
              <div className="flex items-center justify-start bg-[#ffffff] rounded-[24px] h-[85px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon3.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-start text-black ml-4">Hukum Bacaan Mim Sukun dan Tanwin</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlifLam">
              <div className="flex items-center justify-start bg-[#ffffff] rounded-[24px] h-[85px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon4.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-start text-black ml-4">Hukum Bacaan Alif Lam</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/MadPanjang">
              <div className="flex items-center justify-start bg-[#ffffff] rounded-[24px] h-[85px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon5.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-start text-black ml-4">Hukum Bacaan Mad / Panjang</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px] mb-[100px]">
            <NavLink to="/Qalqalah">
              <div className="flex items-center justify-start bg-[#ffffff] rounded-[24px] h-[85px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon6.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-start text-black ml-4">Hukum Bacaan Qalqalah</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaTajwidMakhraj;
