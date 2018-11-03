//notas_routes.js

module.exports = function(app, db) {
	
app.get('/', (req,res) => {
	res.send ('API-MCM - Bom dia');	
});

//Criar Nota c_notas 
  app.post('/notas', (req, res) => {
  const nota = { Descricao: req.body.Descricao, Nota: req.body.Nota };
  
  db.collection('c_notas').insert(nota, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};