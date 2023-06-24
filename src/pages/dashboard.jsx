


import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchMindmaps, selectMindmaps } from '../store/slices/mindmapSlice';
import Loader from '../components/Loader';

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mindmaps, loading, error } = useSelector(selectMindmaps);

  useEffect(() => {
    dispatch(fetchMindmaps());
  }, [dispatch]);

  const handleMindmapClick = (mindmapId) => {
    router.push(`/mindmap/${mindmapId}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">My Mindmaps</h1>
      {mindmaps.length === 0 ? (
        <p>No mindmaps found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mindmaps.map((mindmap) => (
            <li
              key={mindmap.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => handleMindmapClick(mindmap.id)}
            >
              <h2 className="text-lg font-semibold mb-2">{mindmap.name}</h2>
              <p className="text-gray-500">{mindmap.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



