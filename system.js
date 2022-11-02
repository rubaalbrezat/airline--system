const event = require('./event')
require('./pilot')
require('./manager')

event.on('new-flight', (info) => {
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

event.on('took-off', (info) => {
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

event.on('arrived', (info) => {
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