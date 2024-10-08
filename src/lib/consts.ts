import path from 'path';

export const filePathUsers = path.resolve(process.cwd(), 'src/data/users.json');

export const userRoles = ['admin', 'user', 'editor'] as const;
