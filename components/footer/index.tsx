import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a className="footer-brand" href="#">
              PackRooms
            </a>
            <p className="footer-text mt-2">
              Packaging Rooms adalah bla bla bla
            </p>
            <p className="footer-text mt-4">
              Jl. Sigura-gura No. 8 Malang Selatan, Indonesia 1234
            </p>
            <p className="footer-text mt-2">Phone: +62 81234567890</p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-md-4">
                <h5 className="footer-title text-white">Perusahaan</h5>
                <ul className="footer-list mt-2">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Loker Barang</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Bersih Diri</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Kontak</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="footer-title text-white">Kami</h5>
                <ul className="footer-list mt-2">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li className="mt-3">
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="footer-title text-white">Social Media</h5>
                <ul className="footer-list mt-2">
                  <a href="#" className="me-2">
                    <i className="bx bxl-instagram bx-md"></i>
                  </a>
                  <a href="#" className="me-2">
                    <i className="bx bxl-youtube bx-md"></i>
                  </a>
                  <a href="#" className="me-2">
                    <i className="bx bxl-facebook-circle bx-md"></i>
                  </a>
                  <a href="#" className="me-2">
                    <i className="bx bxl-google bx-md"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
