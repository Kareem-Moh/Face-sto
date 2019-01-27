//Express Boilerplate code
let express = require('express');
let app = express();
let port = 3000;

//Endpoint redirection code
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
