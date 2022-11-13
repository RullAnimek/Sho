
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { mediafireDl } = require('./lib/mediafire.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { cmdadd } = require('./lib/hit')
const { cmdaddtd } = require('./lib/hittd')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = ('\n\n\nSlimeBot')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
global.prem = require("./lib/premium")
gambar = fs.readFileSync('./media/image/papah.jpg')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));

module.exports = papah = async (papah, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°│ɞπ÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°│ɞπ÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const arg = body.substring(body.indexOf(" ") + 1);
        const pushname = m.pushName || "No Name"
        const botNumber = await papah.decodeJid(papah.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	    const isBan = banned.includes(m.sender)

        // Group
        const groupMetadata = m.isGroup ? await papah.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
	const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	const filsk = filsj[Math.floor(Math.random() * filsj.length)]
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
        if (!('anticall' in setting)) setting.anticall = true
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!papah.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            papah.readMessages([m.key])
        }
        
        if (m.text.includes('🗿')) {
    papah.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
                
//Premium Exp
prem.expiredCheck(papah, m, premium);
                
//sticker url
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/stick' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/stick' + names + '.png'
                    let asw = './database/stick' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        papah.sendMessage(to, { sticker: media}, {quoted: m})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
      //Resize
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             
             //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${ytname}`, orderTitle: 'papah', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${ytname}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${ytname}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${ytname}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${ytname}`, "caption": `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${ytname}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${ytname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6282287219167:6282287219167\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://i.pinimg.com/originals/d0/4a/cd/d04acded64773ec6344d378a85acb7c5.jpg","mimetype": "image/jpeg","caption": `${ytname}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        // total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/papah-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/papah-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await papah.setStatus(`${papah.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
			
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await papah.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        papah.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Slime Bot By Sho
      const deploy = (teks) => { papah.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: papah.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, papah.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        papah.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            papah.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await papah.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, papah.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await papah.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await papah.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    papah.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    papah.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) papah.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) papah.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) papah.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    papah.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) papah.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) papah.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    papah.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        if (isCmd) cmdaddtd()
        const totalhittd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))[0].todaycmd
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await papah.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await papah.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            papah.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await papah.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) papah.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    papah.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    papah.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    papah.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    papah.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    papah.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    papah.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    papah.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await papah.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Contoh : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await papah.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    papah.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    papah.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, papah.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    papah.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    papah.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, papah.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    papah.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    papah.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, papah.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    papah.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    papah.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, papah.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    papah.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    papah.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, papah.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    papah.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    papah.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, papah.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                papah.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'vrtx': {
            	deploy('hehe')
            	}
            break
            case 'poll': {
if (!isCreator) return mess.owner
if (!text) throw `Contoh : ${prefix + command} Owner Ganteng|Iya|Tidak`
let poll1 = `${text.split("|")[1]}`
let poll2 = `${text.split("|")[2]}`
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `${text.split("|")[0]}`,
"options": [
	{
"optionName": poll1
	},
	{
"optionName": poll2
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat})
papah.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id})
}
break
            
//Pembatas FUN===============================================
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, jawab, papah.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian wkwkwk

