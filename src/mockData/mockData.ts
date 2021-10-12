const data = [
	{
		name: 'John Doe',
		email: 'jd@gmail.com',
		phone: '040123123'
	},
	{
		name: 'George Clooney',
		email: 'george@clooney.com',
		phone: '040234234'
	},
	{
		name: 'Matt Damon',
		email: 'matt@damon.com',
		phone: '040456456'
	},
	{
		name: 'Kirsten Scott',
		email: 'kirsten@scott.com',
		phone: '040012012'
	},
	{
		name: 'Kaisa Kankinen',
		email: 'kaisa@kankinen.com',
		phone: '050123123'
	},
	{
		name: 'Donald Duck',
		email: 'donald@duck.com',
		phone: '040987097'
	},
	{
		name: 'Adam Apple',
		email: 'adam@apple.com',
		phone: '040123124'
	},
	{
		name: 'Beata McDo',
		email: 'beaat@mcdo.com',
		phone: '040456456'
	},
	{
		name: 'Ron Jeffries',
		email: 'ron@jeffries.com',
		phone: '040012012'
	},
	{
		name: 'Jane Doe',
		email: 'jane@doe.com',
		phone: '050123123'
	},
	{
		name: 'John Doe',
		email: 'jd@gmail.com',
		phone: '040123123'
	},
	{
		name: 'Robert Bats',
		email: 'robert@bats.com',
		phone: '040234124'
	},
	{
		name: 'Carl Damon',
		email: 'carl@damon.com',
		phone: '040456456'
	},
	{
		name: 'Scott Dell',
		email: 'scott@dell.com',
		phone: '040012012'
	},
	{
		name: 'Martin Fowler',
		email: 'martin@fowler.com',
		phone: '050123123'
	},
	{
		name: 'Jimmy James',
		email: 'jimmy@james.com',
		phone: '040987543'
	},
	{
		name: 'Greta Great',
		email: 'greta@great.com',
		phone: '040123124'
	},
	{
		name: 'Joseph Monk',
		email: 'joseph@monk.com',
		phone: '040456456'
	},
	{
		name: 'Pekka Pekkanen',
		email: 'pekka@pekkanen.com',
		phone: '040012012'
	},
	{
		name: 'Matti Mattinen',
		email: 'matti@mattinen.com',
		phone: '050123123'
	}
]

export const participants = data.map(participant => {
	return {
		id: Math.floor(Math.random() * 10000),
		...participant
	}
})