import View from './View';
import icons from '../../img/icons.svg';

class searchView extends View {
  _parentEl = document.querySelector('.search');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerRender(handler) {
    this._parentEl.addEventListener('submit', handler);
  }
}

export default new searchView();
