import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const TataCaraWudhu = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Tata</h1>
            <p className="text-[25px] font-bold mb-[15px]">Cara Wudhu</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/tatacarawudhu.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Tata Cara Wudhu</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Berikut ini adalah tata cara berwudhu. Hendaknya tidak hanya diajari teori tetapi juga diajari praktek wudhu secara langsung. Setiap gerakan wudhu harus dilakukan secara berurutan (tertib) sesuai dengan ajaran Islam. Tidak
              boleh ada langkah yang terlewat atau dibalik urutannya, karena tertib merupakan salah satu syarat sahnya wudhu. Melalui wudhu yang dilakukan dengan benar, seorang Muslim mempersiapkan diri secara fisik dan spiritual untuk
              melaksanakan ibadah, seperti sholat, dengan kondisi suci.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Berniat untuk wudhu</p>
            <img alt="" src="/images/niatwudhu.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Niat letaknya dalam hati jadi tidak perlu dilafadzkan. Membaca bismillaahir-rahmaanir-rahiim dan dilanjutkan dengan membaca niat wudhu: </p>
            <p style={{ fontSize: "20px", textAlign: "end" }}>نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًاِللهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>Nawaitu wudua lirof'il hadatsii ashghori fardhon lillaahi ta'alaa</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya: "Aku niat berwudhu untuk menghilangkan hadas kecil, fardu karena Allah"</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Membasuh Telapak Tangan</p>
            <img alt="" src="/images/basuhtelapaktangan.jpg" className="rounded-[20px] w-10px h-10px" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Setelah niat, mencuci kedua tangan hingga pergelangan tiga kali, dimulai dengan tangan kanan lalu tangan kiri. Tindakan ini memastikan tangan bersih dari kotoran dan najis sebelum melanjutkan ke bagian tubuh lainnya.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>3. Berkumur (Membersihkan Mulut)</p>
            <img alt="" src="/images/berkumurwudhu.jpeg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Mengambil air dengan tangan kanan, memasukkannya ke dalam mulut, berkumur-kumur, dan mengeluarkannya tiga kali. Tindakan ini membersihkan mulut, gigi, dan rongga mulut dari sisa makanan dan kotoran yang mungkin ada.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>4. Membersihkan Lubang Hidung</p>
            <img alt="" src="/images/lobanghidungwudhu.jpg " className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Menghirup air ke dalam lubang hidung dengan tangan kanan, kemudian mengeluarkannya dengan tangan kiri, dilakukan tiga kali. Ini berfungsi untuk membersihkan rongga hidung dari kotoran dan debu yang bisa mengganggu pernapasan.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>5. Membasuh Wajah</p>
            <img alt="" src="/images/wajahwudhu.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Membasuh seluruh wajah mulai dari batas rambut di dahi hingga dagu dan dari telinga ke telinga tiga kali. Ini termasuk area di sekitar mata, hidung, dan mulut, memastikan seluruh wajah terkena air dan bersih.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>6. mencuci Kedua Tangan Hingga Siku</p>
            <img alt="" src="/images/tangansikuwudhu.jpeg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Membasuh tangan kanan mulai dari ujung jari hingga siku tiga kali, kemudian tangan kiri dengan cara yang sama. Gerakan ini memastikan seluruh lengan hingga siku bersih, menghilangkan kotoran yang mungkin menempel.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>7. Menyapu Sebagian Rambut Kepala</p>
            <img alt="" src="/images/rambutkepalawudhu.jpeg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Membasahi kedua tangan, kemudian menyapu bagian depan rambut hingga belakang dan kembali lagi ke depan satu kali. Hal ini melambangkan penyucian kepala dan dilakukan hanya satu kali, cukup untuk membuat rambut basah.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>8. Mengusap Kedua Telinga</p>
            <img alt="" src="/images/usaptelingawudhu.jpeg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Mengusap bagian luar dan dalam telinga dengan air satu kali, menggunakan jari telunjuk untuk mengusap bagian dalam telinga dan ibu jari untuk mengusap bagian luar. Ini memastikan telinga bersih dari kotoran.
            </p>
            <p style={{ fontSize: "18px", textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>9. Mencuci Kedua Kaki</p>
            <img alt="" src="/images/cucikakiwudhu.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Mencuci kaki kanan mulai dari ujung jari hingga mata kaki tiga kali, memastikan air masuk di sela-sela jari kaki. Lakukan hal yang sama pada kaki kiri. Tindakan ini menghilangkan kotoran dari kaki dan memastikan kebersihan
              hingga mata kaki.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>10. Doa Setelah Wudhu</p>
            <img alt="" src="/images/doasetelahwudhu.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Untuk menyempurnakan wudhu, wajib diakhiri dengan membaca doa setelah wudhu sambil menghadap kiblat dan mengangkat kedua belah tangan.</p>
            <p style={{ fontSize: "20px", textAlign: "end" }}>
              أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِى مِنَ التَّوَّابِينَ وَاجْعَلْنِى مِنَ الْمُتَطَهِّرِينَ
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>
              Asyhadu allaa ilaaha illallah wahdahu laa syariika lahu. Wa asyhadu anna Muhammadan Abduhu wa rasuluhu. Allahumma-j alnii minat tabinna waj alnii minal mutathohiirina waj alni min ibadati shalihin.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>
              Artinya: "Aku bersaksi tiada Tuhan melainkan Allah dan tidak ada yang menyekutukan bagi-Nya. Dan aku bersaksi bahwa Nabi Muhammad adalah hambaNya dan Utusan-Nya. Ya Allah jadikanlah aku orang yang ahli taubat, dan jadikanlah
              aku orang yang suci dan jadikanlah aku dari golongan orang-orang yang saleh."
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default TataCaraWudhu;
