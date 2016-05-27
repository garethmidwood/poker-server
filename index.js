'use strict'

let engine = require('poker-holdem-engine');

engine.gamestate.emit('game:start', {
  tournamentId: '1',
  players: [{
        id: '1',
        name: 'Gareth',
        url: 'http://127.0.0.1:1337'
  }, {
        id: '2',
        name: 'Max',
        url: 'http://10.1.1.45:1337'
  }, {
        id: '3',
        name: 'Pete',
        url: 'http://10.1.1.19:1337'
  }]
});
