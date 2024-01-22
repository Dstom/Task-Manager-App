import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from '@/prisma/prisma'
import { object, string } from 'zod';

const registerUserSchema = object({
    email: string().email(),
    password: string(),
    name: string().optional()
})

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        console.log({ data });
        const result = registerUserSchema.safeParse(data);
        if (!result.success) {
            return NextResponse.json({
                message: result.error.message
            }, { status: 400 })

        }
        const userFound = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userFound) {
            return NextResponse.json(
                { message: "Email already exists", },
                { status: 400, }
            );
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
            },
        });

        const { password: _, ...user } = newUser;

        return NextResponse.json(user);
    } catch (error: unknown) {
        return NextResponse.json<MyError>(
            { message: getErrorMessage(error), }, { status: 500, }
        );
    }
}

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

type MyError = {
    message: string
}