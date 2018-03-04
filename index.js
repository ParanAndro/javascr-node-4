var fs = require('fs');

fs.readdir('../javascr-node-4', 'utf-8', function(err, files) {
	if (err) throw err;
	fs.writeFile('listOfFiles.txt', files, 'utf-8', function(err) {
		if (err) throw err;
		fs.readFile('./listOfFiles.txt', 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Pliki w folderze:');
			console.log(data); 
		});
	});
});