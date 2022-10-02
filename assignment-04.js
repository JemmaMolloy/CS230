//code inspired from JK demo and w3schools.com

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs"); 
var port = 8000;

var mysql = require("mysql");

var app = mysql.createConnection({
  host: "webcourse.cs.nuim.ie",
  user: "u190100",
  password: "ailaavaeph5Xie9E",
  database: "cs230_u190100"

});

app.connect(function (err) {
    if (err) throw err;
    console.log("Database (cs230_u190100): Connected!");

    //Part i of Assignment

    //CRUD Activity

    //C(create) - how to create user record and add to database
    if (err) throw err;
    //add user information
    var insertUI = "INSERT INTO UserInformation (UserID, Title, FirstName, Surname, MobileNumber, EmailAddress) VALUES ('1','Ms','Ali','Smith','0867823142','alismith@email.com')";
    app.query(insertUI, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user information table");
    });

    if (err) throw err;
    //add user home address
    var insertUHA = "INSERT INTO UserHomeAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('1', 'Number 3','Bromstone Avenue','The Estate', 'Kildare', 'W9178Y2')";
    app.query(insertUHA, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user home address table");
    });  
    
    if (err) throw err;
    //add user shipping address
    var insertUSA = "INSERT INTO UserShippingAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('1', 'Number 3','Bromstone Avenue','The Estate', 'Kildare', 'W9178Y2')";
    app.query(insertUSA, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user shipping address table");
    });

    //add user information
    var insertUI = "INSERT INTO UserInformation (UserID, Title, FirstName, Surname, MobileNumber, EmailAddress) VALUES ('2','Mr','Jordan','Smith','0867823129','jordansmith12@email.com')";
    app.query(insertUI, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user information table");
    });

    if (err) throw err;
    //add user home address
    var insertUHA = "INSERT INTO UserHomeAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('2', 'Number 3','Bromstone Avenue','The Estate', 'Kildare', 'W9178Y2')";
    app.query(insertUHA, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user home address table");
    });  
    
    if (err) throw err;
    //add user shipping address
    var insertUSA = "INSERT INTO UserShippingAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('2', 'Number 3','Bromstone Avenue','The Estate', 'Kildare', 'W9178Y2')";
    app.query(insertUSA, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user shipping address table");
    });

    //add user information
    var insertUI = "INSERT INTO UserInformation (UserID, Title, FirstName, Surname, MobileNumber, EmailAddress) VALUES ('3','Mrs','Martha','Smith','087723542','martinasmith@email.com')";
    app.query(insertUI, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user information table");
    });

    if (err) throw err;
    //add user home address
    var insertUHA = "INSERT INTO UserHomeAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('3', 'Number 9','Bromstone Avenue','The Estate', 'Kildare', 'W9178P9')";
    app.query(insertUHA, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user home address table");
    });  
    
    if (err) throw err;
    //add user shipping address
    var insertUSA = "INSERT INTO UserShippingAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('3', 'Number 9','Bromstone Avenue','The Estate', 'Kildare', 'W9178P9')";
    app.query(insertUSA, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted to user shipping address table");
    });

    //R(retrieve/search) randomly select and supply all users matching a supplied name
    var name = "Ali";
    app.query("SELECT * FROM UserInformation WHERE FirstName = "+ mysql.escape(name), function (err, result) {
        if (err) throw err;
        console.log("" + result[0].Title + " " + result[0].FirstName+ " " + result[0].Surname + " "+result[0].MobileNumber + " " +result[0].EmailAddress);
    }); 

    //U(update) update three elements of a specified user record (Phone, Email, Title) and all or any of their Address data.
    app.query("Update UserInformation SET MobileNumber = '087243651', EmailAddress= 'alismith2021@email.com', Title = 'Mrs' WHERE UserId ='1'", function (err, result){
        if (err) throw err;
        console.log("1 record updated in user information table");

    });
    app.query("Update UserHomeAddress SET AddressLine1 = 'Number 12', AddressLine2= 'Brimstome Lane', Eircode = 'W9198Z5' WHERE UserId ='1'", function (err, result){
        if (err) throw err;
        console.log("1 record updated in user home address table");

    });
    app.query("Update UserShippingAddress SET AddressLine1 = 'Number 12', AddressLine2= 'Brimstome Lane', Eircode = 'W9198Z5' WHERE UserId ='1'", function (err, result){
        if (err) throw err;
        console.log("1 record updated in user shipping address table");

    });

    //D(delete) all records for a user matching a combination of Email Phone and Name
    app.query("SELECT * FROM UserInformation WHERE EmailAddress = 'alismith2021@email.com' AND MobileNumber = '087243651' AND FirstName = 'Ali' ", function (err, result) {
        if (err) throw err;
        var id2 = result[0].UserID;
        app.query("DELETE FROM UserInformation WHERE UserID = "+ mysql.escape(id2), function (err, result) {
            if (err) throw err;
            console.log("1 record deleted from user information table");
        });
        app.query("DELETE FROM UserHomeAddress WHERE UserID = "+ mysql.escape(id2), function (err, result) {
            if (err) throw err;
            console.log("corresponding 1 record deleted from user home address table");
        });
        app.query("DELETE FROM UserShippingAddress WHERE UserID = "+ mysql.escape(id2), function (err, result) {
            if (err) throw err;
            console.log("corresponding 1 record deleted from user shipping address table");
        });
    });
});

