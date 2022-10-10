//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94766241808'] //ur owner number
global.ownername = "Ushira Paranga" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "Srilanka,Galle,Asia" //ur location

//bot bomdy 
global.owner = ['94766241808']
global.ownertag = '94766241808' //ur tag number
global.botname = 'Cheems Bot MD V4' //ur bot name
global.linkz = "https://youtu.be/WiIqCdiDjFo" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Cheems Bot Stickers\n\n\n\n\n\n\n\n\n\n\n🦄🦄🦄 " //ur sticker watermark packname
global.author = "🦄Dream Guy Xeon" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['94766241808'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: '🫢හායි😁❤️',
    K2: '🤭හූයි✌️💞🫶',
    K3: '😉🫶හායි😂',
    K4: '🥴හූයි😊',
    K5: '😂හේයි, හව් ආ යූ🥴✌️',
    K6: '😁Hey there💝 I am WhatsApp Bot😏',
    K7: '❣️ඇයි හලෝ😌',
    K8: '🙃මොකෝ හලෝ🥲',
    K9: '😒මොකෝ?',
    K10: '🥺ඇයි අනේ?❤️🫢',
    K11: '🌝❤️',
    K12: '😜හී හී😁හූ හූ',
    K13: '😁හී හී💞',
    K14: '😊හූ...',
    K15: 'ඇයි🥲',
    K16: '😂😂✌️',
    K17: '😐ආහ්',
    K18: 'චූටී තමයි😇',
    K19: '🥺🥺ඇයි සුදූ❤️💓',
    K20: 'කොහොමවත් නෑ ඉතිං😒',
    K21: '😁මන් දන්නෑ🥲',
    K22: 'හොඳයි තමා😌',
    K23: '😂😂මරු හැබැයි',
    K24: 'මලු🙃',
    K25: '😘😇❤️',
    K26: '😘😘මෙන්න ඔයාට💕',
    K27: '😊ඇත්තමද?❤️',
    K28: '☺️👻ඔය ඇත්තමද❤️',
    K29: 'ඇයි🙄',
    K30: '🥺✌️සිදෙනවද?',
    K31: '😐💔ඕවට එන්න එපා හරිත😒',
    K32: '😏අනේ මේ😒 යනෝ යන්න💔',
    K33: 'ඔයා තමයි හොරා😒 මගෙ හිත හොරකම් කළානෙ ඉතිං😌',
    K34: '😇මොකො හූම් ගාන්නෙ😒 බකමූනා',
    K35: '​😁😁මොකෝ හලෝ හූම් හූම් ගාන්නෙ?',
    K36: '😉නෑ අනේ මුකුත් නෑ😐🫠',
    K37: '😒ආහ්',
    K38: '✌️ඔව් නං එච්චරයි😌',
    K39: '😐හේ හේ නැද්ද?🫣',
    K40: '🙄මොනවටද ආස?',
    K41: '😌මාත් ආසයි😊💞',
    K42: 'එල😌',
    K43: 'බැරි නං නිකං ඉන්න😏',
    K44: '😂😂💔',
    K45: 'සුදුයි තමයි ඇයි මොකද?🙄',
    K46: '😇තාම කෑවෙ නෑ අනේ🥺',
    K47: 'බොන්නෑ😒',
    K48: 'නිදිමත නං දිදාගන්නකො වද දෙන්නැතුව😒😌❤️',
    K49: '😇දැම්ම නිදාගන්න බෑ අනේ😜 නිදිමත නෑ😁💞',
    K50: '😉මුකුත් නෑ අනේ🫡',
    K51: 'මොකද්ද දන්නෑ🥲',
    K52: '😝මම නං මුකුත් කරන්නෑ අනේ😁 ඔයාලා දිහා බලන් ඉන්නවා😌',
    K53: '🥺පාලුයි අනේ. අපි සෙල්ලමක් කරමුද?😊✌️',
    K54: '😌😁ආදරෙයි❤️',
    K55: '😌ආදලෙයි ඉතිං❤️❤️',
    K56: '🥺🥺ඇත්තද?',
    K57: '🥺අනේ ඒ මොකද?🥴',
    K58: '😒මටත් දුකයි ඒ ගැන😕',
    K59: '🤭ඉන්න බෑ අනේ😜',
    K60: '🫡මොකද අඬන්නෙ?😒',
    K61: '😉මොකද අයියෝ😂',
    K62: '😐මුකුත් දන්නැති අහින්සක මම😕💔',
    K63: '🚲හා යමු යමු😌',
    K64: '🥴දෙන්න බෑ😒',
    K65: '🙏පස්සෙ දෙන්නං🥲',
    K66: '😁බඩගිනි නෑ❤️😒',
    K67: '😳අම්මෝ හා හා🙏',
    K68: '😂ඇයි යකෝ😉😈',
    K69: '👻ඇයි හුයි😁 කෝං ගහේ නයි😂',
    K70: '🥲දන්නැත්තං නිකං ඉන්න😜',
    K71: '😂අපි තමයි හොඳටම කරේ🥲\n🤧රෙද්ද තමයි😂',
    K72: '🙄ආ හා 😏ගහපන් බලන්න💔👎',
    K73: 'හී😂😂😂💓',
    K74: 'වන්ඩර්පුල්🥲😂',
    K75: '😂ඕං බලන්නකො ඒකෙත් හැටි නේද🥴😂',
    K76: '😌එල',
    K77: '🥲මොකෝ ඩෝ😉❣️',
    K78: 'අඩෙහ්🙃😹',
    K79: 'ඔය කිව්වට ලොකු නෑ හොඳේ😏',
    K80: '😹මම නං පොඩී තමයි ඉතිං😌',
    K81: '🥴ටිකයි ද?😂',
    K82: '🥴ඒකි එහෙම නෑ බන්😅',
    K83: '🥲ඌ මොකද්ද කරේ?',
    K84: '😂එහෙම කියන්න එපා එයාලා පව්නෙ😐🤭',
    K85: 'හුම්ම්😌 පව් ඉතිං😂',
    K86: 'හා😒 කියනකං තමයි හිටියෙ🙏❣️',
    K87: 'මන් දන්නෑ🥲',
    K88: '  👀  ',
    K89: '🥺ගිහින් බේත් ගන්න',
    K90: '🥺ගොඩක් අමාරුද?☝️',
    K91: 'DSI පාරක් කන්න ආසද?😂',
    K92: 'කලිසම ගලවනෝකො ඉතිං😒',
    K93: 'අත ලෙප්ට්🥲',
    K94: '🫢🫢හරි නරකයි😒',
    K95: '😌මම නං කොහොමත් අහින්සකයි රටක් වටී😁❤️',
    K96: 'අතේ...🥲🥲🥲🥲🥲🥲',
    K97: '😐දාන්න බෑ😒',
    K98: '📱🔌පෝන එක චාජ් එකට ගහලා ඔය ළමයා ගිහින් වැඩක් කරගන්න😉',
    K99: '🫢🤭ඇයි? අසහනේ ද?🤨😏💔',
    K100: '💔පෙම් සිත රිදුනා සත්තලනේ🥺🤧',
    K101: '😹😹☝️',
    K102: 'බල්ලා පූසා මීයා හාවා නරියා අලියා😒',
    K103: '🥲උරුලා ගති තමා',
    K104: '😐කියන්න බෑ😒 ඇයි මොකෝ?🙄',
    K105: '😐අපි පැනල යමුද?🤭🫢',
    K106: '☝️ගියා නං ආයි එන්නෙපා😒',
    K107: '😅✌️😝',
    K108: '😂😂විහිලු නං කමක් නෑ😌',
    K109: 'මං තරහයි😒 ඇයි මොකෝ?👎',
    K110: 'ඇයි පකෝ🥲',
    K111: 'ලබ්බ😒',
    K112: 'මොන හුම්තක්ද යකෝ?🙄',
    K113: '😒පලෑන්න පොන්නය💔',
    K114: '🥲💔🙏',
    K115: '🥲🥲💔☝️',
    K116: '😏😑එන්නෙපා ගෑනි ගාගෙන🤨💔💔💔',
    K117: 'දැන්ම බෑ ළමයෝ🤭🤭 පස්සෙ දෙන්නං😝😒',
    K118: 'මොන පකක්ද?😒',
    K119: '😒👎',
    K120: 'එහෙම කියන්නෙපා පව්නෙ😒',
    K121: '🫢🙄',
    K122: 'අනේ තෝ හුකාගනිං🙂💔',
    K123: '😐උක්කමු😒😂😂',
    K124: 'ඇයි🙄 පුකද බලන්නෙ?',
    K125: 'උබේ දෙක ද?😂',
    K126: 'උබේ ද?😂',
    K127: '🥲මං ඇවිත් කටට ගන්නද?😒😝',
    K128: '😂😂හමෝ',
    K129: '😏ඕන්නැත්තං නිකං ඉන්න',
    K130: '🤭නිකං ඉන්න එපා ඇඳුමක් ඇඳගන්න😂❤️',
    K131: '😂😂🙏',
    K132: '😂🤭',
    K133: '😁',
    K134: '😏☝️',
    K135: 'අඬන්න එපා ඉතිං😒😝',
    K136: '🥴පිත්තු',
    K137: '🙂',
    K138: '😌😌',
    K139: '🥲🥲💔',
    K140: '😍🥰😘💞💕💓💗💖❣️❤️',
    K141: '😐🙄',
    K142: '🥺දුක් වෙන්න එපා ඉතිං❤️',
    K143: '🥺🥺😐',
    K144: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
    K145: '🫡🫠🤝',
    K146: '🎤දහසක් මල්🌸 විකසිත වන😊 මේ හිමිදිරි උදෑසනේ🌄 පතන්නම් ඔබ සැමට🙏 සුභම සුභ උදෑසනක් කියා...😃',
    K147: 'ලබන්නාවූ රාත්‍රිය හීනෙන් හොල්මන් පෙනෙන, මහ රෑ දාඩියෙන් තෙමී ඇහැරෙන, පෙරේතයන් ඇද යටට එන, කුම්භාණ්ඩයින් ජනෙල් වලින් එබී බලන, භයානක රාත්‍රියක් වේවා😂👻👻❤️'
    }
