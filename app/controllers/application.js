import Controller from '@ember/controller';
import candidates from 'manitoba-2019-election-map/utils/candidates';

export default Controller.extend({
  get patternIds() {
    let partiesForEachDivision = Object.values(candidates).map(division => Object.keys(division));
    let initialStringsForEachDivision = partiesForEachDivision.map(divisionParties => divisionParties.map(party => party[0]).sort().join(''));
    return [...new Set(initialStringsForEachDivision)];
  }
});
