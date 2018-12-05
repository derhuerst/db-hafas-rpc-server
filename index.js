'use strict'

const http = require('http')
const createHafas = require('db-hafas')
const exposeHafasClient = require('hafas-client-rpc/server')

const port = process.env.PORT || 3000

const httpServer = http.createServer()
const hafas = createHafas('db-hafas-rpc-server')
const server = exposeHafasClient(httpServer, hafas)

httpServer.listen(port, (err) => {
	if (err) {
		console.error(err)
		process.exitCode = 1
	} else console.info(`Listening on ${port}.`)
})
