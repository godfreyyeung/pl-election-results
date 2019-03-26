import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(async function(){
    hooks.mockStates = ['AL', 'AK']
    hooks.mockGivenYearResults = {
      "2004_AL": {
        "Bush, George W.": {
          "id": "2004_AL",
          "year": 2004,
          "name": "Bush, George W.",
          "abbr": "AL",
          "state": "Alabama",
          "votes": 1176394,
          "parties": [
            "Republican"
          ]
        },
        "Kerry, John F.": {
          "id": "2004_AL",
          "year": 2004,
          "name": "Kerry, John F.",
          "abbr": "AL",
          "state": "Alabama",
          "votes": 693933,
          "parties": [
            "Democratic"
          ]
        },
        "Nader, Ralph": {
          "id": "2004_AL",
          "year": 2004,
          "name": "Nader, Ralph",
          "abbr": "AL",
          "state": "Alabama",
          "votes": 6701,
          "parties": [
            "Independent"
          ]
        },
        "Badnarik, Michael": {
          "id": "2004_AL",
          "year": 2004,
          "name": "Badnarik, Michael",
          "abbr": "AL",
          "state": "Alabama",
          "votes": 3529,
          "parties": [
            "Independent"
          ]
        },
        "Peroutka, Michael": {
          "id": "2004_AL",
          "year": 2004,
          "name": "Peroutka, Michael",
          "abbr": "AL",
          "state": "Alabama",
          "votes": 1994,
          "parties": [
            "Independent"
          ]
        }
      },
      "2004_AK": {
        "Bush, George W.": {
          "id": "2004_AK",
          "year": 2004,
          "name": "Bush, George W.",
          "abbr": "AK",
          "state": "Alaska",
          "votes": 190889,
          "parties": [
            "Republican"
          ]
        },
        "Kerry, John F.": {
          "id": "2004_AK",
          "year": 2004,
          "name": "Kerry, John F.",
          "abbr": "AK",
          "state": "Alaska",
          "votes": 111025,
          "parties": [
            "Democratic"
          ]
        },
        "Nader, Ralph": {
          "id": "2004_AK",
          "year": 2004,
          "name": "Nader, Ralph",
          "abbr": "AK",
          "state": "Alaska",
          "votes": 5069,
          "parties": [
            "Populist"
          ]
        },
        "Peroutka, Michael A.": {
          "id": "2004_AK",
          "year": 2004,
          "name": "Peroutka, Michael A.",
          "abbr": "AK",
          "state": "Alaska",
          "votes": 2092,
          "parties": [
            "Alaskan Independence"
          ]
        },
        "Badnarik, Michael": {
          "id": "2004_AK",
          "year": 2004,
          "name": "Badnarik, Michael",
          "abbr": "AK",
          "state": "Alaska",
          "votes": 1675,
          "parties": [
            "Alaska Libertarian"
          ]
        },
        "Cobb, David": {
          "id": "2004_AK",
          "year": 2004,
          "name": "Cobb, David",
          "abbr": "AK",
          "state": "Alaska",
          "votes": 1058,
          "parties": [
            "Green"
          ]
        }
      },
    }
  })

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  test('pctVotesDiffsByState computed property has correct calculations', function(assert) {
    let controller = this.owner.lookup('controller:application');

    controller.set('stateCodes', hooks.mockStates);
    controller.set('politicalParties', hooks.mockParties);
    controller.set('resultsByState', hooks.mockGivenYearResults);
    controller.set('electionYear', '2004');
    controller.set('friendlyParty', 'Independent');
    controller.set('opposingParty', 'Republican');

    let AL_totalVotes         = 1176394 + 693933 + 6701 + 3529 + 1994;
    let AL_indepVotes         = 6701 + 3529 + 1994;
    let AL_republicanVotes    = 1176394;
    let AL_indepVotePct       = (AL_indepVotes      / AL_totalVotes)*100;
    let AL_republicanVotePct  = (AL_republicanVotes / AL_totalVotes)*100;
    let AL_votePctDiff        = AL_indepVotePct - AL_republicanVotePct;

    let AK_totalVotes         = 190889 + 111025 + 5069 + 2092 + 1675 + 1058;
    let AK_indepVotes         = 0;
    let AK_republicanVotes    = 190889;
    let AK_indepVotePct       = (AK_indepVotes      / AK_totalVotes)*100;
    let AK_republicanVotePct  = (AK_republicanVotes / AK_totalVotes)*100;
    let AK_votePctDiff        = AK_indepVotePct - AK_republicanVotePct;

    let expectedpctVotesDiffsByState = {
      "AL": {
        "votePctDiff": AL_votePctDiff
      },
      "AK": {
        "votePctDiff": AK_votePctDiff
      }
    }

    assert.equal(JSON.stringify(controller.pctVotesDiffsByState), JSON.stringify(expectedpctVotesDiffsByState), 'pctVotesDiffsByState CP gives expected values');
  });


});
