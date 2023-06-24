


import { useMindMap } from '../hooks/useMindMap';
import Node from './Node';

const MindMap = () => {
  const { mindMapData, addNode, deleteNode, updateNode } = useMindMap();

  const handleAddNode = () => {
    // Logic to add a new node
    addNode();
  };

  const handleDeleteNode = (nodeId) => {
    // Logic to delete a node
    deleteNode(nodeId);
  };

  const handleUpdateNode = (nodeId, updatedData) => {
    // Logic to update a node
    updateNode(nodeId, updatedData);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-md mb-4"
        onClick={handleAddNode}
      >
        Add Node
      </button>
      <div className="mind-map">
        {mindMapData.map((node) => (
          <Node
            key={node.id}
            node={node}
            onDelete={handleDeleteNode}
            onUpdate={handleUpdateNode}
          />
        ))}
      </div>
    </div>
  );
};

export default MindMap;





