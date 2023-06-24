


import { useSelector } from 'react-redux';
import { selectUser } from '../store/slice/userSlice';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
            type="text"
            id="username"
            value={user.username}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
            type="email"
            id="email"
            value={user.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
            type="text"
            id="role"
            value={user.role}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

