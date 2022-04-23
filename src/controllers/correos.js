const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/correos", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Email enviado desde depdaemon</h3>
        <ul>
            <li>Email: ${req.body.correo}</li>
            <li>Enviado por: ${req.body.nombre}</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${req.body.mensaje}</p>
      `;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "correo@gmail.com", //El email del servicio SMTP que va a utilizar (en este caso Gmail)
        pass: "contrasena" // La contraseña de dicho SMTP
      }
    });

    let mailOptions = {
      from: "danimoncruz41@gmail.com", // Quien manda el email
      to: req.body.email, // El email de destino
      replyTo: "omarmorleno@gmail.com",
      subject: req.body.asunto, // El asunto del email
      text: req.body.mensaje, // El mensaje
      html: htmlEmail // La parte HTML del email
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Mensaje enviado: %s", info.mensaje);
      console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});
