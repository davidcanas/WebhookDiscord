# WebhookDiscord
Um proxy para enviar webhooks do discord facilmente! 

Apenas precisa de fazer um request `POST` para a url `https://proxy.webhookdiscord.tk/webhook/enviar`
Com os seguintes dados:
```json
{
"content": "Conteúdo", 
"webhookID": "ID da webhook", 
"webhookToken": "O Token Da Webhook"
} 
```

Exemplo no roblox:
```lua
-- Precisas de Permitir solicitações HTTP nas definições do jogo
local http = game:GetService("HttpService")

-- O content suporta embeds! 
local Dados = {
	["content"] = "Hmmm esta mensagem foi enviada a partir do roblox!",
	["webhookID"] = "O ID da tua webhook ex: 932183812832813",
	["webhookToken"] = "O TOKEN da tua webhook ex: Nxhadhahsdhe"
	
}

Dados = http:JSONEncode(Dados)

http:PostAsync("https://proxy.webhookdiscord.tk/webhook/enviar", Dados)
```

