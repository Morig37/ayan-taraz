// src/services/payment/ZarinPal.ts
import ZarinPalCheckout from 'zarinpal-checkout';

const zarinpal = ZarinPalCheckout.create(
  'YOUR-ZARINPAL-MERCHANT-CODE',
  true // isDev
);

export const requestPayment = async (
  amount: number,
  description: string,
  callback: string
) => {
  try {
    const response = await zarinpal.PaymentRequest({
      Amount: amount,
      CallbackURL: callback,
      Description: description,
    });
    
    if (response.status === 100) {
      return response.url;
    }
    throw new Error('خطا در پرداخت');
  } catch (error) {
    console.error('ZarinPal Error:', error);
    throw error;
  }
};