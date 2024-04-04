import CredentialsProvider from "next-auth/providers/credentials";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const authOption = {
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
          console.log("check your credentials");
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
  secret: process.env.AUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  //   maxAge: 30 * 24 * 60 * 60, //30일
  // },
};

export default authOption;