//Part ii of Assignment -- backend

var id =3; //started with two user already inputted, this will keep track for a unique id
var server = http.createServer(function (request, response) {
    console.log("in request");
    var currentRoute = request.url.toString().split("?")[0];
    var currentMethod = request.method;
    var requestBody = "";
    
    if(currentRoute === "/api/user"){
        //C(create) - how to create user record and add to database
        if (currentMethod === "POST") {
            request.on("data", function (section) {
                requestBody += section.toString();
            });

            const { headers } = request;
            let ctype = headers["content-type"];
            console.log("RECEIVED Content-Type: " + ctype);

            request.on("end", function () {
                id = id+1; //increase private key in this case userid
                var userData = "";
                
                if (ctype.match(new RegExp("^application/x-www-form-urlencoded"))) {
                    userData = querystring.parse(requestBody);
                } else {
                    userData = JSON.parse(requestBody);
                }
                
                console.log("Data entered: "+JSON.stringify(userData, null, 2)+"\n");

                //input data
                var insertUI = `INSERT INTO UserInformation (UserID, Title, FirstName, Surname, MobileNumber, EmailAddress) VALUES ('${id}','${userData.title}','${userData.firstname}', '${userData.surname}','${userData.mobile}','${userData.email}')`;
                app.query(insertUI, function (err, result) {
                    if (err) throw err;
                    console.log("User Information Inserted");
                });
                var insertUHA = `INSERT INTO UserHomeAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('${id}','${userData.haddressline1}','${userData.haddressline2}', '${userData.htown}','${userData.hcountycity}','${userData.heircode}')`;
                app.query(insertUHA, function (err, result) {
                    if (err) throw err;
                    console.log("User Home Address Inserted");
                });
                var insertUSA = `INSERT INTO UserShippingAddress (UserID, AddressLine1, AddressLine2, Town, CountyCity, Eircode) VALUES ('${id}','${userData.saddressline1}','${userData.saddressline2}', '${userData.stown}','${userData.scountycity}','${userData.seircode}')`;
                app.query(insertUSA, function (err, result) {
                    if (err) throw err;
                    console.log("User Shipping Address Inserted");
                });

                response.writeHead(200, headers);
                response.end("User (" +userData.firstname +" " +userData.surname +") data added to the Database!"
            );

            });
        } 
        //R(retrieve/search) select and supply all data in the tables
        else if (currentMethod === "GET"){
            
            var headers = {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"};

            app.query("SELECT * FROM UserInformation",function (err, result) {
                if (err) throw err;
                  console.log(JSON.stringify(result, null, 2)+"\n");
                  response.writeHead(200, headers);
                  response.end(JSON.stringify(result));
                }
            );
        }
    }
    else if(currentRoute === "/"){
        fs.readFile(__dirname + "/index.html", function (err, data) {
            var headers = {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"};
            response.writeHead(200, headers);
            response.end(data); 
        }); 
    }

});

//start the server
server.listen(8000, function() {
    console.log("Listening on http://localhost:8000/");
  });