const express = require("express")
const app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.json({
    limit: '50mb'
}));

app.get("/", (req, res) => {

    res.json({
        "info": "Website Online"
    })
})

app.post("/webhook/enviar", (req, res) => {
    const Discord = require("discord.js")
    const webhook = new Discord.WebhookClient({
        id: req.body.webhookID,
        token: req.body.webhookToken
    });
    webhook.send(req.body.content)
        .catch(console.error);
    res.json({
        "info": "A webhook foi enviada com sucesso."
    })
})
app.listen(3000)
//Em breve quando não tiver nada para fazer otimizarei o sistema, usando apenas requests na API do discord lol
