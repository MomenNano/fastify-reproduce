const path = require('path')
const server = require('fastify')({
  logger: true
})
const autoload = require('fastify-autoload')
const blipp = require('fastify-blipp')

server.register(blipp)

server.register(autoload, {
	dir: path.join(__dirname, 'dir'),
	options: { prefix: 'v1/' }
})

const start = async () => {
	try {
		await server.listen(3002)
		server.blipp();
	} catch (err) {
		server.log.error(err)
		process.exit(1)
	}
}

start()