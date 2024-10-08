import { filePathUsers } from '@/lib/consts';
import { User } from '@/types/User';
import fs from 'fs';
import EditUserForm from './forms/EditUserForm';

const EditUserPage = ({ params }: { params: { id: string } }) => {
  const users = JSON.parse(fs.readFileSync(filePathUsers, 'utf8'));
  const user = users.find((user: User) => user.id === parseInt(params.id));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Edit User Role</h1>

      {user && (
        <>
          <p className="text-lg font-semibold mb-4">User Details</p>
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-gray-700">ID: {user.id}</p>
            <p className="text-gray-700">Name: {user.name}</p>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Role: {user.role}</p>
          </div>

          <p className="text-lg font-semibold mt-6 mb-4">Edit User Role</p>
          <EditUserForm currentUser={user} allUsers={users} />
        </>
      )}
    </div>
  );
};

export default EditUserPage;
