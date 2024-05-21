import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const AtTakasur = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">At-Takasur</p>
          </div>
        </div>
        <div style={{ maxWidth: "95%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>At-Takasur</h1>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginBottom: "40px" }}>(Berbangga-bangga)</h1>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>اَلْهٰىكُمُ التَّكَاثُرُۙ ۝١</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>al-hâkumut-takâtsur [1]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Berbangga-bangga dalam memperbanyak (dunia) telah melalaikanmu</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>حَتّٰى زُرْتُمُ الْمَقَابِرَۗ ۝٢</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>ḫattâ zurtumul-maqâbir [2]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>sampai kamu masuk ke dalam kubur.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>كَلَّا سَوْفَ تَعْلَمُوْنَۙ ۝٣</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>kallâ saufa ta‘lamûn [3]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Sekali-kali tidak! Kelak kamu akan mengetahui (akibat perbuatanmu itu).</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>ثُمَّ كَلَّا سَوْفَ تَعْلَمُوْنَ ۝٤</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>tsumma kallâ saufa ta‘lamûn [4]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Sekali-kali tidak (jangan melakukan itu)! Kelak kamu akan mengetahui (akibatnya).</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>كَلَّا لَوْ تَعْلَمُوْنَ عِلْمَ الْيَقِيْنِۗ ۝٥</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>kallâ lau ta‘lamûna ‘ilmal-yaqîn [5]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Sekali-kali tidak (jangan melakukan itu)! Sekiranya kamu mengetahui dengan pasti, (niscaya kamu tidak akan melakukannya).</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>لَتَرَوُنَّ الْجَحِيْمَۙ ۝٦</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>latarawunnal-jaḫîm [6]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Pasti kamu benar-benar akan melihat (neraka) Jahim.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِيْنِۙ ۝٧</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>tsumma latarawunnahâ ‘ainal-yaqîn [7]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Kemudian, kamu pasti benar-benar akan melihatnya dengan ainulyakin.</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[100px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>ثُمَّ لَتُسْـَٔلُنَّ يَوْمَىِٕذٍ عَنِ النَّعِيْمِࣖ ۝٨</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>tsumma latus'alunna yauma'idzin ‘anin-na‘îm [8]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Kemudian, kamu pasti benar-benar akan ditanya pada hari itu tentang kenikmatan (yang megah di dunia itu).</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default AtTakasur;
