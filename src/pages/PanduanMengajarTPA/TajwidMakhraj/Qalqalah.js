import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const Qalqalah = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Hukum Bacaan</h1>
            <p className="text-[25px] font-bold mb-[15px]">Qalqalah</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/qalqalah.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hukum Bacaan Qalqlalah</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Huruf qalqalah dalam ilmu tajwid terbagi menjadi lima, yaitu ba (ب), jim (ج), dal (د), tha (ط), dan qaf (ق). Kelima huruf tersebut jika dimatikan akan menimbulkan getaran bila dibaca.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara mengingatnya adalah dengan menyingkat huruf qalqalah menjadi kalimat "Baju di Toko" (ب ج د ط ق).</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Jenis qalqalah ada dua, yaitu qalqalah kubra dan qalqalah sugra. Cara membacanya berbeda, tergantung posisi huruf qalqalah-nya apakah berada di tengah kata atau di akhir kata pada ayat Al-Quran. Penjelasannya adalah sebagai
              berikut.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Qalqalah Kubra</p>
            <img alt="" src="/images/qalqalahkubra.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Dalam bahasa Arab, kubra artinya besar. Qalqalah kubra artinya qalqalah besar yang dibaca hurufnya dengan pantulan kuat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Qalqalah kubra terjadi ketika 5 huruf qalqalah berada di akhir kalimat.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>2. Qalqalah Sugra</p>
            <img alt="" src="/images/qalqalahsugra.jpeg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Sugra artinya kecil dalam bahasa Arab. Dengan demikian, pantulan bacaan qalqalah sugra cenderung lebih ringan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>Lazimnya, qalqalah sugra dilakukan pada 5 huruf qalqalah yang berada di tengah ayat.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default Qalqalah;
