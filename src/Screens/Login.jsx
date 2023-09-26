import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md p-4 space-y-4 border rounded-lg shadow-md'
      >
        <div className='text-xl font-bold text-center'>Login</div>
        <div>
          <label className='block'>Email Address:</label>
          <input
            type='email'
            {...register("email", { required: true })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.email && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block'>Password:</label>
          <input
            type='password'
            {...register("password", { required: true })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.password && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <button
          type='submit'
          className='w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
