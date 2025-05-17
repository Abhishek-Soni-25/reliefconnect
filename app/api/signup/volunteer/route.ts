import { supabase } from "@/app/lib/supabaseClient"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { firstName,
        lastName,
        email,
        phone,
        dob,
        interests,
        hours,
        emgphone,
        skills,
        password, } = await request.json()

    // user already exists
    const { data } = await supabase
        .from("volunteer")
        .select('email')
        .eq('email', email)

    if (data && data.length > 0) {
        return NextResponse.json({ message: "Email already registered" }, { status: 400 })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const { } = await supabase
        .from('volunteer')
        .insert({
            firstName,
            lastName,
            email,
            phone,
            dob,
            interest: interests,
            hours,
            emgphone,
            skills, 
            password: hashedPassword
        })


    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
}