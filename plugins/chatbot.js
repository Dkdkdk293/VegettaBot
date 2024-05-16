// by https://github.com/elrebelde21

import '../plugins/_content.js'
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`*𝙃𝙊𝙇𝘼, ¿𝙀𝙉 𝙌𝙐𝙀 𝙏𝙀 𝙋𝙐𝙀𝘿𝙊 𝘼𝙔𝙐𝘿𝘼𝙍?😸*`])}`.trim()
let txt = `*\`💫 Te presentamos un nuevo hosting: "Infinity-Wa Host"\`*

*¿Muy lento tu nokia y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para mantener activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

*🚩Precios :*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://live.panel-infinitywa.store

*🟢 Dashboard:*
https://dashboard.infinitywa.xyz

*⚙️ Bot de Support: exclusivo para host*
https://wa.me/message/FETBF7YBO37CG1

🧡 *Canal de WhatsApp:*
${canal1}

💚 *Grupo:*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

🛍️ *Método de pago:*
*• PayPal :* paypal.me/OfcGB
*• Mercado pago, alías:* OficialGB
*• Naranja x, alías:* OficialGL
*• Yape (Perú) :* +51948705559

*\`💙 Contactanos para más información o alquidir los servicios:\`*
• https://www.facebook.com/elrebelde21
• wa.me/527294888993
• wa.me/5492964650915` 

if (/^infinity|infinityWa|host|hosting$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
sourceUrl: accountsgb}}},
{ quoted: fkontak})
} 
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
}

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝙑𝙚𝙜𝙚𝙩𝙩𝙖 𝘽𝙤𝙩 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

if (/^Quiero un bot|como obtengo un bot?|Quiero un bot?|quiero un bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`⚡¿Quieres un bot para tu grupo?\`

*👺 Tiene Varias Opciones. Puedes Instalarlo Tú Mismo Siguiendo Los Pasos De Instalación:*
* #instalarbot

*🌅 Puedes Hacer SubBot Mandando El Siguiente Comando:*
* #serbot (Escanea El QR) 
* #jadibot --code (Código De 8 Dígitos)


> 🚀 El bot estará activo 24/7 para tu grupo.

\`⚡ ¿Por Dónde Puedo Donar?\`

> A Través De Nuestro PayPal, Nos Ayudaras A Generar Más El Bot ✨.

*❇️PayPal:*
• https://www.paypal.me/sebastian720459

\`⏩ Siguiente paso ⏩\`

 Si Comunicarte Con Mi Creador

👇🏻Contactalo Aqui👇🏻

• ${ig}

> *𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙋𝙤𝙧 𝙎𝙪𝙨 𝙋𝙧𝙚𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨 𝙀𝙣 ${gt} 👺💥*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})}
 
if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._

🍃 *_Para ver el menú de comandos puedes usar:_*
#menu

𝙑𝙚𝙜𝙚𝙩𝙩𝙖 𝘽𝙤𝙩 ✅`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
