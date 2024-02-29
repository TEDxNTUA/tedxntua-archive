import axios from "axios";
import { NextResponse } from "next/server";

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

  try {
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        LNAME: surname,
        NEWSLETTER: "Ναι",
      },
    };

    const response = await axios.post(url, data, { headers });

    if (response.status >= 400) {
      return NextResponse.json({ error: null }, { status: 400 });
    }

    return NextResponse.json({ error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.response.data.title.toString() },
      { status: 577 }
    );
  }
}
