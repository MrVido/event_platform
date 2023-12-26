import React, { useState } from 'react';

const CreateGroupForm: React.FC = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement createGroup API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Group Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default CreateGroupForm;
