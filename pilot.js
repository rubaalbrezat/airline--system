const event = require('./event')
require('./manager')
require('./system')


event.on('new-flight', (info) => {
	setTimeout(() => {
		console.log(`pilot:flight '${info.id}' took of`)
		event.emit('took-off', info)
	}, 4000)
	setTimeout(() => {
		console.log(`piolt:fligth '${info.id}' arrived`)
		event.emit('arrived', info)
	}, 7000)
})