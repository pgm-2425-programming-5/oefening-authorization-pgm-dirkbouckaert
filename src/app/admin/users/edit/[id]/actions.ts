'use server';

import { filePathUsers } from '@/lib/consts';
import { User } from '@/types/User';
import fs from 'fs';
import { revalidatePath } from 'next/cache';

export const updateUsers = (updatedUsers: User[]): boolean => {
  try {
    fs.writeFileSync(filePathUsers, JSON.stringify(updatedUsers));
    revalidatePath('/admin/users');
    return true;
  } catch (error) {
    console.log('error:', error);
    return false;
  }
};
