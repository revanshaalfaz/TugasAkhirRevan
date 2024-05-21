import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const AnNasr = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">An-Nasr</p>
          </div>
        </div>
        <div style={{ maxWidth: "95%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>An-Nasr</h1>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginBottom: "40px" }}>(Pertolongan)</h1>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُۙ ۝١</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>idzâ jâ'a nashrullâhi wal-fat-ḫ [1]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Apabila telah datang pertolongan Allah dan kemenangan</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>وَرَاَيْتَ النَّاسَ يَدْخُلُوْنَ فِيْ دِيْنِ اللّٰهِ اَفْوَاجًاۙ ۝٢</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>wa ra'aitan-nâsa yadkhulûna fî dînillâhi afwâjâ [2]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>dan engkau melihat manusia berbondong-bondong masuk agama Allah,</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[100px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُۗ اِنَّهٗ كَانَ تَوَّابًاࣖ ۝٣</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>fa sabbiḫ biḫamdi rabbika wastaghfir-h, innahû kâna tawwâbâ [3]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sesungguhnya Dia Maha Penerima tobat.</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default AnNasr;
