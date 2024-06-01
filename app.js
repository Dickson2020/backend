import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createUser(data) {
  if (!data || !data.user_id || !data.counter) {
    return { error: data };
  }
  const user = await prisma.networth.create({
    data,
  });
  return user;
}

async function updateUser(userId, data) {
  const updatedUser = await prisma.networth.update({
    where: { user_id: userId },
    data,
  });
  return updatedUser;
}

async function getUsers() {
  const allUsers = await prisma.networth.findMany();
  return allUsers;
}

async function getUser(userId) {
  const user = await prisma.networth.findUnique({
    where: { user_id: userId },
  });
  return user;
}

export { createUser, updateUser, getUsers, getUser };
