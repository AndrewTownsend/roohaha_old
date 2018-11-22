import Component from '@ember/component';

export default Component.extend({
  classNames: ['screen', 'projects'],

  projects: [
    {name: 'RooHaha Redesign/Reimplementation', status: 'IN PROGRESS', description: '', description2: '', icon: 'fas fa-code', download: '', git: 'https://github.com/AndrewTownsend/roohaha'},
    {name: 'SimpleBackup', status: 'NOT STARTED', description: '', description2: '', icon: 'fab fa-apple', download: '', git: ''},
    {name: 'Poker Hand Analyzer', status: 'NOT STARTED', description: '', description2: '', icon: 'fas fa-code', download: '', git: ''},
  ],
});
