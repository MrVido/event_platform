import React, { useState, useEffect } from 'react';
import { followUser, unfollowUser } from '@/lib/actions/user.actions'; // Adjust import paths as needed

interface FollowButtonProps {
  currentUserId: string;
  profileUserId: string;
  initialIsFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({ currentUserId, profileUserId, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollow = async () => {
    await followUser(currentUserId, profileUserId);
    setIsFollowing(true);
  };

  const handleUnfollow = async () => {
    await unfollowUser(currentUserId, profileUserId);
    setIsFollowing(false);
  };

  return (
    <button onClick={isFollowing ? handleUnfollow : handleFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
