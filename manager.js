const uuid = require('uuid');
const uniqId = uuid.v4();
const { faker } = require('@faker-js/faker')
const event = require('./event')

// const name=faker.name.fullName();
// const id=uniqId
// const distination =faker.address.county();
// console.log(id,name,distination)


setInterval(() => {

	let info = {
		ariline: 'Royal Jordanian Airlines',
		id: uniqId,
		pailotName: faker.name.fullName(),
		distination: faker.address.county(),
		time: faker.date.future()

	}
	console.log(`Manager: new flight  ${info.id}  have been scheduled Flight`)
	event.emit('new-flight', info)

}, 10000);

event.on('arrived', (info) => {
	console.log(`hi${info.pailotName},you are great thank you `)
})