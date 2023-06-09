'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';

import { SafeReservation, SafeUser } from '../types';

import Heading from '../components/Heading';
import Container from '../components/Container';
import ListingCard from '../components/listings/ListingCard';

interface ReservationClientProps {
	reservations: SafeReservation[];
	currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationClientProps> = ({
	reservations,
	currentUser,
}) => {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	return (
		<Container>
			<Heading title='Reservations' subtitle='Booking on your properties' />
			<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
				{reservations.map((reservation) => (
					<ListingCard
						key={reservation.id}
						data={reservation.listing}
						reservation={reservation}
						actionId={reservation.id}
						disabled={deletingId === reservation.id}
						actionLabel='Cancel guest reservation'
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
};

export default ReservationsClient;
