const event = require('../event')
// require('../manager/manager')
// require('../system/system')


const io = require('socket.io-client');
const socket = io.connect(process.env.PORT)
const arilineSocket = io.connect(process.env.AIRPORT)

socket.on('new-flight', (info) => {
	setTimeout(() => {
		console.log(`pilot:flight '${info.id}' took of`)
		arilineSocket.emit('took-off', info)
	}, 4000)
	setTimeout(() => {
		console.log(`piolt:fligth '${info.id}' arrived`)
		socket.emit('arrived', info)
	}, 7000)
})