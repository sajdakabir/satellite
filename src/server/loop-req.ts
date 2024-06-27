"use server";

import axios, { AxiosError } from "axios";

export const SendRequest = async (email: string) => {
  console.log(process.env.NEWSLETTER_LOOPS_API);
  const formBody = `email=${encodeURIComponent(email)}`;
  try {
    const response = await axios.post(
      process.env.NEWSLETTER_LOOPS_API!,
      formBody,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  } catch (error) {
    const e = error as AxiosError;
    console.error(e.response?.data);
  }
};
