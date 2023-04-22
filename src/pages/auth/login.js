import React from "react";
import Input from "../../components/input";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "../../firebase.js";
import { Formik, Form } from "formik";
import { loginSchema } from "../../validation";

function Login() {
  // yönlendirme işlemi
  const navigate = useNavigate();
  // yönlendirmeyi yapacağımız adresi almak için
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    await login(values.username, values.password);
    // user varsa anasayfaya yönlendiriyoruz.
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  };
  return (
    <div className="bg-gradient-to-bl from-emerald-500 to-emerald-100 flex flex-col justify-center items-center space-y-3 w-[500px] h-[400px] rounded-md">
      <h1 className="text-white font-semibold text-3xl mb-10">LOGİN</h1>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="grid gap-y-2  w-[400px]">
            <Input name="username" label="email" />
            <Input type="password" label="password" name="password" />
            <button
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              className="h-7 w-full rounded-sm bg-[#0f1a07] text-sm text-white disabled:opacity-50"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <Link to="/auth/register">
          <button className="h-7 w-[400px] rounded-sm bg-[#0f1a07] text-sm text-white">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
