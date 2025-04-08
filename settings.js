const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/oauth2/authorize?client_id=1354323748429500428&permissions=8&integration_type=0&scope=bot',
      privacy: 'https://discord.gg/',
      terms: 'https://discord.gg/',
    },
    presence: {
      name: status,
      type: 'Listening',
      url: 'https://discord.gg/'
    },
    credits: {
      developerId: '1003117516668813393',
      supportServer: 'https://discord.gg/'
    },
  }
}
