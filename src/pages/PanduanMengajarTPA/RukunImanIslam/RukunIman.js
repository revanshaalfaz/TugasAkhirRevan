import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const RukunIman = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Iman</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/rukuniman.jpg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Rukun Iman</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px", marginBottom: "10px" }}>
              Rasulullah shalallahu ‘alaihi wassallam bersabda dalam sebuah hadist saat menjawab pertanyaan Jibril ‘alaihissalam tentang keimanan. “Keimanan adalah engkau beriman kepada Allah, dan para malaikatNya, dan kitab-kitabNya, dan
              para rasulNya, dan hari akhir, dan engkau beriman pada takdir baik yang baik maupun yang buruk.” (HR Muslim dari sahabat ‘Umar radhiyallahu ‘anhu). Rukun iman ada enam:
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Iman Kepada Allah</p>
            <img alt="" src="/images/imankepadaallah.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Iman kepada Allah meliputi empat hal: wujudiyah, rububiyah, uluhiyah dan asma wa sifat : </p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginLeft: "10px" }}> 1. Mengimani Wujud dan Keberadaan Allah SWT</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>Tentang keberadaan Allah, hal tersebut ditunjukkan dengan banyak dalil, baik secara fitrah, akal, maupun berdasarkan nash (dalil syar’i).</p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginLeft: "10px" }}> 2. Mengimani Rububiyah Allah SWT</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>
              Yaitu meyakini bahwa Allah-lah satu-satunya Tuhan, tidak ada sekutu bagiNya. Makna Tuhan adalah Dzat yang menciptakan, memiliki, mengatur, dan memerintahkan alam semesta.
            </p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginLeft: "10px" }}> 3. Mengimani keuluhiyahan Allah SWT</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>Yaitu menyakini bahwasannya hanya Dia saja satu-satunya sesembahan yang berhak disembah dan tidak ada sekutu baginya</p>
            <p style={{ textAlign: "justify", fontWeight: "bold", marginLeft: "10px" }}> 4. Asma Wa Sifat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>
              Yaitu menetapkan nama atau sifat yang telah Allah tetapkan bagi diriNya dalam kitabNya atau dalam sunnah rasulNya sesuai apa yang disampaikan tanpa melakukan tahrif (menyimpangkan makna), ta’thil (menolak), takyif
              (membagaimanakan), dan tanpa tamtsil (menyerupakan dengan makhluq)
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>2. Iman Kepada Malaikat</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Malaikat adalah makhluq yang telah Allah ciptakan dari cahaya, yang mereka itu ta’at kepada Allah secara sempurna. </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Jumlah mereka tidak terbatas, tidak ada yang bisa menghitungnya kecuali Allah. Dalam sebuah riwayat disebutkan bahwa ketika Nabi dimi’rajkan, diperlihatkan kepadanya Baitul Makmur yang setiap harinya ada 70 ribu malaikat yang
              shalat didalamnya dan saat mereka keluar tidak kembali lagi kedalamnya (HR Bukhari dan Muslim dari sahabat Anas bin Malik radhiyallahu ‘anhu).
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara bacanya dimasukan sambil bedengung selama satu alif atau 2 harokat</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>3. Iman Kepada Kitab-Kitab Allah SWT</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Yaitu mengimani kitab yang telah Allah turunkan kepada para rasulNya, sebagai rahmat dan petunjuk bagi umatnya untuk mencapai kebahagiaan dunia dan akhirat. Iman terhadap kitab ini terdiri dari empat hal:
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>1. Mengimani bahwa kitab-kitab tersebut turunnya benar dari sisi Allah</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>
              2. Mengimani nama-nama yang kita ketahui seperti al-Qur’an yang diturunkan kepada Nabi Muhammad, Taurat diturunkan kepada Nabi Musa, Injil yang diturunkan pada Nabi ‘Isa, dan Zabur yang diturunkan pada Nabi Dawud. Adapun yang
              tidak diketahui namanya kita imani secara global
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>3. Membenarkan khabar yang benar padanya, seperti khabar dalam Al Qur’an dan juga khabar yang belum diubah/disimpangkan dalam kitab-kitab sebelumnya.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "10px" }}>
              4. Mengamalkan hukum yang terdapat didalamnya yang belum di nashakh/dihapus hukumnya serta ridho dan tunduk padanya baik mengetahui hikmahnya atau tidak. Seluruh kitab sebelumnya telah di mansukh oleh Al Qur’an.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>4. Iman Kepada Rasul Allah SWT</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Iman kepada rasul-rasul berarti percaya bahwa Allah mengutus rasul-rasul dari kalangan manusia untuk membawa pesanNya kepada umat manusia, memberi petunjuk tentang cara hidup yang benar sesuai dengan ajaran Allah Swt.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>5. Iman Kepada Hari Kiamat</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Iman kepada hari akhir atau hari kiamat berarti percaya akan adanya hari pembalasan di mana semua manusia akan dibangkitkan kembali untuk dihisab atau diperiksa amal perbuatannya, dan setelah itu akan diberikan balasan surga
              atau neraka sesuai dengan amal perbuatannya.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>6. Iman Kepada Qada dan Qadar</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>
              Iman kepada qada dan qadar berarti percaya bahwa segala sesuatu yang terjadi di alam semesta ini, baik itu kebaikan maupun keburukan yang terjadi atas kehendak Allah Swt. Semua umat Muslim harus selalu berprasangka baik kepada
              Allah Swt.
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default RukunIman;
