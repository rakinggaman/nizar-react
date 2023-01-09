import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            PackRooms
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link " aria-current="page" href="blog">
                  Blog
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link active" href="loker#">
                  Loker Barang
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="bersih">
                  Bersih Diri
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="kontak">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="service">
        <div className="container">
          <div className="mx-auto" style={{ width: "18rem" }}>
            <img src="/img/exclamation.png " className="card-img-top" />
          </div>
          <h2 className="text-center text-uppercase mt-5">
            Syarat Penitipan Barang
          </h2>
          <p className="fs-5 text-uppercase text-center">
            menunjukkan e-ktp pribadi di tempat penitipan
          </p>
          <p className="fs-5 text-uppercase text-center">
            menunjukkan bukti pemesanan & pembayaran loker [online]
          </p>
          <p className="fs-5 text-uppercase text-center">
            menunjukkan e-ktp pribadi di tempat penitipan
          </p>
          <h2 className="text-center mt-5">KETENTUAN PENITIPAN BARANG</h2>
          <p className="fs-5 text-uppercase text-center">
            bersedia menunjukkan e-ktp
          </p>
          <p className="fs-5 text-uppercase text-center">
            penitipan tidak menerima barang yang melanggar hukum
          </p>
          <p className="fs-5 text-uppercase text-center">
            penitipan tidak bertanggung jawab atas isi muatan yang dititipkan
          </p>
          <p className="fs-5 text-uppercase text-center">
            kerusakan dan kehilangan muatan saat penitipan adalah tanggung jawab
            pihak perusahaan
          </p>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <h2 className="section-title">Daftar Harga</h2>
          <div className="row mt-5">
            <div className="col-md-3 mb-2">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img className="mt-4" src="/icons/icon.png" alt="" />
                  <h4>Paket 1</h4>
                  <h4 className="mb-3">Rp. 20.000/2 jam</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img className="mt-4" src="/icons/icon (1).png" alt="" />
                  <h4>Paket 2</h4>
                  <h4 className="mb-3">Rp. 50.000/10 jam</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img className="mt-4" src="/icons/icon (2).png" alt="" />
                  <h4>Paket 3</h4>
                  <h4 className="mb-3">Rp. 100.000/20 jam</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className=" card border-0 text-center card-service ">
                <div className="card-body ">
                  <img className="mt-4 " src="/icons/icon (3).png " alt=" " />
                  <h4>Paket 4</h4>
                  <h4 className="mb-3 ">Rp. 120.000/hari</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="button text-center ">
            <a href=" " className="btn btn-orange px-3 py-2 mt-5 me-3 ">
              <img
                src="/icons/whatsapp-logo.png "
                className="mx-1 w-25 "
                alt=" "
              />{" "}
              WHATSAPP{" "}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
