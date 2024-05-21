import React, { useState, useEffect } from "react";
import BoxPray from "../components/BoxPray";
import { useNavigate } from "react-router-dom";
import ClockComponent from "../components/ClockComponents";
import AuthenticatedUser from "../Layouts/Authenticated";

const PrayPage = () => {
  const [data, setData] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null); // State untuk menyimpan waktu sholat berikutnya
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();
        const formattedMonth = month < 10 ? "0" + month : month;
        const formattedDate = date < 10 ? "0" + date : date;
        const formattedDateString = `${formattedDate}-${formattedMonth}-${year}`;

        const response = await fetch(`https://api.aladhan.com/v1/timings/${formattedDateString}?latitude=-7.81744&longitude=110.37876&method=15`);
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
          const prayerTime = parseInt(timings[prayer].split(":")[0]);
          if (prayerTime > currentHour) {
            nextPrayer = prayer;
            break;
          }
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
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-[32px] font-semibold text-center">Jadwal Sholat</h1>
          <h3 className="text-[17px] mt-[0px] text-center">Daerah Istimewa Yogyakarta</h3>
          <h1 className="text-[20px] mt-[10px] text-center font-medium ">
            <ClockComponent />
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 gap-[20px] mt-[57px] px-[47px] gap-[30px]">
          {/* <div className="flex flex-col items-center my-[46px]">
          <h1 className="text-[25px] text-black font-semibold mb-[5px] mt-[-25px]">Waktu Sholat, {nextPrayer}</h1>
          <p className="text-[35px] text-black font-bold mb-[20px]">{data.data.timings[nextPrayer]} WIB</p>
        </div> */}
          <BoxPray title="Shubuh" hours={data?.data?.timings?.Fajr} />
          <BoxPray title="Dzuhur" hours={data?.data?.timings?.Dhuhr} />
          <BoxPray title="Ashar" hours={data?.data?.timings?.Asr} />
          <BoxPray title="Maghrib" hours={data?.data?.timings?.Maghrib} />
          <BoxPray title="Isya" hours={data?.data?.timings?.Isha} />
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default PrayPage;
