import { PrismaClient } from '@prisma/client';
// @ts-ignore
import { serviceItems } from './serviceItems';
import { createServiceItems } from '../repository/servicesRepo';

const prisma = new PrismaClient();

async function main() {
  await createServiceItems(serviceItems);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