@${orang.split('@')[0]} ❤️️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: '⛱️' Jadian }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Contoh : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m, {quoted: ftoko})
            }
            break
            case 'bisakah': {
            	if (!text) throw `Contoh : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'apakah': {
            	if (!text) throw `Contoh : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Contoh : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'cekmati': {
            	if (m.text.includes('@')) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                //if (m.text.includes(/^1|2|3|4|5|6|7|8|9|0/)) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa anjir?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                let jawab = (`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
                papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'mylove': case 'love': case 'cintaku': case 'cinta': {
            	let mlove = ['⟪1%⟫','⟪2%⟫','⟪3%⟫','⟪4%⟫','⟪5%⟫','⟪6%⟫','⟪7%⟫','⟪8%⟫','⟪9%⟫','⟪10%⟫','⟪11%⟫','⟪12%⟫','⟪13%⟫','⟪14%⟫','⟪15%⟫','⟪16%⟫','⟪17%⟫','⟪18%⟫','⟪19%⟫','⟪20%⟫','⟪21%⟫','⟪22%⟫','⟪23%⟫','⟪24%⟫','⟪25%⟫','⟪26%⟫','⟪27%⟫','⟪28%⟫','⟪29%⟫','⟪30%⟫','⟪31%⟫','⟪32%⟫','⟪33%⟫','⟪34%⟫','⟪35%⟫','⟪36%⟫','⟪37%⟫','⟪38%⟫','⟪39%⟫','⟪40%⟫','⟪41%⟫','⟪42%⟫','⟪43%⟫','⟪44%⟫','⟪45%⟫','⟪46%⟫','⟪47%⟫','⟪48%⟫','⟪49%⟫','⟪50%⟫','⟪51%⟫','⟪52%⟫','⟪53%⟫','⟪54%⟫','⟪55%⟫','⟪56%⟫','⟪57%⟫','⟪58%⟫','⟪59%⟫','⟪60%⟫','⟪61%⟫','⟪62%⟫','⟪63%⟫','⟪64%⟫','⟪65%⟫','⟪66%⟫','⟪67%⟫','⟪68%⟫','⟪69%⟫','⟪70%⟫','⟪71%⟫','⟪72%⟫','⟪73%⟫','⟪74%⟫','⟪75%⟫','⟪76%⟫','⟪77%⟫','⟪78%⟫','⟪79%⟫','⟪80%⟫','⟪81%⟫','⟪82%⟫','⟪83%⟫','⟪84%⟫','⟪85%⟫','⟪86%⟫','⟪87%⟫','⟪88%⟫','⟪89%⟫','⟪90%⟫','⟪91%⟫','⟪92%⟫','⟪93%⟫','⟪94%⟫','⟪95%⟫','⟪96%⟫','⟪97%⟫','⟪98%⟫','⟪99%⟫','⟪100%⟫']
                let mcinta = mlove[Math.floor(Math.random() * mlove.length)]
                let jawab = (`*Sebesar : ${mcinta} Padanya*`)
                papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            	}
            break
            case 'daurulang': {
            	let mdaur = ['♳','♴','♵','♶','♷','♸','♹','♺']
                let mulng = mdaur[Math.floor(Math.random() * mdaur.length)]
                let jawab = (`*Telah Di Daur Ulang Sebanyak : ${mulng}*`)
               papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
            	}
            break
            case 'dadu': {
            	let ddsa = ['⚀','⚁','⚂','⚃','⚄','⚅']
                let klow = ddsa[Math.floor(Math.random() * ddsa.length)]
            	m.reply(klow)
            	}
            break
            case 'rate': case 'nilai': {
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    papah.sendMessage(m.chat, { text: `Rate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'ganteng': case 'gantengcek': case 'handsome': case 'handsomecheck': {
				    if (!text) return replay(`Tag Someone, Contoh : ${prefix + command} papah`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    papah.sendMessage(m.chat, { text: `Cek Ganteng : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'cantik': case 'cantikcek': case 'beautiful': case 'beautifulcheck': {
				    if (!text) return replay(`Tag Someone, Contoh : ${prefix + command} papah`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    papah.sendMessage(m.chat, { text: `Cek Cantik : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) throw `Contoh : ${prefix + command} saya menang?`
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let koh = krng[Math.floor(Math.random() * krng.length)]
                let jawab = `*${command} ${text}*\n*Jawab : ${koh}*`
                papah.sendMessage(m.chat, { text: jawab }, {quoted: m})
				}
				break
				case 'fitnah': {
if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`)
var gh = body.slice(10)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
var ftelo = {key: {fromMe: false, participant: `${mentioned}`, ...(m.chat ? { remoteJid: m.chat } : {})}, message: { conversation: `${targetq}` }}
papah.sendMessage(m.chat, {text: bot}, {quoted: ftelo})
}
break
           
//PEMBATAS ADMIN & OWNER=======================================
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	m.reply('*Total Ada 100, Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                papah.sendMessage(m.chat, { image: fs.readFileSync('./media/image/papah.jpg'), caption: `Bila mau donasi atau sewa hubungi owner bot ini_` }, { quoted: m })
            }
            break
            case 'ceklimit': case 'checklimit': case 'limit':{
					m.reply('*Limit kamu:* ' + (db.data.users[m.sender].limit))
					}
					break 
		    case 'totalhit': case 'hit': {
			m.reply(`*Total Hit : ${jumlahcmd}*\n*Total Hit Harian : ${jumlahharian}*`)
			}
			break
            case 'runtime': case 'tes': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                papah.sendMessage(m.chat, { text: lowq }, {quoted: fkontak})
                papah.setStatus(`${papah.user.name} | Runtime : ${runtime(process.uptime())}`)
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Contoh : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await papah.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await papah.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
            break
            case 'tagme': {
            if (!m.isGroup) throw mess.group
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
            papah.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await papah.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: m.key
                    }
                }
                papah.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isPremium) throw mess.premime
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
            
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await papah.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await papah.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setowner': {
               if (!isCreator) throw mess.owner
               if (m.text.includes('@')) return m.reply(`*Invalid!*\n\n*Pake Nomer Woy*\n*Jangan Pakai Tag!*`)
               if (!text) throw `Contoh : ${prefix + command} 6282287219167`
              global.owner = text
              global.ownernomer = text
              m.reply(`Owner berhasil diubah menjadi\n\nɞ Owner : ${global.owner}\nɞ OwnerNumber : ${global.ownernomer}`)
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Contoh : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\nɞ Packname : ${global.packname}\nɞ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await papah.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await papah.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await papah.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await papah.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'sendsesi':
if (!isCreator) throw mess.owner
papah.sendMessage(m.chat, { document: fs.readFileSync(`./${sessionName}.json`), mimetype: 'jpg/application', fileName: `${sessionName}.json`}, { quoted: fkontak })
break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await papah.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await papah.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'ban':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Masukan Nomornya contoh: \n${prefix}${command} 62858****`)
if(isNaN(q)) return await m.reply('harus berupa nomor')
  if (q.includes(`+`)) return m.reply('Tidak menggunakan + langsung nomor 6285****')
prmin = args.join(" ")
banned.push(`${prmin}@s.whatsapp.net`)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
m.reply(`*Nomor wa.me/${prmin} telah dibanned !*`)
break
case 'unban':
  if (!isCreator) return m.reply(mess.owner)
  if (!q) return m.reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await m.reply('harus berupa nomor')
  if (q.includes(`+`)) return m.reply('Tidak menggunakan + langsung nomor 6285****')
prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
banned.splice(anul, 1)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
m.reply(`*Nomor wa.me/${prmin} telah di unban !*`)
  break
	case 'addprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				papah.sendMessage(m.chat, { text: "Sukses Premium" }, { quoted: fkontak });
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				papah.sendMessage(m.chat, { text: "Sukses Via Nomor" }, { quoted: fkontak });
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					papah.sendMessage(m.chat, { text: "Sukses Delete" }, { quoted: fkontak });
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				papah.sendMessage(m.chat, { text: "Sukses Via Nomer" }, { quoted: fkontak });
				}
				}
				break
		case 'listprem': {
			if (!isCreator) return m.reply(mess.owner)
			let data = require("./database/premium.json")
			let txt = `*------「 LIST PREMIUM 」------*\n\n`
                    for (let i of data) {
                txt += `*Nomer : ${i.id}*\n*Expired : ${i.expired} Second*\n\n`
                }
            m.reply(txt)
			}
			break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await papah.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await papah.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                await papah.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                await papah.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               papah.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `══✪〘 *👥 Tag All* 〙✪══
 
                ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `ɞ @${mem.id.split('@')[0]}\n`
                }
                papah.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            papah.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `ɞ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: papah.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            papah.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: papah.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            papah.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: papah.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            papah.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${papah.user.id}
`
papah.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await papah.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await papah.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `Mode Group`, papah.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await papah.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await papah.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `Mode Edit Info`, papah.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `Mode Antilink`, papah.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${papah.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${papah.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `Mute Bot`, papah.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await papah.groupInviteCode(m.chat)
                papah.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'revoke':
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                await papah.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => m.reply(jsonformat(err)))
                break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await papah.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await papah.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break 
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                papah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Contoh : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await papah.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await papah.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: m.key
                    }
                }
                papah.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nContoh : ${prefix + command} fatih-san`
let getGroups = await papah.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
await papah.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nContoh : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		await sleep(1500)
		let txt = `「 Broadcast Bot 」\n\n${text}`
		let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
            await papah.sendButtonText(yoi, buttons, txt, nyoutube, m, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⌕ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⌕ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⌕ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
await papah.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [i.userJid], quoted: fkontak})
}}
break
            case 'q': case 'quoted': {
        try {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await papah.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
		} catch (e) {
		    m.reply(mess.errmor)}
            }
	    break
            case 'listpc': {
            	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n\n───────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
await papah.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [i], quoted: fkontak})
}}
             break
                case 'listgc': {
                	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await papah.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
await papah.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [metadata.owner], quoted: fkontak})
}}
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    papah.sendText(m.chat, 'List Online:\n\n' + online.map(v => 'ɞ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Contoh : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Contoh : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
            
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                papah.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                papah.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Contoh : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                papah.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                papah.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await papah.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, papah.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await papah.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, papah.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await papah.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, papah.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await papah.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, papah.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, papah.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await papah.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await papah.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, papah.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await papah.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, papah.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await papah.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, papah.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                papah.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                papah.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
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
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                papah.sendContact(m.chat, global.owner, m)
            }
            break
            /**case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                papah.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, nyoutube, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break**/
            
//PEMBATAS CONVERT=======================================
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
        
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await papah.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await papah.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'stikerwm': case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'take': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            
                if (/image/.test(mime)) {
                    let media = await papah.downloadMediaMessage(qmsg)
                    let encmedia = await papah.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await papah.downloadMediaMessage(qmsg)
                    let encmedia = await papah.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            /**case 'nulis': case 'nulisteks': {
                let jawab = `Pilih Nulis Bro\n*1.nuliskanan (tekslu)*\n*2.nuliskiri (tekslu)*\n*3.foliokanan (tekslu)*\n*4.foliokiri (tekslu)*\n\n_Silahkan Dipilih_`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'MAGER AMAT🗿' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'nuliskanan': {
        
            const tulisan = body.slice(12)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './media/image/nulis/images/buku/sebelumkanan.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '2',
                '-annotate',
                '+128+129',
                fixHeight,
                './media/image/nulis/images/buku/setelahkanan.jpg'
            ])
                .on('error', () => m.reply('Gagal Karena Error'))
                .on('exit', () => {
                    papah.sendMessage(m.chat, { caption: global.mess.success, image: fs.readFileSync('./image/nulis/images/buku/setelahkanan.jpg') }, m)
                    
                })
            db.data.users[m.sender].limit -= 1
}
            break**/
            case 'emoji': {
            	if (!text) throw 'Mana Emojinya?'
			if (!q) return m.reply('emojinya?')
			let kukiw = `*Kak ${pushname}*`
			let sections = [
                {
	           title: 'Pilih Jenis Emojinya',
	           rows: [
	            {title: "Iphone", rowId: `iphoneemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI IPHONE`},
                {title: "Google", rowId: `googleemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI GOOGLE`},
                {title: "Samsung", rowId: `samsungemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI SAMSUNG`},
                {title: "Microsoft", rowId: `microsoftemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI MICROSOFT`},
                {title: "Whatsapp", rowId: `whatsappemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI WHATSAPP`},
                {title: "Twitter", rowId: `twitteremoji ${text}`, description: `KLIK UNTUK PILIH EMOJI TWITTER`},
                {title: "Facebook", rowId: `facebookemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI FACEBOOK`},
                {title: "Skype", rowId: `skypeemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI SKYPE`},
                {title: "Joy", rowId: `joyemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI JOY`},
                {title: "Moji", rowId: `mojiemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI MOJI`},
                {title: "Pedia", rowId: `pediaemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI PEDIA`},
                {title: "Instagram", rowId: `instagramemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI INSTAGRAM`}
	            ]
                }
                ]
                papah.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, fkontak)
            }
            break
case 'iphoneemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[0].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'googleemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[1].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'samsungemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'microsoftemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'whatsappemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'twitteremoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'facebookemoji': 
case 'fbemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'skypeemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'joyemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'mojiemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'pediaemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'igemoji': 
case 'instagramemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await papah.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Contoh : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await papah.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Contoh : ${prefix + command} text`
           await papah.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'papah', 'dev', m, {asSticker: true})

         }
         break
         case 'tts': {
         	if (!text) throw `Contoh : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             papah.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
		    try {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	    
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await papah.downloadAndSaveMediaMessage(qmsg)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await papah.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(awikwok)
	        } catch (e) {
		    m.reply(`Error\nHarus Pakai Gambar!`)
		    }
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Contoh : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'geturl': {
         	if (!text) throw `Contoh : ${prefix + command} url/link`
            
             let igmk = await getBuffer(`${text}`)
             papah.sendMessage(m.chat, { image: igmk}, { quoted: ftroli }).catch((err) => m.reply(mess.error))
         	}
         break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
            
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    papah.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
            
		let { webp2mp4File } = require('./lib/uploader')
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await papah.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
        
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            papah.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
        
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            papah.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${papah.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
        
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            papah.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
            
		let { webp2mp4File } = require('./lib/uploader')
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await papah.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
            
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await papah.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'toqr': case 'qr': {
            	if (!text) throw 'No Query Text'
            
               papah.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Nih Bro` }, { quoted: m })
            	}
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await papah.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    papah.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Contoh : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤LIKE' }, type: 1 }]
            await papah.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await papah.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Contoh : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `ɞ No : ${no++}\nɞ Type : ${i.type}\nɞ Video ID : ${i.videoId}\nɞ Judul : ${i.title}\nɞ Views : ${i.views}\nɞ Duration : ${i.timestamp}\nɞ Upload At : ${i.ago}\nɞ Author : ${i.author.name}\nɞ Url : ${i.url}\n\n─────────────────\n\n`
                }
                papah.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Contoh : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `ɞ *Title* : ${g.title}\n`
                teks += `ɞ *Description* : ${g.snippet}\n`
                teks += `ɞ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'test':
  const buttons5 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]
const pahh = {
text: `Total Hit : ${totalhit}\nHit Today : ${totalhittd}`,
footer: `Slime Bot`,
buttons: buttons5,
headerType: 1
}
papah.sendMessage(m.chat, pahh, {quoted:ftoko})
break
        case 'gimage': {
if (!text) return m.reply( `Contoh : ${prefix + command} bakso malang`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: images },
    caption: `*「 GIMAGE SEARCH 」*
 *Query* : ${text}
 *Media Url* : ${images}`,
    footer: ` Slime Bot`,
    buttons: buttons,
    headerType: 4
}
papah.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
})
}
break
	    case 'play': case 'ytplay': {
                if (!text) throw `Contoh : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
