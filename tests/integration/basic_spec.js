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

function expectAddTask(url) {
  cy.visit(url, { timeout: 10000 }).then(window => {
    const gantt = window.app.$children[0];
    expect(gantt.state.tasks.length).to.equal(15);
    expect(typeof gantt.getTask).to.equal('function');
    const task = gantt.getTask(7);
    expect(task.children.length).to.equal(1);
    expect(task.allChildren.length).to.equal(2);
    expect(task.children[0]).to.equal(8);
    cy.get('#btn-add')
      .click()
      .wait(1000)
      .then(() => {
        const task = gantt.getTask(7);
        expect(task.children.length).to.equal(2);
        expect(task.allChildren.length).to.equal(3);
        expect(task.children[1]).to.equal(88);
      });
  });
}

const umd = '/tests/assets/umd.html';
const standalone = '/tests/assets/standalone.html';

describe('Basic', () => {
  it('should mount gantt-elastic - umd', () => {
    expectIsMounted(umd);
  });
  it('should mount gantt-elastic - standalone', () => {
    expectIsMounted(standalone);
  });

  it('should change time-zoom - umd', () => {
    expectTimeZoomChange(umd);
  });
  it('should change time-zoom - standalone', () => {
    expectTimeZoomChange(standalone);
  });

  it('should add task - umd', () => {
    expectAddTask(umd);
  });
  it('should add task - standalone', () => {
    expectAddTask(standalone);
  });
});
