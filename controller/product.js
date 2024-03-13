const fs = require('fs');

const model = require('../model/product')

const Product = model.Product;

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);

        const savedProduct = await product.save();
        console.log(savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error while saving product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }

}
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}
exports.getProduct = async (req, res) => {
    const id = req.params.id;
    const products = await Product.findById(mongoose.ObjectId(id));
    res.json(products);
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
    }



}

exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
    }


}
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
    }


}
