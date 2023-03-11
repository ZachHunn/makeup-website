import {
  PaymentForm,
  ApplePay,
  GooglePay,
  CashAppPay,
  CreditCard,
} from 'react-square-web-payments-sdk';

const PaymentPage = () => {
  const applicationId = process.env.SQUARE_SANDBOX_APP_ID as unknown as string;
  const locationId = process.env.SQUARE_LOCATION_ID as unknown as string;
  return (
    <div className="grid justify-center items-center h-screen">
      <PaymentForm
        applicationId="sandbox-sq0idb-4uMjLu06naFoyAm1MufZaA"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token: ', token);
          console.log('vb: ', verifiedBuyer);
        }}
        locationId="L5TA9PDZXXCW4"
      >
        <CreditCard />
        {/* <ApplePay />
        <GooglePay />
        <CashAppPay /> */}
      </PaymentForm>
    </div>
  );
};

export default PaymentPage;
