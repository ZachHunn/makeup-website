import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
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
    <div className="h-screen py-20">
      <h1 className="text-white text-5xl text-center pb-8">Get In Touch</h1>
      <div className="md:w-3/4 mx-auto md:px-12 px-4">
        <form method="post" className="flex flex-col py-4">
          <input
            type="text"
            className="mb-6 bg-gray-100 h-8 rounded-lg pl-2"
            placeholder="Enter your full name."
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, fullName: e.target.value });
            }}
          />
          <input
            type="email"
            className="mb-6 bg-gray-100 h-8 rounded-lg pl-2"
            placeholder="Enter your email address."
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, emailAddress: e.target.value });
            }}
          />
          <input
            type="tel"
            className="mb-6 bg-gray-100 h-8 rounded-lg pl-2"
            placeholder="Enter your phone number."
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
            }}
          />
          <textarea
            name="message"
            id="contact-message"
            cols={20}
            rows={5}
            className="bg-gray-100 mb-6 rounded-lg pl-2"
            placeholder="Enter your message."
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setFormData({ ...formData, message: e.target.value });
            }}
          ></textarea>
          <div>
            {disabledButton ? (
              <button
                className="mx-auto rounded shadow-lg px-24 py-2 bg-gray-400 text-gray-600 w-full"
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
                className="hover:animate-pulse mx-auto rounded shadow-lg px-24 py-2 bg-accent text-white w-full"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
