function expectIsMounted(url) {
  cy.visit(url, { timeout: 10000 })
    .then(window => {
      expect(typeof window.GanttElastic).to.equal('object');
      expect(typeof window.app).to.equal('object');
    })
    .get('.gantt-elastic')
    .should('be.visible');
}

function expectTimeZoomChange(url) {
  cy.visit(url, { timeout: 10000 }).then(window => {
    const timeZoomSelector = '.gantt-elastic__header-options > label:nth-child(2) .vue-slider-dot-handle';
    const $timeZoom = Cypress.$(timeZoomSelector);
    const offset = $timeZoom.offset();
    cy.wrap($timeZoom).as('timeZoom');
    expect(typeof window.app).to.equal('object');
    expect(typeof window.app.$children).to.equal('object');
    const gantt = window.app.$children[0];
    expect(gantt.state.options.times.timeZoom).to.equal(17);
    cy.get('@timeZoom').should('be.visible');
    cy.get('@timeZoom')
      .trigger('mousedown')
      .trigger('mousemove', { clientX: offset.left - 10, clientY: offset.top })
      .trigger('mouseup')
      .wait(1000)
      .then(() => {
        expect(gantt.state.options.times.timeZoom).to.equal(12);
      });
  });
}

describe('Basic', () => {
  it('should mount gantt-elastic - umd', () => {
    expectIsMounted('/tests/assets/umd.html');
  });
  it('should mount gantt-elastic - standalone', () => {
    expectIsMounted('/tests/assets/standalone.html');
  });

  it('should change time-zoom - umd', () => {
    expectTimeZoomChange('/tests/assets/umd.html');
  });
  it('should change time-zoom - standalone', () => {
    expectTimeZoomChange('/tests/assets/standalone.html');
  });
});
