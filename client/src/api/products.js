const BASE = 'http://localhost:3000/api';

// Fetch all products  and search
export const fetchProducts = async (search = '') => {
    const q = search ? `?search=${encodeURIComponent(search)}` : '';
    const res = await fetch(`${BASE}/products${q}`);

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to fetch products");
    }

    return res.json();
};


// Fetch single product
export const fetchProduct = async (id) => {
    const res = await fetch(`${BASE}/products/${id}`);

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to fetch product");
    }

    return res.json();
};


// Create product
export const createProducts = async (data) => {
    const res = await fetch(`${BASE}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to create product");
    }

    return res.json();
};


// Update product
export const updateProduct = async (id, data) => {
    const res = await fetch(`${BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to update product");
    }

    return res.json();
};


// Delete product
export const deleteProduct = async (id) => {
    const res = await fetch(`${BASE}/products/${id}`, { method: "DELETE" });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to delete product");
    }

    return res.json();
};
