import Sidebar from "../../components/sidebar";

export default function Pengaturan() {
  return (
    <>
      <div className="dashboard-page">
        <div className="wrapper">
          <Sidebar />
          <div className="content">
            <div className="content-header d-flex align-items-center justify-content-between">
              <h2 className="content-title">Admin</h2>
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

            <div className="container">
              <div className="card p-4">
                <div className="card-body">
                  <form action="">
                    <img
                      src="/img/Profile Photo.png"
                      style={{ width: "8rem" }}
                      alt=""
                      className="mb-5 rounded-circle"
                    />
                    <div className="mb-3 ">
                      <label for="nama" className="form-label">
                        Nama
                      </label>
                      <input type="text" className="form-control" id="nama" />
                    </div>
                    <div className="mb-3">
                      <label for="Email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="Email" />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <button type="button" className="btn btn-info me-auto">
                      Simpan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      image.png
    </>
  );
}
