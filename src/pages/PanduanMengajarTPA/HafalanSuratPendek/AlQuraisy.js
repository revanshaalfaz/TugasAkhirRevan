import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const AlQuraisy = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Al-Quraisy</p>
          </div>
        </div>
        <div style={{ maxWidth: "95%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Al-Quraisy</h1>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginBottom: "40px" }}>(Orang-orang Quraisy)</h1>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>لِاِيْلٰفِ قُرَيْشٍۙ ۝١</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>li'îlâfi quraîsy [1]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Disebabkan oleh kebiasaan orang-orang Quraisy,</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>اٖلٰفِهِمْ رِحْلَةَ الشِّتَاۤءِ وَالصَّيْفِۚ ۝٢</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>îlâfihim riḫlatasy-syitâ'i wash-shaîf [2]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>(yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas (sehingga mendapatkan banyak keuntungan),</p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[10px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>فَلْيَعْبُدُوْا رَبَّ هٰذَا الْبَيْتِۙ ۝٣</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>falya‘budû rabba hâdzal-baît [3]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka‘bah) </p>
            </div>
            <div className="flex flex-col justify-center bg-[#ffffff] rounded-[5px] p-4 shadow-md shadow-black mb-[100px]">
              <p style={{ fontSize: "30px", textAlign: "end", marginTop: "10px", fontWeight: "bold" }}>الَّذِيْٓ اَطْعَمَهُمْ مِّنْ جُوْعٍ ەۙ وَّاٰمَنَهُمْ مِّنْ خَوْفٍࣖ ۝٤</p>
              <p style={{ fontSize: "18px", textAlign: "justify", fontWeight: "medium", fontStyle: "italic" }}>alladzî ath‘amahum min jû‘iw wa âmanahum min khaûf [4]</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya:</p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>yang telah memberi mereka makanan untuk menghilangkan lapar dan mengamankan mereka dari rasa takut.</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default AlQuraisy;
