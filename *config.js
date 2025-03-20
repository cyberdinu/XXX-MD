const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tYaVlMbFJWdU0raGlvZEFFUHVITEpVRkdEeU1BL1lIaXcwVURGVm1HND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEp5amRlOEF1b0UxaC9zZE9hM1ExU0JZZjJMWlAyQXp0cE1oSFpGSXpIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSE5PcE94Q1FtZkRrdnJ0Umdta1NvTTZJcG1sMWNKQ3VraVV2U29ldGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MzVzUko0ZlduSlc1Wk5ubjhpMVB2WTlEcnl3L1NNVVdhL1ZtRno0WERnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFKTzBzc09tRlBIUFJVY1dYNFlGSzhVU2d0NnpqallNbm0zWUJGK3dubkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhSR3M5MExVZmFqTEVZMjdiOEZtQUtuTkxRZHFBMmJzNXJ0VGlKU2R4Z0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU52MDlCVVBHL1BVcUlpZ2pEUElIQmg4VUNYY2xPUUZMUmZleGZ5bGhXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0pCNFZiUG5vNmJmU1Rvd3o3WWZBYXBjN0grSmwrU3BneThOeDA5R0NIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJBOVo4cWVPYWtIVjUyeEZJbVVzVXdhcmpvSlBabjB4UU5lTWsvUXFHK0NOcXRUOEZTekxCaTdBcDZRd3dRdUMzdVBQclkrMXhsWk5rNlJiQm8zaUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6Ijg3Y2hxR2tZMTZ3cGJZeTdGNU5VY1o5RTlxVXRNZGR2c0p1UWVPRVpOUGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTMyNjIyMTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTg0RTNDNkUzNDZDNEM2RDBCMUYxRjQyMTZBMDE2NDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MjQ2ODA4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT3FjeWlraHBUTU95UUd5dVlZTjc4ZyIsInBob25lSWQiOiJjYTI3MTQzNi0xZmZhLTRiYjMtOTQ4YS1jMmM4NjZlYmNjOTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZElkek82YU5QR2g3aWM1Lzh0SjMxMFVPeUtJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpncjJ1M3pwWksrOTRXTWcwZkpwWUZLRlBHST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQTkVTRzREUCIsIm1lIjp7ImlkIjoiOTQ3NTMyNjIyMTM6NTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZGludSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlQzL3FFRUVPUG43NzRHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicytQM3ZmL2w1TFBGckhFNW5BQUdLNVQwZ2FyaExtRWhwYi9CeTJTeEN6ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUVuR3o4VGtTRzUvZDVMS2JXc04xU0JWWFZObWFMSlJ3TEhCU3ozMVYvSm5UWXg3NUlZK0FBV2FxU1VCWHlVK1VaNmRLOE9jU2xVUkE5eVdNWmNRQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlFXalNwWnlRMGRONXlaWHRVVFhlaWdCOFhkMTA2L2hNSE4rc20zWno4aVF1aVJRZGtiWkVTYlRqRzI4eFd1WE13WmtmdW9haDFZOFhHcktwcE1VdURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTMyNjIyMTM6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlBqOTczLzVlU3p4YXh4T1p3QUJpdVU5SUdxNFM1aElhVy93Y3Rrc1FzKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MjQ2ODA4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHc3oifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "𝘼𝙐𝙏𝙊 𝙎𝙏𝘼𝙏𝙐𝙎 𝙎𝙀𝙀𝙉 𝘽𝙔 𝙓𝙓𝙓-𝙈𝘿 🥵💗❞",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "XXX-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "XXX-MD🐼",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94764972683",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "CYBER DINU ID",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*○──𝗠𝗔𝗗𝗘 𝗕𝗬 𝗫𝗫𝗫-𝗠𝗗──◯*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/sJN4RHxq/091df30756af4357.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 IM ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94764972683",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
