import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { PageTitle } from '../components/PageTitle';
import { zodResolver } from '@hookform/resolvers/zod';
import {Input, Textarea, Card, Button, Text, Spacer} from '@nextui-org/react'

type Contact = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
}
const contactSchema = z.object({
  fullName: z.string(),
  emailAddress: z.string().email(),
  phoneNumber: z.string(),
  message: z.string()
});

const Contact: NextPage = (): JSX.Element => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      message: ''
    },
  });

  const onSubmit = (data: Contact) => {
    const customer = {
      fullName: data.fullName,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      message: data.message
    } as Contact;

    resetValues();
  };
  const resetValues = () => {
    reset({ fullName: '', emailAddress: '', phoneNumber: '', message: '' });
  };
  return (
    <>
    <div>
      <PageTitle name={'Contact Me!'} fontSize={60} />
      <Card className="md:w-3/4 h-3/4 mx-auto border-none">
      <Card.Header>
        <Text size={30}className="mx-auto">Get In Touch</Text>
      </Card.Header>
      <Card.Body>
        <form className="w-full">
          <div className="flex flex-col md:w-2/3 px-4 space-y-8 mx-auto">
            <Input
              required
              labelPlaceholder="Full Name"
              {...register('fullName')}
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
            <Textarea
            required
            labelPlaceholder='Message'
            />
          </div>
        </form>
      </Card.Body>
      <Card.Footer>
        <Button
          type="submit"
          size="lg"
          bordered
          onClick={handleSubmit(onSubmit)}
          className="mx-auto"
        >
          Submit
        </Button>
      </Card.Footer>
    </Card>
    </div >
    </>
  );
};

export default Contact;


