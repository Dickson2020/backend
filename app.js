import { PrismaClient } from '@prisma/client'
import { createClient } from 'redis';

const prisma = new PrismaClient()

const client = createClient();


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

async function fetchData() {
  try {
    const value = await client.get('allUsers');
    console.log(value); // Output: value

    return value
  } catch (err) {
    console.error(err);

    return err
  }
}

async function getUsers() {
  const allUsers = await prisma.networth.findMany();
  client.set('allUsers', allUsers);
 try {
    const value = await client.get('allUsers');
    console.log(value); // Output: value

    return value
  } catch (err) {
    console.error(err);

    return err
  } // return allUsers;
}



async function getUser(userId) {
  const user = await prisma.networth.findUnique({
    where: { user_id: userId },
  });
  return user;
}

export { createUser, updateUser, getUsers, getUser };
