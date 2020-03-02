var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.end('/concept/addUser.html')
    var pg = require('pg');

    const config = {
        user: "urwnoqvnqfrlin",
        password: "3e03a90dec3e37f1244b9a8669b10b2dbb06707f80c4c97c44b508ede640ea83",
        host: "ec2-184-72-236-57.compute-1.amazonaws.com",
        port: "5432",
        database: "d5n9us82kcigop"   
    };

    pg.connect(config, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new pg.Request();

      
        
        submit.addEventListener("click", function() {
            const firstName = document.getElementById('first_name');
            const lastName = document.getElementById('last_name');
            const birthDate = document.getElementById('birth_date');

            const gender = "";
            if (document.getElementById('male').hasAttribute('checked')){
                gender = document.getElementById('male').getAttribute('label');  
            }else{
                gender = document.getElementById('female').getAttribute('label');
            }
            
            const phoneNumber = document.getElementById('phone_number');
            const password = document.getElementById('password');
        
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            request.query(`SELECT "logActivity"(${date}, ${time}, 'Add employee.', 'Test'`);
            
            request.query(
                `SELECT "addEmployee"( ${firstName}, ${lastName}, ${birthDate}, ${gender}, ${phoneNumber}, ${password}`,
                (err, res) => {
                console.log(err, res);
                pool.end();
                }
            )
        })

    });
})

var server = app.listen(5000, function() {
    console.log('Running...');
})

   /*
    .then(() => client.query(queryString, (err, res) => {
        if (err !== undefined) {
            // log the error to console
            console.log("Postgres INSERT error:", err);
        
            // get the keys for the error
            var keys = Object.keys(err);
            console.log("\nkeys for Postgres error:", keys);
        
            // get the error position of SQL string
            console.log("Postgres error position:", err.position);
        }
        
        // check if the response is not 'undefined'
        if (res !== undefined) {
            // log the response to console
            console.log("Postgres response:", res);
        
            // get the keys for the response object
            var keys = Object.keys(res);
        
            // log the response keys to console
            console.log("\nkeys type:", typeof keys);
            console.log("keys for Postgres response:", keys);
        
            if (res.rowCount > 0) {
            console.log("# of records inserted:", res.rowCount);
            } else {
            console.log("No records were inserted.");
            }
        }
        })
    )
    .catch(e => console.log(e))
    .finally(() => client.end())
})
*/

