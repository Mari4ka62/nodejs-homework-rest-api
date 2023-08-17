const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;

const sendEmail = (data) => {
  const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "mari4ka62@meta.ua",
      pass: META_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };
  const transport = nodemailer.createTransport(nodemailerConfig);

  const email = {
    ...data,
    from: "mari4ka62@meta.ua",
  };
  transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error));
};
module.exports = sendEmail;
