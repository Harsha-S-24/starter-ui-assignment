// Import necessary modules
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Create an instance of PrismaClient
const prisma = new PrismaClient();

export async function POST(req:NextResponse) 
{
    const body=await req.json();
    const {name,price}=body;
    const createdPlan = await prisma.plan.create({
        data: {
          name,
          price
        },
      });

      // Send a success response with the  res.status(201).json(createdPlan);
      return Response.json("success");
    
    }