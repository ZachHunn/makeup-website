const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

type EmailInfo = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};
export const sendEmail = (emailInfo: EmailInfo): void => {
  const msg = {
    to: 'jvictoria@jvictoriamua.com',
    from: 'jvictoria@jvictoria.com',
    subject: `${emailInfo.fullName} has sent an email inquiring about makeup`,
    html: `<strong>Phone number: ${emailInfo.phoneNumber}<br /><br /> Email Address: ${emailInfo.emailAddress}<br /><br /> Message: ${emailInfo.message} </strong>`,
  };

  sgMail
    .send(msg)
    .then(() => {})
    .catch((error: any) => console.error(error));
};
