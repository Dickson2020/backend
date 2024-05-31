import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasourceUrl:
    "postgres://postgres.vviemvanlsxkhlcjrofx:4Yj2XIXKdsoU2EwC@aws-0-us-west-1.pooler.supabase.com:5432/postgres",
});

async function createUser(data) {
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
