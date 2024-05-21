import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database, ref, onValue } from "../../Database/Fire";
import { ref as firebaseRef, onValue as firebaseOnValue } from "firebase/database";
import AuthenticatedUser from "../../Layouts/Authenticated";

const TabelPemasukan = () => {
  const navigate = useNavigate();
  const [pemasukanData, setPemasukanData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const pemasukanRef = firebaseRef(database, "databaseKeuangan/pemasukan");
    firebaseOnValue(pemasukanRef, (snapshot) => {
      const pemasukanList = [];
      const pemasukanObj = snapshot.val();
      for (let uid in pemasukanObj) {
        pemasukanList.push({ uid, ...pemasukanObj[uid] });
      }

      // Menyortir berdasarkan tanggal
      pemasukanList.sort((a, b) => new Date(b.tanggalPemasukan) - new Date(a.tanggalPemasukan));

      // Filter berdasarkan rentang tanggal
      const filteredPemasukanList = pemasukanList.filter((pemasukan) => {
        if (!startDate || !endDate) return true; // Jika salah satu tanggal belum dipilih, tampilkan semua data
        const pemasukanDate = new Date(pemasukan.tanggalPemasukan);
        return pemasukanDate >= new Date(startDate) && pemasukanDate <= new Date(endDate);
      });

      // Menyortir berdasarkan kriteria sortir
      if (sortBy === "kategori") {
        filteredPemasukanList.sort((a, b) => a.kategoriPemasukan.localeCompare(b.kategoriPemasukan));
      } else if (sortBy === "nominalTerbesar") {
        filteredPemasukanList.sort((a, b) => b.nominalPemasukan - a.nominalPemasukan);
      } else if (sortBy === "nominalTerkecil") {
        filteredPemasukanList.sort((a, b) => a.nominalPemasukan - b.nominalPemasukan);
      }

      setPemasukanData(filteredPemasukanList);
    });
  }, [startDate, endDate, sortBy]);

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  // Fungsi untuk mengubah format tanggal
  const formatNominal = (nominal) => {
    const formattedNominal = parseFloat(nominal).toLocaleString("id-ID");
    return formattedNominal;
  };

  // Menentukan indeks data awal dan akhir untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pemasukanData.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Menghitung jumlah halaman
  const totalItems = pemasukanData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <AuthenticatedUser>
      <div className="min-h-screen w-full bg-white justify-center">
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-white text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-white text-[25px] mt-[5px] mb-[10px] font-bold text-center">Laporan Keuangan</h1>
        </div>
        <div className="px-[24px] mt-[30px]">
          <h1 style={{ fontSize: "23px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "15px" }}>Laporan Pemasukan Keuangan Masjid</h1>
          <div className="flex justify-center items-center mb-4 text-black">
            <div className="mr-4">
              <label className="mr-2">Tanggal Mulai:</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="px-2 py-1 border rounded-md text-black" />
            </div>
            <div>
              <label className="mr-2">Tanggal Selesai:</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="px-2 py-1 border rounded-md text-black" />
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="mr-4">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-1 border rounded-md text-black">
                <option value="">Pilih kriteria sortir</option>
                <option value="kategori">Kategori Pemasukan</option>
                <option value="nominalTerbesar">Nominal Terbesar</option>
                <option value="nominalTerkecil">Nominal Terkecil</option>
              </select>
            </div>
          </div>
          <div className="mb-2 flex justify-center">
            <p className="text-sm text-gray-500 mr-2">
              Halaman {currentPage} dari {totalPages}
            </p>
          </div>
          <table className="min-w-full border-collapse border border-[#000000]">
            <thead>
              <tr>
                <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-2 py-2">Tanggal</th>
                <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-2 py-2">Kategori</th>
                <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-2 py-2">Nama</th>
                <th className="text-[14px] text-center bg-gray-200 border border-[#000000] text-[#000000] px-4 py-2">Nominal</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((pemasukan) => (
                <tr key={pemasukan.uid}>
                  <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "13px", paddingRight: "5px", paddingLeft: "5px", paddingTop: "5px", paddingBottom: "5px" }}>
                    {formatDate(pemasukan.tanggalPemasukan)}
                  </td>
                  <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "13px", paddingRight: "5px", paddingLeft: "5px", paddingTop: "5px", paddingBottom: "5px" }}>
                    {pemasukan.kategoriPemasukan}
                  </td>
                  <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "13px", paddingRight: "5px", paddingLeft: "5px", paddingTop: "5px", paddingBottom: "5px" }}>
                    {pemasukan.namaPemasukan}
                  </td>
                  <td className="text-center border border-[#000000] text-[#000000]" style={{ fontSize: "13px", paddingRight: "5px", paddingLeft: "5px", paddingTop: "5px", paddingBottom: "5px" }}>
                    Rp. {formatNominal(pemasukan.nominalPemasukan)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md mr-2">
              Sebelumnya
            </button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentItems.length < itemsPerPage || currentPage === totalPages} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default TabelPemasukan;
