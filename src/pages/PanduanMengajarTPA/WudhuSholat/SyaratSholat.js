import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const SyaratSholat = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Syarat-Syarat</h1>
            <p className="text-[25px] font-bold mb-[15px]">Sholat</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Syarat Wajib Sholat</h1>
            <div className="flex justify-center items-center mt-[20px]">
              <img alt="" src="/images/syaratwajibsholat.jpg" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>Menurut Kitab Fathul Qarib, syarat wajib sholat terdiri atas tiga hal berikut.</p>
            <p style={{ fontSize: "20px", textAlign: "end" }}>فصل - وشرائط وجوب الصلاة ثلاثة أشياء الإسلام والبلوغ والعقل وهو حد التكليف</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya: Pasal syarat wajib sholat ada tiga: Islam, baligh, dan berakal. Demikian ini adalah batasan taklif (ketertuntutan syariat).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Islam</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Sholat merupakan ibadah yang wajib bagi orang yang beragama Islam. Oleh karena itu, sholat merupakan rukun Islam kedua setelah mengucapkan syahadat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Orang yang bukan muslim tidak diwajibkan mengerjakan sholat. Begitu pula bagi mereka yang murtad atau keluar dari Islam.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Baligh</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Baligh berarti telah mencapai usia dewasa. Anak-anak yang belum baligh tidak diwajibkan menunaikan sholat karena mereka masih dalam tahap belajar.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Namun, orang yang sudah baligh wajib menunaikan sholat sesuai dengan rukun dan syaratnya.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Berakal</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Berakal artinya mampu memahami tata cara sholat. Oleh karena itu, anak kecil yang belum mengerti tidak diwajibkan sholat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Begitu juga, sholat tidak wajib bagi mereka yang kehilangan akal atau mengalami gangguan jiwa karena tidak berakal.</p>
            <h1 style={{ fontSize: "23px", fontWeight: "bold", marginTop: "50px" }}>Syarat Sah Sholat</h1>
            <div className="flex justify-center items-center mt-[20px]">
              <img alt="" src="/images/syaratsahsholat.jpg" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>Sholat bukan hanya melakukan gerakan dan melafalkan bacaan tanpa memenuhi syarat-syarat yang ditentukan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Ada lima syarat sah yang harus dipenuhi sebelum melaksanakan sholat. Syarat sah sholat adalah hal-hal yang menentukan sah atau tidaknya sholat. Jika syarat ini tidak dipenuhi, maka sholat menjadi tidak sah.
            </p>
            <p style={{ fontSize: "20px", textAlign: "end" }}>فصل - وشرائط الصلاة قبل الدخول فيها خمسة أشياء طهارة الأعضاء من الحدث والنجس وسترالعورة بلباس طاهر والوقوف على مكان طاهر والعلم بدخول الوقت واستقبال القبلة</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Artinya: Syarat sah sholat sebelum masuk ke dalam sholat ada lima: sucinya badan dari hadas dan najis, menutup aurat dengan pakaian yang suci, berada di tempat yang suci, mengetahui waktu sholat telah tiba, dan menghadap
              kiblat.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Suci badan dari hadas dan najis</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Orang yang akan sholat harus suci dari hadas dan najis. Dalam Islam, ada dua jenis hadas: kecil dan besar. Hadas kecil termasuk urine dan kotoran yang tersisa di dubur, serta hilangnya kesadaran seperti pingsan atau mabuk.
              Hadas besar mencakup keluarnya air mani setelah berhubungan intim, serta darah haid atau nifas. Untuk memastikan diri suci dari hadas besar, seseorang harus mandi wajib.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Menutup aurat dengan pakaian yang suci</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Ketika sholat, seorang muslim harus menutup aurat dengan pakaian yang bersih. Aurat perempuan adalah seluruh tubuh kecuali wajah dan telapak tangan. Aurat laki-laki adalah bagian tubuh antara pusar dan lutut.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Berada di tempat yang suci</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Seorang muslim harus berada di tempat yang suci saat menunaikan sholat. Tempat sholat tidak boleh kotor atau penuh dengan kemaksiatan.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Telah masuk waktu sholat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Sholat lima waktu memiliki jadwal khusus yang telah ditetapkan. Sholat tidak sah jika dilakukan sebelum waktunya. Waktu sholat ditandai dengan kumandang azan yang sesuai dengan jadwal sholat. Dalam Al-Quran, QS An Nisa: 103,
              Allah berfirman, "Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman."
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Menghadap kiblat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginBottom: "100px" }}>
              Sholat harus dilakukan dengan menghadap ke arah kiblat, yaitu Ka'bah di Makkah. Ini diperintahkan dalam Al-Quran untuk memastikan bahwa muslim fokus pada satu arah selama sholat, baik secara fisik maupun spiritual, hanya
              kepada Allah SWT. Kiblat menjadi simbol persatuan dan arah ibadah yang diperintahkan oleh Allah.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default SyaratSholat;
