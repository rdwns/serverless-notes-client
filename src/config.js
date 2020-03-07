const dev = {
    STRIPE_KEY: "pk_test_LZa7Ac7wns1nJq8iuF64Ju2J00sWVnEy4w",
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-2loz7c5dk2mk"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://70q1dosza8.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_gYnHRm0XY",
      APP_CLIENT_ID: "bvi7agns5sblthte972ss8lo5",
      IDENTITY_POOL_ID: "us-east-2:c89f0dd7-24ca-4a58-81ee-22d62ac00b83"
    }
  };

  const prod = {
    STRIPE_KEY: "pk_test_LZa7Ac7wns1nJq8iuF64Ju2J00sWVnEy4w",
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-vhhkvxjxoixi"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://p10u8skype.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_uWlCmNVrC",
      APP_CLIENT_ID: "7g3phd43asg5nlgmlqp3vqov5n",
      IDENTITY_POOL_ID: "us-east-2:585384d0-1c00-4f1a-acdb-6f08a15fe658"
    }
  };

  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };