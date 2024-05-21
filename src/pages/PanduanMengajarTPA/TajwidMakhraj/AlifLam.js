import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const AlifLam = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Alif Lam</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/aliflam.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hukum Bacaan Alif Lam</h1>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Alif Lam Syamsiah</p>
            <img alt="" src="/images/alsyamsiah.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Alif lam syamsiah adalah alif lam yang dirangkai dengan kata benda (isim) dan diawali dengan salah satu dari huruf-huruf syamsiah. Dengan kata lain, hukum bacaan ini terjadi bila alif lam bertemu dengan salah satu huruf
              syamsiah.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Menurut buku yang bertajuk Ilmu Tajwid Lengkap karya Samsul Amin, huruf-huruf syamsiah berjumlah 14 huruf. Huruf yang dimaksud yakni tha (ط), tsa (ث), shad (ص), ra (ر), ta (ت), ta (ت), dha (ض), dzal (ذ), nun (ن), dal (د), zai
              (ز), sin (س), zha (ظ), syin (ش), dan lam (ل).
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Hukum bacaan ini juga biasa disebut dengan idgham syamsiah sebab memiliki kemiripan dalam cara membacanya. Hukum alif lam syamsiah membuat hurufnya menjadi lebur dengan huruf syamsiah yang mengikutinya. Atau seolah-olah
              membuang lam sukun dan mentasydidkan huruf-huruf syamsiah.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>alif lam syamsiah biasanya ditandai dengan harakat tasydid ( ّ- )</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>2. Alif Lam Qomariah</p>
            <img alt="" src="/images/alqomariah.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              alif lam qomariah adalah hukum bacaan tajwid yang terjadi bila alif lam sukun (ال) bertemu dengan salah satu huruf qamariah. Bacaannya ditandai dengan huruf alif lam pada suatu ayat memiliki harakat sukun atau mati.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Huruf-huruf qamariah terdiri dari 14 yakni, ا (alif), ب (ba), ج (jim), ح (ha), خ (kha), ع ('ain,) غ (ghain), ف (fa), ق (qaf), ك (kaf), م (mim), و (wawu), ه (ha), dan ي (ya).
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>alif lam qomariah biasanya ditandai dengan harakat sukun ( ْ- )</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default AlifLam;
