const Login = () => {
  return (
    <div className="hero my-24 font-inter">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="uppercase text-center font-semibold text-3xl font-montserrat">
            Welcome Back
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-default text-white hover:bg-light hover:border-light ">
              Login
            </button>
            <div className="divider">OR</div>
            <button
              //   onClick={handleGoogleSignIn}
              className=" btn bg-base-200 hover:bg-base-100"
            >
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
