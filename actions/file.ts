"use server";

import { v2 as cloud, UploadApiResponse } from "cloudinary";

cloud.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export const uploadBlogImages = async (
  data: FormData
): Promise<UploadApiResponse | undefined> => {
  const file = data.get("image");

  if (file instanceof File && file.type.startsWith("image/")) {
    const buffer = Buffer.from(await file.arrayBuffer());
    return new Promise((resolve, reject) => {
      cloud.uploader
        .upload_stream({ folder: "blog-images" }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        })
        .end(buffer);
    });
  }
};

export const uploadCoverImage = async (
  data: FormData
): Promise<UploadApiResponse | undefined> => {
  const file = data.get("image");

  if (file instanceof File && file.type.startsWith("image/")) {
    const buffer = Buffer.from(await file.arrayBuffer());
    return new Promise((resolve, reject) => {
      cloud.uploader
        .upload_stream({ folder: "blog-covers" }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        })
        .end(buffer);
    });
  }
};

export const readBlogImages = async () => {
  try {
    const { resources } = (await cloud.api.resources({
      prefix: "blog-images",
      resource_type: "image",
      type: "upload",
    })) as { resources: UploadApiResponse[] };

    return resources.map(({ secure_url }) => secure_url);
  } catch (error) {
    console.error(error);
  }
};

export const readCoverImages = async () => {
  try {
    const { resources } = (await cloud.api.resources({
      prefix: "blog-covers",
      resource_type: "image",
      type: "upload",
    })) as { resources: UploadApiResponse[] };

    return resources.map(({ secure_url }) => secure_url);
  } catch (error) {
    console.error(error);
  }
};

export const removeImage = async (publicId: string) => {
  try {
    await cloud.uploader.destroy(publicId);
  } catch (error) {
    console.error(error);
  }
};
