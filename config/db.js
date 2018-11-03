// config/dn.js
let username = 'goldenheaven';
let password = '12341234y';
let dbhost 	 = 'ds145113.mlab.com';
let port 	 = '45113';
let dbname 	 = 'notasapi';


module.exports ={
	url: `mongodb://${username}:${password}@${dbhost}:${port}/${dbname}`
};