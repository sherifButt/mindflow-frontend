


import { useRouter } from 'next/router';
import axios from 'axios';

const SharedMindMap = () => {
  const router = useRouter();
  const { id } = router.query;
  const [mindMapData, setMindMapData] = useState(null);

  useEffect(() => {
    const fetchMindMapData = async () => {
      try {
        const response = await axios.get(`/api/mindmaps/${id}`);
        setMindMapData(response.data);
      } catch (error) {
        console.error('Error fetching mind map data:', error);
      }
    };

    if (id) {
      fetchMindMapData();
    }
  }, [id]);

  if (!mindMapData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">{mindMapData.name}</h1>
      <p className="text-gray-600 mb-8">{mindMapData.description}</p>
      {/* Render the mind map using a suitable component */}
    </div>
  );
};

export default SharedMindMap;





