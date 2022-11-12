require('../manager/manager')
require('../pilot/pilot')



const io =require( 'socket.io' )( 3001);


// io.on('connection',(socket)=>{
// 	socket.on('robi',(data)=>{
// 		console.log('hi',data)
// 	})
// 	socket.broadcast.emit('fzfz')
// })


const ariline = io.of('/airline')

io.on('connection', (socket) => {
	socket.on('new-flight', (detailes) => {
		io.emit('new-flight', detailes)
		console.log(`fligth{
			event:'new-flight',
			time:${detailes.time},
			detalies:{
				ariline:${detailes.airLine},
				Pailot Name:${detailes.PailotName},
				distination:${detailes.distination},
				ID:${detailes.idFligth},
			}
		}`)
	})

	socket.on('arrived', (detailes) => {
		io.emit('arrived', detailes)
		console.log(`fligth{
			event:'arrived',
			time:${detailes.time},
			detalies:{
				ariline:${detailes.airLine},
				Pailot Name:${detailes.PailotName},
				distination:${detailes.distination},
				ID:${detailes.idFligth},
			}
		}`)
	})

})


io.on('took-off',(detailes)=>{
	console.log(`fligth{
		event:'took-off',
		time:${detailes.time},
		detalies:{
			airLine:${detailes.airLine},
			pilot Name:${detailes.PailotName},
			distination:${detailes.distination},
			ID:${detailes.idFligth}
		}
	}`)
})




ariline.on('connection', (socket) => {
	socket.on('took-off', (detailes) => {
		console.log(`fligth{
			event:'took-off',
			time:${detailes.time},
			detalies:{
				ariline:${detailes.airLine},
				Pailot Name:${detailes.PailotName},
				distination:${detailes.distination},
				ID:${detailes.idFligth},
			}
		}`)
	})

})