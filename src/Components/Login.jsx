import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Check email and password in session storage
    const registerData = JSON.parse(sessionStorage.getItem("registerData"));
    if (
      registerData?.email === data.email &&
      registerData?.password === data.password
    ) {
      console.log("Login successful");
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email Address:
        <input type='email' {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input type='password' {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