ɞ Judul : ${anu.title}
ɞ Ext : Search
ɞ ID : ${anu.videoId}
ɞ Duration : ${anu.timestamp}
ɞ Viewers : ${anu.views}
ɞ Upload At : ${anu.ago}
ɞ Author : ${anu.author.name}
ɞ Channel : ${anu.author.url}
ɞ Description : ${anu.description}
ɞ Url : ${anu.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                papah.sendImage(m.chat, media.thumb, `ɞ Judul : ${media.title}\nɞ File Size : ${media.filesizeF}\nɞ Url : ${isUrl(text)}\nɞ Ext : MP3\nɞ Resolusi : ${args[1] || '128kbps'}`, m)
                papah.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                papah.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `ɞ Judul : ${media.title}\nɞ File Size : ${media.filesizeF}\nɞ Url : ${isUrl(text)}\nɞ Ext : MP3\nɞ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                papah.sendImage(m.chat, media.thumb, `ɞ Judul : ${media.title}\nɞ File Size : ${media.filesizeF}\nɞ Url : ${urls[text - 1]}\nɞ Ext : MP3\nɞ Resolusi : ${args[1] || '128kbps'}`, m)
                papah.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                papah.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `ɞ Judul : ${media.title}\nɞ File Size : ${media.filesizeF}\nɞ Url : ${urls[text - 1]}\nɞ Ext : MP3\nɞ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                papah.sendMessage(m.chat, { image: { url: result }, caption: 'ɞ Media Url : '+result }, { quoted: m })
            }
            break
case 'gura':
case'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: "Made By", author: "Slime Bot By Sho", })
await fs.unlinkSync(encmedia)
}
break
case'doge':
case'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: "Made By", author: "Slime Bot By Sho", })
await fs.unlinkSync(encmedia)
}
break
case'bucinstick':
case'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: "Made By", author: "Slime Bot By Sho", })
await fs.unlinkSync(encmedia)
}
break
case 'patrick':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/patrick?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'lonet':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/lonte?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'lidi':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'kucing':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kucing?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'sponbob':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/sponsbob?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'kawansponbob':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'popoci':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/popoci?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'meow':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/meow?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'menjamet':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/menjamet?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'tyni':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/tyni?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'gojosatoru':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'hopeboy':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/hope-boy?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'doge':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/doge?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'dinokuning':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/dyno-kuning?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'nicholas':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'krrobot':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'jiisho':
papah.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/jisoo?apikey=dhmDlD5x`}}, {quoted: m})
break
case 'cecanvietnam':
            var butt = [{buttonId: `${prefix}cecanvietnam`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan Vietnam", image: { url: `https://api.zeeoneofc.xyz/api/cecan/vietnam?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
