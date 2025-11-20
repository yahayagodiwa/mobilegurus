"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import Image from "next/image";
import mobile from '../../../public/images/mobile.png';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function LoginComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",

    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Flex container */}
      <div className="flex md:flex-row rounded-lg  overflow-hidden w-full max-w-4xl">

        {/* LEFT: Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back to Mobile Gurus
          </h2>
          <p className="mb-4 text-muted">Log in to access your account</p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              placeholder="Email or Phone Number"
            />

            <FormField
              control={form.control}
              name="password"
              type="password"
              placeholder="Password"
            />

            <div className="flex w-full">
              <Button variant="link" className="ml-auto">
                Forgot Password?
              </Button>
            </div>

            <Button
              variant="outline"
              type="submit" className=" text-white 
             w-full bg-primary hover:bg-transparent hover:text-primary 
             hover:border hover:border-primary transition-all">
              Login
            </Button>
          </form>
          <div className="flex items-center gap-2 w-full mt-2">
            <div className="flex-1 border-t border-muted"></div>
            <p className="text-muted text-sm whitespace-nowrap">Or Sign in with</p>
            <div className="flex-1 border-t border-muted"></div>
          </div>

          <div className="flex  sm:flex-row flex-col gap-4 mt-2 w-full">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-primary hover:text-white transition">
              <FcGoogle size={24} /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-primary hover:text-white transition">
              <FaApple size={24} /> Apple
            </button>
          </div>

          <p className="text-center mt-2">Don’t have an account? <span className="text-primary">Sign Up</span></p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50">
          <Image src={mobile} alt="Mobile" className="max-w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
