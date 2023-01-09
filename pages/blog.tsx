import Footer from "../components/footer";

export default function Blog() {
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
            <ul className="navbar-nav ms-auto  mb-lg-0">
              <li className="nav-item me-5">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link active" aria-current="page" href="blog">
                  Blog
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="loker">
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
          <h2 className="section-title text-center">Blog</h2>
          <div className="row mt-5">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="/img/guide-1.png " className="card-img-top" />
                <div className="card-body ">
                  <div className="d-flex align-items-center gap-5">
                    <h4 className="card-title ">
                      Arsitektur Balai Kota Malang
                    </h4>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <span>03 Januari 2022</span>
                  </div>
                  <a
                    href="./detail/detailblog"
                    className="btn btn-orange py-1 px-2 mt-3 "
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="/img/guide-2.png " className="card-img-top" />
                <div className="card-body ">
                  <div className="d-flex align-items-center gap-5">
                    <h4 className="card-title ">
                      Kampung Biru Arema,Kebang...
                    </h4>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <span>10 Februari 2022</span>
                  </div>
                  <a
                    href="./detail/detailblog"
                    className="btn btn-orange py-1 px-2 mt-3 "
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="/img/guide-3.png " className="card-img-top" />
                <div className="card-body ">
                  <div className="d-flex align-items-center gap-5">
                    <h4 className="card-title ">
                      Aktivitas Seru di Bromo yang...
                    </h4>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <span>03 Januari 2022</span>
                  </div>
                  <a
                    href="./detail/detailblog"
                    className="btn btn-orange py-1 px-2 mt-3 "
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="/img/guide-4.png " className="card-img-top" />
                <div className="card-body ">
                  <div className="d-flex align-items-center gap-5">
                    <h4 className="card-title ">Mengenal Topeng Malangan...</h4>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <span>11 Juli 2022</span>
                  </div>
                  <a
                    href="./detail/detailblog"
                    className="btn btn-orange py-1 px-2 mt-3 "
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
