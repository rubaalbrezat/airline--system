// const event = require('../event')
// require('../pilot')
// require('../manager/manager')

const socket_io =require('socket.io')
const io = socket_io(process.env.PORT)
const ariline = io.of('/airline')

io.on('connection', (socket) => {
	socket.on('new-flight', (info) => {
		io.emit('new-flight', info)
		console.log(`fligth{
			event:'new-flight',
			time:${info.time},
			detalies:{
				ariline:${info.ariline},
				Pailot Name:${info.pailotName},
				distination:${info.distination},
				ID:${info.id},
			}
		}`)
	})
	socket.on('arrived', (info) => {
		io.emit('arrived', info)
		console.log(`fligth{
			event:'arrived',
			time:${info.time},
			detalies:{
				ariline:${info.ariline},
				Pailot Name:${info.pailotName},
				distination:${info.distination},
				ID:${info.id},
			}
		}`)
	})

})







ariline.on('connection', (socket) => {
	socket.on('took-off', (info) => {
		console.log(`fligth{
			event:'took-off',
			time:${info.time},
			detalies:{
				ariline:${info.ariline},
				Pailot Name:${info.pailotName},
				distination:${info.distination},
				ID:${info.id},
			}
		}`)
	})

})