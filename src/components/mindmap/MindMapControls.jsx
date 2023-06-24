



const MindMapControls = ({ onAddNode, onRemoveNode, onShare }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={onAddNode}
      >
        <PlusIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={onRemoveNode}
      >
        <MinusIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={onShare}
      >
        <ShareIcon className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default MindMapControls;



