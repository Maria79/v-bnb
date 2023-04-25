// 'use client';

import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
	GiWindmill,
	GiCaveEntrance,
	GiSpookyHouse,
	GiIsland,
	GiBoatFishing,
	GiCastle,
	GiForestCamp,
	GiDesert,
	GiBarn,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { MdOutlineVilla, MdOutlineCabin } from 'react-icons/md';
import { RiSailboatLine } from 'react-icons/ri';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This property is close to the beach!',
	},
	{
		label: 'Windmills',
		icon: GiWindmill,
		description: 'This property has windmills!',
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This property has windmills!',
	}, //
	{
		label: 'Pool',
		icon: TbPool,
		description: 'This property  has a pool!',
	},
	{
		label: 'Countryside',
		icon: TbMountain,
		description: 'This property is in the countryside!',
	},
	{
		label: 'Island',
		icon: GiIsland,
		description: 'This property is on an island!',
	},
	{
		label: 'Cave',
		icon: GiCaveEntrance,
		description: 'This property is on a cave!',
	},
	{
		label: 'Mansions',
		icon: GiSpookyHouse,
		description: 'This property is a mansion!',
	},
	{
		label: 'Cabins',
		icon: MdOutlineCabin,
		description: 'This property is a cabin!',
	},
	{
		label: 'Boats',
		icon: RiSailboatLine,
		description: 'This property is on a boat!',
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'This property is close to a lake!',
	},
	{
		label: 'Skiing',
		icon: FaSkiing,
		description: 'This property has skiing activities!',
	},
	{
		label: 'Castle',
		icon: GiCastle,
		description: 'This property is in a castle!',
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		GiFores: 'This property has camping activities!',
	},
	{
		label: 'Artic',
		icon: BsSnow,
		GiFores: 'This property has camping activities!',
	},
	{
		label: 'Desert',
		icon: GiDesert,
		GiFores: 'This property is in the desert!',
	},
	{
		label: 'Barn',
		icon: GiBarn,
		GiFores: 'This property is in the barn!',
	},
	{
		label: 'Lux',
		icon: IoDiamond,
		GiFores: 'This property is luxurious!',
	},
];

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();

	const isMainPage = pathname === '/';

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category === item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
