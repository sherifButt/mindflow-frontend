



const useMindMap = () => {
  const [mindMap, setMindMap] = useState(null);

  // Fetch mind map data from the server
  useEffect(() => {
    const fetchMindMap = async () => {
      try {
        const response = await fetch('/api/mindmap');
        const data = await response.json();
        setMindMap(data);
      } catch (error) {
        console.error('Error fetching mind map:', error);
      }
    };

    fetchMindMap();
  }, []);

  // Update the mind map data
  const updateMindMap = (newMindMap) => {
    setMindMap(newMindMap);
  };

  // Add a new node to the mind map
  const addNode = (node) => {
    const updatedMindMap = { ...mindMap };
    updatedMindMap.nodes.push(node);
    setMindMap(updatedMindMap);
  };

  // Remove a node from the mind map
  const removeNode = (nodeId) => {
    const updatedMindMap = { ...mindMap };
    updatedMindMap.nodes = updatedMindMap.nodes.filter((node) => node.id !== nodeId);
    setMindMap(updatedMindMap);
  };

  // Update a node in the mind map
  const updateNode = (nodeId, updatedNode) => {
    const updatedMindMap = { ...mindMap };
    updatedMindMap.nodes = updatedMindMap.nodes.map((node) => {
      if (node.id === nodeId) {
        return { ...node, ...updatedNode };
      }
      return node;
    });
    setMindMap(updatedMindMap);
  };

  return {
    mindMap,
    updateMindMap,
    addNode,
    removeNode,
    updateNode,
  };
};

export default useMindMap;



