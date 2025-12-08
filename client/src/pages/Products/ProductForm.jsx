import { useEffect, useState } from "react";
import { createProducts, updateProduct } from "../../api/products.js";
import '../../styles/products.css';

const empty = { name: "", description: "", price: "", image: ""  , quantity: ""};

const ProductForm = ({ product, onclose }) => {
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price ?? "",
        image: product.image,
        quantity: product.quantity ?? "",


      });
    } else setForm(empty);
  }, [product]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setSaving(true);
      if (product)
        await updateProduct(product.id, { ...form, price: Number(form.price) });
      else await createProducts({ ...form, price: Number(form.price) });
      onclose();
    } catch (error) {
      setError(error.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
  
    <div className="product-form-containe">
        <form className="product-form" onSubmit={submit} >
            <h2> {product ? 'Edit Product' : 'Add Product'}</h2>
            {error && <P  className="error" > {error} </P>}
            <input name="name" value={form.name} onChange={change} placeholder="Name" required />
            <input name="description" value={form.description} onChange={change} placeholder="Description" required />
            <input name="price" value={form.price} onChange={change} placeholder="Price" required />
            <input name="image" value={form.image} onChange={change} placeholder="Image" required />
            <input name="quantity" value={form.quantity} onChange={change} placeholder="quantity" required />

            <div className="form-buttons">
          <button type="submit" className="primary" disabled={saving}>{saving ? 'Saving...' : (product ? 'Update' : 'Add')}</button>
          <button type="button" onClick={onclose}>Cancel</button>
        </div>
        </form>
    </div>
)
};
export default ProductForm;
