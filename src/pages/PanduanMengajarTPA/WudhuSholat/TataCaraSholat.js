import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const TataCaraSholat = () => {
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
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Tata Cara</h1>
            <p className="text-[25px] font-bold mb-[15px]">Sholat</p>
          </div>
        </div>
        <div style={{ maxWidth: "90%", display: "block", margin: "20px" }}>
          <div className="text-center text-black mt-[20px]" style={{ lineHeight: "1.5" }}>
            <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>Tata Cara Sholat</h1>
            <div className="flex justify-center items-center mt-[20px]">
              <img alt="" src="/images/tatacarasholat.jpg" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>
              Salat 5 waktu adalah salat wajib yang termasuk ke dalam rukun Islam. Umat Islam yang telah balig dan berakal wajib melaksanakan salat 5 waktu, baik laki-laki maupun Perempuan.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginTop: "10px" }}>Untuk itu, kita harus memperhatikan rukun serta tata cara pelaksanaannya agar salat kita diterima oleh Allah SWT.</p>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Mengutip dari NU Online, berikut tata cara salat fardu</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>1. Membaca Niat Sholat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>
              Bacaan niat salat harus disesuaikan dengan salat fardu yang kita dirikan. Dilansir detikHikmah, berikut bacaan niat salat 5 waktu dilengkapi dengan tulisan Arab, Latin, dan artinya:
            </p>
            <p style={{ fontWeight: "bold", fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginTop: "5px" }}>1. Niat Sholat Subuh</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>أصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ آدَاءً لِلَّهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ushalli fardhash shubhi rak'ataini mustaqbilal qiblati adaa'an lillaahi Ta'aala</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: "Saya niat salat Subuh 2 rakaat menghadap kiblat karena Allah Ta'ala."</p>
            <p style={{ fontWeight: "bold", fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginTop: "5px" }}>2. Niat Sholat Zuhur</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>أصَلِّي فَرْضَ الظَّهْرِ أَرْبَعَ رَكَعَاتٍ مُستَقبِلَ الْقِبْلَةِ آداء لِلَّهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ushalli fardhadz dzuhri arba'a raka'aatin mustaqbilal qiblati adaa'an lillaahi Ta'aala</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: "Saya niat salat Zuhur 4 rakaat menghadap kiblat karena Allah Ta'ala."</p>
            <p style={{ fontWeight: "bold", fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginTop: "5px" }}>3. Niat Sholat Asar</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>أصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ آدَاءً لِلَّهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ushalli fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa'an lillaahi Ta'ala</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: "Saya niat salat asar 4 rakaat menghadap kiblat karena Allah Ta'ala."</p>
            <p style={{ fontWeight: "bold", fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginTop: "5px" }}>4. Niat Sholat Maghrib</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ آدَاءً لِلَّهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ushalli fardhal magribi tsalaatsa raka'aatin mustaqbilal qiblati adaa'an lillaahi Ta'aala</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: "Saya niat salat magrib 3 rakaat menghadap kiblat karena Allah Ta'ala."</p>
            <p style={{ fontWeight: "bold", fontSize: "16px", textAlign: "justify", marginLeft: "8px", marginTop: "5px" }}>5. Niat Sholat Isya</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ushalli fardhash isyai arbaa raka'aatin mustaqbilal qiblati adaa'an lillaahi Ta'aala</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: "Saya niat salat Isya 4 rakaat menghadap kiblat karena Allah Ta'ala."</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", marginTop: "15px" }}>
              Apabila ingin mengerjakan salat fardu secara berjamaah, maka kata "ada'an " diganti menjadi "ma'muman (apabila menjadi makmum) / imaman (apabila menjadi imam)".
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>2. Takbiratul Ihram</p>
            <div className="flex justify-center items-center ml-[10px]">
              <img alt="" src="/images/takbiratulihram.jpg" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ أَللهُ أَكْبَر</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Allâhu Akbar</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: "Allah Maha Besar"</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>3. Membaca Doa Iftitah</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "8px" }}>Setelah takbiratul ihram membaca doa iftitah berikut ini:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>
              َ اللهُ اَكْبَرُ كَبِرًا وَالْحَمْدُ لِلهِ كَشِيْرًا وَسُبْحَانَ اللهِ بُكْرَةً وَاَصِيْلًا . اِنِّى وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَالسَّمَاوَاتِ وَالْااَرْضَ حَنِيْفًا مُسْلِمًا وَمَا اَنَا مِنَ الْمُشْرِكِيْنَ . اِنَّ
              صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلهِ رَبِّ الْعَا لَمِيْنَ . لاَ شَرِيْكَ لَهُ وَبِذَ لِكَ اُمِرْتُ وَاَنَ مِنَ الْمُسْلِمِيْنَ
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>
              Allaahu akbar Kabiroo Walhamdulillaahi Katsiiraa, Wa Subhaanallaahi Bukratan Wa'ashiilaa, Innii Wajjahtu Wajhiya Lilladzii Fatharas Samaawaati Wal Ardha Haniifan Musliman Wamaa Anaa Minal Musyrikiin. Inna Shalaatii Wa Nusukii
              Wa Mahyaaya Wa Mamaatii Lillaahi Rabbil 'Aalamiina. Laa Syariikalahu Wa Bidzaalika Umirtu Wa Ana Minal Muslimiin
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>
              Artinya: "Allah maha besar, maha sempurna kebesaran-Nya. Segala puji bagi Allah, pujian yang sebanyak-banyaknya. Dan maha suci Allah sepanjang pagi dan petang. Kuhadapkan wajahku kepada zat yang telah menciptakan langit dan
              bumi dengan penuh ketulusan dan kepasrahan dan aku bukanlah termasuk orang-orang yang musyrik. Sesungguhnya salatku, ibadahku, hidupku dan matiku semuanya untuk Allah, penguasa alam semesta. Tidak ada sekutu bagi-Nya dan
              dengan demikianlah aku diperintahkan dan aku termasuk orang-orang yang muslim."
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>4. Membaca Surah Al-Fatihah di Setiap Rakaat</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Membaca surah Al-Fatihah termasuk ke dalam salah satu rukun salat, sehingga wajib dilaksanakan. Berikut bacaannya:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ(1) بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>(2) اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ(3) الرَّحْمٰنِ الرَّحِيْمِۙ</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ(4) مٰلِكِ يَوْمِ الدِّيْنِۗ</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ(5) اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ(6) اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ (7)</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Bismillahirrahmaanirrahiim.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Alhamdu lillahi rabbil 'alamin.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ar Rahmaanirrahiim.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Maaliki yaumiddiin.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Iyyaaka na’budu wa iyyaaka nasta'iin.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Ihdinash-shirraatal mustaqiim.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Shiraathal ladziina an’amta ‘alaihim ghairil maghduubi ‘alaihim waladh-dhaalliin.</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>5. Rukuk dengan Tumakninah</p>
            <div className="flex justify-center items-center ml-[10px]">
              <img alt="" src="/images/rukuk.jpg" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Rukuk yaitu punggung dibungkukkan sambil meletakkan kedua tangan pada lutut dengan tumakninah (berdiam diri sebentar). Berikut bacaan ketika rukuk:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ سُبْحَانَ رَبِّىَ الْعَظِيْمِ وَبِحَمْدِهِ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Subhana rabbiyal 'adhimi wa bihamdihi.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: " Maha Suci Rabbku yang maha Agung dan maha terpuji."</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>6. Iktidal dengan Tumakninah</p>
            <div className="flex justify-center items-center ml-[10px]">
              <img alt="" src="/images/itidal.jpg" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Iktidal dilakukan dengan bangkit dari posisi rukuk lalu berdiri tegak dengan tumakninah. Berikut bacaan saat iktidal:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>سَمِعَ اللهُ لِمَنْ حَمِدَهُ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Sami'allahu liman hamidah.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: " Aku mendengar orang yang memuji-Nya."</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Setelah itu dilanjut dengan bacaan berikut:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Rabbanaaa lakal hamdu mil-ussamaawaati wa mil-ul-ardhi wa mil-u maa syik-ta min syai-im ba'du.</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: " Ya Allah Tuhan Kami, Bagi-Mu lah segala puji, sepenuh langit dan bumi, dan sepenuh barang yang Kau kehendaki sesudah itu."</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>7. Sujud dengan Tumakninah</p>
            <div className="flex justify-center items-center ml-[10px]">
              <img alt="" src="/images/sujud.png" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>
              Sujud adalah posisi membungkuk dengan meletakkan dahi ke lantai dan kedua telapak tangan di antara kepala. Ada yang dinamakan dengan 7 anggota sujud, yaitu muka, kedua telapak tangan, kedua lutut, dan kedua kaki. Kemudian
              sembari membaca bacaan sujud berikut sebanyak tiga kali:
            </p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ سُبْحَانَ رَبِّىَ الأَعْلَى وَبِحَمْدِهِ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Subhana rabbiyal a'laa wa bi hamdih</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya: Mahasuci Rabbku Yang Mahatinggi dan pujian untuk-Nya (HR. Abu Daud).</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>8. Duduk di Antara Dua Sujud</p>
            <div className="flex justify-center items-center ml-[10px]">
              <img alt="" src="/images/dudukdiantaraduasujud.png" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>
              Duduk di antara dua sujud dilakukan dengan duduk bersimpuh. Lalu kedua telapak tangan diletakkan di atas paha dalam posisi telungkup sembari membaca bacaan berikut:
            </p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ بِّ اغْفِرْلِىْ وَارْحَمْنِىْ وَاجْبُرْنِىْ وَارْفَعْنِىْ وَازُقْنِىْ وَاهْدِنِىٌ وَعَا فِنِىْ وَاعْفُ عَنِّىْ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Rabighfirlii, Warhamnii, Wajburnii, Warfa'ni, Warzuqnii, Wahdini, Wa'aafinii, Wa'fuannii</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Artinya," Ya Allah, ampunilah dosaku, rahmatilah aku, perbaikilah aku, berikanlah aku rezeki dan angkatlah derajatku."</p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>9. Tasyahud Awal</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Duduk tasyahud awal dilakukan seperti duduk diantara dua sujud. Kemudian membaca bacaan tasyahud awal berikut:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>
              َ التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلَامُ عَلَيْك أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ, أَشْهَدُ أَنْ لَا إلَهَ
              إلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ, اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ ،
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>
              Attahiyyaatul mubaarakaatush shalawaatuth thoyyibaatulillaah. Assalaamu'alaika ayyuhan nabiyyu warahmatullaahi wabarakaatuh, Assalaamu'alaina wa'alaa ibaadillaahishaalihiin. Asyhaduallaa ilaaha illallaah, wa asyhadu anna
              Muhammad Rasuulullaah. Allahumma shalli 'alaa sayyidinaa muhammad.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>
              Artinya: "Segala kehormatan, dan keberkahan, kebahagiaan dan kebaikan itu punya Allah. Keselamatan atas Nabi Muhammad, juga rahmat dan berkahnya. Keselamatan dicurahkan kepada kami dan atas seluruh hamba Allah yang sholeh. Aku
              bersaksi tidak ada sesembahan yang berhak disembah kecuali Allah. Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah. Ya Allah, limpahkanlah rahmat kepada Nabi Muhammad.
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>10. Tasyahud Akhir</p>
            <div className="flex justify-center items-center ml-[10px]">
              <img alt="" src="/images/tahiyat.png" className="rounded-[20px]" />
            </div>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>bacaan duduk tasyahud akhir sama seperti tasyahud awal, namun ditambah dengan shalawat nabi berikut:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>
              َ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلٰى سَيِّدِ نَا إِبْرَاهِيمَ وَعَلٰى آلِ سَيِّدِ نَا إِبْرَاهِيمَ، وَ بَارِكْ عَلٰى مُحَمَّدٍ وَعَلَى آلِ سَيِّدِ نَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى سَيِّدِ نَا إِبْرَاهِيمَ ،
              وَعَلٰى آلِ سَيِّدِ نَا إِبْرَاهِيمَ، فِى الْعَا لَمِيْنَ إِنَّكَ حَمِيدٌ مَجِيدٌ
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>
              Wa alaa aali sayyidina muhammad. Kamaa shallaita 'alaa sayyidinaa Ibraahim wa'alaa aali sayyidinaa ibraahim wabaarik 'alaa sayyidinaa muhammad wa 'alaa aali sayyidina muhammad. Kamaa baarakta 'alaa sayyidinaa ibraahiim wa
              'alaa aali sayyidina Ibraahiim fil'aalamiina innaka hamiidum majiid.
            </p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>
              Artinya : "Ya Allah. Limpahilah rahmat atas keluarga Nabi Muhammad. Sebagaimana pernah Engkau beri rahmat kepada Nabi Ibrahim dan keluarganya. Dan limpahilah berkah atas Nabi Muhammad beserta para keluarganya. Sebagaimana
              Engkau memberi berkah kepada Nabi Ibrahim dan keluarganya. Diseluruh alam semesta Engkaulah yang terpuji, dan Maha Mulia".
            </p>
            <p style={{ textAlign: "Left", fontWeight: "bold", marginTop: "10px", fontSize: "18px" }}>11. Membaca Salam</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px" }}>Setelah tasyahud akhir, menoleh ke kanan dan ke kiri sembari membaca bacaan salam berikut:</p>
            <p style={{ fontSize: "20px", textAlign: "end", marginLeft: "12px", marginTop: "5px" }}>َ السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", fontStyle: "italic" }}>Assalaamu alaikum wa rahmatullah</p>
            <p style={{ fontSize: "16px", textAlign: "justify", marginLeft: "15px", marginBottom: "100px" }}>Artinya: "Semoga keselamatan dan rahmat Allah dilimpahkan kepadamu.</p>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default TataCaraSholat;
