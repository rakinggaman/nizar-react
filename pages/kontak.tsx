import Footer from "../components/footer";

export default function Kontak() {
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
                <a className="nav-link " aria-current="page" href="blog">
                  Blog
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="loker">
                  Loker Barang
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link " href="bersih">
                  Bersih Diri
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link active" href="kontak">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="service">
        <div className="container">
          <h2 className="section-title text-center">Kontak Perusahaan</h2>
          <div className="row mt-5">
            <div className="col-md-6 mb-5">
              <img src="/img/image 2.png " alt="" />
            </div>
            <div className="col-md-6">
              <h1 className="ms-5">
                <i className="bx bx-phone bx-md me-3"></i>Telephone
              </h1>
              <p className="fs-4 ms-5 mb-5">081234124590</p>
              <h1 className="ms-5">
                <i className="bx bxl-whatsapp bx-md me-3"></i>Whatsapp
              </h1>
              <p className="fs-4 ms-5 mb-5">081234124590</p>
              <h1 className="ms-5">
                <i className="bx bxl-email bx-envelope me-3"></i>Email
              </h1>
              <p className="fs-4 ms-5 mb-5">packagerooms@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
