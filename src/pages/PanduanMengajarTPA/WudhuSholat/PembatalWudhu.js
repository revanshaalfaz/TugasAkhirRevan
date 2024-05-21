import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const PembatalWudhu = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Hal-Hal</h1>
            <p className="text-[25px] font-bold mb-[15px]">Yang Membatalkan Wudhu</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/pembatalwudhu.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hal-Hal yang Membatalkan Wudhu</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>Kita sebagai muslim harus mengetahui apa saja hal yang membatalkan wudhu, sebab wudhu termasuk bagian dari syarat sah ibadah sholat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hal tersebut terdapat dalam riwayat hadis Rasulullah Saw.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>"Allah tidak menerima salat salah seorang kamu bila berhadas sampai ia berwudhu." (HR Bukhari)</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Selain itu, wudhu juga merupakan bagian dari taharah yang bermakna suci dari hadas dan najis, baik yang bersifat terlihat maupun tidak.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Sesuatu yang keluar dari dua jalan (dubur dan kemaluan)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Hal yang membatalkan wudhu yang pertama adalah segala sesuatu yang keluar dari salah satu kemaluan, seperti kencing, buang air besar, mandi, wadi, mani, maupun kentut.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Namun, terdapat pengecualian mengenai hal ini. Lendir yang keluar dari kemaluan perempuan secara terus menerus saat kelelahan atau hamil, maka hal itu tidak membatalkan wudhunya.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Tidur Lelap</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Banyak fukaha sepakat bahwa tidur dalam posisi yang memudahkan angin keluar menjadi salah satu hal yang membatalkan wudhu.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Adapun tidur yang dapat membatalkan wudhu adalah berbaring dengan posisi miring atau sambil duduk dengan posisi miring pada salah satu pinggang</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Dikisahkan dari Shafwan ibn 'Asal, Rasulullah SAW pernah menyamakan kedudukan tidur dengan kondisi buang air besar dan buang air kecil.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              "Saat sedang bepergian, Rasulullah Saw memerintahkan kami untuk melepaskan khuff (sepatu) kami selama tiga hari tiga malam kecuali karena junub, (dan dibolehkan untuk tetap memakainya) karena buang air besar, buang air kecil,
              dan tidur." (HR Ahmad, An Nasa'i, Tirmidzi, dan Ibnu Majah)
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Abu Malik Kamal ibn Sayyid Salim menafsirkan hadis di atas sebagai tidur yang lelap sampai tidak ada kesadaran dan merasakan apa-apa.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Hilang Kesadaran</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Hal yang dapat membatalkan wudhu berikutnya adalah hilangnya akal, baik karena gila, pingsan, mabuk, atau yang disebabkan oleh obat-obatan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Dikutip dari buku Fikih Sunnah Wanita karya Abu Malik Kamal ibn Sayyid Salim, kondisi ini disebut lebih berat dibandingkan dengan tidur.</p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Bersentuhan dengan lawan jenis yang bukan mahram</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Bersentuhan (kulit) antara pria dan wanita yang bukan mahram tanpa penghalang juga dapat membatalkan wudhu.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Menyentuh kemaluan</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Menyentuh kemaluan, baik itu kemaluan sendiri atau kemaluan orang lain adalah hal yang membatalkan wudhu. Dalam hadis riwayat Ahmad dan Ibnu Hibban, Rasulullah SAW bersabda sebagai berikut.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>"Siapa yang membawa tangannya ke kemaluannya, tanpa ada yang membatasi, maka wajib berwudhu." (HR Abu Daud, An Nasa'i, dan Tirmidzi)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Namun bagi perempuan yang tidak sengaja menyentuh kemaluan dengan penghalang, seperti kain atau sebagainya maka hal itu tidak membatalkan wudhu. Begitu juga bagi perempuan yang menyentuh kemaluan bayinya.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>6. Berdarah</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Dalam Kitab Fiqhul Islam wa Adillatuhu karya Prof Dr Wahbah Az-Zuhaili dijelaskan bahwa sesuatu yang keluar tidak melalui dua kemaluan, seperti darah, nanah, dan nanah yang bercampur dengan darah bisa membatalkan wudhu.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Namun apabila darah yang keluar setetes atau dua tetes maka tidak batal wudhunya sehingga tidak diwajibkan berwudhu lagi.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Hal ini sesuai dalam sebuah hadis, Rasulullah bersabda, "Wudhu hendaklah dilakukan bagi setiap darah yang mengalir."</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>7. Rasa ragu</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Perasaan ragu juga menjadi perkara yang membatalkan wudhu. Ketika seseorang sudah berwudhu tetapi dirinya ragu, maka diharuskan untuk mengulang wudhunya.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginBottom: "100px" }}>
              Menurut Mazhab Maliki, barang siapa yang merasa yakin bahwa dirinya suci kemudian dia ragu tentang terjadinya hadas, maka dia wajib berwudhu. Hal ini juga berlaku ketika dia yakin berhadas dan ragu masih suci.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default PembatalWudhu;
