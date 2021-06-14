const name          = 'BROWN3QQQ & 崔嘉尔'
const role          = 'Half Software Engineer & (Confused artist)'
const site          = 'https://inlife.github.io/'
const yearsOfExp    = (new Date()).getFullYear() - 2020
const keywords      = ['希望能解决所有事情', '想知道如何掌控未来'].concat(name.split(' '), role.split(' ')).join(' ')
const description   = `Hey! I Aam ${name}, ${role} with >${yearsOfExp} years of experience.`;

export default { name, role, site, keywords, description, yearsOfExp }
