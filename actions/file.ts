"use server";

import { v2 as cloud } from "cloudinary";

cloud.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export const uploadFile = async (data: FormData) => {
  const file = data.get("image");
  console.log(file);

  return { url: "image url" };
};
