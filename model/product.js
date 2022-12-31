const fs=require('fs');
const path=require('path');

const p=path.join(path.dirname(require.main.filename),
    'data',
    'products.json');
    

const getProductsFromFile=(cb)=>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
        
    });

}


//creating class for product
module.exports=class Product{

    constructor(t){
        this.title=t;

    }
    
    //save function to push the new product created into our array
    //this will refer to current object
    save(){
        
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
    }

    //to fetch all products
    static fetchAll(cb){
        getProductsFromFile(cb);
        
    }

}