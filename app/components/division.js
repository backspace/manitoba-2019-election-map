import Component from '@glimmer/component';
import candidates from 'manitoba-2019-election-map/utils/candidates';

export default class DivisionComponent extends Component {
  get candidates() {
    let divisionName = this.args.feature.properties.ED;
    let divisionCandidates = candidates[divisionName];

    return Object.values(divisionCandidates);
  }
}
