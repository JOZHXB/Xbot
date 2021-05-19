exports.wait = () => {
	return`*「❗」WAIT *`
}
exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」YOUR LEVEL IS EMPTY*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL ON GRUB HAS NOT BEEN ACTIVATED*`
}

exports.noregis = () => {
	return`*「❗」NOT VERIFIED「❗」*\n\nType : @verify`
}verified

exports.baned = () => {
	return`*「❗」SORRY SORRY I CAN'T HEAR YOU*`

exports.premium = (prefix) => {
	return`THIS FEATURE IS SPECIFICALLY FOR PREMIUM USER!
UPGRADE TO PREMIUM
IF INTERESTED CONTACT MY OWNER
Type : ${prefix}owner`
}

exports.rediregis = () => {
	return`* -_-*`
}

exports.stikga = () => {
	return`*「 FAILED 」reply/tag to media*`
}

exports.linkga = () => {
	return`*「❗」Sorry the link is not valid*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT MUST BE AN ADMIN`
}

exports.bug = () => {
	return`*The problem has been reported to the Owner, a fake report / main2 will not be responded to*`
}

exports.wrongf = () => {
	return`*「🐱」Where is the Text?*`
}

exports.clears = () => {
	return`*Success*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 CONGRATS 」*
\`\`\`➸ Name: ${pushname}\`\`\`
\`\`\`➸ Number: wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*sorry ${pushname} Today's limit runs out*
*Limit Reset at 12:00 midnight*

\`\`\`Upgrade to Premium get Free Limit\`\`\`
\`\`\`➸ 20K : 1 year\`\`\`
\`\`\`If Interested please contact owner\`\`\`
\`\`\`Send Command : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
The rest of your limit : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade to premium ,get free limit`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ NUMBER: ${sender.split("@")[0]}
┃│➸ MONEY  : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONATIONS*
UPI ID : ajoshjosephen@okaxis
Gpay : 919745816176

Buy me a Coffee`
}