import Component from '@ember/component';

export default Component.extend({
  classNames: ['screen', 'projects'],

  projects: [
    {name: 'RooHaha Redesign/Reimplementation', status: 'IN PROGRESS', language: 'EmberJS', description: 'I haven\'t updated my personal website in over ten years, and to be honest I didn\'t have the strongest grasp of CSS back then (and FlexBox + FlexGrid hadn\'t been invented yet!), so a revamp seems appropriate now that basic webpage building is the least of what I have learned do.', description2: '', icon: 'fas fa-code', download: '', git: 'https://github.com/AndrewTownsend/roohaha'},
    {name: 'SimpleBackup', status: 'NOT STARTED', language: 'Java', description: 'I was recently looking for Backup solutions for Mac, and was appalled that while existing solutions seem comprehensive from their feature-list, there appear to be no good freeware options.', description2: 'This project probably wont gain much of an audience, but I plan to build a bare-bones java app that does a decent job of transferring your source data directories to a destination directory, ideally on a schedule of your choosing.', icon: 'fab fa-apple', download: '', git: ''},
    {name: 'Poker Hand Analyzer', status: 'NOT STARTED', language: 'EmberJS', description: 'This is a project I\'ve been contemplating for years now.  It won\'t be super helpful in the middle of a game, but might be a useful tool for the retrospective poker player thinking about a hand they won or lost later on.', description2: '', icon: 'fas fa-code', download: '', git: ''},
  ],
});
