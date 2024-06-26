import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_KEY || '');

type EmailInfo = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};
export const sendEmail = (emailInfo: EmailInfo): void => {
  const msg = {
    to: 'victoriajeanetta1@gmail.com',
    from: 'victoriajeanetta1@gmail.com',
    subject: `${emailInfo.fullName} has sent an email inquiring about makeup`,
    html: `<strong>Phone number: ${emailInfo.phoneNumber}<br /><br /> Email Address: ${emailInfo.emailAddress}<br /><br /> Message: ${emailInfo.message} </strong>`,
  };

  sendgrid.send(msg);
};
