"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
  cpassword: string;
};

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result, "res");
    router.push("/login");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
          <div className="grid">
            <input
              type="text"
              {...register("username", { required: "username is required" })}
              className=" outline-none p-1 text-black rounded-sm"
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="grid">
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              className=" outline-none p-1 text-black rounded-sm"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="grid">
            <input
              type="password"
              {...register("password", { required: "password is required" })}
              className=" outline-none p-1 text-black rounded-sm"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="grid">
            <input
              type="password"
              {...register("cpassword", {
                required: "confirm password is required",
              })}
              className=" outline-none p-1 text-black rounded-sm"
            />
            {errors.cpassword && (
              <span className="text-red-500">{errors.cpassword.message}</span>
            )}
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-[#4EE783] text-black">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
