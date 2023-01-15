import { ServiceItem } from '@prisma/client';
import axios from 'axios';
import { useQuery } from 'react-query';
import { CatalogObject } from 'square';
import { EUri } from '../../../const';

export const serviceItemQueryKeys = {
  serviceItems: () => ['items'],
  serviceItem: (id: number) => ['item', id],
};

export const catalogItemQueryKeys = {
  catalogItems: () => ['items'],
  catalogItem: (id: string) => ['item', id],
};

export const useGetServiceItems = () => {
  return useQuery<ServiceItem[]>(serviceItemQueryKeys.serviceItems(), () =>
    axios.get(EUri.SERVICES).then((results) => results.data),
  );
};

export const useGetCatalogList = () => {
  return useQuery<CatalogObject[]>(catalogItemQueryKeys.catalogItems(), () =>
    axios.get(EUri.CATALOG).then((results) => results.data),
  );
};
