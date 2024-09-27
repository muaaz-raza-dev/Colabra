import React from "react";
import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Label } from "@/shadcn/components/ui/label";
import { Input } from "@/shadcn/components/ui/input";
import { Lock, Mail } from "lucide-react";
import PasswordInput from "@/components/global/password-input";
import GoogleAuthButton from "@/components/auth/Google-auth-button";

export default function page() {
  return (
    <div className="min-h-[80vh] flex flex-col gap-8 items-center justify-center  overflow-hidden">
      {/* Background */}
      <span className="authBg h-[28rem]  w-screen absolute bottom-0 -z-20"></span> 
      <Card className="w-full max-w-md p-3 shadow-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome back!
          </CardTitle>
        </CardHeader>
          <CardContent className="space-y-3">
           <GoogleAuthButton/> 
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <div className="space-y-0.5 ">
            <Label className="text-xs font-semibold " htmlFor="email">
              Work Email
            </Label>
            <div className="border group rounded-lg flex gap-1 items-center px-2 ">
              <Mail className="text-muted-foreground" size={22} />
              <Input
                id="email"
                type="email"
                placeholder="Enter your work email"
                className="border-none  outline-none ring-0 focus:outline-none focus:border-no placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-0.5">
            <Label className="text-xs font-semibold " htmlFor="password">
              Password
            </Label>
            <div className="border group rounded-lg flex gap-1 items-center px-2 ">
              <Lock className="text-muted-foreground " size={22} />
              <PasswordInput />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full font-semibold  hover:bg-accent-foreground shadow  hover:opacity-90 transition-colors ">
            Sign in
          </Button>
        </CardFooter>
      </Card>
      <div className=" text-center text-muted text-sm">
        Don't have an account?{" "}
        <a href="#" className="font-semibold hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
