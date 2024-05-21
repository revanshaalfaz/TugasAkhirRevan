import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const MadPanjang = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Hukum Bacaan Mad</h1>
            <p className="text-[25px] font-bold mb-[15px]">(Bacaan Panjang)</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/madpanjang.png" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Hukum Bacaan Mad</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Rois Mahfud dalam buku Pelajaran Ilmu Tajwid mengartikan "mad" secara bahasa, yakni memanjangkan, atau panjang, atau tambah. Sementara menurut istilah, "mad" adalah membaca panjang huruf hijaiyah di dalam Al-Qur'an sebab
              bertemu satu di antara tiga huruf mad, yaitu wawu sukun (وْ), ya' sukun (يْ), dan alif (ا).
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>1. Mad Thabi'i</p>
            <img alt="" src="/images/madthabii.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Mad thabi'i adalah bacaan ayat ketika terdapat harakat fathah diikuti dengan alif, atau harakat kasrah diiringi dengan huruf ya sukun, dan harakat dammah yang diikuti dengan huruf waw sukun.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membaca mad asli atau mad thabi'i adalah dengan panjang 2 harakat. Contoh bacaannya adalah sebagai berikut.</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>كتَا بٌ - يَقُوْلُ - سمِيْعٌ</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Bacaan latinnya: "Kitaabun - Yaquulu - Samii'un"</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>2. Mad Wajib Muttasil</p>
            <img alt="" src="/images/madwajib.png" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Apabila mad asli atau mad thabi'i bertemu dengan huruf hamzah dalam satu kata, kondisi itu dapat dikategorikan sebagai mad wajib muttasil.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membaca mad wajib muttasil adalah dengan dipanjangkan menjadi 4-5 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad wajib muttasil adalah sebagai berikut:</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>سَوَآءٌ - جَآءَ </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>(Bacaan latinnya: Sawaaun - Jaa a)</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>3. Mad Jaiz Munfasil</p>
            <img alt="" src="/images/madjaiz.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Selanjutnya, jika mad asli atau mad thabi'i bertemu dengan hamzah dalam dua kata, hukum tajwidnya dikenal sebagai mad jaiz munfasil.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membaca mad jaiz munfasil adalah dengan dipanjangkan sebanyak 4-5 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad jaiz munfasil adalah sebagai berikut.</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>بِما أُنْزِلَ إِلَيْكَ</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Bacaan latinnya: "Bimaa unzila ilaika"</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>4. Mad Lin atau Mad Layyin</p>
            <img alt="" src="/images/madlin.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Ketika berada di akhir kalimat, ada huruf berharakat fathah dan dammah bertemu dengan huruf ya (ي) atau waw (و) bertanda sukun, kemudian di depannya lagi ada satu huruf lagi yang dimatikan karena waqaf (berhenti), hukum
              tajwidnya dikenal sebagai mad lin atau mad layyin.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Perlu digarisbawahi, mad lin hanya terjadi dalam kondisi waqaf atau berhenti. Cara membaca mad lin adalah dengan dipanjangkan sebanyak 2, 4, atau 6 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Pembaca Al-Quran juga dapat memilih antara 2, 4, atau 6 harakat. Namun, jika sudah memilih salah satu, pilihan itu harus konsisten apabila menemukan bacaan serupa hingga akhir tilawah.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad lin atau mad layyin adalah sebagai berikut:</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>رَيْبٌ (Bacaan latinnya: Roiib) dan خَوْفٌ (Khouuf)</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>5. Mad badal</p>
            <img alt="" src="/images/madbadal.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Mad badal terjadi ketika hamzah (ء) bertemu huruf-huruf mad dalam satu kata. Cara membaca atau hukum bacaan mad badal adalah dengan dipanjangkan sebanyak 2 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad badal adalah sebagai berikut.</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>قَالَ يَا آدَمُ أَنبِئْهُم بِأَسْمَائِهِمْ</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Bacaan latinnya: "Qaala yaa adama anbikhum bi asmaaihim .. "</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>6. Mad Tamkin</p>
            <img alt="" src="/images/madtamkin.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Mad Tamkin adalah mad pada huruf ya (ي) yang bertasydid dan juga berkasrah (ي). Cara membaca mad tamkin adalah dengan panjang 2 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan hukum bacaan mad tamkin adalah sebagai berikut:</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>حُييتم (Bacaan latinnya: Huyayytum) dan النبيين (An-nabiyyiin).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>7. Mad Iwadh</p>
            <img alt="" src="/images/madiwadh.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Ketika akan waqaf atau berhenti pada huruf tanwin fathatain, hukum tajwidnya adalah mad 'iwadh. Sebagai pengecualian, mad 'iwadh tidak terjadi pada huruf ta' marbutah.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membaca atau hukum bacaan mad 'iwadh adalah tanwin (an) dihilangkan dan dibaca seperti fathah biasa (bunyi a) dengan panjang 2 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad 'iwadh adalah sebagai berikut:</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>أجراً عظيماً (Bacaan latinnya: Ajron 'adzhimaa) dan عفواً غفوراً (Afwan ghafuraa).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>8. Mad Aridh Lisukun</p>
            <img alt="" src="/images/madaridlisukun.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Hukum bacaan mad arid lissukun terjadi ketika berhenti di akhir ayat (waqaf) sehingga mematikan huruf terakhir, sedangkan sebelum huruf yang dimatikan terdapat mad asli atau mad thabi'i.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Cara membaca mad arid lissukun adalah dengan panjang 2, 4, atau 6 rakaat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Contoh kata atau kalimat dengan mad arid lissukun adalah sebagai berikut: بَصِيْرٌ (Bacaan latinnya: Basiir), خَالِدُوْنَ (Kholiduun) النَّاسِ (An-naas) سَمِيْعٌ (Samii').
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>9. Mad Farq</p>
            <img alt="" src="/images/madfarq.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hukum bacaan Mad farq berlaku saat ada pertemuan mad badal dan huruf yang bertasydid. Bacaan mad farq dilafalkan dengan panjang 6 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Dinamakan mad farq karena untuk membedakan bahawa hamzah tersebut adalah hamzah (ءَ) untuk bertanya "Apakah?" dalam bahasa Arab. Dengan demikian, nama lain dari mad farq adalah mad istifham atau mad pertanyaan.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>10. Mad Shilah Qasirah</p>
            <img alt="" src="/images/madsilahqosiroh.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Hukum bacaan mad silah qasirah adalah mad yang terjadi apabila “huruf ha dhamir” (kata ganti) berada di antara dua huruf yang berbaris (bukan huruf mati). Cara membaca mad silah qasirah adalah dengan panjang 2 harakat.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad silah qasirah adalah sebagai berikut.</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>اِنَّهُ كَانَ ﻻَشَرِيْك لَهُ</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Bacaan latinnya: "Innahu kaana laa syariika lahh"</p>
            <p style={{ textAlign: "Left", fontWeight: "bold" }}>10. Mad Shilah Thowilah</p>
            <img alt="" src="/images/madsilahthowilah.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hukum bacaan mad silah tawilah terjadi ketika kata ganti "huruf ha damir" bertemu huruf hamzah. Cara membaca mad silah tawilah adalah dengan panjang 4-5 harakat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Contoh kata atau kalimat dengan mad silah tawilah adalah sebagai berikut:</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>وله أجر (Bacaan latinnya: Walahuuu ajrun) dan به أحداً (Bihiii ahadan).</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default MadPanjang;
