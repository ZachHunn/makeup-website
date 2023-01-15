import axios, { AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { ContactInfo } from '../../pages/Contact';
import { EUri } from '../../../const';

export const contactQueryKeys = {
  contacts: () => ['contact'],
  customer: (id: string) => ['contact', id],
};

export const useCreateContactEmail = () => {
  const queryClient = useQueryClient();
  const snackbar = useSnackbar();

  return useMutation<AxiosResponse<ContactInfo>, unknown, ContactInfo>(
    (contactEmail) => axios.post<ContactInfo>(EUri.CONTACT, contactEmail),
    {
      onError: () => {
        snackbar.enqueueSnackbar('Error sending email. Please try again', {
          variant: 'error',
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(contactQueryKeys.contacts());
      },
    },
  );
};
