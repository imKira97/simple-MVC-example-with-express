//imoporting our model class into controller



const Product=require('../model/product')

exports.getAddProducts=(req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct=(req, res, next) => {
    
    //creating product object 
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts=(req, res, next) => {

    //get products
    Product.fetchAll((products)=>{
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
    });
    });
};