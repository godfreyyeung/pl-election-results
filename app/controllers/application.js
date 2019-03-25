import Controller from '@ember/controller';
import { computed } from '@ember/object';
import ENV from 'pl-election-results/config/environment';

const stateCodes = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
  'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
  'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

export default Controller.extend({
  someInput: '',
  dataToJoin: computed('someInput', function () {

    let joinData = {}

    stateCodes.forEach(function (stateCode) {
      joinData[stateCode] = {
        'votePercent': (Math.random() * 10)
      }
    })

    return joinData;
  }),

  layersWithData: computed('dataToJoin', function () {
    let thisCtrl = this;
    let layers = ENV.APP.mapLayers;

    for (let layer of layers) {
      if (layer.id == "states") {
        layer.dataToJoin = thisCtrl.get('dataToJoin');
      }
    }

    return layers;
  })

});
