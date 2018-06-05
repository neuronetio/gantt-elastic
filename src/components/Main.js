export function Main(prefix, self) {
  return self.wrapComponent({
    template: `
    <div class="elastigantt__main">
      <${prefix}-header></${prefix}-header>
      <svg class="elastigantt__main-svg" 
        :width="getWidth" 
        :height="getHeight">
        <${prefix}-tree></${prefix}-tree>
      </svg>
    </div>`,

    data() {
      return window.elastiganttStore.initStore(prefix, 'Main', {});
    },

    created() {
      this.calculateTasksStart();
    },

    methods: {
      calculateTasksStart(){
        let tasks = this.shared.tasks;
        let firstTaskTime = Number.MAX_SAFE_INTEGER;
        let lastTaskTime = 0;
        for(let task of this.shared.tasks){
          task.startDate = new Date(task.start);
          task.startTime = task.startDate.getTime();
          task.durationMs = task.duration * 1000;
          if(task.startTime < firstTaskTime){
            firstTaskTime = task.startTime;
          }
          if(task.startTime + task.durationMs > lastTaskTime){
            lastTaskTime = task.startTime + task.durationMs;
          }
        }
        this.shared.firstTaskTime = firstTaskTime;
        this.shared.lastTaskTime = lastTaskTime;
      },
      calculateHeight() {
        let options = this.shared.options;
        return this.shared.height = this.shared.tasks.length * (options.row.height + options.horizontalGrid.gap) + options.horizontalGrid.gap;
      },
    },

    computed: {
      getWidth() {
        let widthMs = this.shared.lastTaskTime - this.shared.firstTaskTime;
        if(widthMs){
          return widthMs / this.shared.options.scaleX;
        }
        return 0;
      },
      getHeight() {
        return this.calculateHeight();
      },
    },

  });
}
