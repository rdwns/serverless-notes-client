export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_LZa7Ac7wns1nJq8iuF64Ju2J00sWVnEy4w",
    s3: {
      REGION: "us-east-2",
      BUCKET: "rdwn-note"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://yf5hpkfgs0.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_q1LDZdjrw",
      APP_CLIENT_ID: "1dtvf4ikka4cdq3gaern0pcjrq",
      IDENTITY_POOL_ID: "us-east-2:9d2946a9-af5a-497d-94ec-229eb42df7e3"
    }
  };