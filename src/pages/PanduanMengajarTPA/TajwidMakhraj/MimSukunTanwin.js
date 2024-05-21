import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const MimSukunTanwin = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Mim Sukun</h1>
            <p className="text-[25px] font-bold mb-[15px]">Dan Tanwin</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/mimsukuntanwin.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hukum Bacaan Mim Sukun dan Tanwin</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Mim mati atau mim sukun adalah mim yang harakat sukun, atau mim yang tidak berharakat sehingga tidak dapat dibunyikan kecuali diawali huruf lain yang hidup (berharakat fathah, kasrah dan dammah). Dikutip dari buku Dasar-Dasar
              Ilmu Tajwid oleh Dr. Marzuki, M.Ag., dkk, ada tiga macam hukum bacaan mim mati apabila pertemu huruf Hijaiyah tertentu, berikut penjelasan beserta contohnya:
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Ikhfa Syafawi</p>
            <img alt="" src="/images/ikhfasyafawi.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Arti Ikhfa' adalah menyamarkan, sementara Syafawi berasal dari kata syafatun yang berarti bibir. Jadi, ikhfa syafawi berarti menyamarkan bacaan di bibir, karena hurufnya keluar dari bibir.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Ikhfa' syafawi terjadi ketika mim mati bertemu dengan huruf ba (ب). Cara membacanya adalah dengan menyamarkan bacaan mim mati di bibir sambil didengungkan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>contoh bacaan izhar pada potongan QS. Yasin: 9</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>2. Idgham Mimi</p>
            <img alt="" src="/images/idghammimi.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Idgham mimi disebut dengan idgham mitsli atau idgham mutamatsilain. Cara membacanya adalah seperti membaca mim rangkap atau mim yang ditasyidkan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hukum ini berlaku ketika mim mati (مْ) berjumpa dengan huruf mim (م). Cara bacanya menjadi satu seolah-olah menjadi mim bertasydid dengan disertai dengungan (ghunnah).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>3. Idzhar Syafawi</p>
            <img alt="" src="/images/idzharsyafawi.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Izhar berarti menjelaskan menyamarkan, sedangkan syafawi berarti bibir. Jadi, izhar syafawi berarti membaca jelas dengan bibir.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>
              Izhar syafawi terjadi apabila mim mati bertemu huruf-huruf hijaiyah selain mim (مْ) dan ba (ب). Cara bacanya dengan menyuarakan mim mati dengan jelas di bibir serta mulut tertutup.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default MimSukunTanwin;
