const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI || "mongodb+srv://bintech:1234@dbbintech-zalgy.gcp.mongodb.net/test?retryWrites=true&w=majority";
const db = '1712879_mydata';
const limit = 6;

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

router.get('/api/producttype/:id/:page', async (req, res) => {
    let skippage = (parseInt(req.params.page) - 1) * limit;

    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('products');
        dbo.find({MA_LOAI_HANG: req.params.id}).skip(skippage).limit(limit)
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })
    client.close();
})

router.get('/api/product/:id', async (req, res) => {
    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('products');
        dbo.find({MA_SAN_PHAM: req.params.id})
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
    });
    client.close();
})

router.get('/api/product-related/:id_type/:id_p', async (req, res) => {
    let id_type = req.params.id_type;
    let id_p = req.params.id_p;
    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('products');
        dbo.find({
          $and: [{MA_LOAI_HANG: id_type}, {MA_SAN_PHAM: {$ne: id_p}}]  
        }).limit(8).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })
    client.close();
})

router.get('/api/totalproduct/:id', async (req, res) => {
    
    let client = new MongoClient(uri, {useNewUrlParser: true});
    await client.connect((err, result) => {
        const dbo = client.db(db).collection('products');
        dbo.aggregate([
            {
                $match: {
                    MA_LOAI_HANG: req.params.id
                }
            },
            {
                $count: "total_product"
            }
        ]).toArray((err, result) => {
            if (err) throw err;
            res.send(result[0]);
        })
    })
    client.close();
})

module.exports = router;

