import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

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
                <a className="nav-link active" aria-current="page" href="index">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="blog">
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
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Solusi Terbaik Untuk Barang Anda</h1>
              <p className="mt-4 mb-5">
                Tim kami terdiri dari para ahli dibidangnya dan siap memberikan
                pelayanan terbaik
              </p>
              <a href="" className="btn btn-orange py-2 px-5">
                Lebih Lanjut
              </a>
            </div>
            <div className="col-md-6 mt-3">
              <img src="/img/header.png" alt="" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <h2 className="section-title text-center">Layanan Kami</h2>
          <div className="row mt-5">
            <div className="col-md-3 mb-4">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img src="/icons/boxes.png" alt="" />
                  <h3>Penitipan Barang</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img src="/icons/faq.png" alt="" />
                  <h3>Pelayanan Pertanyaan</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img src="/icons/bath.png" alt="" />
                  <h3>Membersihkan Diri</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 text-center card-service">
                <div className="card-body">
                  <img src="/icons/privacy.png" alt="" />
                  <h3>Aman & Nyamanan</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service package">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <img src="/img/package-rooms.png" alt="" />
            </div>
            <div className="col-md-8">
              <div className="content">
                <h2 className="text-center">Package Rooms</h2>
                <p className="fs-5">
                  Package Rooms adalah sit amet, consectetur adipiscing elit.
                  Donec elementum ullamcorper arcu et facilisis. Maecenas vitae
                  condimentum leo. Nam dapibus felis sed sapien lobortis
                  hendrerit. Integer efficitur vitae nunc id varius. Donec
                  feugiat hendrerit viverra. Mauris rhoncus orci vel lorem
                  interdum volutpat. Nullam iaculis lectus eu lobortis ultrices.
                  In et enim ultrices, vehicula eros ut, eleifend dolor. Sed
                  aliquam mauris nec nulla tempor ultricies. Vestibulum
                  efficitur pharetra quam, et mollis lectus pulvinar eu.
                  Vestibulum mattis mauris sed nisi viverra, in viverra turpis
                  feugiat. Quisque pellentesque viverra libero. Duis lobortis in
                  tellus non elementum. Ut eget enim egestas, mollis ligula sed,
                  posuere urna. Curabitur posuere mi nec suscipit vulputate.
                  Fusce velit nisi, finibus id turpis nec, ullamcorper malesuada
                  nisl. Praesent eu rhoncus nunc. Ut semper mauris lacus, sed
                  finibus sapien congue id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                </div>
              </div>
            </div>
          </div>
          <div className="button text-center">
            <a href="blog" className="btn btn-orange py-3 px-5 mt-5 ">
              SHOW MORE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
