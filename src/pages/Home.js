import React, { useState, useEffect } from "react";
import ClockComponent from "../components/ClockComponents";
import Button from "../components/Button";
import PraySchedule from "../components/PraySchedule";
import AuthenticatedUser from "../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";
import CatatanKeuangan from "../components/CatatanKeuangan";
import SaldoKotakInfak from "../components/SaldoKotakInfak";
import MonitoringKotakInfak from "../components/MonitoringKotakInfak";
import PanduanMengajarTPA from "../components/PanduanMengajarTPA";

const Home = () => {
  const [data, setData] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null); // State untuk menyimpan waktu sholat berikutnya
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        let date = currentDate.getDate();
        let formattedMonth = month < 10 ? "0" + month : month;
        const formattedDate = date < 10 ? "0" + date : date;
        let formattedDateString = `${formattedDate}-${formattedMonth}-${year}`;

        const response = await fetch(`https://api.aladhan.com/v1/timings/${formattedDateString}?latitude=-7.797068&longitude=110.370529&method=15`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        setData(json);

        // Mencari waktu sholat berikutnya
        const currentHour = currentDate.getHours();
        const timings = json.data.timings;
        let nextPrayer = null;
        for (const prayer in timings) {
          // Jika prayer bukan Firstthird, Lastthird, Sunrise, atau Sunset
          if (!["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(prayer)) {
            continue;
          }
          const prayerTime = parseInt(timings[prayer].split(":")[0]);
          if (prayerTime > currentHour) {
            nextPrayer = prayer;
            break;
          }
        }

        if (!nextPrayer) {
          // Jika sudah Isya, ubah tanggal ke esok hari
          date++;
          if (date > new Date(year, month, 0).getDate()) {
            // Jika sudah di tanggal terakhir bulan, lanjut ke bulan berikutnya
            month++;
            if (month > 12) {
              year++;
              month = 1;
            }
            date = 1;
          }
          formattedMonth = month < 10 ? "0" + month : month;
          formattedDateString = `${formattedDate}-${formattedMonth}-${year}`;

          // Fetch data untuk tanggal berikutnya
          const nextDayResponse = await fetch(`https://api.aladhan.com/v1/timings/${formattedDateString}?latitude=-7.797068&longitude=110.370529&method=15`);
          if (!nextDayResponse.ok) {
            throw new Error("Failed to fetch data for next day");
          }
          // Gunakan only prayer times yang valid
          const nextDayJson = await nextDayResponse.json();
          const nextDayTimings = nextDayJson.data.timings;
          nextPrayer = Object.keys(nextDayTimings).find((prayer) => ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(prayer));
          json.data.timings = nextDayTimings;
        }

        setNextPrayer(nextPrayer);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Memperbarui waktu sholat setiap menit
    const interval = setInterval(fetchData, 60000); // Menjalankan fetchData setiap menit

    return () => clearInterval(interval); // Membersihkan interval saat komponen dibongkar
  }, []);

  // Handle jika data belum tersedia
  if (!data) {
    return <div>Loading...</div>;
  }

  // Handle jika waktu sholat berikutnya tidak ditemukan
  if (!nextPrayer) {
    return <div>Next prayer not found</div>;
  }
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5]">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-between">
            <div></div>
            {/* <i className="bx bx-menu-alt-left text-[30px]"></i> */}
            <NavLink to="/notification">
              <i className="bx bx-bell text-[30px] "></i>
            </NavLink>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] text-white font-semibold mb-[5px] mt-[-25px]">Waktu Sholat, {nextPrayer}</h1>
            <p className="text-[35px] text-white font-bold mb-[20px]">{data.data.timings[nextPrayer]} WIB</p>
          </div>
        </div>
        <div className="px-[15px] mt-[36px]">
          <SaldoKotakInfak />
        </div>
        <div className="flex px-[15px] mt-[36px]">
          {/* Monitoring Kotak Infak */}
          <div className="flex-1 mr-[10px]">
            <MonitoringKotakInfak />
          </div>

          {/* Saldo Kotak Infak */}
          <div className="flex-1 ml-[10px]">
            <CatatanKeuangan />
          </div>
        </div>
        <div className="flex px-[15px] mt-[36px]">
          {/* Catatan Keuangan */}
          <div className="flex-1 mr-[10px]">
            <PraySchedule />
          </div>

          {/* Panduan Mengajar TPA */}
          <div className="flex-1 ml-[10px]">
            <PanduanMengajarTPA />
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default Home;
