import Controller from '@ember/controller';
import { computed } from '@ember/object';
import ENV from 'pl-election-results/config/environment';

export default Controller.extend({

  electionYears: null,
  stateCodes: null,
  politicalParties: null,
  resultsByState: null,

  electionYear: 2008,
  friendlyParty: '',
  opposingParty: '',

  // assume each candidate has one and only one affiliated political party.
  pctVotesDiffsByState: computed('electionYear', 'friendlyParty', 'opposingParty', function () {

    let thisCtrl = this;
    let diffsByState = {}

    for (let stateCode of thisCtrl.stateCodes) {

      let curStateResults = thisCtrl.resultsByState[thisCtrl.electionYear + '_' + stateCode];

      let voteTotal = 0;
      let friendlyTotal = 0;
      let opposingTotal = 0;

      for (var candidate in curStateResults) {
        let candidateResult = curStateResults[candidate];
        if (candidateResult.parties){
          if (candidateResult.parties[0] == thisCtrl.friendlyParty) {
            friendlyTotal += candidateResult.votes;
          } else if (candidateResult.parties[0] == thisCtrl.opposingParty) {
            opposingTotal += candidateResult.votes;
          }
          voteTotal += candidateResult.votes;
        }
      }

      let friendlyPct = (friendlyTotal / voteTotal)*100;
      let opposingPct = (opposingTotal / voteTotal)*100;
      let pctDiff     = friendlyPct - opposingPct;

      diffsByState[stateCode] = { "votePctDiff": pctDiff };

    }

    return diffsByState;
  }),

  layersWithData: computed('pctVotesDiffsByState', function () {
    let thisCtrl = this;
    let layers = ENV.APP.mapLayers;

    for (let layer of layers) {
      if (layer.id == "states") {
        layer.dataToJoin = thisCtrl.pctVotesDiffsByState;
      }
    }

    return layers;
  })

});
