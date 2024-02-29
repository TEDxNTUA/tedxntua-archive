export const fetchData = async (name, surname, email) => {
  var success = false;

  try {
    const mailchimp = require("@mailchimp/mailchimp_marketing");

    mailchimp.setConfig({
      apiKey: process.env.API_KEY,
      server: process.env.SERVER,
    });

    const listId = process.env.LIST_ID;

    const memberInfo = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        LNAME: surname,
      },
    };

    const response = await mailchimp.lists.addListMember(listId, memberInfo);
    console.log("response:", response);
    // return response; %my comment
    return response.json();
  } catch (error) {
    console.error("An exception occurred:", error.message);
    throw error;
  }
};
