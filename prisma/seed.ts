import { PrismaClient } from '@prisma/client';
// @ts-ignore
import { serviceItems } from './serviceItems';

const prisma = new PrismaClient();
async function seedServices() {
  serviceItems.forEach(async (serviceItem: any) => {
    await prisma.serviceItem.createMany({
      data: serviceItem,
    });
  });
}
async function main() {
  await seedServices();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
