import { PrismaClient, ServiceItem } from '@prisma/client';

const prisma = new PrismaClient();
export type serviceItem = Omit<ServiceItem, 'id'>;

export const createServiceItems = async (serviceItemList: serviceItem[]) => {
  serviceItemList.forEach(async (serviceItem) => {
    return await prisma.serviceItem.createMany({
      data: serviceItem,
    });
  });
};

export const createServciceItem = async (serviceItem: serviceItem) => {
  return await prisma.serviceItem.create({
    data: serviceItem,
  });
};

export const getServiceItems = async () => {
  return await prisma.serviceItem.findMany();
};

export const getServiceItemById = async (id: number) => {
  return await prisma.serviceItem.findUnique({
    where: { id },
  });
};
