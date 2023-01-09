import Sidebar from "../../components/sidebar";

export default function Loker() {
  return (
    <>
      <div className="dashboard-page">
        <div className="wrapper">
          <Sidebar />
          <div className="content">
            <div className="content-header d-flex align-items-center justify-content-between">
              <h2 className="content-title">Loker Barang</h2>
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

            <div className="statistics mt-5">
              <div className="card">
                <div className="card-body">
                  <div className="mb-5">
                    <div className="d-flex justify-content-between mb-5">
                      <h4 className="card-title">Daftar Loker</h4>
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#Modaltambah"
                      >
                        <i className="bx bx-list-plus fs-4 me-2 justify-content-center"></i>{" "}
                        TAMBAH
                      </button>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr className="table-secondary">
                            <th scope="col">No.</th>
                            <th scope="col">Nama Paket</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Gambar</th>
                            <th scope="col">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Paket 1</td>
                            <td>Rp. 20.000/2 jam</td>
                            <td>
                              {" "}
                              <img
                                src="/img/image 2.png "
                                alt=""
                                style={{ width: "5rem" }}
                              />
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-warning me-2 mb-2"
                                data-bs-toggle="modal"
                                data-bs-target="#Modaltambah"
                              >
                                <i className="bx bx-edit bx-sm pt-2"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger mb-2"
                              >
                                <i className="bx bx-trash bx-sm  pt-2"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Paket 1</td>
                            <td>Rp. 20.000/2 jam</td>
                            <td>
                              {" "}
                              <img
                                src="/img/image 2.png "
                                alt=""
                                style={{ width: "5rem" }}
                              />
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-warning me-2 mb-2"
                              >
                                <i className="bx bx-edit bx-sm pt-2"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger mb-2"
                              >
                                <i className="bx bx-trash bx-sm  pt-2"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="Modaltambah"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Loker Barang
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <form action="">
                        <div className="mb-3">
                          <label for="nama" className="form-label">
                            Nama Paket
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="nama"
                          />
                        </div>
                        <div className="mb-3">
                          <label for="harga" className="form-label">
                            Harga
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="harga"
                          />
                        </div>
                        <div className="mb-3">
                          <label for="gambar" className="form-label">
                            Gambar
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="gambar"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="container">
                      <button type="button" className="btn btn-primary me-auto">
                        Simpan
                      </button>
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
