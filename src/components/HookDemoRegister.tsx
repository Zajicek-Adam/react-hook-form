import { useForm, SubmitHandler } from "react-hook-form";
import IFormInput from "../types/FormInputs";

const HookDemoRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "Jeník",
      lastName: "Kolozub",
      confirm: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("firstName")} />
      </div>
      <div>
        <input
          aria-invalid={errors.firstName ? "true" : "false"}
          {...register("lastName", {
            required: "Vyplň příjmení kokotko",
            maxLength: { value: 20, message: "Moc dlouhý kokotko" },
            minLength: { value: 2, message: "Moc krátký kokotko" },
          })}
        />
        {errors.lastName && (
          <>
            <div style={{ marginTop: "3em" }}>
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </>
        )}
      </div>
      <div>
        <label>Confirm</label>
        <input type="checkbox" {...register("confirm")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default HookDemoRegister;
