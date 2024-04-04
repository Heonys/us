import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        identity: {
          label: "identity",
          type: "email",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const credentialDetails = {
          identity: credentials?.identity,
          password: credentials?.password,
        };

        const response = await fetch(
          baseURL + "/api/collections/users/auth-with-password",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentialDetails),
          },
        );

        if (!response.ok) {
          return null;
        }

        const user = await response.json();

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

export default authOption;
