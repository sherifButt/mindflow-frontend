


import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MindMapPage() {
  const router = useRouter();
  const { id } = router.query;
  const [mindMapData, setMindMapData] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch mind map data from the API
      axios.get(`/api/mindmaps/${id}`)
        .then(response => {
          setMindMapData(response.data);
        })
        .catch(error => {
          console.error('Error fetching mind map data:', error);
        });
    }
  }, [id]);

  if (!mindMapData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the mind map using the mindMapData */}
      <h1>{mindMapData.title}</h1>
      {/* Render the nodes and connections */}
    </div>
  );
}



