import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const MakharijilHuruf = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Makharijil</h1>
            <p className="text-[25px] font-bold mb-[15px]">Huruf</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/makhroj.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Makhroj Huruf</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Membaca huruf hija’iyyah harus sesuai dengan makhraj-nya (tempat keluarnya) dan sifat yang ia miliki. Ada 17 makhraj huruf, tetapi secara umum bisa dikelompokkan menjadi 5:
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Rongga (Al-Jauf)</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Tempat keluar huruf mad (panjang) yaitu : Alif (أ), Wawu (و), dan Ya' (ي)</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>2. Tenggorokan (Al Halq)</p>
            <img alt="" src="/images/makhrajhalq.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>1. Wasthul Halqi (pertengahan tenggorokan), yaitu ha’ ( ح ) dan ‘ain ( ع ).</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>2. Adnal Halqi (ujung tenggorokan), yaitu ghoin ( غ ) dan kho’ ( خ ).</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>3. Asyqal Halqi (pangkal tenggorokan), yaitu hamzah ( ء ) dan ha’ ( هـ ).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>3. Lidah (Al Lisan)</p>
            <img alt="" src="/images/mahkrajlisan.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              1. Pangkal lidah dan langit-langit mulut bagian belakang, yaitu huruf qof ( ق ). Bunyinya keluar dari pangkal lidah dekat dengan kerongkongan yang dihimpitkan ke langit-langit mulut bagian belakang.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              2. Pangkal lidah bagian tengah dan langit-langit mulut bagian tengah, yaitu huruf kaf ( ك ). Bunyinya keluar dari pangkal lidah di depan makhroj huruf qof, yang dihimpitkan ke langit-langit bagian mulut bagian tengah.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              3. Tengah-tengah lidah, yaitu huruf jim ( ج ), syin ( ش ), dan ya’ ( ي ). Bunyinya keluar dari tengah-tengah lidah, serta menepati langit-langit mulut yang tepat di atasnya.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              4. Ujung tepi lidah, yaitu huruf lam ( ل ). Bunyinya keluar dari tepi lidah (sebelah kiri atau kanan) hingga penghabisan ujung lidah, serta menepati dengan langit-langit mulut atas.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              5. Ujung lidah, yaitu huruf nun ( ن ). Bunyinya keluar dari ujung lidah (setelah makhrojnya lam), lebih masuk sedikit ke dasar lidah daripada lam, serta menepati dengan langit-langit mulut atas.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              6. Ujung lidah tepat, yaitu huruf ro’ ( ر ). Bunyinya keluar dari ujung lidah tepat (setelah makhrojnya nun dan lebih masuk ke dasar lidah daripada nun) serta menepati dengan langit-langit mulut atas.{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>7. Kulit gusi atas, yaitu huruf dal ( د ), ta’ ( ت ), dan tho’ ( ط ). Bunyinya keluar dari ujung lidah serta menepati dengan pangkal gigi seri yang atas. </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>8. Runcing lidah, yaitu huruf shod ( ص ), sin ( س ), dan za’ ( ز ). Bunyinya keluar dari ujung lidah serta menepati ujung dua gigi seri yang bawah. </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>9. Gusi, yaitu huruf dho’ ( ظ ), tsa’ ( ث ), dan dzal ( ذ ). Bunyinya keluar dari ujung lidah serta menepati dengan ujung dua gigi seri yang atas.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>4. Dua bibir (Asy Syafataini) </p>
            <img alt="" src="/images/MakhrajSyafatain.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya makhorijul huruf yang dilafalkan lewat bibir atau makhrojnya ada di bibir. Huruf-hurufnya terdiri dari fa (ف ), wawu ( و ), ba' (ب ), dan mim ( م ).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>5. Rongga hidung (Al Khaisyum)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>
              Makhorijul huruf dilafalkan lewat hidung atau makhrojnya ada di hidung. Biasanya hanya digunakan untuk bacaan ghunnah. Huruf-hurufnya terdiri dari nun bertasydid, mim bertasydid ( مّ ), nun sukun ( نْ ) yang dibaca idghom
              bighunnah, iqlab, dan ikhfa haqiqi, serta mim sukun yang bertemu dengan mim atau ba'.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default MakharijilHuruf;
