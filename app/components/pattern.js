import Component from '@glimmer/component';

const initialToColour = {
  'C': 'red',
  'G': 'green',
  'L': 'red',
  'I': 'grey',
  'N': 'orange',
  'P': 'blue',
};

export default class PatternComponent extends Component {
  lineWidth = 10;

  get width() {
    return this.args.patternId.length * this.lineWidth;
  }

  get lines() {
    return this.args.patternId.split('').map((initial, index) => {
      return {
        xOffset: index * this.lineWidth,
        colour: initialToColour[initial],
      };
    });
  }
}