case 'cecanmalaysia':
            var butt = [{buttonId: `${prefix}cecanmalaysia`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan Malaysia", image: { url: `https://api.zeeoneofc.xyz/api/cecan/malaysia?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
case 'cecanindonesia':
            var butt = [{buttonId: `${prefix}cecanindonesia`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan Indonesia", image: { url: `https://api.zeeoneofc.xyz/api/cecan/indonesia?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
case 'cecankorea':
            var butt = [{buttonId: `${prefix}cecankorea`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan Korea", image: { url: `https://api.zeeoneofc.xyz/api/cecan/korea?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
case 'cecanjapan':
            var butt = [{buttonId: `${prefix}cecanjapan`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan Japan", image: { url: `https://api.zeeoneofc.xyz/api/cecan/japan?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
case 'cecanthailand':
            var butt = [{buttonId: `${prefix}cecantailand`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan Thailand", image: { url: `https://api.zeeoneofc.xyz/api/cecan/thailand?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
case 'cecanchina':
            var butt = [{buttonId: `${prefix}cecanchina`, buttonText: { displayText: "Next Photo➲" }, type: 1 }]
				papah.sendMessage(m.chat, { caption: "Random Cecan China", image: { url: `https://api.zeeoneofc.xyz/api/cecan/china?apikey=dhmDlD5x` }, buttons: butt, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })

				break
            case 'hutao': case 'xiao': case 'chongyun' :case 'baal':case 'keqing':case 'yae':case 'zhongli':case 'ningguang':case 'shenhe':case 'ayaka': {
                let gis = require('g-i-s')
                gis(command + ' Icon HD', async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
                            {buttonId: command, buttonText: {displayText: 'Next ' + command}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: images },
                            caption: `Nih ` + command, 
                            footer: botname,
                            buttons: buttons,
                            headerType: 4
                        }
                        papah.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
                break
                case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    papah.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
            case 'waifu': {
            	tesk = `*${ucapanWaktu} Kak ${pushname}*\n*Silahkan Pilih Dibawah Ini*\n\n_Dosa Tanggung Sendiri :v_`
            	let buttons = [{buttonId: `menu`, buttonText: {displayText: '📚MENU'}, type: 1},{buttonId: `sfw`, buttonText: {displayText: '✅SFW'}, type: 1}]
                await papah.sendButtonText(m.chat, buttons, tesk, nyoutube, m, {quoted: fkontak})
            	}
            break
            case 'sfw': {
            
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                papah.sendMessage(m.chat, { image: buffer, caption: `Random Waifu`, footer: nyoutube}, { quoted: m })
            }
            break
	    case 'couple': {
            
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                papah.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                papah.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    fileLength: jumlah,
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'randomcolor': case 'color': case 'warnarandom': case 'warna': {
            
                anu = await fetchJson(`https://api.popcat.xyz/randomcolor`)
                buffer = await getBuffer(anu.image)
                papah.sendMessage(m.chat, { image: buffer, caption: `*Nama Warna : ${anu.name}*\n*Code : ${anu.hex}*`, footer: nyoutube}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `ɞ Judul : ${result.title}\nɞ Category : ${result.type}\nɞ Detail : ${result.source}\nɞ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
            	try {
            	if (!text) return m.replay(`Contoh :\n${prefix}searchgc Classy Editor`)
                nae = args.join(" ")
                hx.linkwa(nae).then(res => {
                teks = '```「 Search Group 」```'
                for (let i of res) {
                teks += `\n\n│ɞ> Group Whatsapp :\n`
                teks += `${i.link}\n`
                teks += `*${i.nama}`
                }
                papah.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6cbed9af4ca002de3a801.jpg' }, caption: teks, footer: nyoutube}, { quoted: fkontak })
                })} catch (e) {
		        m.reply(mess.errmor)}
                }
                break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `ɞ Judul : ${result.title}\nɞ Source : ${result.source}\nɞ Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': case 'shortlink': {
            	if (!text) throw 'Masukkan Query Link!'
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
                papah.sendMessage(m.chat,{ text: anu.data + `\nNih Bro`}, { quoted: fdoc })
            }
            break
            case 'linkpoi': {
            	if (!text) throw 'Masukkan Query Link!'
                let poi = await fetchJson(`https://linkpoi.ga/api.php?url=${text}`)
                papah.sendMessage(m.chat, { text: poi.shorturl + `\nNih Bro`}, { quoted: fdoc })
            }
            break
            
//Pembatas Maker========================================
            case 'carbon': {
            	if (!text) throw 'No Query Text'
            
               papah.sendMessage(m.chat, { image: { url: `https://api-rull.herokuapp.com/api/cmd?code=${text}` }, caption: `Nih Bro` }, { quoted: m })
            	}
            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return reply(`Contoh : ${prefix + command} ${global.ownername}`) 
            
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
             if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
             if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
             if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
             papah.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname},For my Darling ` }, { quoted: m })
             }
             break
             case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
             if(!q) return m.reply(`Use ${prefix + command} text1|text2`)
            
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
             let link
             if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
             if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
             if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
             if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
             if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
             if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
             if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
             if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
             let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
             papah.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname},For my Darling ` }, { quoted: m })
             }
             break
            
//Pembatas Primbon========================================
case 'patrick': case 'patricksticker': case 'petrik': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'dogesticker': case 'dogestick': case 'doge': case 'domge': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker': case 'lovestick' : case 'slove': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura': case 'gurastick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'paimon': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'sanime': case 'animestick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'mukelu': case 'lu': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await papah.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Contoh : ${prefix + command} 6285822347348`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nomor HP :* ${anu.message.nomer_hp}\nɞ *Angka Shuzi :* ${anu.message.angka_shuzi}\nɞ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\nɞ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Contoh : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Mimpi :* ${anu.message.mimpi}\nɞ *Arti :* ${anu.message.arti}\nɞ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama Anda :* ${anu.message.nama_anda.nama}\nɞ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nɞ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nɞ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nɞ *Hasil :* ${anu.message.result}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama Anda :* ${anu.message.nama_anda.nama}\nɞ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nɞ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nɞ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nɞ *Hasil :* ${anu.message.result}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama Suami :* ${anu.message.suami.nama}\nɞ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\nɞ *Nama Istri :* ${anu.message.istri.nama}\nɞ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\nɞ *Hasil :* ${anu.message.result}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama Anda :* ${anu.message.nama_anda.nama}\nɞ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nɞ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nɞ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nɞ *Sisi Positif :* ${anu.message.sisi_positif}\nɞ *Sisi Negatif :* ${anu.message.sisi_negatif}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama :* ${anu.message.nama}\nɞ *Arti :* ${anu.message.arti}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama :* ${anu.message.nama}\nɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Life Path :* ${anu.message.life_path}\nɞ *Destiny :* ${anu.message.destiny}\nɞ *Destiny Desire :* ${anu.message.destiny_desire}\nɞ *Personality :* ${anu.message.personality}\nɞ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendImage(m.chat,  anu.message.gambar, `ɞ *Nama Anda :* ${anu.message.nama_anda}\nɞ *Nama Pasangan :* ${anu.message.nama_pasangan}\nɞ *Sisi Positif :* ${anu.message.sisi_positif}\nɞ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Tanggal Pernikahan :* ${anu.message.tanggal}\nɞ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Contoh : ${ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Lahir :* ${anu.message.hari_lahir}\nɞ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Lahir :* ${anu.message.hari_lahir}\nɞ *Rezeki :* ${anu.message.rejeki}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Lahir :* ${anu.message.hari_lahir}\nɞ *Pekerjaan :* ${anu.message.pekerjaan}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Analisa :* ${anu.message.analisa}\nɞ *Angka Akar :* ${anu.message.angka_akar}\nɞ *Sifat :* ${anu.message.sifat}\nɞ *Elemen :* ${anu.message.elemen}\nɞ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Analisa :* ${anu.message.analisa}\nɞ *Sektor :* ${anu.message.sektor}\nɞ *Elemen :* ${anu.message.elemen}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendImage(m.chat, anu.message.image, `ɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Simbol Tarot :* ${anu.message.simbol_tarot}\nɞ *Arti :* ${anu.message.arti}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Contoh : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama :* ${anu.message.nama}\nɞ *Lahir :* ${anu.message.tahun_lahir}\nɞ *Gender :* ${anu.message.jenis_kelamin}\nɞ *Angka Kua :* ${anu.message.angka_kua}\nɞ *Kelompok :* ${anu.message.kelompok}\nɞ *Karakter :* ${anu.message.karakter}\nɞ *Sektor Baik :* ${anu.message.sektor_baik}\nɞ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Kala Tinantang :* ${anu.message.kala_tinantang}\nɞ *Info :* ${anu.message.info}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Hasil :* ${anu.message.result}\nɞ *Info :* ${anu.message.info}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Hari Lahir :* ${anu.message.hari_lahir}\nɞ *Tanggal Lahir :* ${anu.message.tgl_lahir}\nɞ *Hari Naas :* ${anu.message.hari_naas}\nɞ *Info :* ${anu.message.catatan}\nɞ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Hari Lahir :* ${anu.message.hari_lahir}\nɞ *Tanggal Lahir :* ${anu.message.tgl_lahir}\nɞ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Hari Lahir :* ${anu.message.hari_lahir}\nɞ *tanggal Lahir :* ${anu.message.tgl_lahir}\nɞ *Arah Rezeki :* ${anu.message.arah_rejeki}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Contoh : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama :* ${anu.message.nama}\nɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\nɞ *Hasil :* ${anu.message.result}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Contoh : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Tanggal :* ${anu.message.tanggal}\nɞ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\nɞ *Watak Hari :* ${anu.message.watak_hari}\nɞ *Naga Hari :* ${anu.message.naga_hari}\nɞ *Jam Baik :* ${anu.message.jam_baik}\nɞ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama :* ${anu.message.nama}\nɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Nama :* ${anu.message.nama}\nɞ *Lahir :* ${anu.message.tgl_lahir}\nɞ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Contoh : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Hasil :* ${anu.message.result}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Contoh : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Hasil :* ${anu.message.result}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Contoh : ${ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                papah.sendText(m.chat, `ɞ *Zodiak :* ${anu.message.zodiak}\nɞ *Nomor :* ${anu.message.nomor_keberuntungan}\nɞ *Aroma :* ${anu.message.aroma_keberuntungan}\nɞ *Planet :* ${anu.message.planet_yang_mengitari}\nɞ *Bunga :* ${anu.message.bunga_keberuntungan}\nɞ *Warna :* ${anu.message.warna_keberuntungan}\nɞ *Batu :* ${anu.message.batu_keberuntungan}\nɞ *Elemen :* ${anu.message.elemen_keberuntungan}\nɞ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\nɞ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
//PEMBATAS Downloads=======================================
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Contoh : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    papah.sendMedia(m.chat, anu.caption.profile_hd, '', `ɞ Full Name : ${anu.caption.full_name}\nɞ User Name : ${anu.caption.user_name}\nɞ ID ${anu.caption.user_id}\nɞ Followers : ${anu.caption.followers}\nɞ Following : ${anu.caption.following}\nɞ Bussines : ${anu.caption.bussines}\nɞ Profesional : ${anu.caption.profesional}\nɞ Verified : ${anu.caption.verified}\nɞ Private : ${anu.caption.private}\nɞ Bio : ${anu.caption.biography}\nɞ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Contoh : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ɞ Name : ${anu.name}\nɞ Version : ${Object.keys(anu.versions)}\nɞ Created : ${tanggal(anu.time.created)}\nɞ Modified : ${tanggal(anu.time.modified)}\nɞ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\nɞ Description : ${anu.description}\nɞ Homepage : ${anu.homepage}\nɞ Keywords : ${anu.keywords}\nɞ Author : ${anu.author.name}\nɞ License : ${anu.license}\nɞ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'mediafire': {
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
papah.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply(mess.error))
}
break
case 'tiktok':{
if (!text) return m.reply( `Contoh : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
m.reply("Loading...")
require('./lib/tiktok').Tiktok(q).then( data => {
    let buttons = [
        {buttonId: `tiktoknowm ${q}`, buttonText: {displayText: '► No Watermark'}, type: 1},
        {buttonId: `tiktokmp3 ${q}`, buttonText: {displayText: '♫ Audio'}, type: 1}
    ]
papah.sendMessage(m.chat, { caption: 'Kamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!', video: { url: data.watermark }, buttons: buttons, footer: `Slime Bot`, mentions: [sender] })
})
}
break
            case 'tiktoknowm':{
if (!text) return m.reply( `Contoh : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
m.reply("Loading...")
require('./lib/tiktok').Tiktok(q).then( data => {
papah.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
if (!text) return m.reply( `Contoh : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
m.reply("Loading...")
require('./lib/tiktok').Tiktok(q).then( data => {
papah.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'igdl': case 'instagram':{
const instagramGetUrl = require("instagram-url-direct")
const results = (await instagramGetUrl(q)).url_list[0]
console.log(results)
}
break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
            
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await papah.sendImage(m.chat, anu.result.img, `ɞ Judul : ${anu.result.lagu}\nɞ Album : ${anu.result.album}\nɞ Singer : ${anu.result.penyanyi}\nɞ Publish : ${anu.result.publish}\nɞ Lirik :\n${anu.result.lirik.result}`, m)
                papah.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
            
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await papah.sendImage(m.chat, anu.result.thumb, `ɞ Judul : ${anu.result.title}\nɞ Url : ${isUrl(text)[0]}`)
                papah.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
            case 'twitter': case 'td': case 'twitterdl': {
            m.reply(`Fitur Sedang Error\nDalam Perbaikan`)
             }
             break
case 'fbdl':
case 'facebook':{
if (!text) return m.reply( `Contoh : ${prefix + command} link`)
if (!q.includes('facebook.com')) return m.reply(`Link Invalid!!`)
m.reply("Loading...")
const { fbdl } = require("./lib/facebook");
fbdl(q).then( data => {
if (data.length == 0) return reply(`Maaf terjadi kesalahan, ganti link yang lain!`)
papah.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: data.title }, { quoted: m })
})
}
break
	        case 'img': case 'pinterest': case 'image': {
                if (!text) throw 'Masukkan Query Link!'
            
		       let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                papah.sendMessage(m.chat, { image: { url: result }, fileLength: jumlah, caption: `Media Url :\n`+result}, { quoted: fkontak })
            }
            break
case 'cnn-news': 
CNNNews().then(res => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
m.reply(teks)
})
break
case 'cnbc-news': 
CNBCNews().then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'tribun-news': 
TribunNews().then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})

break
case 'indozone-news': 
IndozoneNews().then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'detik-news': 
DetikNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'daily-news': 
DailyNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case 'inews-news': 
iNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
m.reply(teks)
})

break
case 'okezone-news': 
OkezoneNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case 'sindo-news': 
SindoNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
m.reply(teks)
})

break
case 'tempo-news': 
TempoNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'antara-news': 
AntaraNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case "kontan-news": 
  KontanNews().then(async (res) => {
    
    teks = "=============="
    no = 0
    for (let i of res) {
 no += 1
 teks += `\n│ɞ ${no.toString()} │ɞ\n`
 teks += `Berita: ${i.berita}\n`
 teks += `Jenis: ${i.berita_jenis}\n`
 teks += `Upload: ${i.berita_diupload}\n`
 teks += `Link: ${i.berita_url}\n`
    }
    teks += "=============="
    papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break
case "merdeka-news": 
  MerdekaNews().then(async (res) => {
    
    teks = "=============="
    no = 0
    for (let i of res) {
 no += 1
 teks += `\n│ɞ ${no.toString()} │ɞ\n`
 teks += `Berita: ${i.berita}\n`
 teks += `Upload: ${i.berita_diupload}\n`
 teks += `Link: ${i.berita_url}\n`
    }
    teks += "=============="
    papah.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break
case "jalantikus-meme": 
  var res = await JalanTikusMeme()
teks = "=============="
teks += `\nSource: ${res}\n`
teks += "=============="
papah.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'fajar-news': 
FajarNews().then(async(res) => {
no = 0
teks = "============="
for (let i of res) {
no += 1
teks += `=============`
teks += `\n│ɞ ${no.toString()} │ɞ\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
teks += `=============`
}
teks += "============="
m.m.reply(teks)
})
break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Contoh : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
ɞ Judul : ${anu.title}
ɞ Author : ${anu.author.name}
ɞ Like : ${anu.like}
ɞ Caption : ${anu.caption}
ɞ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: nyoutube,
			buttons,
			headerType: 4
		    }
		    papah.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        papah.sendMessage(m.chat, { image: { url }, caption: `ɞ Judul : ${anu.title}\nɞ Author : ${anu.author.name}\nɞ Like : ${anu.like}\nɞ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Contoh : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		papah.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		papah.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {  ERROR BRO, FIX AJA KALO MAU
		if (args[0] === 'pdf') {
	
		papah.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
	
		papah.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
	
		papah.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
	
		papah.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Contoh : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		papah.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		
		case 'playstore': {
			try {
            if (!text) throw `Contoh : ${prefix + command} clash of clans`
            if(!q) return m.reply('what are you looking for?')
            let play = await hx.playstore(q)
            let storee = '❉─────────────────────❉\n'
            for (let i of play){
            storee += `\n*「 *PLAY STORE* 」*\n
            - *Name* : ${i.name}
            - *Link* : ${i.link}\n
            - *Dev* : ${i.developer}
            - *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            }
            m.reply(storee)
            } catch (e) {
		    m.reply(mess.errmor)
		    }
		    }
            break
            case 'gsmarena': {
            if (!text) throw `Contoh : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `ɞ Title: ${judul}
ɞ Realease: ${rilis}
ɞ Size: ${ukuran}
ɞ Type: ${type}
ɞ Storage: ${storage}
ɞ Display: ${display}
ɞ Inchi: ${inchi}
ɞ Pixel: ${pixel}
ɞ Video Pixel: ${videoPixel}
ɞ Ram: ${ram}
ɞ Chipset: ${chipset}
ɞ Battery: ${batrai}
ɞ Battery Brand: ${merek_batre}
ɞ Detail: ${detail}`
            papah.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'tvschedule': case 'jadwaltv': case 'tv': {
            if (!q) return reply('Pilih Channelnya Bro\n1.rcti\n2.nettv\n3.antv\n4.gtv\n5.indosiar\n6.inewstv\n7.kompastv\n8.metrotv\n9.mnctv\n10.rtv\n11.sctv\n12.trans7\n13.transtv\n14.tvone\n15.tvri')
            let { jadwaltv }= require('./lib/jadwaltv')
            m.reply(await jadwaltv(q))
            }
            break
            case 'film': {
        	try {
            if (!q) return m.reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
	    
            xfar.Film(q)
            .then(data => {console.log(data)
            let krl = `*❒「  Film ${q} 」*\n*🌿 Author nya* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Judul :* ${i.judul}\n *📟 Kualitas :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               papah.sendMessage(m.chat, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdoc })
                })
                } catch (e) {
		    m.reply(mess.errapi)
		    }
		     }
                break
                case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `ɞ Title: ${i.title}\n`
            capt += `ɞ Url: ${i.url}\n`
            capt += `ɞ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            papah.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `ɞ Community: ${i.community}\n`
            capt += `ɞ Community Link: ${i.community_link}\n`
            capt += `ɞ Thumbnail: ${i.community_thumb}\n`
            capt += `ɞ Description: ${i.community_desc}\n`
            capt += `ɞ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            papah.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Contoh : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `ɞ Judul: ${judul}\n`
            capt += `ɞ Dibaca: ${dibaca}\n`
            capt += `ɞ Divote: ${divote}\n`
            capt += `ɞ Bab: ${bab}\n`
            capt += `ɞ Waktu: ${waktu}\n`
            capt += `ɞ Url: ${url}\n`
            capt += `ɞ Deskripsi: ${description}`
            papah.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtonsearch': case 'webtoon': {
                if (!text) return m.reply('What Are you Looking For??')
                await
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Judul :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :*\n${i.url}\n ----------------------------------------------------------\n`
                    }
                    await m.reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.errapi)
                })
                }
            break
            case 'drakor': {
            if (!text) throw `Contoh : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `ɞ Judul: ${i.judul}\n`
            capt += `ɞ Years: ${i.years}\n`
            capt += `ɞ Genre: ${i.genre}\n`
            capt += `ɞ Url: ${i.url}\n`
            capt += `ɞ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            papah.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break

//PEMBATAS Menu=======================================
            case 'rules': {
rules = `*Rules BOT*

Sad-Bot merupakan sebuah Robot WhatsApp yang diprogram untuk melakukan perintah tertentu secara otomatis.
Setiap respon atau balasan yang dilakukan oleh bot bukan dari Manusia.

Dengan memakai bot ini maka kamu *setuju* dengan syarat dan kondisi sbg berikut:
-Beri jeda dari setiap memakai fitur.
-Dilarang Keras Spamming Bot.
-Kami tidak menyimpan gambar, video, file, audio, dan dokumen dari anda
-Kami sama sekali tidak menyimpan data pribadi kamu di server.
-Kami tidak bertanggung jawab atas perintah kamu kepada bot ini.


`
let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'menu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `
 ֹ┄─┄𖦹  ֹ┄─┄𖦹 ֹ┄─┄𖦹 ֹ┄─┄𖦹 ֹ┄─┄𖦹
 *${ucapanWaktu}*
 
*Nama* : ${pushname}
*Number* : @${me.split('@')[0]}
*Limit* : ${isPremium ? '∞' : `️${db.data.users[m.sender].limit}`}
 ֹ┄─┄𖦹  ֹ┄─┄𖦹 ֹ┄─┄𖦹 ֹ┄─┄𖦹 ֹ┄─┄𖦹
`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pdf'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
    tittle: 'Bot By Sho', 
    body: botname,
    showAdAttribution: true,
    thumbnail: thumb,
    mediaType: "VIDEO",
    mediaUrl: "https://api.zacros.my.id/randomimg/loli", 
    sourceUrl: myyt
  }}
}
  papah.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
  }
 break
            case 'simplemenu': case 'list': case 'help': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*Kak ${pushname}*`
                let sections = [
                {
	           title: ' ∫ » Sewa Bot? –––––––·│ɞ',
	           rows: [
	            {title: "〽️ │ɞ Sewa", rowId: `donasi`, description: `KLIK UNTUK SEWA BOT`},
                {title: "📴 │ɞ Owner", rowId: `owner`, description: `KLIK UNTUK BERTANYA KEPADA OWNER`}
	            ]
                },{
                title: "⚠︎  ∫ » CHANGE MENU BOT « ✧",
                rows: [
                {title: "✦  「 Group 」", rowId: `mgroup`, description: `╰ ► 👥Fitur Buat Grup, Tapi Hati Hati Admin :v`},
                {title: "✦  「 Webzone 」", rowId: `mwebzone`, description: `╰ ► 📹Cari Film? Sini Tempatnya 🤫`},
                {title: "✦  「 Downloader 」", rowId: `mdownloader`, description: `╰ ► 📥Buat Download Apaan? 🤨`},
                {title: "✦  「 Search 」", rowId: `msearch`, description: `╰ ► 🔍Cari Apa Hayo`},
                {title: "✦  「 Random 」", rowId: `mrandom`, description: `╰ ► ❔Random Moment🗿`},
                {title: "✦  「 Text Pro 」", rowId: `mtextpro`, description: `╰ ► ❇Teksnya Keren Kan?`},
                {title: "✦  「 Photo Oxy 」", rowId: `mphotooxy`, description: `╰ ► ♻️Gabut Amat`},
                {title: "✦  「 Ephoto 」", rowId: `mephoto`, description: `╰ ► 🗳Buat Edit Apaan?`},
                {title: "✦  「 Fun 」", rowId: `mfun`, description: `╰ ► 🔫Buat Fun² Bro`},
                {title: "✦  「 Primbon 」", rowId: `mprimbon`, description: `╰ ► 😂Ngakak`},
                {title: "✦  「 Convert 」", rowId: `mconvert`, description: `╰ ► 🛠Mau Buat Apa?`},
                {title: "✦  「 Main 」", rowId: `mmain`, description: `╰ ► 💾Senjata Admin & Owner`},
                {title: "✦  「 Database 」", rowId: `mdatabase`, description: `╰ ► 📁Engak Ada Apa² Disini`},
                {title: "✦  「 Anonymous 」", rowId: `manonymous`, description: `╰ ► 🎭Fitur Rahasia Jangan Dipake !`},
                {title: "✦  「 Islamic 」", rowId: `mislamic`, description: `╰ ► 🕌Masyaallah Brother`},
                {title: "✦  「 Voice 」", rowId: `mvoice`, description: `╰ ► 🎶Req Lagu Apa Ngab?`},
                {title: "✦  「 Owner 」", rowId: `mowner`, description: `╰ ► 🎟Jangan Ganggu Ownerku😡`}
                ]
                },{
	           title: ' ∫ » SUPPORT ME –––––––·│ɞ',
	           rows: [
	            {title: "🎟 │ɞ Donasi", rowId: `donasi`, description: `╰ ► 💰 Donasi ♕︎`},
                {title: "🔴 │ɞ Subscribe", rowId: `subsyt`, description: `╰ ► 📢 Thanks For Subscribe ♕︎`},
	]
  },
]
                papah.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, fkontak)
            }
            break
            case 'mgroup': {
goup = `╭──❍ *Group Menu*
│
│ɞ ${prefix}linkgroup
│ɞ ${prefix}ephemeral [option]
│ɞ ${prefix}setppgc [image]
│ɞ ${prefix}setname [text]
│ɞ ${prefix}setdesc [text]
│ɞ ${prefix}group [option]
│ɞ ${prefix}editinfo [option]
│ɞ ${prefix}add @user
│ɞ ${prefix}kick @user
│ɞ ${prefix}hidetag [text]
│ɞ ${prefix}tagall [text]
│ɞ ${prefix}antilink [on/off]
│ɞ ${prefix}mute [on/off]
│ɞ ${prefix}promote @user
│ɞ ${prefix}demote @user
│ɞ ${prefix}vote [text]
│ɞ ${prefix}devote
│ɞ ${prefix}upvote
│ɞ ${prefix}cekvote
│ɞ ${prefix}hapusvote
│
╰─────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, goup, nyoutube, m, {quoted: fkontak})
            }
            break
      case 'mwebzone': {
wbzone = `╭──❍ *Webzone Menu*
│
│ɞ ${prefix}playstore
│ɞ ${prefix}gsmarena
│ɞ ${prefix}jadwalbioskop
│ɞ ${prefix}nowplayingbioskop
│ɞ ${prefix}aminio
│ɞ ${prefix}wattpad
│ɞ ${prefix}webtoons
│ɞ ${prefix}drakor
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, wbzone, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'menugenshin': {
                let anu = `╭──❍ *Gambar Char Genshin*    
│ɞ${prefix}baal
│ɞ${prefix}yae
│ɞ${prefix}xiao
│ɞ${prefix}ningguang
│ɞ${prefix}keqing
│ɞ${prefix}shenhe
│ɞ${prefix}chongyun
│ɞ${prefix}ayaka
│ɞ${prefix}zhongli
│ɞ${prefix}hutao
│
╰────❍
`
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: 'List menu'}, type: 1},
		    {buttonId: `donasi`, buttonText: {displayText: 'Donation'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu,
                    footer: botname,
                    buttons: buttons,
                    headerType: 1
                }
                papah.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
            }
		break
            case 'mdownloader': {
dwnloader = `╭──❍ *Downloader Menu*
│
│ɞ ${prefix}tiktoknowm [url]
│ɞ ${prefix}tiktok [url]
│ɞ ${prefix}tiktokmp3 [url]
│ɞ ${prefix}instagram [url]
│ɞ ${prefix}twitter [url]
│ɞ ${prefix}twittermp3 [url]
│ɞ ${prefix}facebook [url]
│ɞ ${prefix}pinterestdl [url]
│ɞ ${prefix}ytmp3 [url]
│ɞ ${prefix}ytmp4 [url]
│ɞ ${prefix}getmusic [query]
│ɞ ${prefix}getvideo [query]
│ɞ ${prefix}umma [url]
│ɞ ${prefix}joox [query]
│ɞ ${prefix}soundcloud [url]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, dwnloader, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'msearch': {
sarch = `╭──❍ *Search Menu*
│
│ɞ ${prefix}play [query]
│ɞ ${prefix}yts [query]
│ɞ ${prefix}google [query]
│ɞ ${prefix}gimage [query]
│ɞ ${prefix}pinterest [query]
│ɞ ${prefix}wallpaper [query]
│ɞ ${prefix}wikimedia [query]
│ɞ ${prefix}ytsearch [query]
│ɞ ${prefix}ringtone [query]
│ɞ ${prefix}stalk [option] [query]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mrandom': {
rndom = `╭──❍ *Random Menu*
│
│ɞ ${prefix}gbtku
│ɞ ${prefix}coffe
│ɞ ${prefix}quotesanime
│ɞ ${prefix}motivasi
│ɞ ${prefix}dilanquote
│ɞ ${prefix}bucinquote
│ɞ ${prefix}katasenja
│ɞ ${prefix}puisi
│ɞ ${prefix}couple
│ɞ ${prefix}anime
│ɞ ${prefix}waifu
│ɞ ${prefix}cecanvietnam
│ɞ ${prefix}cecanmalaysia
│ɞ ${prefix}cecanindonesia
│ɞ ${prefix}cecankorea
│ɞ ${prefix}cecanjapan
│ɞ ${prefix}cecanthailand
│ɞ ${prefix}cecanchina
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, rndom, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mtextpro': {
txtpro = `╭──❍ *Text Pro Menu*
│
│ɞ ${prefix}3dchristmas
│ɞ ${prefix}3ddeepsea
│ɞ ${prefix}americanflag
│ɞ ${prefix}3dscifi
│ɞ ${prefix}3drainbow
│ɞ ${prefix}3dwaterpipe
│ɞ ${prefix}halloweenskeleton
│ɞ ${prefix}sketch
│ɞ ${prefix}bluecircuit
│ɞ ${prefix}space
│ɞ ${prefix}metallic
│ɞ ${prefix}fiction
│ɞ ${prefix}greenhorror
│ɞ ${prefix}transformer
│ɞ ${prefix}berry
│ɞ ${prefix}thunder
│ɞ ${prefix}magma
│ɞ ${prefix}3dcrackedstone
│ɞ ${prefix}3dneonlight
│ɞ ${prefix}impressiveglitch
│ɞ ${prefix}naturalleaves
│ɞ ${prefix}fireworksparkle
│ɞ ${prefix}matrix
│ɞ ${prefix}dropwater
│ɞ ${prefix}harrypotter
│ɞ ${prefix}foggywindow
│ɞ ${prefix}neondevils
│ɞ ${prefix}christmasholiday
│ɞ ${prefix}3dgradient
│ɞ ${prefix}blackpink
│ɞ ${prefix}gluetext
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, txtpro, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mphotooxy': {
potooxy = `╭──❍ *Photo Oxy Menu*
│
│ɞ ${prefix}shadow
│ɞ ${prefix}romantic
│ɞ ${prefix}smoke
│ɞ ${prefix}burnpapper
│ɞ ${prefix}naruto
│ɞ ${prefix}lovemsg
│ɞ ${prefix}grassmsg
│ɞ ${prefix}lovetext
│ɞ ${prefix}coffecup
│ɞ ${prefix}butterfly
│ɞ ${prefix}harrypotter
│ɞ ${prefix}retrolol
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, potooxy, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mephoto': {
ehoto = `╭──❍ *Ephoto Menu*
│
│ɞ ${prefix}ffcover
│ɞ ${prefix}crossfire
│ɞ ${prefix}galaxy
│ɞ ${prefix}glass
│ɞ ${prefix}neon
│ɞ ${prefix}beach
│ɞ ${prefix}blackpink
│ɞ ${prefix}igcertificate
│ɞ ${prefix}ytcertificate
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, ehoto, nyoutube, m, {quoted: fkontak})
            }
            break
           case 'mfun': {
mun = `╭──❍ *Fun Menu*
│
│ɞ ${prefix}simih
│ɞ ${prefix}halah
│ɞ ${prefix}hilih
│ɞ ${prefix}huluh
│ɞ ${prefix}heleh
│ɞ ${prefix}holoh
│ɞ ${prefix}jadian
│ɞ ${prefix}jodohku
│ɞ ${prefix}apakah
│ɞ ${prefix}bisakah
│ɞ ${prefix}kapan
│ɞ ${prefix}slot
│ɞ ${prefix}delttt
│ɞ ${prefix}tictactoe
│ɞ ${prefix}family100
│ɞ ${prefix}tebak [option]
│ɞ ${prefix}math [mode]
│ɞ ${prefix}suitpvp [@tag]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, mun, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mprimbon': {
pimbon = `╭──❍ *Primbon Menu*
│
│ɞ ${prefix}nomorhoki
│ɞ ${prefix}artimimpi
│ɞ ${prefix}artinama
│ɞ ${prefix}ramaljodoh
│ɞ ${prefix}ramaljodohbali
│ɞ ${prefix}suamiistri
│ɞ ${prefix}ramalcinta
│ɞ ${prefix}cocoknama
│ɞ ${prefix}pasangan
│ɞ ${prefix}jadiannikah
│ɞ ${prefix}sifatusaha
│ɞ ${prefix}rezeki
│ɞ ${prefix}pekerjaan
│ɞ ${prefix}nasib
│ɞ ${prefix}penyakit
│ɞ ${prefix}tarot
│ɞ ${prefix}fengshui
│ɞ ${prefix}haribaik
│ɞ ${prefix}harisangar
│ɞ ${prefix}harisial
│ɞ ${prefix}nagahari
│ɞ ${prefix}arahrezeki
│ɞ ${prefix}peruntungan
│ɞ ${prefix}weton
│ɞ ${prefix}karakter
│ɞ ${prefix}keberuntungan
│ɞ ${prefix}memancing
│ɞ ${prefix}masasubur
│ɞ ${prefix}zodiak
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, pimbon, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mconvert': {
cnvert = `╭──❍ *Convert Menu*
│
│ɞ ${prefix}attp
│ɞ ${prefix}ttp
│ɞ ${prefix}toimage
│ɞ ${prefix}removebg
│ɞ ${prefix}sticker
│ɞ ${prefix}emojimix
│ɞ ${prefix}emojimix2
│ɞ ${prefix}tovideo
│ɞ ${prefix}togif
│ɞ ${prefix}tourl
│ɞ ${prefix}tovn
│ɞ ${prefix}tomp3
│ɞ ${prefix}toaudio
│ɞ ${prefix}ebinary
│ɞ ${prefix}dbinary
│ɞ ${prefix}styletext
│ɞ ${prefix}smeme
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, cnvert, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mmain': {
min = `╭──❍ *Main Menu*
│
│ɞ ${prefix}ping
│ɞ ${prefix}owner
│ɞ ${prefix}report
│ɞ ${prefix}menu / ${prefix}help / ${prefix}?
│ɞ ${prefix}delete
│ɞ ${prefix}infochat
│ɞ ${prefix}quoted
│ɞ ${prefix}listpc
│ɞ ${prefix}listgc
│ɞ ${prefix}listonline
│ɞ ${prefix}speedtest
│ɞ ${prefix}menfes
│ɞ ${prefix}tinyurl [link]
│ɞ ${prefix}shrturl [link]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, min, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mdatabase': {
dtbase = `╭──❍ *Database Menu*
│
│ɞ ${prefix}setcmd
│ɞ ${prefix}listcmd
│ɞ ${prefix}delcmd
│ɞ ${prefix}lockcmd
│ɞ ${prefix}addmsg
│ɞ ${prefix}listmsg
│ɞ ${prefix}getmsg
│ɞ ${prefix}delmsg
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, dtbase, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'manonymous': {
aonymous = `╭──❍ *Anonymous Menu*
│
│ɞ ${prefix}anonymous
│ɞ ${prefix}start
│ɞ ${prefix}next
│ɞ ${prefix}keluar
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, aonymous, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mislamic': {
islmic = `╭──❍ *Islamic Menu*
│
│ɞ ${prefix}iqra
│ɞ ${prefix}hadist
│ɞ ${prefix}alquran
│ɞ ${prefix}juzamma
│ɞ ${prefix}tafsirsurah
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, islmic, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mvoice': {
vice = `╭──❍ *Voice Changer*
│
│ɞ ${prefix}bass
│ɞ ${prefix}blown
│ɞ ${prefix}deep
│ɞ ${prefix}earrape
│ɞ ${prefix}fast
│ɞ ${prefix}fat
│ɞ ${prefix}nightcore
│ɞ ${prefix}reverse
│ɞ ${prefix}robot
│ɞ ${prefix}slow
│ɞ ${prefix}tupai
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, vice, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mowner': {
oner = `╭──❍ *Owner Menu*
│
│ɞ ${prefix}sendsesi
│ɞ ${prefix}react [emoji]
│ɞ ${prefix}chat [option]
│ɞ ${prefix}join [link]
│ɞ ${prefix}leave
│ɞ ${prefix}ban [nomor]
│ɞ ${prefix}unban [nomor]
│ɞ ${prefix}block @user
│ɞ ${prefix}unblock @user
│ɞ ${prefix}bcgroup [text]
│ɞ ${prefix}bcall [text]
│ɞ ${prefix}setppbot [image]
│ɞ ${prefix}setexif
│ɞ ${prefix}setmenu [option]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 }]
            await papah.sendButtonText(m.chat, buttons, oner, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `_*Hai Kak ${m.pushName} 👋.*_

*[   INFORMATION   ]*
_⫹⫺ Nama kamu : ${m.pushName}_
_⫹⫺ Nama bot : Sad-Bot_
_⫹⫺ Library : Baileys-Md_
_⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
_⫹⫺ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_                

╭──❍ *Group Menu*
│
│ɞ ${prefix}linkgroup
│ɞ ${prefix}ephemeral [option]
│ɞ ${prefix}setppgc [image]
│ɞ ${prefix}setname [text]
│ɞ ${prefix}setdesc [text]
│ɞ ${prefix}group [option]
│ɞ ${prefix}editinfo [option]
│ɞ ${prefix}add @user
│ɞ ${prefix}kick @user
│ɞ ${prefix}hidetag [text]
│ɞ ${prefix}tagall [text]
│ɞ ${prefix}antilink [on/off]
│ɞ ${prefix}mute [on/off]
│ɞ ${prefix}promote @user
│ɞ ${prefix}demote @user
│ɞ ${prefix}vote [text]
│ɞ ${prefix}devote
│ɞ ${prefix}upvote
│ɞ ${prefix}cekvote
│ɞ ${prefix}hapusvote
│
╰────❍
╭──❍ *Webzone Menu*
│
│ɞ ${prefix}playstore
│ɞ ${prefix}gsmarena
│ɞ ${prefix}jadwalbioskop
│ɞ ${prefix}nowplayingbioskop
│ɞ ${prefix}aminio
│ɞ ${prefix}wattpad
│ɞ ${prefix}webtoons
│ɞ ${prefix}drakor
│
╰────❍
╭──❍ *Downloader Menu*
│
│ɞ ${prefix}tiktoknowm [url]
│ɞ ${prefix}tiktok [url]
│ɞ ${prefix}tiktokmp3 [url]
│ɞ ${prefix}instagram [url]
│ɞ ${prefix}twitter [url]
│ɞ ${prefix}twittermp3 [url]
│ɞ ${prefix}facebook [url]
│ɞ ${prefix}pinterestdl [url]
│ɞ ${prefix}ytmp3 [url]
│ɞ ${prefix}ytmp4 [url]
│ɞ ${prefix}getmusic [query]
│ɞ ${prefix}getvideo [query]
│ɞ ${prefix}gitclone [url]
│ɞ ${prefix}umma [url]
│ɞ ${prefix}joox [query]
│ɞ ${prefix}soundcloud [url]
│
╰────❍
╭──❍ *Search Menu*
│
│ɞ ${prefix}play [query]
│ɞ ${prefix}yts [query]
│ɞ ${prefix}google [query]
│ɞ ${prefix}gimage [query]
│ɞ ${prefix}pinterest [query]
│ɞ ${prefix}wallpaper [query]
│ɞ ${prefix}wikimedia [query]
│ɞ ${prefix}ytsearch [query]
│ɞ ${prefix}ringtone [query]
│ɞ ${prefix}stalk [option] [query]
│
╰────❍
╭──❍ *News Menu*
│
│ɞ ${prefix}jalantikus-meme
│ɞ ${prefix}merdeka-news
│ɞ ${prefix}kontan-news
│ɞ ${prefix}cnbc-news
│ɞ ${prefix}tribun-news
│ɞ ${prefix}indozone-news
│ɞ ${prefix}kompas-news
│ɞ ${prefix}detik-news
│ɞ ${prefix}daily-news
│ɞ ${prefix}inews-news
│ɞ ${prefix}okezone-news
│ɞ ${prefix}sindo-news
│ɞ ${prefix}tempo-news
│ɞ ${prefix}antara-news
│ɞ ${prefix}cnn-news
│ɞ ${prefix}fajar-news
│
╰────❍
╭──❍ *Random Menu*
│
│ɞ ${prefix}gbtku
│ɞ ${prefix}coffe
│ɞ ${prefix}quotesanime
│ɞ ${prefix}motivasi
│ɞ ${prefix}dilanquote
│ɞ ${prefix}bucinquote
│ɞ ${prefix}katasenja
│ɞ ${prefix}puisi
│ɞ ${prefix}couple
│ɞ ${prefix}anime
│ɞ ${prefix}waifu
│ɞ ${prefix}cecanvietnam
│ɞ ${prefix}cecanmalaysia
│ɞ ${prefix}cecanindonesia
│ɞ ${prefix}cecankorea
│ɞ ${prefix}cecanjapan
│ɞ ${prefix}cecanthailand
│ɞ ${prefix}cecanchina
│
╰────❍
╭──❍ *Random Sticker*
│
│ɞ ${prefix}gura
│ɞ ${prefix}doge
│ɞ ${prefix}bucinp
│ɞ ${prefix}patrick
│ɞ ${prefix}lonet
│ɞ ${prefix}lidi
│ɞ ${prefix}kucing
│ɞ ${prefix}sponbob
│ɞ ${prefix}kawansponbob
│ɞ ${prefix}popoci
│ɞ ${prefix}meow
│ɞ ${prefix}menjamet
│ɞ ${prefix}gojosatoru
│ɞ ${prefix}hopeboy
│ɞ ${prefix}doge
│ɞ ${prefix}dinokuning
│ɞ ${prefix}krrobot
│ɞ ${prefix}nicholas
│ɞ ${prefix}jiisho
│
╰────❍
╭──❍ *Random Sound*
│
│ɞ ${prefix}sound1-sound161
│ɞ ${prefix}acumalaka
│ɞ ${prefix}reza-kecap
│ɞ ${prefix}farhan-
│ɞ ${prefix}siuu
│ɞ ${prefix}kamu-nanya
│ɞ ${prefix}omaga
│ɞ ${prefix}anjay
│
╰────❍
╭──❍ *Text Pro Menu*
│
│ɞ ${prefix}3dchristmas
│ɞ ${prefix}3ddeepsea
│ɞ ${prefix}americanflag
│ɞ ${prefix}3dscifi
│ɞ ${prefix}3drainbow
│ɞ ${prefix}3dwaterpipe
│ɞ ${prefix}halloweenskeleton
│ɞ ${prefix}sketch
│ɞ ${prefix}bluecircuit
│ɞ ${prefix}space
│ɞ ${prefix}metallic
│ɞ ${prefix}fiction
│ɞ ${prefix}greenhorror
│ɞ ${prefix}transformer
│ɞ ${prefix}berry
│ɞ ${prefix}thunder
│ɞ ${prefix}magma
│ɞ ${prefix}3dcrackedstone
│ɞ ${prefix}3dneonlight
│ɞ ${prefix}impressiveglitch
│ɞ ${prefix}naturalleaves
│ɞ ${prefix}fireworksparkle
│ɞ ${prefix}matrix
│ɞ ${prefix}dropwater
│ɞ ${prefix}harrypotter
│ɞ ${prefix}foggywindow
│ɞ ${prefix}neondevils
│ɞ ${prefix}christmasholiday
│ɞ ${prefix}3dgradient
│ɞ ${prefix}blackpink
│ɞ ${prefix}gluetext
│
╰────❍
╭──❍ *Photo Oxy Menu*
│
│ɞ ${prefix}shadow
│ɞ ${prefix}romantic
│ɞ ${prefix}smoke
│ɞ ${prefix}burnpapper
│ɞ ${prefix}naruto
│ɞ ${prefix}lovemsg
│ɞ ${prefix}grassmsg
│ɞ ${prefix}lovetext
│ɞ ${prefix}coffecup
│ɞ ${prefix}butterfly
│ɞ ${prefix}harrypotter
│ɞ ${prefix}retrolol
│
╰────❍
╭──❍ *Ephoto Menu*
│
│ɞ ${prefix}ffcover
│ɞ ${prefix}crossfire
│ɞ ${prefix}galaxy
│ɞ ${prefix}glass
│ɞ ${prefix}neon
│ɞ ${prefix}beach
│ɞ ${prefix}blackpink
│ɞ ${prefix}igcertificate
│ɞ ${prefix}ytcertificate
│
╰────❍
╭──❍ *Fun Menu*
│
│ɞ ${prefix}simih
│ɞ ${prefix}halah
│ɞ ${prefix}hilih
│ɞ ${prefix}huluh
│ɞ ${prefix}heleh
│ɞ ${prefix}holoh
│ɞ ${prefix}jadian
│ɞ ${prefix}jodohku
│ɞ ${prefix}apakah
│ɞ ${prefix}bisakah
│ɞ ${prefix}kapan
│ɞ ${prefix}slot
│ɞ ${prefix}delttt
│ɞ ${prefix}tictactoe
│ɞ ${prefix}family100
│ɞ ${prefix}tebak [option]
│ɞ ${prefix}math [mode]
│ɞ ${prefix}suitpvp [@tag]
│
╰────❍
╭──❍ *Primbon Menu*
│
│ɞ ${prefix}nomorhoki
│ɞ ${prefix}artimimpi
│ɞ ${prefix}artinama
│ɞ ${prefix}ramaljodoh
│ɞ ${prefix}ramaljodohbali
│ɞ ${prefix}suamiistri
│ɞ ${prefix}ramalcinta
│ɞ ${prefix}cocoknama
│ɞ ${prefix}pasangan
│ɞ ${prefix}jadiannikah
│ɞ ${prefix}sifatusaha
│ɞ ${prefix}rezeki
│ɞ ${prefix}pekerjaan
│ɞ ${prefix}nasib
│ɞ ${prefix}penyakit
│ɞ ${prefix}tarot
│ɞ ${prefix}fengshui
│ɞ ${prefix}haribaik
│ɞ ${prefix}harisangar
│ɞ ${prefix}harisial
│ɞ ${prefix}nagahari
│ɞ ${prefix}arahrezeki
│ɞ ${prefix}peruntungan
│ɞ ${prefix}weton
│ɞ ${prefix}karakter
│ɞ ${prefix}keberuntungan
│ɞ ${prefix}memancing
│ɞ ${prefix}masasubur
│ɞ ${prefix}zodiak
│
╰────❍
╭──❍ *Gambar Char Genshin* 
│
│ɞ${prefix}baal
│ɞ${prefix}yae
│ɞ${prefix}xiao
│ɞ${prefix}ningguang
│ɞ${prefix}keqing
│ɞ${prefix}shenhe
│ɞ${prefix}chongyun
│ɞ${prefix}ayaka
│ɞ${prefix}zhongli
│ɞ${prefix}hutao
│
╰────❍
╭──❍ *Convert Menu*
│
│ɞ ${prefix}attp
│ɞ ${prefix}ttp
│ɞ ${prefix}toimage
│ɞ ${prefix}removebg
│ɞ ${prefix}sticker
│ɞ ${prefix}emojimix
│ɞ ${prefix}emojimix2
│ɞ ${prefix}tovideo
│ɞ ${prefix}togif
│ɞ ${prefix}tourl
│ɞ ${prefix}tovn
│ɞ ${prefix}tomp3
│ɞ ${prefix}toaudio
│ɞ ${prefix}ebinary
│ɞ ${prefix}dbinary
│ɞ ${prefix}styletext
│ɞ ${prefix}smeme
│
╰────❍
╭──❍ *Main Menu*
│
│ɞ ${prefix}ping
│ɞ ${prefix}owner
│ɞ ${prefix}report
│ɞ ${prefix}menu / ${prefix}help / ${prefix}?
│ɞ ${prefix}delete
│ɞ ${prefix}infochat
│ɞ ${prefix}quoted
│ɞ ${prefix}listpc
│ɞ ${prefix}listgc
│ɞ ${prefix}listonline
│ɞ ${prefix}speedtest
│ɞ ${prefix}menfes 
│ɞ ${prefix}tinyurl [url]
│ɞ ${prefix}shrturl [url]
│
╰────❍
╭──❍ *Database Menu*
│
│ɞ ${prefix}setcmd
│ɞ ${prefix}listcmd
│ɞ ${prefix}delcmd
│ɞ ${prefix}lockcmd
│ɞ ${prefix}addmsg
│ɞ ${prefix}listmsg
│ɞ ${prefix}getmsg
│ɞ ${prefix}delmsg
│
╰────❍
╭──❍ *Anonymous Menu*
│
│ɞ ${prefix}anonymous
│ɞ ${prefix}start
│ɞ ${prefix}next
│ɞ ${prefix}keluar
│
╰────❍
╭──❍ *Islamic Menu*
│
│ɞ ${prefix}iqra
│ɞ ${prefix}hadist
│ɞ ${prefix}alquran
│ɞ ${prefix}juzamma
│ɞ ${prefix}tafsirsurah
│
╰────❍
╭──❍ *Voice Changer*
│
│ɞ ${prefix}bass
│ɞ ${prefix}blown
│ɞ ${prefix}deep
│ɞ ${prefix}earrape
│ɞ ${prefix}fast
│ɞ ${prefix}fat
│ɞ ${prefix}nightcore
│ɞ ${prefix}reverse
│ɞ ${prefix}robot
│ɞ ${prefix}slow
│ɞ ${prefix}tupai
│
╰────❍
╭──❍ *Owner Menu*
│
│ɞ ${prefix}sendsesi
│ɞ ${prefix}react [emoji]
│ɞ ${prefix}chat [option]
│ɞ ${prefix}join [link]
│ɞ ${prefix}leave
│ɞ ${prefix}ban [nomor]
│ɞ ${prefix}unban [nomor]
│ɞ ${prefix}block @user
│ɞ ${prefix}unblock @user
│ɞ ${prefix}bcgroup [text]
│ɞ ${prefix}bcall [text]
│ɞ ${prefix}setppbot [image]
│ɞ ${prefix}setexif
│ɞ ${prefix}setmenu [option]
│
╰────❍`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'Donation' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules Bot' }, type: 1 }]
            papah.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, footer: nyoutube, mentions: ments})
            }
            break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
papah_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await papah.sendMessage(m.chat, { audio: papah_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })     
break
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
papah_dev = await getBuffer(`https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`)
await papah.sendMessage(m.chat, { audio: papah_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    papah.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
