import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const RukunSholat = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Rukun</h1>
            <p className="text-[25px] font-bold mb-[15px]">Sholat</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <div className="flex justify-center items-center mt-[20px]">
              <img alt="" src="/images/rukunsholat.jpg" className="rounded-[20px]" />
            </div>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginTop: "20px" }}>Rukun Sholat</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Rukun sholat merujuk pada hal-hal mendasar yang harus dilakukan dalam sholat. Rukun ini seperti fondasi dari sholat yang tidak boleh diabaikan. Dalam kitab Al-Fithrah karya Mustafa Al-Khin dan Musthafa Al-Bugha, dijelaskan
              bahwa rukun sholat adalah bagian penting dari sholat, seperti tembok dalam bangunan. Tanpa menyempurnakan semua bagian ini sesuai dengan bentuk dan urutan yang diajarkan oleh Nabi Muhammad SAW, sholat tidak akan sah.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Makna dari rukun adalah bagian dasar dari sesuatu, seperti tembok dalam bangunan. Maka, dalam konteks sholat, rukun-rukun ini mencakup semua gerakan dan bacaan yang harus dilakukan, seperti rukuk dan sujud. Sholat tidak
              dianggap sah kecuali semua rukun ini dilaksanakan dengan benar dan dalam urutan yang diajarkan oleh Nabi Muhammad SAW.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Menurut Imam Abu Suja dalam kitab Matan Al-Ghayah wa Taqrib, terdapat 18 rukun dalam sholat. Rukun-rukun ini mencakup niat, berdiri bagi yang mampu, takbiratul ihram, membaca surat Al-Fatihah, rukuk, tumakninah, bangun dari
              rukuk dan iktidal, sujud, duduk di antara dua sujud, duduk untuk tasyahhud akhir, membaca tasyahhud akhir, membaca sholawat kepada Nabi, salam pertama, niat keluar dari sholat, dan tertib.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Niat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Niat merupakan komitmen hati untuk melaksanakan sholat tertentu. Setiap sholat memiliki niat yang spesifik, baik itu sholat wajib lima waktu atau sholat sunnah. Niat harus dilakukan sebelum memulai sholat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Berdiri Bagi yang Mampu</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Sholat harus dilakukan dengan berdiri bagi mereka yang mampu. Jika tidak mampu berdiri, boleh dilakukan dengan duduk, dan jika tidak mampu duduk, boleh dilakukan sambil berbaring.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Takbiratul Ihram</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Takbiratul ihram adalah ucapan "Allahu Akbar" yang menandai dimulainya sholat. Setelah mengucapkan takbir ini, seseorang telah memulai sholat dan tidak boleh melakukan hal-hal yang membatalkan sholat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Membaca surat Al-Fatihah</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Membaca surat Al-Fatihah adalah rukun wajib dalam setiap rakaat sholat. Jika seseorang tidak bisa membacanya, boleh menggantinya dengan surat lain atau zikir sesuai kemampuannya.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Rukuk</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Rukuk adalah gerakan membungkuk dengan tangan ditempatkan di lutut. Rukuk harus dilakukan dengan tumakninah, artinya dilakukan dengan tenang dan tidak tergesa-gesa.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>6. Tumakninah dalam rukuk</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Tumakninah adalah keadaan tenang dalam setiap gerakan sholat. Persendian harus berada dalam keadaan tenang selama rukuk.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>7. Bangun dari rukuk dan iktidal</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Setelah rukuk, seseorang harus bangun dan berdiri tegak (iktidal) sebelum melanjutkan ke gerakan berikutnya. Ini juga harus dilakukan dengan tumakninah.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>8. Tumakninah dalam iktidal</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Tumakninah juga harus dilakukan saat iktidal, yaitu setelah bangun dari rukuk dan sebelum sujud.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>9. Sujud</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Sujud adalah gerakan membungkuk hingga tujuh anggota badan menyentuh lantai: kedua tangan, kedua lutut, ujung jari kaki, dahi, dan hidung.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>10. Tumakninah dalam sujud </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Setelah sujud, kembali ke keadaan tenang dan tumakninah sebelum melanjutkan gerakan berikutnya.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>11. Duduk di antara dua sujud</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Setelah sujud pertama, seseorang harus duduk dengan tenang sebelum melakukan sujud kedua.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>12. Tumakninah dalam duduk di antara dua sujud</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Tumakninah juga harus dilakukan dalam posisi duduk di antara dua sujud.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>13. Duduk untuk tasyahhud akhir</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Kemudian, lanjutkan dengan duduk untuk mengucap tasyahhud akhir.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>14. Membaca tasyahhud akhir</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Tasyahhud akhir berisi ucapan penghormatan kepada Allah dan pujian kepada nabi.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>15. Membaca salawat kepada Nabi</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Usai membaca tasyahhud akhir, lanjutkan dengan membaca sholawat kepada Nabi Muhammad SAW.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>16. Salam Pertama</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}> Salam 'Assalamu'alaikum wa rohmatullah wa barokatuh' diucapkan sambil menghadap ke kanan dan ke kiri secara bergantian.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>17. Niat keluar dari salat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Ucapkan niat keluar dari sholat setelah salam pertama.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>18. Tertib</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginBottom: "100px" }}>Tertib adalah sikap menunaikan sholat sesuai urutan rukunnya.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default RukunSholat;
