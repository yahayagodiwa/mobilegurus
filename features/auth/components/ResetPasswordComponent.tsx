"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import logot from "@/public/images/logot.png";
import Image from "next/image";
import Link from "next/link";

function ResetPasswordComponent() {
  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {/* Main container */}
      <div className="w-full max-w-md mx-auto">
        {/* Form container */}
        <div className="bg-bg p-8 rounded-lg shadow-sm border">
          <Image
            src={logot}
            alt="Logo"
            className="h-[32px] mb-4"
            width={100}
            height={500}
          />

          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-2">Create Password</h2>
            <p className="text-muted">
              Create a secure password for your account
            </p>
          </div>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="password"
              type="password"
              placeholder="Password"
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />

           <Link href='/auth/verify-otp'><Button
              variant="outline"
              type="submit"
              className=" text-white 
             w-full bg-primary hover:bg-transparent hover:text-primary 
             hover:border hover:border-primary transition-all"
            >
              Create Password
            </Button>
            </Link> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordComponent;
