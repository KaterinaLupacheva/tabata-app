import React, { useState, useEffect } from 'react';
import { CardElement, injectStripe } from "react-stripe-elements";
import api from '../../stripeApi';

import './checkout-form.styles.scss';


const CheckoutForm = ({stripe}) => {
    const [succeeded, setSucceeded] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [amount, setAmount] = useState(100);
    const [currency, setCurrency] = useState('usd');
    const [clientSecret, setClientSecret] = useState(null);
    const [metadata, setMetadata] = useState(null);

    useEffect(()=> {
        api.getProductDetails().then(productDetails => {
            setAmount(productDetails.amount / 100);
            setCurrency(productDetails.currency)
          });
    });

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Step 1: Create PaymentIntent over Stripe API
        api
        .createPaymentIntent({
        payment_method_types: ["card"]
        })
        .then(clSec => {
            setClientSecret(clSec);
            setDisabled(true);
            setProcessing(true);

            // Step 2: Use clientSecret from PaymentIntent to handle payment in stripe.handleCardPayment() call
        stripe
        .handleCardPayment(clientSecret)
        .then(payload => {
          if (payload.error) {
              setError(`Payment failed: ${payload.error.message}`);
              setDisabled(false);
              setProcessing(false);
            console.log("[error]", payload.error);
          } else {
              setProcessing(false);
              setSucceeded(true);
              setError('');
              setMetadata(payload.paymentIntent);
            console.log("[PaymentIntent]", payload.paymentIntent);
          }
        });
    })
    .catch(err => {
        setError(err.message);
    });
}

    const renderSuccess = () => {
        return (
          <div className="success-message">
            <h1>Your test payment succeeded</h1>
            <p>View PaymentIntent response:</p>
            <pre className="sr-callout">
              <code>{JSON.stringify(metadata, null, 2)}</code>
            </pre>
          </div>
        );
      }

    const renderForm = () => {
        const style = {
            base: {
              color: "#32325d",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "#aab7c4"
              }
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a"
            }
          };

        return (
            <form className='checkout-form' onSubmit={handleSubmit}>
                <h1>
                    {currency.toLocaleUpperCase()}{" "}
                    {amount.toLocaleString(navigator.language, {
                        minimumFractionDigits: 2
                    })}{" "}
                </h1>
                <h4>Subscribe to Tabata</h4>

                <CardElement className='card-element' style={style} />

                {error && (
                    <div className="field-error">{error}</div>
                )}

                {!succeeded && (
                    <button className='checkout-pay-button' disabled={disabled}>
                    {processing ? "Processing…" : "Pay"}
                </button>
                )}
                
            </form>
        );

    };

    return (
        <div>
            {succeeded && renderSuccess()}
            {!succeeded && renderForm()}
        </div>
)};

export default injectStripe(CheckoutForm);