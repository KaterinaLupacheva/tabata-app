import { path } from './pages/url';

const getPublicStripeKey = options => {
return window
    .fetch(`${path}/public-key`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
    if (res.status === 200) {
        return res.json();
    } else {
        return null;
    }
    })
    .then(data => {
    if (!data || data.error) {
        console.log("API error:", { data });
        throw Error("API Error");
    } else {
        return data.publicKey;
    }
    });
};

const getProductDetails = options => {
    return window
      .fetch(`${path}/product-details`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(data => {
        if (!data || data.error) {
          console.log("API error:", { data });
          throw Error("API Error");
        } else {
          return data;
        }
      });
  };

  const createPaymentIntent = options => {
      console.log('OPTIONS ' + JSON.stringify(options))
    return window
      .fetch(`${path}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
      })
      .then(res => {
          console.log('RES ' + JSON.stringify(res))
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(data => {
        if (!data || data.error) {
          console.log("API error:", { data });
          throw new Error("PaymentIntent API Error");
        } else {
          return data.client_secret;
        }
      });
  };

const api = {
    createPaymentIntent,
    getPublicStripeKey: getPublicStripeKey,
    getProductDetails: getProductDetails
};

export default api;