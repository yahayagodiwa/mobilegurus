"use client";

import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Lock } from "lucide-react"; // icons

interface SimpleFieldProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function FormField({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
}: SimpleFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label htmlFor={name}>{label}</Label>}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="relative">
            {/* Prefix icon */}
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

            <Input
              {...field}
              id={name}
              type={isPassword && showPassword ? "text" : type}
              placeholder={placeholder}
              className="pl-10 pr-10" 
            />

            {/* Clickable suffix icon (toggle password) */}
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            )}

            {fieldState.error && (
              <p className="mt-1 text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
}
