'use client';

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema, SigninFormData } from '@/lib/signinSchema';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignupLoginForm({ type }: { type: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    /*ここにフォームデータを送るような仕組みを書く*/
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col items-center py-[30px] px-[160px]">

        <div className = "flex justify-end w-full mb-[48px]">
          <Button
            type="button"
            onClick={() => router.push(type === 'Login' ? '/register' : '/login')}
            variant="outline"
            className="flex items-center gap-2"
          >
            {type === 'Login' ? "Sign Up" : "Login"}
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        <div className = "flex flex-col items-center mt-[20px] mb-[32px] gap-[4px]">
          <h1 className = "font-bold text-[28px] tracking-[0px] text-center">Welcome to Evently</h1>
          <h3 className = "font-normal text-[16px] tracking-[0px] text-center">Manage your events with ease. Sign in to get started.</h3>
        </div>

        {/* Email フィールド */}
        <div className = "flex flex-col gap-[8px]  mx-[16px] my-[12px] w-[448px]">
          <h2 className ="text-[16px] font-medium">Email Address</h2>
          <input
            type="email"
            placeholder="Enter  your email"
            {...register('email')}
            className="bg-[#f0f2f5] px-[16px] py-[16px] rounded-[8px]"
          />
          {errors.email && (
            <p className="border-none bg-transparent">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password フィールド */}
        <div className="flex flex-col mb-[30px] gap-[8px] mx-[16px] my-[12px] w-[448px]">
          <h2 className ="text-[16px] font-medium">Password</h2>
          <input
            type="password"
            placeholder="Enter  your password"
            {...register('password')}
            className="bg-[#f0f2f5] px-[16px] py-[16px] rounded-[8px]"
          />
          {errors.password && (
            <p className="border-none bg-transparent">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* Submit ボタン */}
        <div className = "flex justify-end  w-[448px]">
          <Button
            type="submit"
            className="text-white bg-[rgba(51,65,85,1)]"
          >
            {type}
          </Button>
        </div>
      </div>
    </form>
  );
}
