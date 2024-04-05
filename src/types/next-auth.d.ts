import NextAuth, { User } from "next-auth";
import { LoginResponse } from ".";

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
  interface User {
    token: string;
  }
}
