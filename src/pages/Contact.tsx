import { Card, FormElement, Input, Text, Textarea } from '@nextui-org/react';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { PageTitle } from '../components/PageTitle';
import { useCreateContactEmail } from '../hooks/api/contact';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

export type ContactInfo = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};

const Contact: NextPage = (): JSX.Element => {
  const [formData, setFormData] = useState<ContactInfo>({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });

  const { mutate: sendContactEmail } = useCreateContactEmail();
  const snackbar = useSnackbar();
  const router = useRouter();

  const formSubmit = (formData: ContactInfo) => {
    const contactInfo = {
      fullName: formData.fullName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    } as ContactInfo;

    sendContactEmail(contactInfo, {
      onSuccess: () => {
        snackbar.enqueueSnackbar('Email has been sent', {
          variant: 'success',
        });
      },
    });

    setFormData({
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      message: '',
    });
    router.push('/ThankYou');
  };
  const disabledButton =
    formData.fullName === '' ||
    formData.emailAddress === '' ||
    formData.phoneNumber === '' ||
    formData.message === '';

  return (
    <>
      <PageTitle name={'Contact Me!'} fontSize={60} />
      <Card className="md:w-3/4 h-3/4 mx-auto md:mt-5 border-none mb-10  ">
        <Card.Header>
          <Text
            css={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            size={50}
            className="mx-auto tracking-wider"
          >
            Get In Touch
          </Text>
        </Card.Header>
        <Card.Body>
          <form id="contact-form" className="w-full pt-3" method="post">
            <div className="flex flex-col md:w-2/3 space-y-8 mx-auto">
              <Input
                required
                labelPlaceholder="Full Name"
                onChange={(e: ChangeEvent<FormElement>) => {
                  setFormData({ ...formData, fullName: e.target.value });
                }}
              />

              <Input
                required
                type="email"
                labelPlaceholder="Email"
                onChange={(e: ChangeEvent<FormElement>) => {
                  setFormData({ ...formData, emailAddress: e.target.value });
                }}
              />
              <Input
                required
                type="tel"
                labelPlaceholder="Phone Number"
                onChange={(e: ChangeEvent<FormElement>) => {
                  setFormData({ ...formData, phoneNumber: e.target.value });
                }}
              />
              <Textarea
                required
                labelPlaceholder="Message"
                onChange={(e: ChangeEvent<FormElement>) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="pb-8">
          {disabledButton ? (
            <button
              className="mx-auto rounded shadow-lg px-24 py-2 bg-gray-700"
              disabled={disabledButton}
              form="contact-form"
              type="button"
            >
              Submit
            </button>
          ) : (
            <button
              form="contact-form"
              type="button"
              onClick={() => {
                formSubmit(formData);
              }}
              className="hover:animate-pulse mx-auto rounded shadow-lg px-24 py-2 bg-shampoo"
            >
              Submit
            </button>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Contact;
