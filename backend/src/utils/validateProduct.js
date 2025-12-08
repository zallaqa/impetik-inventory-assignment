export const validateProduct = async (req , res ,next) =>{

    const{ name, price ,quantity , image } = req.body;

    //checking name
    if(!name || typeof name !== 'string' || name.trim().length === 0){
        return res.status(400).json({ error: 'Name is required' })
    }

    if (price === undefined || isNaN(Number(price)) || Number(price) <0){
        return res.status(400).json({ error: 'Price must be a number >= 0' });
    }

    if (
        quantity === undefined ||
        isNaN(Number(quantity)) ||
        Number(quantity) < 0
      ) {
        return res.status(400).json({ error: 'Quantity must be an integer >= 0' });
      }


    if (image && typeof image === 'string') {
        // simple url check
        const isUrl = /^(https?:\/\/)/.test(image);
        if (image.length > 0 && !isUrl) {
          return res.status(400).json({ error: 'Image must be a valid URL or empty' });
        }
      }

      next();
}