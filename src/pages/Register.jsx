import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero my-24 font-inter">
      <div className="card bg-base-100 w-[56rem] shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="uppercase text-center font-semibold text-3xl font-montserrat">
            Create an account
          </h2>
          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-default text-white hover:bg-light hover:border-light">
              Register
            </button>
            <div className="divider">OR</div>
            <button
              //   onClick={handleGoogleSignIn}
              className="btn bg-base-200 hover:bg-base-100"
            >
              <FcGoogle className="text-2xl" /> Signup with Google
            </button>
            <p className="text-sm text-center mt-4">
              Already Have An Account?{" "}
              <Link
                className="text-default font-bold hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
