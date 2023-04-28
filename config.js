const name          = '崔谦 & Jackson'
const role          = '软件工程师'
const site          = 'https://brown3qqq.github.io/static/'
const yearsOfExp    = (new Date()).getFullYear() - 2021
const keywords      = ['inlife', 'inlife360'].concat(name.split(' '), role.split(' ')).join(' ')
const description   = `Hey! I am ${name}, ${role} with >${yearsOfExp} years of experience.`;

export default { name, role, site, keywords, description, yearsOfExp }
