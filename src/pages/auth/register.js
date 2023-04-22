import React from "react";
import Input from "../../components/input";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { registerSchema } from "../../validation";
import { register } from "../../firebase.js";
import { useNavigate, useLocation } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="bg-gradient-to-bl from-emerald-500 to-emerald-100 flex flex-col justify-center items-center space-y-4 w-[500px] h-[400px] border rounded-md">
      <h1 className="text-white font-semibold text-3xl mb-10">Register</h1>
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          email: "",
          full_name: "",
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="grid gap-y-2  w-[300px]">
            <Input name="email" label="email" />
            <Input name="full_name" label="Full name" />
            <Input name="username" label="username" />
            <Input type="password" label="password" name="password" />
            <button
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              className="h-7 w-full rounded-sm bg-[#0f1a07] text-sm text-white disabled:opacity-50"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <Link to="/auth/login">
          <button className="h-7 w-[300px] rounded-sm bg-[#0f1a07] text-sm text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
