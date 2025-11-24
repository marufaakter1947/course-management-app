import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const nextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
          const resp = await axios.post(`${base}/auth/login`, {
            email: credentials.email,
            password: credentials.password,
          });
          const user = resp.data; 
          if (user && user.email) {
            return {
              id: user._id ?? user.id ?? user.email,
              name: user.name ?? user.email,
              email: user.email,
              image: user.image ?? null,
            };
          }
          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
