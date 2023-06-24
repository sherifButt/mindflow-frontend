



function NodeContextMenu({ position, onClose }) {
  return (
    <Fragment>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div
        className="fixed z-50 bg-white rounded-md shadow-lg"
        style={{ top: position.y, left: position.x }}
      >
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Edit Node
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Delete Node
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default NodeContextMenu;



