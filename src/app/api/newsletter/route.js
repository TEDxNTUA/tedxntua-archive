import axios from "axios";
import { NextResponse } from "next/server";

import("supports-color");
// To handle a GET request to /api
// export async function PO123ST(request) {
//   // Do whatever you want
//   console.log(JSON.stringify(request));
//   return NextResponse.json({ message: request.body }, { status: 200 });
// }

function getRequestParams(name, surname, email) {
  // get environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const memberInfo = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: name,
      LNAME: surname,
      NEWSLETTER: "Ναι",
    },
  };

  const base64Apikey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64Apikey}`,
  };

  return { url, memberInfo, headers };
}

// To handle a POST request to /api
export async function POST(req, res) {
  const { name, surname, email } = await req.json();

  const { url, memberInfo, headers } = getRequestParams(name, surname, email);

  if (!name && !email) {
    return res.status(400).json({ error: "Email and name is required" });
  }

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: name,
      LNAME: surname,
      NEWSLETTER: "Ναι",
    },
  };
  try {
    const response = await axios.post(url, data, { headers });

    // const response = await fetch(
    //   `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

    //   {
    //     body: JSON.stringify(data),
    //     headers: { headers },
    //     method: "POST",
    //   }
    // );
    console.log(response);
    if (response.status >= 400) {
      return NextResponse.json({ error: null }, { status: 400 });
    }

    return NextResponse.json({ error: null }, { status: 201 });
  } catch (error) {
    console.log("Error", error.response.data.title);
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
