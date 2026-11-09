/* config.js друга: меняй только этот файл. Картинки и музыку клади в свою папку assets. */
window.SITE = {
  lang: 'ru',
  title: 'TheKosti23 | portfolio',
  favicon: 'assets/favicon.svg',

  nick: 'TheKosti23',
  logo: 'TheKosti23 solution',
  role: 'Backend',
  hero: 'Йоу, рад снова видеть! Всё, что ты видишь, — результат работы нейросетей и моей фантазии. Я не просто экспериментировал — я создал проекты, которые реально приносят деньги. Мир стремительно меняется, и будущее принадлежит тем, кто умеет использовать нейросети.',
  telegram: 'https://t.me/f4cked666',

  titleAnimation: 'TheKosti23 Bio',   // анимация названия вкладки: 'Текст' или false
  protect: true,          // защита от копирования: true / false

  about: {
    intro: 'Если бы мне сказали описать себя в 40 словах, я бы сказал так:',
    text: 'Я всего лишь в 6-м классе, но уже добился для себя значимого результата. Пока кто-то тратит время на игры, я придумываю новые идеи и превращаю их в прибыль. Успеваю совмещать отличную учёбу с проектами и всегда нахожу время, чтобы создавать что-то своё.',
    avatar: 'assets/avatar.png'
  },

  server: { host: 'RageHvH.mooo.com:24601', display: 'RageHvH.mooo.com:24601' },

  music: { src: 'assets/song.mp3', title: 'Четыре Тридцать', artist: 'Violetta Sokolova', cover: 'assets/cover.png' },

  // Discord ID (нужно зайти на сервер discord.gg/lanyard); пока пусто, блок покажет подсказку
  discord: { id: '1560311951341391886', name: '! thekosti ! lua/luau', username: '@thekostizz', avatar: 'assets/avatar.png' },

  projectsIntro: 'Коротко о проектах.',
  // tags: 'owner' (Владелец), 'design' (Дизайн), 'coder' (Кодер) или любой свой текст
  projects: [
    { name: 'TheKosti23 Bio', url: 'https://example.com', domain: 'example', tld: '.com',
      color: '#ff9af5', icon: 'assets/favicon.svg', tags: ['owner', 'coder'] },
    
    { name: 'RageHvH', url: 'https://RageHvH.mooo.com', domain: 'RageHvH.mooo.com:24601', tld: '.com',
      color: '#ff4040', icon: 'assets/rage.png', tags: ['helper', 'coder'] }
  ],

  skills: {
    intro: 'Коротко о навыках.',
    backend:  { text: 'Разрабатываю эффективные backend-системы с акцентом на стабильность, отказоустойчивость и простоту интеграции в существующую инфраструктуру.',  chips: [['Java','java'],['Python','python'],['Lua','lua'],['C++','c++']] },
    frontend: { text: 'Работаю с фронтендом, но больше всего вдохновляюсь не кодом, а дизайном — люблю превращать идеи в удобные и красивые интерфейсы, которые приятно использовать.', chips: [['HTML','html'],['CSS','css']] }
  },

  footer: { logo: 'example.com | TheKosti23', note: 'Весь этот сайт сделала нейросеть, за исключением дизайна, вдохновился у zow.mooo.com' }
};
