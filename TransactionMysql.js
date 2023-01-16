// In order to insert records into multiple tables using a transaction in Node.js and MySQL, 
// you will need to use the mysql2 library, which supports transactions. 
// Here is an example of how to accomplish this:



const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'your_host',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

connection.beginTransaction(function(err) {
    if (err) { throw err; }
    connection.query('INSERT INTO table1 SET ?', { column1: 'value1', column2: 'value2' }, function(err, result) {
        if (err) {
            connection.rollback(function() {
                throw err;
            });
        }

        connection.query('INSERT INTO table2 SET ?', { column1: 'value1', column2: 'value2' }, function(err, result) {
            if (err) {
                connection.rollback(function() {
                    throw err;
                });
            }
            connection.commit(function(err) {
                if (err) {
                    connection.rollback(function() {
                        throw err;
                    });
                }
                console.log('Transaction Complete.');
                connection.end();
            });
        });
    });
});



// This example demonstrates how to start a transaction,
// insert records into two different tables (table1 and table2),
// and then commit the transaction.
// If there is an error during any of the queries, the transaction will be rolled back.