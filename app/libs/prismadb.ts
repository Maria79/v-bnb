import { PrismaClient } from '@prisma/client';
//  Best practice of using prisma with NextJs 13
declare global {
	var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
