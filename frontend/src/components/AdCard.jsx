export default function AdCard({ad}) {
  return (
    <div className="card mb-3 shadow-sm">
      {ad.mediaUrl && <img src={`http://localhost:5000${ad.mediaUrl}`} className="card-img-top" alt={ad.title} />}
      <div className="card-body">
        <h5 className="card-title">{ad.title}</h5>
        <p className="card-text">{ad.generatedDescription || ad.description}</p>
        <p className="card-text"><strong>₹{ad.price}</strong></p>
        <small className="text-muted">{ad.category} • {new Date(ad.createdAt).toLocaleString()}</small>
      </div>
    </div>
  )
}
