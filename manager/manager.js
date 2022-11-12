// const event=require('../events')
const uuid = require('uuid');
const uniqId = uuid.v4();
const { faker } = require('@faker-js/faker')

const socket = require('socket.io-client')
const io = socket.connect('http://localhost:3000')







	setInterval(() => {
		let detailes = {
			airLine: 'Royal Jordanian Airlines',
			idFligth: uniqId,
			PailotName: faker.name.fullName(),
			distination: faker.address.county(),
			time: faker.date.future()
		}
		console.log(`Manager:new flight ${detailes.idFligth} have been schedule`)
		io.emit('new-flight', detailes)

	}, 10000);

	io.on('arrived', (detailes) => {
	console.log(`hello ${detailes.PailotName}, you are great thank you for youre effort`)
})