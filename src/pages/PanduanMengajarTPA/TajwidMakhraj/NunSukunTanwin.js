import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const NunSukunTanwin = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Nun Sukun</h1>
            <p className="text-[25px] font-bold mb-[15px]">Dan Tanwin</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/nunsukuntanwin.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hukum Bacaan Nun Sukun dan Tanwin</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Dikutip dari buku Dasar-Dasar Ilmu Tajwid (2020) oleh Marzuki dan Choirol Ummah, terdapat empat hukum bacaan nun mati/sukun (نْ) dan tanwin ( ـَــًـ , ـِــٍـ , ـُــٌـ ) , yaitu izhar, idgham, iqlab, dan ikhfa.{" "}
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Idzhar Halqi</p>
            <img alt="" src="/images/idzhar.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Apabaila ada nun sukun (mati) atau tanwin bertemu dengan salah satu huruf halqiyah (huruf yang keluar dari tenggorokan) yaitu: ع ,غ ,ح ,خ ,ﮬ ,ء.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara bacanya: jelas tanpa ada dengung.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>contoh bacaan izhar pada potongan QS. Yasin: 9</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>وَمِنْ خَلْفِهِمْ سَدًّ</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membacanya yaitu wa min khalfihim saddan. Karena terdapat nun mati (نْ) bertemu dengan huruf kha (خ), maka nun mati tersebut harus dibaca jelas.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>2. Idgham Bi Ghunnah</p>
            <img alt="" src="/images/idghambigunah.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Yaitu apabila nun sukun atau tanwin bertemu dengan salah satu huruf م , ن ,و , ي di lain kata.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara bacanya dimasukan sambil bedengung selama satu alif atau 2 harokat</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>3. Idgham Bila Ghunnah</p>
            <img alt="" src="/images/idghambilagunah.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Yaitu apabila nun sukun atau tanwin bertemu dengan salah satu huruf ل ,ر .</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara bacanya dimasukan tanpa berdengung.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>4. Iqlab</p>
            <img alt="" src="/images/iqlab.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Yaitu apabila nun sukun atau tanwin bertemu dengan huruf ب cara bacanya nun sukun nya dirubah menjadi mim sukun dan berdengung selama 2 harokat beserta menyamarkan mim tersebut.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>5. Ikhfa haqiqi</p>
            <img alt="" src="/images/ikhfa.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Ikhfa merupakan hukum bacaan yang dibaca samar ketika nun mati atu tanwin bertemu dengan salah satu dari 15 hurufnya yaitu, kaf ( ك ), qaf ( ق ), fa' ( ف ), zha ( ظ ), tha ( ط ), dhad ( ض ), shad ( ص ), syin ( ش ), sin ( س ),
              za' ( ز ), dzal ( ذ ), dal ( د ), jim ( ج ), tsa' ( ث ), dan ta' ( ت ).
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membacanya yaitu dengan menyamarkan nun mati atau tanwin menjadi samar-samar, antara jelas dan dengung sepanjang 2 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>contoh bacaan ikhfa pada potongan QS. An-Nisa: 2</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>إِنَّهُۥ كَانَ حُوبًا كَبِيرًا</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>Cara membacanya yaitu innahụ kāna ḥụbang kabīrā. Karena fathatain (ـًـ) bertemu dengan huruf kaf ( ك ), maka tanwin harus dibaca samar-samar.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default NunSukunTanwin;
