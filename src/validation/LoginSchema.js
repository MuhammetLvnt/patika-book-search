import Yup from "./validate";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});
