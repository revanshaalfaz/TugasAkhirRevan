import React, { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import ScreenTransition from "./components/ScreenTransition";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import BerandaLaporanKeuangan from "../src/pages/LaporanKeuangan/BerandaLaporanKeuangan";
import Profile from "./pages/Profile";
import Notifcations from "./pages/Notifcations";
import PrayPage from "./pages/PrayPage";
import SplashScreen from "./pages/SplashScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth, database } from "./Database/Fire";
import { onAuthStateChanged } from "firebase/auth";
import Register from "./pages/Auth/Register";
import { onValue, ref } from "firebase/database";
import AdminPage from "./pages/Admin/AdminPage";
import KelolaKeuangan from "./pages/KelolaKeuangan";
import FormPemasukan from "./pages/FormPemasukan";
import FormPengeluaran from "./pages/FormPengeluaran";
import BerandaPanduanMengajar from "./pages/PanduanMengajarTPA/BerandaPanduanMengajar";
import BerandaHafalanSuratPendek from "./pages/PanduanMengajarTPA/HafalanSuratPendek/BerandaHafalanSuratPendek";
import BerandaKisahNabi from "./pages/PanduanMengajarTPA/KisahNabi/BerandaKisahNabi";
import BerandaTajwidMakhraj from "./pages/PanduanMengajarTPA/TajwidMakhraj/BerandaTajwidMakhraj";
import MakharijilHuruf from "./pages/PanduanMengajarTPA/TajwidMakhraj/MakharijilHuruf";
import NunSukunTanwin from "./pages/PanduanMengajarTPA/TajwidMakhraj/NunSukunTanwin";
import MimSukunTanwin from "./pages/PanduanMengajarTPA/TajwidMakhraj/MimSukunTanwin";
import AlifLam from "./pages/PanduanMengajarTPA/TajwidMakhraj/AlifLam";
import MadPanjang from "./pages/PanduanMengajarTPA/TajwidMakhraj/MadPanjang";
import Qalqalah from "./pages/PanduanMengajarTPA/TajwidMakhraj/Qalqalah";
import AnNas from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AnNas";
import AlFalaq from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlFalaq";
import AlIkhlas from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlIkhlas";
import AlLahab from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlLahab";
import AnNasr from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AnNasr";
import AlKafirun from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlKafirun";
import AlKautsar from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlKautsar";
import AlMaun from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlMaun";
import AlQuraisy from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlQuraisy";
import AlFil from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlFil";
import AlHumazah from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlHumazah";
import AlAsr from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AlAsr";
import AtTakasur from "./pages/PanduanMengajarTPA/HafalanSuratPendek/AtTakasur";
import BerandaDoa from "./pages/PanduanMengajarTPA/DoaSehariHari/BerandaDoa";
import DoaSebelumTidur from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSebelumTidur";
import DoaSesudahTidur from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSesudahTidur";
import DoaSebelumMakan from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSebelumMakan";
import DoaSesudahMakan from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSesudahMakan";
import DoaMasukWC from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMasukWC";
import DoaKeluarWC from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaKeluarWC";
import DoaMelepasPakaian from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMelepasPakaian";
import DoaMemakaiPakaian from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMemakaiPakaian";
import DoaBercermin from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaBercermin";
import DoaKeluarRumah from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaKeluarRumah";
import DoaMasukRumah from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMasukRumah";
import DoaSebelumWudhu from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSebelumWudhu";
import DoaSetelahWudhu from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaSetelahWudhu";
import DoaMasukMasjid from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaMasukMasjid";
import DoaKeluarMasjid from "./pages/PanduanMengajarTPA/DoaSehariHari/DoaKeluarMasjid";
import TabelPemasukan from "./pages/LaporanKeuangan/TabelPemasukan";
import TabelPengeluaran from "./pages/LaporanKeuangan/TabelPengeluaran";
import GrafikPemasukan from "./pages/LaporanKeuangan/GrafikPemasukan";
import BerandaRukunImanIslam from "./pages/PanduanMengajarTPA/RukunImanIslam/BerandaRukunImanIslam";
import RukunIman from "./pages/PanduanMengajarTPA/RukunImanIslam/RukunIman";
import RukunIslam from "./pages/PanduanMengajarTPA/RukunImanIslam/RukunIslam";
import BerandaWudhuSholat from "./pages/PanduanMengajarTPA/WudhuSholat/BerandaWudhuSholat";
import TataCaraWudhu from "./pages/PanduanMengajarTPA/WudhuSholat/TataCaraWudhu";
import PembatalWudhu from "./pages/PanduanMengajarTPA/WudhuSholat/PembatalWudhu";
import SyaratSholat from "./pages/PanduanMengajarTPA/WudhuSholat/SyaratSholat";
import RukunSholat from "./pages/PanduanMengajarTPA/WudhuSholat/RukunSholat";
import TataCaraSholat from "./pages/PanduanMengajarTPA/WudhuSholat/TataCaraSholat";
import PembatalSholat from "./pages/PanduanMengajarTPA/WudhuSholat/PembatalSholat";
import BerandaTambahCatatan from "./pages/BerandaTambahCatatan";

const App = () => {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }
  const [loginTime, setLoginTime] = useState(null);
  const uid = localStorage.getItem("uid");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const starCountRef = ref(database, `users/`);
  const databaseUser = ref(database, `users/${uid}/`);
  const databaseKeuanganPemasukan = ref(database, `databaseKeuangan/pemasukan/`);
  const databaseKeuanganPengeluaran = ref(database, `databaseKeuangan/pengeluaran/`);
  const [data, setData] = useState([]);
  const [dataKeuanganPemasukan, setDataKeuanganPemasukan] = useState([]);
  const [dataKeuanganPengeluaran, setDataKeuanganPengeluaran] = useState([]);
  // console.log(data.role)
  const [dataUser, setDataUser] = useState();
  // console.log(dataUser?.role)
  useEffect(() => {
    // Membaca status autentikasi pengguna
    const unsubscribeAuth = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email);
        setLoginTime(Date.now());
        setLoading(false); // Hentikan loading setelah autentikasi selesai
      } else {
        setUser(null);
        setLoading(false); // Hentikan loading jika tidak ada autentikasi
      }
    });

    // Unsubscribe dari listeners saat komponen dibongkar
    return () => {
      unsubscribeAuth();
    };
  }, []);
  useEffect(() => {
    // Membaca data dari Firebase saat komponen pertama kali dimuat
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setData(data);
        }
      });
      onValue(databaseKeuanganPemasukan, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataKeuanganPemasukan(data);
        }
      });
      onValue(databaseKeuanganPengeluaran, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataKeuanganPengeluaran(data);
        }
      });
      onValue(databaseUser, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setDataUser(data);
        }
      });
    };

    fetchData();
    handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    // Membersihkan listener ketika komponen tidak lagi digunakan
    return () => {
      const starCountListener = onValue(starCountRef, () => {});
      const databaseUserListener = onValue(databaseUser, () => {});
      const databaseKeuanganPemasukanListener = onValue(databaseKeuanganPemasukan, () => {});
      const databaseKeuanganPengeluaranListener = onValue(databaseKeuanganPengeluaran, () => {});
      starCountListener();
      databaseUserListener();
      databaseKeuanganPemasukanListener();
      databaseKeuanganPengeluaranListener();
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [starCountRef, databaseUser, databaseKeuanganPemasukan, databaseKeuanganPengeluaran]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/landing-page"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Private isAuthenticated={user} userRole={dataUser?.role}>
              <Login />
            </Private>
          }
        />
        <Route
          path="/register"
          element={
            <Private isAuthenticated={user} userRole={dataUser?.role}>
              <Register />
            </Private>
          }
        />
        <Route
          path="/maps"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Maps />
            </PrivateRoute>
          }
        />
        <Route
          path="/laporanKeuangan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaLaporanKeuangan data={data} />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Profile dataUser={dataUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Notifcations />
            </PrivateRoute>
          }
        />
        <Route
          path="/pray"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <PrayPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/keuangan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <KelolaKeuangan dataKeuanganPemasukan={dataKeuanganPemasukan} dataKeuanganPengeluaran={dataKeuanganPengeluaran} />
            </PrivateRoute>
          }
        />
        <Route
          path="/pemasukan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <FormPemasukan dataUser={dataUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/pengeluaran"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <FormPengeluaran dataUser={dataUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabelPemasukan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TabelPemasukan />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabelPengeluaran"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TabelPengeluaran />
            </PrivateRoute>
          }
        />
        <Route
          path="/GrafikPemasukan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <GrafikPemasukan />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaPanduanMengajar"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaPanduanMengajar />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaHafalanSuratPendek"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaHafalanSuratPendek />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaKisahNabi"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaKisahNabi />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaTajwidMakhraj"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaTajwidMakhraj />
            </PrivateRoute>
          }
        />
        <Route
          path="/MakharijilHuruf"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <MakharijilHuruf />
            </PrivateRoute>
          }
        />
        <Route
          path="/NunSukunTanwin"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <NunSukunTanwin />
            </PrivateRoute>
          }
        />
        <Route
          path="/MimSukunTanwin"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <MimSukunTanwin />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlifLam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlifLam />
            </PrivateRoute>
          }
        />
        <Route
          path="/MadPanjang"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <MadPanjang />
            </PrivateRoute>
          }
        />
        <Route
          path="/Qalqalah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <Qalqalah />
            </PrivateRoute>
          }
        />
        <Route
          path="/AnNas"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AnNas />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlFalaq"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlFalaq />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlIkhlas"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlIkhlas />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlLahab"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlLahab />
            </PrivateRoute>
          }
        />
        <Route
          path="/AnNasr"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AnNasr />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlKafirun"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlKafirun />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlKautsar"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlKautsar />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlMaun"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlMaun />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlQuraisy"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlQuraisy />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlFil"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlFil />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlHumazah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlHumazah />
            </PrivateRoute>
          }
        />
        <Route
          path="/AlAsr"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AlAsr />
            </PrivateRoute>
          }
        />
        <Route
          path="/AtTakasur"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <AtTakasur />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaDoa"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaDoa />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSebelumTidur"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSebelumTidur />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSesudahTidur"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSesudahTidur />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSebelumMakan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSebelumMakan />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSesudahMakan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSesudahMakan />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMasukWC"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMasukWC />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaKeluarWC"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaKeluarWC />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMelepasPakaian"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMelepasPakaian />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMemakaiPakaian"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMemakaiPakaian />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaBercermin"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaBercermin />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaKeluarRUmah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaKeluarRumah />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMasukRumah"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMasukRumah />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSebelumWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSebelumWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaSetelahWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaSetelahWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaMasukMasjid"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaMasukMasjid />
            </PrivateRoute>
          }
        />
        <Route
          path="/DoaKeluarMasjid"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <DoaKeluarMasjid />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaRukunImanIslam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaRukunImanIslam />
            </PrivateRoute>
          }
        />
        <Route
          path="/RukunIman"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <RukunIman />
            </PrivateRoute>
          }
        />
        <Route
          path="/RukunIslam"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <RukunIslam />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaWudhuSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaWudhuSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/TataCaraWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TataCaraWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/PembatalWudhu"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <PembatalWudhu />
            </PrivateRoute>
          }
        />
        <Route
          path="/SyaratSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <SyaratSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/RukunSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <RukunSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/TataCaraSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <TataCaraSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/PembatalSholat"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <PembatalSholat />
            </PrivateRoute>
          }
        />
        <Route
          path="/BerandaTambahCatatan"
          element={
            <PrivateRoute isAuthenticated={user} userRole={dataUser?.role}>
              <BerandaTambahCatatan />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRouteAdmin isAuthenticated={user} userRole={dataUser?.role}>
              <AdminPage />
            </PrivateRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
const PrivateRoute = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};
const PrivateRouteAdmin = ({ children, isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && userRole === "user") {
    return <Navigate to="/" />;
  }

  return children;
};
const Private = ({ children, isAuthenticated, userRole }) => {
  if (isAuthenticated && userRole === "user") {
    return <Navigate to="/" />;
  }
  if (isAuthenticated && userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};
