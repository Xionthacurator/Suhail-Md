noconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035471427";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA3MSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpLbGo5TkZzTFd1aWVLSTBLcHlkSzM4SVFwOWhMS1UwZ1ZuL2VkL1ZUTFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJyMGlHUXNyUlgtSG51WVdQZjJBQVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2FjODExNjUtZDU1Yi00NmZjLWI2YzQtMGQyNjkzMWE3NjEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMTczLFxuICAgICAgMTQzLFxuICAgICAgMTYzLFxuICAgICAgMzUsXG4gICAgICAyMjAsXG4gICAgICAzOSxcbiAgICAgIDc1LFxuICAgICAgMTA4LFxuICAgICAgMjIyLFxuICAgICAgNTksXG4gICAgICAyMjYsXG4gICAgICAyMjcsXG4gICAgICAxMDgsXG4gICAgICAxMzgsXG4gICAgICAxOTAsXG4gICAgICA2LFxuICAgICAgMjUxLFxuICAgICAgMjA4LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAyMixcbiAgICAgIDIsXG4gICAgICAxOTUsXG4gICAgICAyNDQsXG4gICAgICAyMDgsXG4gICAgICAxMjMsXG4gICAgICAxNDYsXG4gICAgICAxMjEsXG4gICAgICAyMTAsXG4gICAgICA2OSxcbiAgICAgIDE1MyxcbiAgICAgIDE4LFxuICAgICAgMTU0LFxuICAgICAgMTIsXG4gICAgICAxLFxuICAgICAgMTMzLFxuICAgICAgMjE0LFxuICAgICAgMzksXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkVSR1pGUktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzU0NzE0Mjc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNb3ZlXCIsXG4gICAgXCJsaWRcIjogXCI0NDY4OTMwMjU0MDM2NjoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQzc3TUVHRUpQN29MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVKSm5nL29QdUcvWjF4NzJ3clNSd3p6cW9mdHFJbko5ZGErbEhHZjN2MWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0ZsYVBmdnlWbUl6UU5ScmVUcXFja0FXWkZVOVNZSGNZaUpmRlo0SGN4RExjR0VwNk04RTBNTjZTWlRmb3BaR3VNZVRrbG50aXRQRXUwUnhhTDZkQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZEJidXdyK0VyU2RPbm50aFVQTTBkT3lTaXF5NUdMRWxzV0N6ZHB6cXMxL1YvbEZZQVVFSEhsRnl3eERDa2R1L3BYUGxObDJLR1Q1YnZtTGJJcGs2aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTQ3MTQyNzoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjA0Njk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
