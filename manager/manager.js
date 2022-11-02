const uuid = require('uuid');
const uniqId = uuid.v4();
const { faker } = require('@faker-js/faker')
// const event = require('../event')
const io = require('socket.io-client');
const socket = io.connect(process.env.PORT)



setInterval(() => {

	let info = {
		ariline: 'Royal Jordanian Airlines',
		id: uniqId,
		pailotName: faker.name.fullName(),
		distination: faker.address.county(),
		time: faker.date.future()

	}
	console.log(`Manager: new flight  ${info.id}  have been scheduled Flight`)
	socket.emit('new-flight', info)

}, 10000);

socket.on('arrived', (info) => {
	console.log(`hi${info.pailotName},you are great thank you `)
})