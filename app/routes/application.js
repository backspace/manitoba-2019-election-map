import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('/boundaries.geojson').then(response => response.json());
  }
});
