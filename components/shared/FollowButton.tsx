import React, { useState } from 'react';

interface FollowButtonProps {
  userId: string;
  targetUserId: string;
  isFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, targetUserId, isFollowing }) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollow = async () => {
    // Implement followUser API call
    setFollowing(true);
  };

  const handleUnfollow = async () => {
    // Implement unfollowUser API call
    setFollowing(false);
  };

  return (
    <button onClick={following ? handleUnfollow : handleFollow}>
      {following ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
