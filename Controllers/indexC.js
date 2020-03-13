const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI || "mongodb+srv://bintech:1234@dbbintech-zalgy.gcp.mongodb.net/test?retryWrites=true&w=majority";
const db = '1712879_mydata';
router.get('/api/category', async (req, res) => {
    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('producttype');
        dbo.find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })
    client.close();
})

router.get('/api/producttype/:id', async (req, res) => {
    
    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('products');
        dbo.find({MA_LOAI_HANG: req.params.id}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })
    client.close();
})

router.get('/api/product/:id', async (req, res) => {
    console.log(req.params.id)
    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('products');
        dbo.find({MA_SAN_PHAM: req.params.id}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
    });
    client.close();
})

module.exports = router;

