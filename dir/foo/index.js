// This works fine when the path isn't empty
// but when remove the end slash in fastify autoload prefix it will be merge like /v1foo/bar

module.exports = async (server, opts) => {
	server.get('/bar', async (req, reply) => {
		reply.send({ works: true })
	})
}