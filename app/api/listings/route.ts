import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
	// Define an async function to handle HTTP POST requests
	const currentUser = await getCurrentUser(); // Retrieve the currently authenticated user using the `getCurrentUser` function

	if (!currentUser) {
		// If there is no currently authenticated user, return an error response
		return NextResponse.error();
	}

	const body = await request.json(); // Parse the request body as JSON
	const {
		title,
		description,
		imageSrc,
		category,
		roomCount,
		bathroomCount,
		guestCount,
		location,
		price,
	} = body;

	Object.keys(body).forEach((value: any) => {
		// Check if any of the properties have a falsy value (e.g. undefined or null)
		if (!body[value]) {
			NextResponse.error(); // If any property has a falsy value, return an error response
		}
	});

	const listing = await prisma.listing.create({
		// Use the `prisma` client to create a new record in the `listing` table
		data: {
			title,
			description,
			imageSrc,
			category,
			roomCount,
			bathroomCount,
			guestCount,
			locationValue: location.value, // Assume the `location` property is an object with a `value` property, and store that value separately
			price: parseInt(price, 10), // Convert the `price` property to an integer
			userId: currentUser.id, // Set the `userId` property to the ID of the currently authenticated user
		},
	});

	return NextResponse.json(listing); // Return a JSON response with the details of the newly created `listing` object
}
