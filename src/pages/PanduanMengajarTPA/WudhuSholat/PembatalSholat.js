import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const PembatalSholat = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Yang Membatalkan Sholat</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/membatalkansholat.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hal-Hal yang Membatalkan Sholat</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Dalam melakukan Shalat Wajib maupun Shalat Sunnah, sejatinya harus mengikuti tata tertib yang telah ditetapkan, jika menjalaninya. Termasuk juga untuk menghindari semua kesalahan yang dapat membatalkan shalat.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hal tersebut terdapat dalam riwayat hadis Rasulullah Saw.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hal tersebut sangat penting, agar shalat yang telah dilakukan menjadi sah, sehingga tidak perlu membatalkan shalat, saat kesalahan terjadi. </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Hadas Kecil dan Hadas Besar:</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Hadas kecil adalah kondisi tidak suci yang memerlukan wudhu, seperti buang angin atau buang air kecil. Hadas besar adalah kondisi yang memerlukan mandi wajib, seperti setelah hubungan suami istri atau haid. Kedua kondisi ini
              harus dihindari selama shalat karena dapat membatalkan shalat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Tersentuh Najis</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Najis adalah kotoran yang dianggap tidak suci dalam Islam, seperti kotoran binatang atau darah. Jika seseorang tersentuh najis saat shalat, meskipun tidak sengaja, maka shalat tersebut batal.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Aurat Terbuka</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Aurat adalah bagian tubuh yang harus ditutup menurut syariat Islam. Jika aurat terbuka saat shalat dan tidak segera ditutup, maka shalat tersebut batal.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Berbicara</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Mengucapkan kata-kata selain bacaan shalat, baik sengaja maupun tidak sengaja, dapat membatalkan shalat. Berbicara mengganggu kekhusyukan dan konsentrasi dalam ibadah.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Makan dan Minum dengan Sengaja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Makan atau minum, meskipun sedikit, secara sengaja selama shalat akan membatalkan shalat. Hal ini mengganggu kekhusyukan dan konsentrasi.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>6. Makan dalam Jumlah Banyak, Meskipun Tidak Sengaja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Mengonsumsi makanan dalam jumlah banyak, meskipun tidak disengaja, juga membatalkan shalat karena mengganggu kekhusyukan.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>7. Bergerak Tiga Kali Berturut-turut Tanpa Sengaja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Melakukan gerakan yang tidak diperlukan dalam shalat sebanyak tiga kali berturut-turut, meskipun tidak sengaja, dapat membatalkan shalat.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>8. Melakukan Gerakan Besar</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Gerakan besar seperti memukul, melompat, atau berlari tidak sesuai dengan ketenangan yang dibutuhkan dalam shalat dan karenanya membatalkan shalat.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>9. Terlambat atau Mendahului Gerakan Imam</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Mengikuti imam dalam shalat berjamaah harus tepat. Jika makmum terlambat atau mendahului imam dalam dua rukun berturut-turut tanpa alasan yang sah, maka shalatnya batal.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>10. Tidak Mengarah ke Kiblat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Menghadap kiblat adalah syarat sahnya shalat. Jika seseorang tidak menghadap kiblat selama shalat, maka shalatnya batal.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>11. Tertawa Keras, Berdahak, atau Batuk Ringan secara Sengaja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Tertawa keras, berdahak, atau batuk ringan dengan sengaja dan tanpa alasan yang sah mengganggu kekhusyukan dan karenanya membatalkan shalat. Namun, senyum kecil tidak membatalkan shalat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>12. Merubah Niat Saat Shalat Berjalan</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Jika seseorang berniat untuk melakukan sesuatu yang mengganggu shalat, seperti mengangkat pakaian saat hujan, maka shalatnya batal.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>13. Keragu-raguan dalam Niat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Jika seseorang merasa ragu-ragu dan berpikir untuk membatalkan shalat karena ada hal lain yang ingin dilakukan, maka shalatnya batal.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>14. Niat Membatalkan Shalat dengan Syarat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Jika seseorang berniat untuk membatalkan shalat dengan syarat tertentu, misalnya jika ada tamu datang, maka shalatnya batal.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>15. Tidak Melakukan Tahiyat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Tahiyat adalah salah satu rukun shalat yang harus dilakukan. Menghilangkan tahiyat atau menguranginya dengan sengaja membatalkan shalat.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>16. Menambah Rukun dengan Sengaja</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginBottom: "100px" }}>
              Menambah gerakan atau bacaan yang bukan bagian dari rukun shalat, selain Al-Fatihah dan Tahiyat, dengan sengaja akan membatalkan shalat karena mengubah tata cara shalat yang benar.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default PembatalSholat;
