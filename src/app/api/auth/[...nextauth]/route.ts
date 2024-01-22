import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/prisma/prisma'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "*****" },
            },
            async authorize(credentials, req) {

                const userFound = await prisma.user.findUnique({
                    where: {
                        email: credentials!.email
                    }
                })

                if (!userFound) throw new Error('No user found')

                console.log(userFound)

                const matchPassword = await bcrypt.compare(credentials!.password, userFound.password)

                if (!matchPassword) throw new Error('Wrong password')

                return {
                    id: userFound.id,
                    name: userFound.name,
                    email: userFound.email,
                }
            },
        }),
    ],    
    pages: {
        signIn: "/auth/login",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };