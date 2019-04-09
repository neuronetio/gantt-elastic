describe('UMD', () => {
  it('should mount gantt-elastic', async () => {
    const window = await cy.visit('/tests/assets/umd.html', { timeout: 30000 }).promisify();
    expect(typeof window.GanttElastic).to.equal('object');
    expect(typeof window.app).to.equal('object');
    cy.get('.gantt-elastic').should('be.visible');
  });
  it('should change time-zoom', async () => {
    const window = await cy.visit('/tests/assets/umd.html', { timeout: 30000 }).promisify();
    const timeZoomSelector = '.gantt-elastic__header-options > label:nth-child(3) .vue-slider-dot-handle';
    const $timeZoom = Cypress.$(timeZoomSelector);
    const timeZoom = cy.wrap($timeZoom);
    const offset = $timeZoom.offset();
    const gantt = window.app.$children[0];
    expect(gantt.state.options.times.timeZoom).to.equal(17);
    timeZoom.should('be.visible');
    timeZoom
      .trigger('mousedown')
      .trigger('mousemove', { clientX: offset.left - 10, clientY: offset.top })
      .trigger('mouseup')
      .wait(1000)
      .then(() => {
        expect(gantt.state.options.times.timeZoom).to.equal(12);
      });
  });
});
