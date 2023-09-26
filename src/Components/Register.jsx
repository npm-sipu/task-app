import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Store register data in browser session storage
    sessionStorage.setItem("registerData", JSON.stringify(data));
    console.log("Registration successful:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input type='text' {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </label>
      <label>
        Last Name:
        <input type='text' {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </label>
      <label>
        Email Address:
        <input type='email' {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input
          type='password'
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/i,
          })}
        />
        {errors.password && (
          <span>
            Password must contain at least 1 numeric, 1 capital letter, 1 small
            letter, and 1 special symbol.
          </span>
        )}
      </label>
      <label>
        Address:
        <input type='text' {...register("address", { required: true })} />
        {errors.address && <span>This field is required</span>}
      </label>
      <label>
        Age:
        <input type='number' {...register("age", { required: true })} />
        {errors.age && <span>This field is required</span>}
      </label>
      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;
