import Component from '@glimmer/component';
import candidates from 'manitoba-2019-election-map/utils/candidates';

export default class DivisionComponent extends Component {
  get candidates() {
    let divisionName = this.args.feature.properties.ED;
    let divisionCandidates = candidates[divisionName];

    return divisionCandidates;
  }

  get candidateNames() {
    return Object.values(this.candidates);
  }

  get partiesFill() {
    return Object.keys(this.candidates).map(party => party[0]).sort().join('');
  }
}
