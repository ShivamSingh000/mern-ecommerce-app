const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async(req,res)=>{
    try{
        const product = await productModel.find({category})
    }
    catch(err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}