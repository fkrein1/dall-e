import { S3 } from 'aws-sdk';

export const s3 = new S3({
  region: process.env.AWS_S3_REGION,
});
