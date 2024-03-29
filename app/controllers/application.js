import Controller from '@ember/controller';
import { computed } from '@ember/object';
import EmberObject from '@ember/object';
import ENV from 'pl-election-results/config/environment';

var voteResult = EmberObject.extend({
  stateCode: '',
  candidate: '',
  votes: null
});

function fakeSubmitToServer(payload){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      let newResultData = payload;
      let newResult = voteResult.create(newResultData);
      resolve(newResult);
    }, 1200);
  })
}

export default Controller.extend({

  userSubmittedResults: null,

  submittedResultsJSON: computed('userSubmittedResults.[]', function(){
    let prettyJSON = JSON.stringify(this.userSubmittedResults, null, 2);
    let withoutBrackets = prettyJSON.slice(0, -1).slice(1,prettyJSON.length);
    return withoutBrackets;
  }),

  newResultState: null,
  newResultCandidate: '',
  newResultVotes: null,
  isSubmittingResult: false,

  electionYears: null,
  stateCodes: null,
  politicalParties: null,
  resultsByYear: null,

  electionYear: 2004,
  friendlyParty: 'Democratic',
  opposingParty: 'Republican',

  friendlyPartyOptions: computed('politicalParties', 'opposingParty', 'electionYear', function(){
    return this.politicalParties[this.electionYear].filter(party => (party != this.opposingParty));
  }),
  opposingPartyOptions: computed('politicalParties', 'friendlyParty', 'electionYear', function(){
    return this.politicalParties[this.electionYear].filter(party => (party != this.friendlyParty));
  }),

  // assume each candidate has one and only one affiliated political party.
  pctVotesDiffsByState: computed('electionYear', 'friendlyParty', 'opposingParty', function () {

    let thisCtrl = this;
    let diffsByState = {}

    for (let stateCode of thisCtrl.stateCodes) {

      let curYearResults  = thisCtrl.resultsByYear[thisCtrl.electionYear];
      let curStateResults = curYearResults[thisCtrl.electionYear + '_' + stateCode];

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
      let pctDiff     = (friendlyPct - opposingPct).toFixed(2);

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
  }),

  actions: {
    setElectionYear(year) {
      this.set('electionYear', year);
    },
    setFriendlyParty(party) {
      this.set('friendlyParty', party);
    },
    setOpposingParty(party) {
      this.set('opposingParty', party);
    },
    setNewResultState(resultState) {
      this.set('newResultState', resultState);
    },
    submitVoteResult(){
      let thisCtrl = this;
      if(!thisCtrl.isSubmittingResult){
        let dataPayload = {
          stateCode: thisCtrl.newResultState,
          candidate: thisCtrl.newResultCandidate,
          votes:     thisCtrl.newResultVotes
        }
        thisCtrl.set('isSubmittingResult', true);
        fakeSubmitToServer(dataPayload).then((newResult) => {
            thisCtrl.userSubmittedResults.pushObject(newResult);
            thisCtrl.set('isSubmittingResult', false);
          }
        );
      }
    }
  }

});
