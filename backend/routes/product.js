const router = require('express').Router();
const multer = require('multer');
const Product = require('../models/product');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },

    filename: function (req, file, cb) {
        let extArray = file.mimetype.split('/');
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    },
});

var upload = multer({ storage: storage });

router.post('/product', async (req, res, next) => {
    try {
        const { name, description, price, image } = req.body;

        const product = new Product();

        if (name) product.name = name;
        if (description) product.description = description;
        if (price) product.price = price;
        if (image) product.image = image;

        return res.json({
            product: await product.save(),
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/product/:id', async (req, res, next) => {
    try {
        res.json({
            contact: await Product.deleteOne({ _id: req.params.id }),
        });
    } catch (error) {
        console.log(error);
    }
});

router.put('/product/:id', async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        const { name, description, price, image } = req.body;
        if (name) product.name = name;
        if (description) product.description = description;
        if (price) product.price = price;
        if (image) product.image = image;

        return res.json({
            product: await product.save(),
        });
    } catch (error) {}
});
router.get('/product', async (req, res, next) => {
    try {
        const searchField = req.query.name;
        console.log(searchField);

        let mongoQuery = {};
        if (searchField) {
            mongoQuery.name = new RegExp(searchField, 'i');
        }
        const results = await Product.find(mongoQuery);

        return res.json({
            product: results,
        });
    } catch (error) {}
});

router.get('/product/:id', async (req, res, next) => {
    try {
        console.log('my id ', req.params.id);
        return res.json({
            product: await Product.findById(req.params.id),
        });
    } catch (error) {}
});

router.post('/upload', upload.single('image'), async (req, res, next) => {
    console.log('ye start hua', req.body);
    return res.json({
        path: req.file.filename,
    });
});

module.exports = router;
