import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import Label from "../../components/Label";
import Button from "../../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { get, ref, serverTimestamp, update } from "firebase/database";
import { auth, database } from "../../Database/Fire";
import { NavLink, Navigate } from "react-router-dom";
import App from "../../App";
import Swal from "sweetalert2";
import SplashScreen from "../SplashScreen";

const Login = () => {
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  useEffect(() => {
    // Set timeout untuk menutup SplashScreen setelah 10 detik
    const splashTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // 10000 milidetik = 10 detik

    // Unsubscribe dari listeners saat komponen dibongkar
    return () => {
      clearTimeout(splashTimeout); // Hentikan timeout jika komponen dibongkar
    };
  }, []); //
  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then((success) => {
          const uid = success.user.uid;
          const userRef = ref(database, `users/${uid}`);

          // Dapatkan data pengguna, termasuk role
          get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              const { role } = userData;

              if (role === "banned") {
                // Jika role adalah "banned", signout pengguna
                auth.signOut().then(() => {
                  Swal.fire({
                    icon: "warning",
                    confirmButtonColor: "#006A0B",
                    title: "Akun Anda Diblokir",
                    text: "Hubungi administrator untuk informasi lebih lanjut.",
                  });
                  // Redirect pengguna ke halaman login
                  <Navigate to="/login" />;
                });
              } else {
                // Role bukan "banned", lanjutkan dengan proses login
                const timestamp = serverTimestamp();
                update(ref(database, `users/${uid}/`), {
                  registeredAt: timestamp,
                });
                localStorage.setItem("uid", uid);
                // Redirect pengguna ke halaman utama atau halaman lain yang sesuai
                return <App />; // Gantilah dengan halaman yang sesuai
              }
            } else {
              // Data pengguna tidak ditemukan
              Swal.fire({
                icon: "error",
                title: "Data Pengguna Tidak Ditemukan",
                confirmButtonColor: "#d33",
                text: "Silakan coba lagi nanti atau hubungi administrator.",
              });
            }
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Opps....",
            color: "#000",
            buttonsStyling: true,
            confirmButtonColor: "#770700",
            text: "Password atau Email Salah",
          });
        });
    }
  };
  return (
    <>
      {isLoading === true ? (
        <SplashScreen />
      ) : (
        <div className="min-h-screen w-full bg-[#EFF2F6] justify-center">
          <div className="w-full h-[82px] bg-[#0C8F8F] rounded-b-[40px] mb-[80px]"></div>
          <div className="mt-[50px]"></div>
          <h1 className=" text-center  text-[40px] font-bold text-[#0C8F8F] ">LockInfak</h1>
          <div className="px-[24px] mt-[50px]">
            <div>
              <Label forInput="email" value="Email" text="text-black font-semibold" />
              <TextInput color="black" type="email" name="email" autoComplete="username" isFocused={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan email anda" border="border-[#7C7C7C]" />
              {/* <InputError message={errors.email} className="mt-2" /> */}
            </div>
            <div>
              <Label forInput="password" value="Sandi" text="text-black mt-[20px] font-semibold" />
              <TextInput color="black" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan sandi anda" autoComplete="current-password" border="border-[#7C7C7C]" />
            </div>
            <Button onClick={handleLogin} width="w-full" text="Masuk" height="h-[50px]" color="bg-[#0C8F8F] shadow-md shadow-[#0C8F8F] mt-[50px]" />
          </div>
          <div className="flex text-black justify-center items-center h-[5px] mt-[88px]">
            <h1 className="text-[15px]">
              Belum Punya Akun?{" "}
              <NavLink to="/register">
                <span className="font-semibold">Bikin Akun</span>
              </NavLink>
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
