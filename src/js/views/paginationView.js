import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1 && numPages > 1) {
      return this._generatePageBtnMarkup('right', curPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1)
      return this._generatePageBtnMarkup('left', curPage);

    // Other page
    if (curPage < numPages)
      return (
        this._generatePageBtnMarkup('left', curPage) +
        this._generatePageBtnMarkup('right', curPage)
      );

    // Page 1, and there are NO other pages
    if (numPages === 1) return '';
  }

  _generatePageBtnMarkup(type, curPage) {
    return `
    <button data-goto="${
      type === 'right' ? curPage + 1 : curPage - 1
    }" class="btn--inline pagination__btn--${
      type === 'right' ? 'next' : 'prev'
    }">
      <span>Page ${type === 'right' ? curPage + 1 : curPage - 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-${type}"></use>
      </svg>
    </button>`;
  }
}

export default new PaginationView();
