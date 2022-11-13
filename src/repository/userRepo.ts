import { User } from '@prisma/client';
import prisma from '../../utils/prismaClient';

export const createUsers = async (userList: User[]) => {
  for (let user of userList) {
    return await prisma.user.createMany({
      data: user,
    });
  }
};

export const createUser = async (user: User) => {
  return await prisma.user.create({
    data: user,
  });
};

export const getUserList = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};
