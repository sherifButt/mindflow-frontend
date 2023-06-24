


import { PlusIcon, MinusIcon, LinkIcon } from '@heroicons/react/outline';

const NodeControls = ({ onAddNode, onRemoveNode, onLinkNodes }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={onAddNode}
      >
        <PlusIcon className="h-5 w-5 text-gray-700" />
      </button>
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={onRemoveNode}
      >
        <MinusIcon className="h-5 w-5 text-gray-700" />
      </button>
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={onLinkNodes}
      >
        <LinkIcon className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default NodeControls;







