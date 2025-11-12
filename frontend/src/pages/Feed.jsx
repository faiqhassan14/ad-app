import { useEffect, useState } from "react";
import api from "../services/api";

export default function Feed() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await api.get("/ads");
        setAds(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load ads");
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading ads...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">Feed</h2>

      {ads.length === 0 ? (
        <p>No ads posted yet.</p>
      ) : (
        <div className="row">
          {ads.map((ad) => (
            <div className="col-md-4 mb-4" key={ad._id || ad.id}>
              <div className="card h-100 shadow-sm">
                {ad.media && (
                  <img
                    src={`http://localhost:5000/${ad.media}`}
                    alt={ad.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{ad.title}</h5>
                  <p className="text-muted mb-2">{ad.category}</p>
                  <p className="card-text">{ad.description}</p>
                  <h6 className="fw-bold text-primary">${ad.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
