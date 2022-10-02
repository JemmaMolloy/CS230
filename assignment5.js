const { MongoClient } = require("mongodb");
 
// This code was inspired by W3Schools.com and the modgoDB resource materials.
//The database and code was modelled off my assignment4 design.   
//async and await is used to to pause until a Promise is settled - this is explained in the mongodb
//resource material.                                                                                                                              
const url = "mongodb+srv://User:UserPassword@cluster0.gldiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "MobileStore";
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server"+"\n");
        const db = client.db(dbName);

        //Create
        //customer information
        const col = db.collection("CustomerPersonalInformation");
        const col2 = db.collection("CustomerHomeAddress");
        const col3 = db.collection("CustomerShippingAddress");
        await insertCustomer(col,col2,col3);
        //item details
        const col4 = db.collection("ItemDetails");
        await insertItems(col4)
        //order details
        const col5 = db.collection("OrderDetails");
        await insertOrders(col5);


        //Retrieve
        //customer details
        await findCustomer(col,col2,col3);
        //item details
        await findItem(col4);
        //order details
        await findOrder(col5);

        //Update
        //customer details - randomly select and update phone, email and title,
        //and all or any of their address data
        await updateCustomer(col,col2,col3);
        //item details
        await updateItem(col4);
        //order details
        await updateOrder(col5);

        //Delete
        //delete all  records	 for a	customer matching a specified email, phone and name 
        await deleteCustomer(col,col2,col3);
        //delete item
        await deleteItem(col4);
        //delete order
        await deleteOrder(col5);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
async function insertCustomer(col,col2,col3) {
  //customer information
  await col.insertOne({  
    "_id" :1, 
    "title": "Mrs",
    "firstName": "Amrita",
    "surname": "Montes",                                                                                                                              
    "mobile":  "087653421",                                                                                                                                
    "emailaddress": "amritamontes@email.com",
  });
  console.log("1 customer inserted");
  await col.insertOne({  
    "_id" :2, 
    "title": "Mr",
    "firstName": "Christy",
    "surname": "Gallagher",                                                                                                                                
    "mobile": "089745365",                                                                                                                                 
    "emailaddress": "christygallagher@email.com",
  });
  console.log("1 customer inserted");
  await col.insertOne({  
    "_id" :3,
    "title": "Mx", 
    "firstName": "Alex",
    "surname": "Waters",                                                                                                                                
    "mobile":  "0831287645",                                                                                                                                
    "emailaddress": "alexwaters@email.com",
  });
  console.log("1 customer inserted");
  await col.insertOne({  
    "_id" :4,
    "title": "Ms", 
    "firstName": "Lacie",
    "surname": "Bate",                                                                                                                                
    "mobile":  "086759824",                                                                                                                                
    "emailaddress": "laciebate@email.com",
  });
  console.log("1 customer inserted");
  await col2.insertOne({  
    "_id" :1, 
    "addressline1": "Sea View",
    "addressline2": "Templecarrig Lower",                                                                                                                                
    "town":  "Bray",                                                                                                                                
    "countycity": "Wicklow",
    "eircode": "A98Y4E9",
  });
  await col2.insertOne({  
    "_id" :2, 
    "addressline1": "1 Sea Front Park",
    "addressline2": "",                                                                                                                                
    "town":  "Rossnowlagh",                                                                                                                                
    "countycity": "Donegal",
    "eircode": "F94P8C0",
  });
  await col2.insertOne({  
    "_id" :3, 
    "addressline1": "Sealinks",
    "addressline2": "Courtown",                                                                                                                                
    "town":  "Gorey",                                                                                                                                
    "countycity": "Wexford",
    "eircode": "Y25FY90",
  });
  await col2.insertOne({  
    "_id" :4, 
    "addressline1": "SeaShore",
    "addressline2": "Main Street",                                                                                                                                
    "town":  "Ashford",                                                                                                                                
    "countycity": "Wicklow",
    "eircode": "Z98Y7J2",
  });
  await col3.insertOne({  
    "_id" :1, 
    "addressline1": "Sea View",
    "addressline2": "Templecarrig Lower",                                                                                                                                
    "town":  "Bray",                                                                                                                                
    "countycity": "Wicklow",
    "eircode": "A98Y4E9",
  });
  await col3.insertOne({  
    "_id" :2, 
    "addressline1": "1 Sea Front Park",
    "addressline2": "",                                                                                                                                
    "town":  "Rossnowlagh",                                                                                                                                
    "countycity": "Donegal",
    "eircode": "F94P8C0",
  });
  await col3.insertOne({  
    "_id" :3, 
    "addressline1": "Sealinks",
    "addressline2": "Courtown",                                                                                                                                
    "town":  "Gorey",                                                                                                                                
    "countycity": "Wexford",
    "eircode": "Y25FY90",
  });
  await col3.insertOne({  
    "_id" :4, 
    "addressline1": "SeaShore",
    "addressline2": "Main Street",                                                                                                                                
    "town":  "Ashford",                                                                                                                                
    "countycity": "Wicklow",
    "eircode": "Z98Y7J2",
  });
}

