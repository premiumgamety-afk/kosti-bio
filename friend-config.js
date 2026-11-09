/* config.js друга: меняй только этот файл. Картинки и музыку клади в свою папку assets. */
window.SITE = {
  lang: 'ru',
  title: 'Твой ник | portfolio',
  favicon: 'assets/favicon.svg',

  nick: 'Твой ник',
  logo: 'Твой ник solution',
  role: 'Backend',
  hero: 'Короткое приветствие над кнопками.',
  telegram: 'https://t.me/твой_ник',

  titleAnimation: false,   // анимация названия вкладки: 'Текст' или false
  protect: false,          // защита от копирования: true / false

  about: {
    intro: 'Если бы мне сказали описать себя в 40 словах, я бы сказал так:',
    text: 'Рассказ о себе.',
    avatar: 'assets/avatar.png'
  },

  server: { host: 'play.example.com:25565', display: 'play.example.com' },

  music: { src: 'assets/song.mp3', title: 'Название', artist: 'Исполнитель', cover: 'assets/cover.png' },

  // Discord ID (нужно зайти на сервер discord.gg/lanyard); пока пусто, блок покажет подсказку
  discord: { id: '', name: 'ник', username: '@ник', avatar: 'assets/avatar.png' },

  projectsIntro: 'Коротко о проектах.',
  // tags: 'owner' (Владелец), 'design' (Дизайн), 'coder' (Кодер) или любой свой текст
  projects: [
    { name: 'Проект', url: 'https://example.com', domain: 'example', tld: '.com',
      color: '#40a0ff', icon: 'assets/project.png', tags: ['owner', 'coder'] }
  ],

  skills: {
    intro: 'Коротко о навыках.',
    backend:  { text: 'Описание backend.',  chips: [['Java','java'],['Python','python']] },
    frontend: { text: 'Описание frontend.', chips: [['HTML','html'],['CSS','css']] }
  },

  footer: { logo: 'example.com | Твой ник', note: 'Подпись в футере' }
};
