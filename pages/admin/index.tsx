export default function SignUp() {
  return (
    <>
      <div className="wrapperlogin fadeInDown mt-5">
        <div id="formContent">
          <div className="fadeIn first mt-5 mb-3">
            <img src="/img/Headerusersignin.svg" alt="" width={300} />
          </div>
          {/* Login Form */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Email"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Password"
            />
            <a
              href="admin/dashboard"
              className="btn btn-orange py-2 px-5 mb-3 mt-3"
            >
              Login
            </a>
          </form>
          {/* Remind Passowrd */}
        </div>
      </div>
    </>
  );
}
