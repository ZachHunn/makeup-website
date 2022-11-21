import { ServiceItem } from '@prisma/client';
import axios from 'axios';
import { useQuery } from 'react-query';
import { EUri } from '../../../../const';

export const serviceItemQueryKeys = {
  serviceItems: () => ['items'],
  serviceItem: (id: number) => ['item', id],
};

export const useGetServiceItems = () => {
  return useQuery<ServiceItem[]>(serviceItemQueryKeys.serviceItems(), () =>
    axios.get(EUri.SERVICES).then((results) => results.data),
  );
};
