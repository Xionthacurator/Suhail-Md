const fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_17_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNm8yOXBlaTlzbEhuZDVpdmE5bDZDeHZsRFFMMDcyZm8rU0NvV2YyelNNYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM1NDcxNDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RkYyOTQxQjVBMEJGRDMzNzMxQUJBMzE1MkY3OTk1NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2NDgyMjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0RSTFUyV1ZTdVc2RlZnZm04UGZ4d1wiLFxuICBcInBob25lSWRcIjogXCJkZWJhZWY0Yy0xM2ZmLTQyNmUtOGQwYy1mNDVjZTk5MjI5NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAyMTAsXG4gICAgICAyMjIsXG4gICAgICAyMTUsXG4gICAgICA2MCxcbiAgICAgIDIzMSxcbiAgICAgIDE1MSxcbiAgICAgIDk3LFxuICAgICAgMjI1LFxuICAgICAgMjI1LFxuICAgICAgMjM2LFxuICAgICAgOTcsXG4gICAgICAyMDQsXG4gICAgICAzLFxuICAgICAgMjAyLFxuICAgICAgMTUwLFxuICAgICAgMjIwLFxuICAgICAgMTc3LFxuICAgICAgMzYsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMjAwLFxuICAgICAgMTksXG4gICAgICAzNCxcbiAgICAgIDE4MSxcbiAgICAgIDQ1LFxuICAgICAgMTgsXG4gICAgICAxNDcsXG4gICAgICAyNDksXG4gICAgICA0NixcbiAgICAgIDIzNyxcbiAgICAgIDcxLFxuICAgICAgMTQ1LFxuICAgICAgMTMxLFxuICAgICAgMTQzLFxuICAgICAgMTM3LFxuICAgICAgNTYsXG4gICAgICA3MixcbiAgICAgIDMzLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEpWWU0zNDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzU0NzE0Mjc6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNb3ZlXCIsXG4gICAgXCJsaWRcIjogXCI0NDY4OTMwMjU0MDM2NjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMjc3TUVHRUpQN3diTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVKSm5nL29QdUcvWjF4NzJ3clNSd3p6cW9mdHFJbko5ZGErbEhHZjN2MWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVy9wN3A4WDI2VWhMYmlxaWhiczR1Q05qditXR0JQaVJvd2JIalZaRmRkbjZiYnIyblVyaDI0VWFDMDIvWkJ6eDdoREZaUXVYYTAzOE8zUHVEbzJwQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZmFWa1BYTUhGQWZoV29lVHJiYUtxdzBOQTNQbXk2bGkvNXNLZFlWbFllZ3JrUkZPOGZPNVY2L2hPanJHS3ExNjhTNXFMNW0xTHQvK0ovb0dmdGh4QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTQ3MTQyNzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjQ4MjE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWtUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNa1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5NkpuUnhrMkVhTHNqN0VKOWJLMklyVzlMS0VRQjk4NlRpNWlpeStSYkJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDg3MDQ2NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg2NDYzNTA1OTZcIn0iCn0="  // PUT your SESSION_ID 


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
