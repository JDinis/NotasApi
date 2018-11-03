// routes/index.js

const notasRoutes = require('./notas_routes');

module.exports = function(app,db){
	notasRoutes(app,db);
	
	// Outras rotas
};