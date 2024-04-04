import NextAuth from "next-auth";
import { LoginResponse } from ".";

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
}
