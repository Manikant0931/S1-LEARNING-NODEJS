//NOTE:(PREFER THIS LINK FOR THE DOCUMENTATION https://mongodb.github.io/node-mongodb-native/7.0/)
// =>go to the mongodb website
// =>create a free MB cluster
// =>create a user
// =>get the connection string

const {MongoClient}=require("mongodb");


// const url= "mongodb+srv://NamasteDev:sYYgIhUzVmHzDX3Q@namastenode.esecg3t.mongodb.net/";
//replace it const url= "mongodb+srv://NamasteDev:sYYgIhUzVmHzDX3Q@namastenode.esecg3t.mongodb.net/";
const url= "your-connection-string-here";


const client =new MongoClient(url);

const dbName="HelloWorld";

async function main(){
    await client.connect();
    console.log("connected successfully to server");
    const db=client.db(dbName);
    const collection=db.collection("User");
     
    //push,get,update,delete,read,find
    // delete any documents previously added for 'dev' or 'john'
    //note:-
    // 
    //1.read
    const findResult = await collection.find({}).toArray();
    console.log("found documents", findResult);
    

    return "done.";
}

main()

    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());

// STEPS TO RUN ABOVE FILE:
// =>install mongoDB package
// =>connect with the help of connection string
// =>create a database
// =>create a collection
// =>insert some documents
// =>close the connection
// =>run the file using node database.js
// =>go to mongoDB compass and check the inserted documents

