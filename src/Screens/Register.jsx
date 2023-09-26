import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Store register data in browser session storage
    sessionStorage.setItem("registerData", JSON.stringify(data));
    navigate("/login");
    console.log("Registration successful:", data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md p-4 space-y-4 border rounded-lg shadow-md'
      >
        <div className='text-xl font-bold text-center'>Register</div>
        <div>
          <label className='block'>First Name:</label>
          <input
            type='text'
            {...register("firstName", { required: true })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.firstName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block'>Last Name:</label>
          <input
            type='text'
            {...register("lastName", { required: true })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.lastName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
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
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/i,
            })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.password && (
            <span className='text-red-500'>
              Password must contain at least 1 numeric, 1 capital letter, 1
              small letter, and 1 special symbol.
            </span>
          )}
        </div>
        <div>
          <label className='block'>Address:</label>
          <input
            type='text'
            {...register("address", { required: true })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.address && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block'>Age:</label>
          <input
            type='number'
            {...register("age", { required: true })}
            className='w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500'
          />
          {errors.age && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <button
          type='submit'
          className='w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
