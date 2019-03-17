import { mergeDeepReactive, mergeDeep } from './GanttElastic.vue';
const GanttElasticVuexModule = {
  state: {
    tasks: [],
    options: {
      scrollBarHeight: 0,
      allVisibleTasksHeight: 0,
      refs: {},
      tasksById: {},
      times: {},
      clientWidth: 0
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
  },
  getters: {
    ['GanttElastic/options'](state) {
      return state.options;
    },
    ['GanttElastic/tasks'](state) {
      return state.tasks;
    }
  }
};
const getStore = state => {
  GanttElasticVuexModule.state = state;
  return GanttElasticVuexModule;
};
export default getStore;
window.GanttElasticVuexModule = getStore;
