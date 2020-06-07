import { GiCow, GiHealthNormal, GiOpenedFoodCan, GiVacuumCleaner } from 'react-icons/gi'
import { FaBaby } from 'react-icons/fa'
import { IoIosWoman } from 'react-icons/io'

export const categoryCards = [
	{
		img: IoIosWoman,
		desc: 'women'
	},
	{
		img: FaBaby,
		desc: 'children',
		route: '/'
	},
	{
		img: GiCow,
		desc: 'cattle',
		route: '/'
	}
]

export const informationCards = [
	{
		img: GiHealthNormal,
		desc: 'disease',
		route: ''
	},
	{
		img: GiOpenedFoodCan,
		desc: 'nutrition'
	},
	{
		img: GiVacuumCleaner,
		desc: 'hygiene'
	}
]
