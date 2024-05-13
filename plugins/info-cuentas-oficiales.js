let media = 'https://qu.ax/NqZN.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘾𝙍𝙀𝘼𝘿𝙊𝙍 👺🔥
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈*
*https://www.instagram.com/sebas.mvp_official0*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙔𝙊𝙐𝙏𝙐𝘽𝙀*
*https://youtube.com/@mixmusicofficial-oy3hb*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.`
await conn.sendButton(m.chat, str, wm, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👺', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], null, [
['𝙑𝙚𝙜𝙚𝙩𝙩𝙖𝘽𝙤𝙩', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/eduuusoo/VegettaBot', '𝙑𝙚𝙜𝙚𝙩𝙩𝙖𝘽𝙤𝙩', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👺', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}*/
handler.command = /^cuentasoficiales|vegettaig|cuentasvb|cuentagb|accounts|gataaccounts|account|igvegetta|cuentasdevegetta|cuentasdevegettabot|cuentavegettabot|cuentasvegettabot$/i
handler.exp = 35
export default handler
