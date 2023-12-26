import React, { useState, useEffect } from 'react';
import FollowButton from './FollowButton';

interface UserProfileProps {
  user: {
    id: string;
    username: string;
    followersCount: number;
    followingCount: number;
  };
  currentUserId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, currentUserId }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchCurrentUserData = async () => {
      const currentUserData = await getCurrentUserData(currentUserId);
      setIsFollowing(currentUserData.following.includes(user.id));
    };

    fetchCurrentUserData();
  }, [currentUserId, user.id]);

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <p>{user.followersCount} Followers</p>
      <p>{user.followingCount} Following</p>
      {currentUserId !== user.id && (
        <FollowButton
          currentUserId={currentUserId}
          profileUserId={user.id}
          initialIsFollowing={isFollowing}
        />
      )}
    </div>
  );
};

export default UserProfile;
