



const Node = ({ id, text, position }) => {
  return (
    <div
      id={id}
      className="absolute flex items-center justify-center w-24 h-24 bg-gray-200 rounded-lg shadow-md"
      style={{ left: position.x, top: position.y }}
    >
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default Node;



