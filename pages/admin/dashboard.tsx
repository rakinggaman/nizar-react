import Sidebar from "../../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-page">
        <div className="wrapper">
          <Sidebar />
          <div className="content">
            <div className="content-header d-flex align-items-center justify-content-between">
              <h2 className="content-title">Dashboard</h2>
              <div className="menu-icons d-flex align-items-center gap-2">
                <button className="btn btn-white d-flex align-items-center justify-content-center">
                  <i className="bx bx-search fs-5" />
                </button>
                <div className="dropdown">
                  <button
                    className="btn btn-white  d-flex align-items-center justify-content-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-message-alt fs-5" />
                  </button>
                  <div className="dropdown-menu p-2">
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center gap-2 p-3"
                      style={{ width: "max-content" }}
                    >
                      <img
                        src="/img/bersih-1.png"
                        width={30}
                        height={30}
                        className="rounded-2"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                      <div className="message">
                        <h4 className="text-dark fs-6">SomeUser</h4>
                        <p className="text-secondary m-0">
                          helo ges my name is user123
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-white  d-flex align-items-center justify-content-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-bell fs-5" />
                  </button>
                  <div className="dropdown-menu p-2">
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center gap-2 p-3"
                      style={{ width: "max-content" }}
                    >
                      <img
                        src="images/explore-image.png"
                        width={30}
                        height={30}
                        className="rounded-2"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                      <div className="message">
                        <h4 className="text-dark fs-6">SomeUser</h4>
                        <p className="text-secondary m-0">
                          helo ges my name is user123
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="#">
                  <img
                    src="/img/explore-image.png "
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row statistics mt-4">
              {/*Shopping Bag*/}
              <div className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="icons">
                        <i
                          className="bx bx-shopping-bag"
                          style={{ color: "#FF8A60" }}
                        />
                      </div>
                    </div>
                    <h5 className="card-title mt-3">4</h5>
                    <p className="m-0 text-secondary">Total Loker Barang</p>
                  </div>
                </div>
              </div>
              {/*Chart*/}
              <div className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="icons">
                        <i
                          className="bx bx-pie-chart"
                          style={{ color: "#603CB6" }}
                        />
                      </div>
                    </div>
                    <h5 className="card-title mt-3">500</h5>
                    <p className="m-0 text-secondary">Total Pengunjung</p>
                  </div>
                </div>
              </div>
              {/*Customer*/}
              <div className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="icons">
                        <i
                          className="bx bx-group"
                          style={{ color: "#219653" }}
                        />
                      </div>
                    </div>
                    <h5 className="card-title mt-3">4</h5>
                    <p className="m-0 text-secondary">Total Pengguna</p>
                  </div>
                </div>
              </div>
            </div>
            {/* artikel */}
            <div className="statistics mt-5">
              <div className="card">
                <div className="card-body">
                  <div className="mb-5">
                    <h4 className="card-title mb-5">Daftar Artikel</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Judul Artikel</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Date</th>
                            <th scope="col">Gambar</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Apakah tanaman</td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </td>
                            <td>jun 28, 2022</td>
                            <td>
                              <img
                                src="/img/image 2.png "
                                alt=""
                                style={{ width: "5rem" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Pemberian Bantuan</td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </td>
                            <td>jun 23, 2022</td>{" "}
                            <td>
                              <img
                                src="/img/image 2.png "
                                alt=""
                                style={{ width: "5rem" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
