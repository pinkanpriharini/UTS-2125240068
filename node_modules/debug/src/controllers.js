const Produk = require("../models/produk");

const produkIndex = async(req,res) => {
    try {
        const produk = await Produk.find({});
        res.status(200).json({message: 'Succes'}).json(produk);        
    } catch (error) {
        res.status(400),json({message: 'Failed'});
    }
}
const produkInsert = async (req,res) => {
    try {
        const{nama,deskripsi,harga,stok,kategori_id} = req.body;
        const produk = new Produk({
            nama,
            deskripsi,
            harga,
            stok,
            kategori_id
        });
        await produk.save();
        res.status(200).json({message:'Succes',data: produk});
    } catch (error) {
        res.status(400).json({message: 'failed'});
    }
};
module.exports = {produkIndex, produkInsert}