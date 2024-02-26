import { checkName, checkEmail } from "../../../lib/formValidation";

async function handler({ req, res }) {
  const mailchimp = require("@mailchimp/mailchimp_marketing");
  mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: process.env.SERVER,
  });
  const listId = process.env.LIST_ID;
  const subscribingUser = {
    firstName: "test",
    lastName: "test",
    email: "test@test.com",
  };

  if (req.method === "POST") {
    // const name = req.body.name;
    // const surname = req.body.surname;
    // const email = req.body.email;

    // const nameValidation = checkName(name).isOkay;
    // const surnameValidation = checkName(surname).isOkay;
    // const emailValidation = checkEmail(email).isOkay;

    // if (!nameValidation) {
    //   res.status(422).json({ message: "Invalid name." });
    //   return;
    // }
    // if (!surnameValidation) {
    //   res.status(422).json({ message: "Invalid surname." });
    //   return;
    // }
    // if (!emailValidation) {
    //   res.status(422).json({ message: "Invalid email." });
    //   return;
    // }

    const response = await mailchimp.lists.addListMember(process.env.LIST_ID, {
      //1473802836
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });

    console.log(
      `Successfully added contact as an audience member. The contact's id is ${response.id}.`
    );
    console.log(response);
  }
  // console.log(email);
  // res.status(201).json({ message: "Signed up" });
}

export default handler;
