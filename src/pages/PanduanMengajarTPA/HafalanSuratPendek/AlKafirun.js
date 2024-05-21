import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const AlKafirun = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Al-kafirun</p>
          </div>
        </div>
        <div style={{ maxWidth: "95%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Al-Kafirun</h1>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginBottom: "40px" }}>(Orang-orang Kafir)</h1>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ ۝١</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>qul yâ ayyuhal-kâfirûn [1]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Katakanlah (Nabi Muhammad), “Wahai orang-orang kafir,.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ ۝٢</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>lâ a‘budu mâ ta‘budûn [2]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>aku tidak akan menyembah apa yang kamu sembah.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۚ ۝٣</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa lâ antum ‘âbidûna mâ a‘bud [3]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Kamu juga bukan penyembah apa yang aku sembah.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَلَآ اَنَا۠ عَابِدٌ مَّا عَبَدْتُّمْۙ ۝٤</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa lâ ana ‘âbidum mâ ‘abattum [4]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Aku juga tidak pernah menjadi penyembah apa yang kamu sembah.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۗ ۝٥</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa lâ antum ‘âbidûna mâ a‘bud [5]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[100px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِࣖ ۝٦</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>lakum dînukum wa liya dîn [6]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Untukmu agamamu dan untukku agamaku.</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default AlKafirun;
