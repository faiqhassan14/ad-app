import { useState } from 'react';
import api, { setToken } from '../services/api';

export default function CreateAd(){
  const [form, setForm] = useState({category:'', subCategory:'', title:'', description:'', price:''});
  const [file, setFile] = useState(null);
  const submit = async e => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach(k => fd.append(k, form[k]));
    if (file) fd.append('media', file);
    try {
      const token = localStorage.getItem('token');
      if (token) setToken(token);
      const res = await api.post('/ads', fd);
      alert('Ad created');
    } catch (err) { console.error(err); alert('Error'); }
  };
  return (
    <div>
      <h2>Create Ad</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Category</label>
          <input className="form-control" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label>Title</label>
          <input className="form-control" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input type="number" className="form-control" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label>Media</label>
          <input type="file" className="form-control" onChange={e=>setFile(e.target.files[0])}/>
        </div>
        <button className="btn btn-primary">Post Ad</button>
      </form>
    </div>
  );
}
