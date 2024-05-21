import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaDoa = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Doa</h1>
            <p className="text-[25px] font-bold mb-[15px]">Sehari-hari</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaSebelumTidur">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/sebelumtidur.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Sebelum Tidur</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaSesudahTidur">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/banguntidur.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Bangun Tidur</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaSebelumMakan">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/doasebelummakan.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Sebelum Makan</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaSesudahMakan">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/doasesudahmakan.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Sesudah Makan</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaMasukWC">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/masukwc.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Masuk WC</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaKeluarWC">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/keluarWC.png" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Keluar WC</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaMelepasPakaian">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/melepaspakaian.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Melepas Pakaian</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaMemakaiPakaian">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/memakaipakaian.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Memakai Pakaian</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaBercermin">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/doabercermin.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Bercermin</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaKeluarRumah">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/keluarrumah.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Keluar Rumah</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaMasukRumah">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/masukrumah.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Masuk Rumah</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaSebelumWudhu">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/sebelumwudhu.jpeg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Sebelum Wudhu</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/DoaSetelahWudhu">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/setelahwudhu.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Setelah Wudhu</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px] mb-[30px]">
            <NavLink to="/DoaMasukMasjid">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black ">
                <img alt="" src="/images/masukmasjid.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Masuk Masjid</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px] mb-[100px]">
            <NavLink to="/DoaKeluarMasjid">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[90px] p-4 shadow-md shadow-black ">
                <img alt="" src="/images/keluarmasjid.jpg" className="w-[60px] h-[60px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Doa Keluar Masjid</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaDoa;
