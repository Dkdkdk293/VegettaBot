let handler  = async (m, { conn, usedPrefix, command }) => {
let picture = './media/menus/Menu1.jpg'
let gata = `𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 👺


✅ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙏𝙀𝙍𝙈𝙐𝙓
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
termux-setup-storage
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/eduuusoo/VegettaBot/master/gata.sh | bash
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
✅ 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙃𝙀𝙍𝙊𝙆𝙐
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*_https://heroku.com/deploy?template=https://github.com/eduuusoo/VegettaBot*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*Añada lo siguente al Buildpack:*
_https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git_
_https://github.com/clhuang/heroku-buildpack-webp-binaries.git_
*━━━━━━━━━━━━━⬣*`
await 
//conn.sendFile(m.chat, gataImg, 'lp.jpg', gata, fkontak, false, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 👺 𝙎𝙪𝙥𝙚𝙧 𝙑𝙚𝙜𝙚𝙩𝙩𝙖 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb }}})}
conn.sendButton(m.chat, gata, `Comunícate con Mí Creador si necesitas ayuda con la Instalación.\n\n+593 99 240 2778\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], 'termux-setup-storage\n\napt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/eduuusoo/VegettaBot/master/gata.sh | bash', fkontak)}
handler.command = /^(instalarbot|instalarvegettabot|instalarvegetta|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler


