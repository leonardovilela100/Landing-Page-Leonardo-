const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get("/send-email", async (req, res)=> {

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "eaaa975ac2012b",
          pass: "7c552e9fb2b07a"
        }
      });

      var message = {
        from: "noreplay@leonardo.com.br",
        to: "leonardo@leonardo.com.br",
        subject: "Contato Leonardo Dev",
        text: "Obrigado por entrar em contato comigo",
        html: "<p>Obrigado por entrar em contato comigo</p>"
      };
      
      transport.sendMail(message, function (err){
          if (err) return res.status(400).json({
            erro: true,
            mensage: "Erro: E-mail não enviado com sucesso"
        });
      })


        return res.json({
            erro: false,
            mensage:"Email enviado com sucesso!"
        });

    });

    app.listen(8080, () => {
        console.log("Servidor iniciado na porta 8080: http:localhost:8080")

});