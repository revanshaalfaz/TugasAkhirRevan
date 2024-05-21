import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const RukunIslam = () => {
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
            <p className="text-[25px] font-bold mb-[15px]">Islam</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="flex justify-center items-center mt-[20px]">
            <img alt="" src="/images/rukunislam.jpeg" className="rounded-[20px]" />
          </div>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Rukun Islam</h1>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Rukun Islam ada lima, yaitu syahadat, sholat, zakat, puasa, dan naik haji. Kelima perkara tersebut menjadi pembeda seorang muslim dengan umat agama lainnya.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>1. Mengucapkan Syahadat</p>
            <img alt="" src="/images/syahadat.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Syahadat adalah pengucapan dua kalimat syahadat, yang merupakan pengakuan dan keyakinan bahwa tidak ada Tuhan selain Allah dan Muhammad sebagai utusan Allah Swt.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Ini adalah langkah pertama dan paling fundamental menjadi seorang yang beragama Islam.</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهِ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>Asyhadu an laa ilaaha illallaahu, wa asyhaduanna muhammadar rasuulullah.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya: "Aku bersaksi bahwa tidak ada Tuhan melainkan Allah. Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah."</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>2. Mendirikan Sholat</p>
            <img alt="" src="/images/sholat.jpeg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Sholat lima waktu sehari semalam adalah kegiatan fisik dan spiritual yang dilakukan oleh muslim untuk berkomunikasi dengan Allah. Setelah masuk Islam dengan mengucapkan syahadat, wajib untuk seseorang menjalankan sholat lima
              waktu.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Sholat lima waktu yang wajib dilakukan oleh semua umat Islam adalah:</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>1. Sholat Subuh (2 rakaat)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>2. Sholat Zuhur (4 rakaat)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>3. Sholat Asar (4 rakaat)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>4. Sholat Magrib (3 rakaat)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>5. Sholat Isya (4 rakaat)</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Dalil tentang kewajiban sholat dijelaskan pada surat An-Nisa ayat 103, yang berbunyi:</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>
              فَاِذَا قَضَيْتُمُ الصَّلٰوةَ فَاذْكُرُوا اللّٰهَ قِيَامًا وَّقُعُوْدًا وَّعَلٰى جُنُوْبِكُمْۚ فَاِذَا اطْمَأْنَنْتُمْ فَاَقِيْمُوا الصَّلٰوةَۚ اِنَّ الصَّلٰوةَ كَانَتْ عَلَى الْمُؤْمِنِيْنَ كِتٰبًا مَّوْقُوْتًا ۝١٠٣
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>
              Fa idzâ qadlaitumush-shalâta fadzkurullâha qiyâmaw wa qu'ûdaw wa 'alâ junûbikum, fa idzathma'nantum fa aqîmush-shalâh, innash-shalâta kânat 'alal-mu'minîna kitâbam mauqûtâ.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Artinya: "Apabila kamu telah menyelesaikan sholat, berzikirlah kepada Allah (mengingat dan menyebut-Nya), baik ketika kamu berdiri, duduk, maupun berbaring. Apabila kamu telah merasa aman, laksanakanlah sholat itu (dengan
              sempurna). Sesungguhnya sholat itu merupakan kewajiban yang waktunya telah ditentukan atas orang-orang mukmin."
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>3. Menunaikan Zakat</p>
            <img alt="" src="/images/zakat.jpg" className="rounded-[20px]" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Zakat adalah pemberian wajib tahunan kepada yang membutuhkan yang berfungsi untuk membersihkan harta dan jiwa. Zakat dilakukan oleh semua orang Muslim kecuali yang tidak mampu.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Zakat juga menjadi salah satu cara untuk mendistribusikan kekayaan dalam masyarakat sehingga dapat mengurangi ketimpangan sosial. Zakat ada dua macam yaitu:</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>1. Zakat fitrah, yang ditunaikan pada saat bulan Ramadhan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>2. Zakat mal, yang dikeluarkan berdasarkan hasil usaha atau penghasilan yang didapat.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Dalil tentang zakat dijelaskan pada surat At-Taubah ayat 60, yang berbunyi:</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>
              ۞ اِنَّمَا الصَّدَقٰتُ لِلْفُقَرَاۤءِ وَالْمَسٰكِيْنِ وَالْعٰمِلِيْنَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوْبُهُمْ وَفِى الرِّقَابِ وَالْغٰرِمِيْنَ وَفِيْ سَبِيْلِ اللّٰهِ وَابْنِ السَّبِيْلِۗ فَرِيْضَةً مِّنَ اللّٰهِۗ وَاللّٰهُ
              عَلِيْمٌ حَكِيْمٌ
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>
              Innamash-shadaqâtu lil-fuqarâ'i wal-masâkîni wal-'âmilîna 'alaihâ wal-mu'allafati qulûbuhum wa fir-riqâbi wal-ghârimîna wa fî sabîlillâhi wabnis-sabîl, farîdlatam minallâh, wallâhu 'alîmun ḫakîm.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Artinya: "Sesungguhnya zakat itu hanyalah untuk orang-orang fakir, orang-orang miskin, para amil zakat, orang-orang yang dilunakkan hatinya (mualaf), untuk (memerdekakan) para hamba sahaya, untuk (membebaskan) orang-orang yang
              berhutang, untuk jalan Allah dan untuk orang-orang yang sedang dalam perjalanan (yang memerlukan pertolongan), sebagai kewajiban dari Allah. Allah Maha Mengetahui lagi Mahabijaksana."
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>4. Berpuasa di Bulan Ramadhan</p>
            <img alt="" src="/images/puasa.jpg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Puasa Ramadhan adalah menahan diri dari makan, minum, dan kebutuhan fisik lainnya dari fajar hingga matahari terbenam selama bulan Ramadhan.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>
              Puasa merupakan cara untuk mengasah kesabaran, meningkatkan ketakwaan dan patuh akan perintah dari Allah Swt. Selain itu, banyak pakar kesehatan yang mengungkapkan manfaat puasa bagi kesehatan tubuh.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Dalil tentang puasa terdapat pada surat Al-Baqarah ayat 183, yang berbunyi:</p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>Yâ ayyuhalladzîna âmanû kutiba 'alaikumush-shiyâmu kamâ kutiba 'alalladzîna ming qablikum la'allakum tattaqûn.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Artinya: "Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa."</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px" }}>5. Melaksanakan haji ke Baitullah bagi yang mampu</p>
            <img alt="" src="/images/haji.jpeg" />
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Haji adalah ibadah yang dilakukan dengan melakukan serangkaian tata cara tertentu di Makkah pada bulan Dzulhijjah.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Haji wajib dilakukan setidaknya sekali seumur hidup oleh setiap Muslim yang mampu secara fisik dan finansial.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Dalil mengenai ibadah haji dijelaskan pada surat Ali-Imran ayat 97, yang berbunyi: </p>
            <p style={{ fontSize: "16px", textAlign: "end" }}>
              فِيْهِ اٰيٰتٌۢ بَيِّنٰتٌ مَّقَامُ اِبْرٰهِيْمَ ەۚ وَمَنْ دَخَلَهٗ كَانَ اٰمِنًاۗ وَلِلّٰهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ اِلَيْهِ سَبِيْلًاۗ وَمَنْ كَفَرَ فَاِنَّ اللّٰهَ غَنِيٌّ عَنِ الْعٰلَمِيْنَ ۝٩٧{" "}
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", fontStyle: "italic" }}>
              Fîhi âyâtum bayyinâtum maqâmu ibrâhîm, wa man dakhalahû kâna âminâ, wa lillâhi 'alan-nâsi ḫijjul-baiti manistathâ'a ilaihi sabîlâ, wa mang kafara fa innallâha ghaniyyun 'anil-'âlamîn.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "100px" }}>
              Artinya: "Di dalamnya terdapat tanda-tanda yang jelas, (di antaranya) Maqam Ibrahim. Siapa yang memasukinya (Baitullah), maka amanlah dia. (Di antara) kewajiban manusia terhadap Allah adalah melaksanakan ibadah haji ke
              Baitullah, (yaitu bagi) orang yang mampu mengadakan perjalanan ke sana. Siapa yang mengingkari (kewajiban haji), maka sesungguhnya Allah Maha Kaya (tidak memerlukan sesuatu pun) dari seluruh alam."
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default RukunIslam;
