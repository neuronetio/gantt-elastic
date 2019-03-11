import { mergeDeep, mergeDeepReactive, equalDeep } from './GanttElastic.vue';
const GanttElasticVuexModule = {
  state: {
    tasks: [],
    options: {
      scrollBarHeight: 0,
      allVisibleTasksHeight: 0,
      refs: {},
      tasksById: {},
      times: {}
    }
  },
  mutations: {
    /**
     * Update tasks
     */
    ['GanttElastic/updateTasks'](state, tasks) {
      state.tasks = tasks.map(task => mergeDeepReactive({}, task));
    },

    /**
     * Update task
     */
    ['GanttElastic/updateTask'](state, task) {
      for (let index = 0, len = state.tasks.length; index < len; index++) {
        const current = state.tasks[index];
        if (current.id === task.id) {
          mergeDeepReactive(state.tasks[index], task);
        }
      }
    },

    /**
     * Update options
     */
    ['GanttElastic/updateOptions'](state, payload) {
      state.options = mergeDeepReactive(state.options, payload);
    }
  }
};
window.GanttElasticVuexModule = GanttElasticVuexModule;
export default GanttElasticVuexModule;
