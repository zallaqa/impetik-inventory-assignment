import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table.jsx';
import { fetchProducts, deleteProduct } from '../../api/products.js';
import ProductForm from './ProductForm.jsx';

import eyeIcon from '../../assets/visibility.png'
import pencilIcon from '../../assets/digital-pen.png'
import trashIcon from '../../assets/delete.png'

import '../../styles/products.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // load and refresh
  const load = async (q = '') => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts(q);
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Error Loading Products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await deleteProduct(id);
      load(search);
    } catch (err) {
      alert('Delete Failed');
    }
  };

  const openCreate = () => { setEditing(null); setShowForm(true); };
  const openEdit = (p) => { setEditing(p); setShowForm(true); };

  const handleSearch = (e) => {
    const q = e.target.value;
    setSearch(q);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    load(search);
  };

  const goDetail = (id) => {
    navigate(`/products/${id}`);
  };

  // columns labels passed to Table component
  const columns = ['ID', 'Name', 'Description', 'Price', 'Image', 'Quantity'];

  return (
    <div className='product-page'>
      <div className='top-controls'>
        <h1>Products</h1>
        <div className='action'>
          <form onSubmit={onSearchSubmit} className='search-form'>
            <input placeholder='Search...' value={search} onChange={handleSearch} />
            <button type='submit'>Search</button>
          </form>

          <button onClick={openCreate} className='primary'>Add Product</button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}

      <div className='table-wrap'>
        {products.length === 0 && !loading ? (
          <div className='empty'>No products found.</div>
        ) : (
          <Table
            columns={columns}
            data={products}
            actions={(row) => (
              <>
                <button
                  title='View'
                  className='icon-btn'
                  onClick={() => goDetail(row.id)}
                >
                  <img src={eyeIcon} alt="" width={18}/>
                </button>

                <button
                  title='Edit'
                  className='icon-btn'
                  onClick={() => openEdit(row)}
                >
                  <img src={pencilIcon} alt="" width={18}/>
                </button>

                <button
                  title='Delete'
                  className='icon-btn danger'
                  onClick={() => handleDelete(row.id)}
                >
                  <img src={trashIcon} alt="" width={18}/>
                </button>
              </>
            )}
          />
        )}
      </div>

      {showForm && (
        <ProductForm
          product={editing}
          onclose={() => { setShowForm(false); load(search); }}
        />
      )}
    </div>
  );
};

export default ProductList;
