"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import logot from "@/public/images/logot.png";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { FormField } from "@/components/ui/form";

function ForgotPasswordComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const submitOtp = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex bg-bg min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-bg p-8 rounded-lg shadow-sm border">
          <Image
            src={logot}
            alt="Logo"
            className="h-[32px] mb-4"
            width={100}
            height={500}
          />

          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
            <p className="text-muted">
              We will send a code to help your rest your password, kindly enter
              email to follow next step
            </p>
          </div>

          <form onSubmit={form.handleSubmit(submitOtp)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              type="email"
              placeholder="Email"
            />

            <div className="flex justify-center">
              <Link href="/auth/verify-otp" className="w-full">
                <Button
                  variant="outline"
                  type="submit"
                  className="mt-2 text-white 
               w-full bg-primary hover:bg-transparent hover:text-primary 
               hover:border hover:border-primary transition-all"
                >
                  Continue
                </Button>
              </Link>
            </div>
              <Button variant="link" className="text-primary mx-auto">Use Phone Number</Button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordComponent;