async function insertItems(col4){
  await col4.insertOne({  
    "_id" :1, 
    "manufacturer": "Apple",
    "model": "iphone X",                                                                                                                                
    "price":  "€400",                                                                                                                               
  });
  console.log("1 item inserted");
  await col4.insertOne({  
    "_id" :2, 
    "manufacturer": "Samsung",
    "model": "Galaxy S20",                                                                                                                                
    "price":  "€200",                                                                                                                               
  });
  console.log("1 item inserted");
  await col4.insertOne({  
    "_id" :3, 
    "manufacturer": "Sony",
    "model": "Xperia 4",                                                                                                                                
    "price":  "€300",                                                                                                                               
  });  
  console.log("1 item inserted");
  await col4.insertOne({  
    "_id" :4, 
    "manufacturer": "Hauwei",
    "model": "P30 Lite",                                                                                                                                
    "price":  "€250",                                                                                                                               
  });
  console.log("1 item inserted");
  await col4.insertOne({  
    "_id" :5, 
    "manufacturer": "Apple",
    "model": "iPhone 5S",                                                                                                                                
    "price":  "€150",                                                                                                                               
  });
  console.log("1 item inserted");
}
async function insertOrders(col5){
  await col5.insertOne({  
    "_id" :1, 
    "customer_id": 1,
    "items": ["iphone X"],                                                                                                                   
  });
  console.log("1 order inserted");
  await col5.insertOne({  
    "_id" :2, 
    "customer_id": 2,
    //items is an array so that more than one item can be bought in an order
    "items": ["iphone X", "Xperia 4", "P30 Lite"],                                                                                        
  });
  console.log("1 order inserted");
  await col5.insertOne({  
    "_id" :3, 
    "customer_id": 1,
    "items": ["Galaxy S20"],                                                                                                                  
  });
  console.log("1 order inserted");
  console.log("1 order inserted");
  await col5.insertOne({  
    "_id" :4, 
    "customer_id": 1,
    "items": ["Galaxy S20", "P30 Lite"],                                                                                                                  
  });
  console.log("1 order inserted");
  console.log("");
}
async function findCustomer(col,col2,col3){
  var r = Math.floor(Math.random() * 4) + 1; //random number between 1 and 4
  console.log("***DETAILS OF CUSTOMER***");
  console.log("Personal Information:");
  var result = await col.find({ _id: r,}).toArray();
  //printing
  console.log("ID: "+result[0]._id);
  console.log("Title: "+result[0].title);
  console.log("First Name: "+result[0].firstName);
  console.log("Surname: "+result[0].surname);
  console.log("Mobile: "+result[0].mobile);
  console.log("Email: "+result[0].emailaddress);
  console.log("Home Address:");
  result = await col2.find({ _id: r,}).toArray();
  //printing
  console.log("Address line 1: "+result[0].addressline1);
  console.log("Address Line 2: "+result[0].addressline2);
  console.log("Town: "+result[0].town);
  console.log("County/City: "+result[0].countycity);
  console.log("Eircode: "+result[0].eircode);
  console.log("Shipping Address:");
  results = await col3.find({ _id: r,}).toArray();
  //printing
  console.log("Address line 1: "+result[0].addressline1);
  console.log("Address Line 2: "+result[0].addressline2);
  console.log("Town: "+result[0].town);
  console.log("County/City: "+result[0].countycity);
  console.log("Eircode: "+result[0].eircode);
  console.log("");
}
async function findItem(col4){
  var r = Math.floor(Math.random() * 4) + 1; //random number between 1 and 4
  console.log("***DETAILS OF ITEM***");
  var result = await col4.find({ _id: r,}).toArray();
  //printing
  console.log("ID: "+result[0]._id);
  console.log("Manufacturer: "+result[0].manufacturer);
  console.log("Model: "+result[0].model);
  console.log("Price: "+result[0].price);
  console.log("");
}
async function findOrder(col5){
  var r = Math.floor(Math.random() * 4) + 1; //random number between 1 and 4
  console.log("***DETAILS OF ORDER***");
  var result = await col5.find({ _id: r,}).toArray();
  //printing
  console.log("Order ID: "+result[0]._id);
  console.log("Customer ID: "+result[0].customer_id);
  var it = result[0].items; //items is an array
  for(i =0;i<it.length;i++){
    console.log("Item: "+it[i]);
  }
  console.log("");
}
async function updateCustomer(col,col2,col3){
  var r = Math.floor(Math.random() * 3) + 1; 
  await col.updateOne({ _id: r,}, {$set: { title: "Dr", mobile: "086143729",emailaddress:"work@email.com" }});
  await col2.updateOne({ _id: r,}, {$set: { addressline1: "1 Sea Drive" }});
  await col3.updateOne({ _id: r,}, {$set: { addressline1: "1 Sea Drive" }});
}
async function updateItem(col4){
  var r = Math.floor(Math.random() * 4) + 1; //random number between 1 and 4
  await col4.updateOne({ _id: r,}, {$set: { price: "350" }});
  console.log("**UPDATED ITEM**");
  var result = await col4.find({ _id: r,}).toArray();
  //printing
  console.log("ID: "+result[0]._id);
  console.log("Manufacturer: "+result[0].manufacturer);
  console.log("Model: "+result[0].model);
  console.log("Price: "+result[0].price);
  console.log("");
}
async function updateOrder(col5){
  var r = Math.floor(Math.random() * 3) + 1; //random number between 1 and 3
  await col5.updateOne({ _id: r,}, {$set: { items: "Xperia 4" }});
  console.log("**UPDATED ORDER**");
  var result = await col5.find({ _id: r,}).toArray();
  //printing
  console.log("Order ID: "+result[0]._id);
  console.log("Customer ID: "+result[0].customer_id);
  console.log("Item: "+result[0].items);
  console.log("");
}
async function deleteCustomer(col,col2,col3){
  var id =0;
  var result = await col.find({firstName:"Lacie",mobile:"086759824",emailaddress:"laciebate@email.com"}).toArray();
  id = result[0]._id; //use id to make sure the right customer is deleted.
  await col.deleteOne({firstName:"Lacie",mobile:"086759824",emailaddress:"laciebate@email.com"});
  await col2.deleteOne({_id:id});
  await col3.deleteOne({_id:id});
  console.log("***All records of customer Lacie Bate DELETED***");
}
async function deleteItem(col4){
  await col4.deleteOne({model:"iPhone 5S"});
  console.log("***Item iPhone 5S DELETED***");
}
async function deleteOrder(col5){
  var r = Math.floor(Math.random() * 3) + 1;
  await col5.deleteOne({_id:r});
  console.log("***Order "+r+" DELETED***");
}

run();
//data modeling apporach: in this database i made 5 different collections:
//1 for customer personal information, 1 for their home and 1 for their shipping address,
//1 for items and 1 for orders.
//The first three collections are connected as they share the same ids which are used to 
//find the customer data. the orders collection is connected to both items as it lists them
// and the customer where it includes their id to quickly find which order belongs to which
//customer and gives them to oppertunity to have more than one.
//i feel this worked well with my code as everything was clearly layed out.