
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', itemController.getTopItems);

app.post('/findItems', metaController.searchItems
                       itemController.getAllItemsFromIds);

app.post('/getItemById', itemController.getItemById);

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
