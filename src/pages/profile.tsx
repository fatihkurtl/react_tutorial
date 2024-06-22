
const ProfilePage = () => {

    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "Software developer with a passion for creating beautiful and functional web applications.",
        avatar: "https://via.placeholder.com/150",
        location: "San Francisco, CA",
        joined: "January 2022",
        socialLinks: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          github: "https://github.com/johndoe",
        },
      };

  return (
    <div className="container mx-auto p-4">
  <div className="bg-gray-800 dark:bg-gray-100 rounded-lg p-6 shadow-md">
    <div className="flex items-center space-x-6">
      <img
        className="w-24 h-24 rounded-full object-cover"
        src={userProfile.avatar}
        alt="Profile Avatar"
      />
      <div>
        <h1 className="text-gray-100 dark:text-gray-800 text-4xl font-bold">
          {userProfile.name}
        </h1>
        <p className="text-gray-400 dark:text-gray-600">
          {userProfile.email}
        </p>
      </div>
    </div>
    <div className="mt-6">
      <h2 className="text-gray-100 dark:text-gray-800 text-2xl font-semibold mb-2">
        Bio
      </h2>
      <p className="text-gray-200 dark:text-gray-700 mb-4">
        {userProfile.bio}
      </p>
    </div>
    <div className="mt-6">
      <h2 className="text-gray-100 dark:text-gray-800 text-2xl font-semibold mb-2">
        Location
      </h2>
      <p className="text-gray-200 dark:text-gray-700">
        {userProfile.location}
      </p>
    </div>
    <div className="mt-6">
      <h2 className="text-gray-100 dark:text-gray-800 text-2xl font-semibold mb-2">
        Joined
      </h2>
      <p className="text-gray-200 dark:text-gray-700">
        {userProfile.joined}
      </p>
    </div>
    <div className="mt-6">
      <h2 className="text-gray-100 dark:text-gray-800 text-2xl font-semibold mb-2">
        Connect
      </h2>
      <div className="flex space-x-4">
        <a
          href={userProfile.socialLinks.twitter}
          className="text-white dark:text-black bg-blue-500 dark:bg-blue-300 hover:bg-blue-700 dark:hover:bg-blue-500 px-4 py-2 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={userProfile.socialLinks.linkedin}
          className="text-white dark:text-black bg-blue-700 dark:bg-blue-400 hover:bg-blue-900 dark:hover:bg-blue-600 px-4 py-2 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={userProfile.socialLinks.github}
          className="text-white dark:text-black bg-gray-700 dark:bg-gray-300 hover:bg-gray-900 dark:hover:bg-gray-500 px-4 py-2 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProfilePage;
