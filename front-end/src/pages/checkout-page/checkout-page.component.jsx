import React, { useState, useEffect} from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";

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
              {/* <CheckoutForm /> */}
            </Elements>
          </StripeProvider>
        )}
    </div>
)};

export default CheckoutPage;