import { NextResponse } from 'next/server';

export async function GET(){
    const data = {message:"Welcome to Movie Club"}
    return NextResponse.json(data)
}