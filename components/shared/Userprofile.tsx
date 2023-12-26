import React from 'react';

interface User {
  username: string;
  bio: string;
  followers: string[];
  following: string[];
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <p>{user.bio}</p>
      <div>
        <span>{user.followers.length} Followers</span>
        <span>{user.following.length} Following</span>
      </div>
      {/* Other profile elements */}
    </div>
  );
};

export default UserProfile;
