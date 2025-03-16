import { useForm } from "react-hook-form";
import { validateUsername, validatePassword } from "../utils/formValidate";
import { loginUser } from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../store";

export default function Login() {
  const [revealPassword, setRevealPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const { setUserToken, setRefreshToken } = useAuth();
  const togglePassword = () => {
    setRevealPassword((prev) => !prev);
  };
  const submitForm = async (formData) => {
    try {
      const { data, status } = await loginUser(formData);
      console.log("login data", data);
      if (status === 200) {
        toast.success(`welcome ${data.firstName}`, { toastId: "loginSuccess" });
        setUserToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        navigate("/"); //redirect to home
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { toastId: "errorLogin" });
    }
  };
  return (
    <div className="w-full md:max-w-[320px] mx-auto">
      <h1 className="font-bold text-3xl mb-6"> Login to your account</h1>

      <form className="space" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
          {" "}
          <label className="floating-label">
            <span>Username</span>
            <input
              type="text"
              placeholder="username"
              className="input input-lg"
              id="username"
              {...register("username", {
                validate: (value) => validateUsername(value),
              })}
            />
          </label>
          {errors.username && (
            <span className="text-xs text-red-600">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="relative">
          {" "}
          <label className="floating-label">
            <span>Password</span>
            <input
              type={revealPassword ? "text" : "password"}
              placeholder="password"
              className="input input-lg"
              id="password"
              {...register("password", {
                validate: (value) => validatePassword(value),
              })}
            />
          </label>
          <button
            className="absolute inset-y-0 right-2"
            onClick={togglePassword}
            type="button"
          >
            {revealPassword ? (
              <i className="ri-eye-line"></i>
            ) : (
              <i className="ri-eye-off-line"></i>
            )}
          </button>
        </div>
        {errors.password && (
          <span className="text-xs text-red-600">
            {errors.password.message}
          </span>
        )}

        <button
          className="btn btn-secondary btn-lg w-full mt-4"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "continue"
          )}
        </button>
      </form>
    </div>
  );
}
