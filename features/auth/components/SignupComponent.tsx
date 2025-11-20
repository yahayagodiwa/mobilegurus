"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import Image from "next/image";
import mobile from '../../../public/images/mobile.png';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function SignupComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      countryCode: "+234",
      dob: "",
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
          <h2 className="text-2xl font-bold mb-2">Get Started
            <span className="text-primary text-sm"> Clients</span></h2>
          <p className="mb-4 text-muted">Set up your account and access repair services easily</p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              // label="Full Name"
              placeholder="Full Name"
            />
            <div className="flex gap-2 items-center w-full">
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-[#D9D9D94D]">
                <select
                  className="outline-none bg-transparent"
                  {...form.register("countryCode")}
                  defaultValue="+234"
                >
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                </select>
              </div>


              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full"
                />
              </div>
            </div>


            <FormField
              control={form.control}
              name="email"
              // label="Email Address"
              placeholder="Email Address"
            />

            <FormField
              control={form.control}
              name="password"
              // label="Password"
              type="password"
              placeholder="Password"
            />

            <FormField
              control={form.control}
              name="dob"
              type="date"
              placeholder="Date of Birth"
            />

            <Button
            variant="outline"
             type="submit" className="mt-2 text-white 
             w-full bg-primary hover:bg-transparent hover:text-primary 
             hover:border hover:border-primary transition-all">
              Continue
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

          <p className="text-center mt-2">Already have an account? <span className="text-primary">Sign In</span></p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50">
          <Image src={mobile} alt="Mobile" className="max-w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
