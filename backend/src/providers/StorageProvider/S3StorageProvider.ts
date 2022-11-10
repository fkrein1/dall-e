import { S3 } from 'aws-sdk';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { IStorageProvider } from './IStorageProvider';
const fetch = require('node-fetch');

export class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_S3_REGION,
    });
  }

  async save(url: string) {
    const id = uuidv4();
    const res = await fetch(url);
    const blob = await res.buffer();
    const webpImage = await sharp(blob).webp().toBuffer();

    await this.client
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_FOLDER as string,
        Key: id,
        ACL: 'public-read',
        ContentType: 'image/webp',
        Body: webpImage,
      })
      .promise();

    const publicURL = `${process.env.AWS_S3_BUCKET_PUBLIC_URL}${id}`;

    return publicURL;
  }
}
