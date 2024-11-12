"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Submitting login data:", data);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", "hulutoken");
        console.log("Login successful:", result);
        router.push("/");
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
          <div className="grid">
            <input
              type="text"
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

export default LoginPage;
