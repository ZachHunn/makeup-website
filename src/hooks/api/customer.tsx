import axios, { AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { Customer } from 'square';
import { EUri } from '../../../const';

export const customerQueryKeys = {
  customers: () => ['customers'],
  customer: (id: string) => ['customer', id],
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  const snackbar = useSnackbar();

  return useMutation<AxiosResponse<Customer>, unknown, Customer>(
    (newCustomer) => axios.post<Customer>(EUri.CUSTOMER, newCustomer),
    {
      onError: (error) => {
        snackbar.enqueueSnackbar('Error creating new customer', {
          variant: 'error',
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(customerQueryKeys.customers());
      },
    },
  );
};
