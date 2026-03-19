import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const OrderSchema = z.object({
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  address: z.string().min(5),
  city: z.string().min(2),
  zipCode: z.string().min(3),
  country: z.string().min(2),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().min(1),
    price: z.number().min(0),
  })),
  totalAmount: z.number().min(0),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = OrderSchema.parse(body);

    const order = await prisma.order.create({
      data: {
        customerName: validatedData.customerName,
        customerEmail: validatedData.customerEmail,
        address: validatedData.address,
        city: validatedData.city,
        zipCode: validatedData.zipCode,
        country: validatedData.country,
        totalAmount: validatedData.totalAmount,
        status: 'pending',
        items: {
          create: validatedData.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
