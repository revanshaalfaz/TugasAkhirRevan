import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const DoaSesudahTidur = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-white overflow-y-auto" style={{ fontFamily: "poppins", overflowY: "scroll" }}>
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-between">
            <div className="flex justify-start">
              <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
            </div>
          </div>
          <div className="flex flex-col items-center mt-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Doa</h1>
            <p className="text-[25px] font-bold mb-[15px]">Sebelum Wudhu</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/sebelumwudhu.jpeg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Doa Sebelum Wudhu</h1>
            <p style={{ fontSize: "35px", textAlign: "center", marginTop: "20px", marginBottom: "10px", fontWeight: "bold" }}>نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًاِللهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "center", marginBottom: "10px", fontWeight: "bold", fontStyle: "italic" }}>Nawaitul wudua lirof'il hadatsii ashghori fardhon lillaahi ta'alaa.</p>
            <p style={{ fontSize: "16px", textAlign: "center" }}>Artinya: ""Aku niat berwudu untuk menghilangkan hadas kecil, fardu karena Allah."</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default DoaSesudahTidur;
