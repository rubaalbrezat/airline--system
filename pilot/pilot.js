// const event =require('../events')
require('../manager/manager')
require('../system')



const socket = require('socket.io-client')
const io = socket.connect('http://localhost:3000')
const airIO = socket.connect('http://localhost:3000/airline')

io.on('new-flight', (detailes) => {
	setTimeout(() => {
		console.log(`pilot: fligth ${detailes.idFligth} took-off`)
        airIO.emit('took-off',detailes)
	},4000)


	
		setTimeout(()=>{
			console.log(`piolt:fligth ${detailes.idFligth} has arrived`)
			io.emit('arrived',detailes)
		
	},7000)
})
