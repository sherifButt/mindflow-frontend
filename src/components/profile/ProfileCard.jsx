



const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full bg-gray-800"
          src={user.avatar}
          alt="User Avatar"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-base font-semibold text-gray-900">Bio</h3>
        <p className="text-sm text-gray-500">{user.bio}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-base font-semibold text-gray-900">Location</h3>
        <p className="text-sm text-gray-500">{user.location}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-base font-semibold text-gray-900">Interests</h3>
        <ul className="mt-2 text-sm text-gray-500">
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;

