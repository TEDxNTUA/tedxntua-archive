import { NextResponse } from "next/server";

// // To handle a GET request to /api
// export async function GET(request) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
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
export async function POST(req) {
  // Do whatever you want
  const { email, name, surname } = req.body;

  if (!email || !email.length) {
    return NextResponse.json(
      { message: "Forgot to add your email?" },
      { status: 400 }
    );
  }

  // try {
  //   const { url, memberInfo, headers } = getRequestParams(name, surname, email);

  //   const response = await axios.post(url, memberInfo, { headers });

  //   return NextResponse.json({ error: null }, { status: 201 });
  // } catch (e) {
  //   return NextResponse.json(
  //     { error: "Oops sth went wrong." },
  //     { status: 400 }
  //   );
  // }
  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong... Send me an email at uriklar@gmail.com and I'll add you to the list.`,
    });

    // Report error to Sentry or whatever
  }
}

// Same logic to add a `PATCH`, `DELETE`...
