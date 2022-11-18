const { MongoClient } = require('mongodb')

async function main() {
    const uri = "mongodb+srv://ricardo:ricas123@cluster0.ujcty.mongodb.net/GarageGestor?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        //console.log(client);

        await client.db('GarageGestor').command({ ping: 1 });
        console.log('Connected Succesfully')

        await createListing(client, {
            name: 'Ricardo',
            taller: 'MiTaller',
            password: 'ricas123'
        },
            'caliz');

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }


}

main().catch(console.error);

async function createListing(client, newListing, collection) {
    const result = await client.db('GarageGestor').collection(collection).insertOne(newListing);

    console.log('New Listig with the following ID: ' + result.insertedId);
}

// export default {
//     createListing,
// }