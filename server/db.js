const pg = require('pg');

const uri = 'postgres://wvpszqdh:MUR1rI1ADIIFkrs1ZloNrAND--PjRyTw@elmer.db.elephantsql.com:5432/wvpszqdh';
const db = {};

const connected = new Promise(pg.connect(uri, (err, client, done) => {
  if (err)  {
    throw new Erorr(err)
  }
  db.conn = client;
  console.log('Connected to Database..')
}));

module.exports = db;



// db.conn.query("SELECT * FROM items");
// query.on("row", function (row, result) {
//     result.addRow(row);
// });

// query.on("end", function (result) {
//     console.log(JSON.stringify(result.rows, null, "    "));
//     client.end();
// });
