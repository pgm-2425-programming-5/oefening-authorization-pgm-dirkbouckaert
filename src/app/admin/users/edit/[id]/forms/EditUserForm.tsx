'use client';

import { User } from '@/types/User';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateUsers } from '../actions';
import { userRoles } from '@/lib/consts';

type EditUserFormProps = {
  currentUser: User;
  allUsers: User[];
};

const EditUserForm = ({ currentUser, allUsers }: EditUserFormProps) => {
  const router = useRouter();
  const [userRole, setUserRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userRole) {
      setError('Please select a role');
      return;
    }

    const updatedUsers = allUsers.map((user: User) => {
      if (user.id === currentUser.id) {
        return { ...user, role: userRole as 'admin' | 'user' | 'editor' };
      }
      return user;
    });

    const updated = updateUsers(updatedUsers);
    if (!updated) {
      setError('Failed to update user role');
      return;
    }

    router.push('/admin/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <select
        name="role"
        id="role"
        onChange={(e) => setUserRole(e.target.value)}
      >
        <option value="admin">Choose role</option>
        {userRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="my-4 block bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default EditUserForm;
