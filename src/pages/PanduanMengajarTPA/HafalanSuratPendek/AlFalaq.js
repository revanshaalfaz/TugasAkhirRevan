import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const AlFalaq = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Surat</h1>
            <p className="text-[25px] font-bold mb-[15px]">Al-Falaq</p>
          </div>
        </div>
        <div style={{ maxWidth: "95%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Al-Falaq</h1>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginBottom: "40px" }}>(Fajar)</h1>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "center", fontWeight: "bold" }}></p>
              <p style={{ fontSize: "30px", textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ ۝١</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>qul a‘ûdzu birabbil-falaq [1]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan yang (menjaga) fajar (subuh)</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>مِنْ شَرِّ مَا خَلَقَۙ ۝٢</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>min syarri mâ khalaq [2]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>dari kejahatan (makhluk yang) Dia ciptakan,</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ ۝٣</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa min syarri ghâsiqin idzâ waqab [3]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>dari kejahatan malam apabila telah gelap gulita,</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ ۝٤</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa min syarrin-naffâtsâti fil-‘uqad [4]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>dari kejahatan perempuan-perempuan (penyihir) yang meniup pada buhul-buhul (talinya),</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[100px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَࣖ ۝٥</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa min syarri ḫâsidin idzâ ḫasad [5]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>dan dari kejahatan orang yang dengki apabila dia dengki.</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default AlFalaq;
