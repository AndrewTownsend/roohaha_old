import Component from '@ember/component';

export default Component.extend({
  classNames: ['screen', 'about', 'alt-screen'],

  watching: [
    {show: 'Mr. Robot', imdb: 'https://www.imdb.com/title/tt4158110/'},
    {show: 'Band of Brothers', imdb: 'https://www.imdb.com/title/tt0185906/'},
    {show: 'Sons of Anarchy', imdb: 'https://www.imdb.com/title/tt1124373/'},
    {show: 'Letterkenny', imdb: 'https://www.imdb.com/title/tt4647692/'},
  ],

  reading: [
    {book: 'The Black Prism', author: 'Brent Weeks', amazon: 'https://www.amazon.com/Black-Prism-Lightbringer-Brent-Weeks/dp/0316246271'}
  ]
});
