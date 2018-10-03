var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ajdugger",
  password: "",
  database: "c9"
});


function insertProduct(name, type, price){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        var record = [[name, type, price]];
        var sql = "INSERT INTO products (name, type, price) VALUES ?";
        console.log(sql);
        con.query(sql,[record], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record inserted");
    });
  
  con.end();
});

}

function getProductsByType(type){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        var record = type;
        var sql = "SELECT name, price FROM products WHERE type=?";
        console.log(sql);
        con.query(sql, [record] , function (err, result) {
        if (err) throw err;
        return result;
    });
  
  con.end();
});

}

var products = getProductsByType('treat');

console.log(products);