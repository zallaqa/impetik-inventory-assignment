import { pool } from "../config/db.js";


//get all prodcuts

export const getProducts = async(req , res , next) =>{

    try {
        
        const search = req.query.search || '';

        const prductResult = await pool.query(
            'SELECT * FROM products WHERE name ILIKE $1 ORDER BY id ASC', [`%${search}%`]
        );

        res.status(200).json(prductResult.rows);

    } catch (error) {
        next(error)
    }
}

//Get Single product

export const getProduct = async(req , res , next) =>{

    try {
        
        const {id} = req.params;

        const prductResult = await pool.query(
        'SELECT * FROM products WHERE id=$1', [id]    
        )

        if(!prductResult.rows.length){
            res.status(404).json({ message: "Product Was Not Found" })
        }else{
            res.status(200).json(prductResult.rows[0])
        }

    } catch (error) {
        next(error)
    }
}

//CREATE product

export const createProduct = async(req , res , next) =>{
    try {
        
        const {name, description, price, image, quantity} = req.body;

        const prductResult = await pool.query(
            'INSERT INTO products (name,description,price,image,quantity) VALUES($1,$2,$3,$4,$5) RETURNING *',
            [name, description,price,image,quantity]
        );


        res.status(201).json(prductResult.rows[0])

    } catch (error) {
        next(error)
    }
}

//Update Prodcut

export const updateProduct = async (req , res , next) =>{

    try {
        
        const {id} = req.params;
        const {name,description,price,image,quantity} = req.body

        const prductResult = await pool.query(
            'UPDATE products SET name=$1 ,description=$2 ,price=$3,image=$4,quantity=$5 WHERE id=$6 RETURNING *',
            [name,description,price,image,quantity,id]
        );

        if(!prductResult.rows.length){
            res.status(404).json({ message:"Product Is Not Found" });
        }else{
            res.status(200).json(prductResult.rows[0]);
        }

    } catch (error) {
        next(error)
    }
}


//Delete Products


export const deleteProduct = async (req , res , next) =>{

    try {
        
        const {id} = req.params;

        const prductResult = await pool.query(
            'DELETE FROM products WHERE id=$1 RETURNING *',
            [id]
        );

        if(!prductResult.rows.length){
            res.status(404).json({ message:"Products Is Not Found" })
        }else{
            res.status(200).json(prductResult.rows[0]);
        }

    } catch (error) {
        next(error)
    }
}



// ALTER TABLE products ADD CONSTRAINT  CHECK negative (stock >= 0);