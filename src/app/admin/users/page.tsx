import { filePathUsers } from '@/lib/consts';
import { User } from '@/types/User';
import fs from 'fs';
import Link from 'next/link';

const UsersPage = () => {
  const users = JSON.parse(fs.readFileSync(filePathUsers, 'utf8'));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Manage Users</h1>

      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2 flex gap-2 items-center">
                <Link
                  href={`/admin/users/edit/${user.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-0.5 px-2 rounded"
                >
                  Edit role
                </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-0.5 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
