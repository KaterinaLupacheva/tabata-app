import React, { useState, useEffect} from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from '../../components/checkout-form/checkout-form.component';

import './checkout-page.styles.scss';

const CheckoutPage = () => {
    const [apiKey, setApiKey] = useState(null);

    useEffect(() => {
        setApiKey(() => 'test');
    });

    return (
    <div className='checkout'>
        {apiKey && (
          <StripeProvider apiKey={apiKey}>
            <Elements>
              <CheckoutForm />
            </Elements>
          </StripeProvider>
        )}
    </div>
)};

export default CheckoutPage;