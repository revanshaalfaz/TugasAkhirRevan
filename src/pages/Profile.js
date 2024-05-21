import React, { useState } from "react";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import AuthenticatedUser from "../Layouts/Authenticated";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { auth, database } from "../Database/Fire";
import Swal from "sweetalert2";
import { ref, update } from "firebase/database";

const Profile = ({ dataUser }) => {
  const uid = localStorage.getItem("uid");
  const [currentPassword, setCurrentPassword] = useState("");
  const [pubdet, setPubdet] = React.useState("");
  const handleUpdate = () => {
    // Membuat credential untuk otentikasi ulang dengan kata sandi saat ini
    const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
    // console.log("data currentUser", auth.currentUser)

    // Reauthenticate pengguna dengan credential saat ini
    reauthenticateWithCredential(auth.currentUser, credential)
      .then(() => {
        // Berhasil otentikasi ulang, lakukan pembaruan kata sandi
        updatePassword(auth.currentUser, pubdet)
          .then(() => {
            const data = { password: pubdet };
            // Berhasil mengubah kata sandi
            // console.log("Kata sandi berhasil diubah");
            Swal.fire({
              icon: "success",
              title: "Success",
              color: "#000",
              buttonsStyling: true,
              confirmButtonColor: "#006A0B",
              text: "Kata Sandi Berhasil Diubah ",
            });
            update(ref(database, `users/${uid}/`), data);
            setCurrentPassword("");
            setPubdet("");
            // Lakukan tindakan lain yang diperlukan setelah mengubah kata sandi
          })
          .catch((error) => {
            // Gagal mengubah kata sandi
            // console.log("Gagal mengubah kata sandi", error);
          });
      })
      .catch((error) => {
        // Gagal otentikasi ulang
        Swal.fire({
          icon: "error",
          title: "Opps....",
          color: "#000",
          buttonsStyling: true,
          confirmButtonColor: "#770700",
          text: "Gagal Mengubah Kata Sandi",
        });
      });
  };
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen px-[20px] pt-[72px] bg-[#eef1f5]">
        <div className="flex justify-center items-center">
          <img alt="avatar" src="/images/avatar.jpg" className="rounded-full h-auto w-[150px] object-cover border border-black border-4" />
        </div>
        {/* <h1 className="text-black font-semibold text-[17px] text-center my-[20px] text-[2 0px]">{dataUser?.name}</h1> */}
        <div className="flex justify-center mt-[40px]">
          <div className="sm:w-[370px] w-full">
            <div className="flex flex-col gap-6">
              <div>
                <Label forInput="name" value="Nama Pengguna" text="text-black font-semibold" />
                <TextInput
                  color="black"
                  type="text"
                  name="name"
                  value={dataUser?.name}
                  placeholder="Your Name"
                  autoComplete="username"
                  isFocused={true}
                  border="border-black"
                  // onChange={(e) => setData("email", e.target.value)}
                />
                {/* <InputError message={errors.email} className="mt-2" /> */}
              </div>
              <div>
                <Label forInput="email" value="Alamat Email" text="text-black font-semibold" />
                <TextInput
                  color="black"
                  type="email"
                  name="email"
                  value={dataUser?.email}
                  placeholder="Email Address"
                  autoComplete="username"
                  isFocused={true}
                  border="border-black"
                  // onChange={(e) => setData("email", e.target.value)}
                />
                {/* <InputError message={errors.email} className="mt-2" /> */}
              </div>
              <div>
                <Label forInput="password" value="Kata Sandi Lama" text="text-black font-semibold" />
                <TextInput
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  color="black"
                  type="password"
                  name="password"
                  placeholder="Masukan kata sandi lama"
                  autoComplete="current-password"
                  border="border-black"
                  // onChange={(e) => setData("password", e.target.value)}
                />
              </div>
              <div>
                <Label forInput="password" value="Kata Sandi Baru" text="text-black font-semibold" />
                <TextInput value={pubdet} onChange={(e) => setPubdet(e.target.value)} color="black" type="password" name="password" placeholder="Masukan kata sandi baru" autoComplete="current-password" border="border-black" />
              </div>
              <div className="flex justify-center h-screen">
                <Button onClick={handleUpdate} width="w-[220px]" text="Perbarui Kata Sandi" color="bg-[#357AFF] shadow-md shadow-black" gap="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default Profile;
