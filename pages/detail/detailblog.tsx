import Footer from "../../components/footer";

export default function Detailblog() {
  return (
    <>
      <div className="container mt-4">
        <a href="../blog" className="link-dark">
          <i className="bx bx-arrow-back bx-md bx-fade-left-hover"></i>
        </a>
      </div>

      <section className="service " style={{ marginTop: "-60px" }}>
        <div className="container">
          <div className="card mx-auto mb-3" style={{ width: "30rem" }}>
            <img src="/img/guide-1.png " className="card-img-top " />
          </div>
          <h2 className="mt-4">Arsitektur Balai Kota Malang</h2>
          <p className="text-muted">03 Januari 2022</p>
          <p className="fs-4 mt-5">
            Keberadaan Balai Kota ini memang menarik perhatian, terutama bagi
            wisatawan yang berkunjung ke Kota Malang. Selain memiliki gaya
            arsitektur yang klasik dan unik, Balai Kota Malang terletak di
            kawasan jantung kota. Tak heran jika gedung ini kemudian menjadi
            salah satu ikon Kota Malang. Balai Kota Malang adalah gedung yang
            menjadi pusat pemerintahan sekaligus tempat berkantornya Wali Kota
            Malang yang diresmi digunakan sejak tahun 1929 silam. Sebagai
            peninggalan zaman Belanda dengan arsitektur yang masih asli, Balai
            Kota Malang pun ditetapkan sebagai bangunan cagar budaya pada 12
            Desember 2018. Kemegahan Balai Kota Malang sangat mencolok jika
            dilihat dari jalan. Dan mungkin perlu Anda ketahui bahwa balai kota
            ini bukan sekadar gedung pemerintahan, tapi juga menyimpan rekam
            jejak sejarah, termasuk gaya arsitekturnya yang unik. Arsitektur
            Bangunan Balai Kota Malang Dari segi arsitektur, Balai Kota Malang
            mengusung konsep yang cukup unik. Dikutip dari berbagai sumber,
            setidaknya ada dua konsep infrastruktur Balai Kota Malang yang
            sengaja dibangun dengan fungsi masing-masing. Pertama, konsep letak
            dan desain bangunan yang memiliki pendingin alami. Kedua, konsep
            bangunan yang difungsikan sebagai benteng pertahanan. Sejak awal,
            Balai Kota Malang dirancang dengan konsep dua lantai serta memiliki
            13 ruangan. Tujuh ruangan berada di lantai satu (lantai bawah) dan
            enam ruangan lainnya di lantai atas atau lantai dua. Seluruh
            konstruksi gedung ini masih asli, termasuk jendela dan gerendelnya.
            Seperti diketahui, zaman dulu masih belum ada pendingin ruangan
            elektronik alias AC (air conditioner). Untuk itulah struktur
            bangunan Balai Kota Malang didesain agar bisa memanfaatkan kondisi
            alam sekitar sebagai pendingin ruangan secara alami.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
