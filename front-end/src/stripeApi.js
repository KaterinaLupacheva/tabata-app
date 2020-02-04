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

const api = {
    // createPaymentIntent,
    getPublicStripeKey: getPublicStripeKey,
    getProductDetails: getProductDetails
};

export default api;