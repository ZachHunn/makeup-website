import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Input, Spacer, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Customer } from 'square';
import { z } from 'zod';
import { useCreateCustomer } from '../pages/hooks/api/customer';

const customerSchema = z.object({
  givenName: z.string(),
  familyName: z.string(),
  emailAddress: z.string().email(),
  phoneNumber: z.string(),
});
const Booking: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { mutate: createCustomer } = useCreateCustomer();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      givenName: '',
      familyName: '',
      emailAddress: '',
      phoneNumber: '',
    },
  });
  const onSubmit = (data: Customer) => {
    const customer = {
      id: crypto.randomUUID(),
      givenName: data.givenName,
      familyName: data.familyName,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
    } as Customer;

    createCustomer(customer);
    resetValues();
  };
  const resetValues = () => {
    reset({ givenName: '', familyName: '', emailAddress: '', phoneNumber: '' });
  };
  return (
    <div>
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        Book Now
      </Text>
      <Card className="w-3/4 h-3/4 mx-auto">
        <Card.Header>
          <Text className="mx-auto">Book An Appointment</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <form className="w-full">
            <Text>Customer Information</Text>
            <div className="flex flex-col w-2/3 space-y-8 mx-auto">
              <Input
                required
                labelPlaceholder="First Name"
                {...register('givenName')}
              />
              <Input
                required
                labelPlaceholder="Last Name"
                {...register('familyName')}
              />
              <Input
                required
                type="email"
                labelPlaceholder="Email"
                {...register('emailAddress')}
              />
              <Input
                required
                type="tel"
                labelPlaceholder="Phone Number"
                {...register('phoneNumber')}
              />
            </div>
            <Spacer />
            <Card.Divider />
            <Text className="text-center">Appointment Information</Text>
          </form>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Button
            type="submit"
            size="lg"
            flat
            onClick={handleSubmit(onSubmit)}
            className="mx-auto"
          >
            Book Appointment
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Booking;
