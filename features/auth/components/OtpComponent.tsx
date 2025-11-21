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

function OtpComponent() {
  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const submitOtp = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex bg-bg min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-bg text-center flex flex-col justify-center p-8 rounded-lg shadow-sm border">
          <Image
            src={logot}
            alt="Logo"
            className="h-[32px] mb-4 mx-auto"
            width={100}
            height={500}
          />

          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-2">Verify OTP</h2>
            <p className="text-muted">
              Enter the OTP sent to your phone number
            </p>
          </div>

          <form onSubmit={form.handleSubmit(submitOtp)} className="space-y-6">
            <Controller
              name="otp"
              control={form.control}
              render={({ field }) => (
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={field.value}
                    onChange={field.onChange}
                  >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>

                  <InputOTPSeparator />

                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                  </InputOTP>
                </div>
              )}
            />
            <p className="flex justify-center items-center text-text">Didn’t Receive the Code? <Button variant ={'link'} className="text-primary">Resend</Button></p>

            <div className="flex justify-center">
               <Link href="/auth/create-password" className="w-full">
              <Button
                variant="outline"
                type="submit"
                className="mt-2 text-white 
               w-full bg-primary hover:bg-transparent hover:text-primary 
               hover:border hover:border-primary transition-all"
              >
               Verify
              </Button>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpComponent;
