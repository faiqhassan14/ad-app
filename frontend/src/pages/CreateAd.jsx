import { useState } from "react";
import api, { setToken } from "../services/api";

export default function CreateAd() {
  const [form, setForm] = useState({
    category: "",
    subCategory: "",
    title: "",
    description: "",
    price: "",
  });
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach((k) => fd.append(k, form[k]));
    if (file) fd.append("media", file);

    try {
      const token = localStorage.getItem("token");
      if (token) setToken(token);
      await api.post("/ads", fd);
      alert("Ad created successfully!");
    } catch (err) {
      console.error(err);
      alert("Error creating ad");
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Create New Ad</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Media (optional)</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="btn btn-primary">Submit Ad</button>
      </form>
    </div>
  );
}
