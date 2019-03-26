import Controller from '@ember/controller';
import { computed } from '@ember/object';
import ENV from 'pl-election-results/config/environment';

export default Controller.extend({

  electionYears:    null,
  politicalParties: null,
  resultsByState:   null,

  electionYear: 2008,
  friendlyParty: '',
  opposingParty: '',

  pctVotesDiffByState: computed('electionYear', 'friendlyParty', 'opposingParty', function(){
    return {}
  }),

  layersWithData: computed('pctVotesDiffByState', function () {
    let thisCtrl = this;
    let layers = ENV.APP.mapLayers;

    for (let layer of layers) {
      if (layer.id == "states") {
        layer.dataToJoin = thisCtrl.pctVotesDiffByState;
      }
    }

    return layers;
  })

});
