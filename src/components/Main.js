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
      let tasks = this.shared.tasks;
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      for (let task of this.shared.tasks) {
        task.startDate = new Date(task.start);
        task.startTime = task.startDate.getTime();
        task.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
        }
        if (task.startTime + task.durationMs > lastTaskTime) {
          lastTaskTime = task.startTime + task.durationMs;
        }
      }
      this.shared.times.firstTaskTime = firstTaskTime;
      this.shared.times.lastTaskTime = lastTaskTime;
      this.recalculate();
    },
    methods: {
      recalculate() {
        this.shared.times.timePerPixel = this.shared.times.timeScale * this.shared.times.timeZoom;
        this.shared.times.totalTasksDurationMs = this.shared.times.lastTaskTime - this.shared.times.firstTaskTime;
        this.shared.times.totalTasksDurationPx = this.shared.times.totalTasksDurationMs / this.shared.times.timePerPixel;
        this.shared.times.stepPx = this.shared.verticalGrid.step / this.shared.times.timePerPixel;
        this.shared.times.steps = Math.ceil(this.shared.times.totalTasksDurationPx / this.shared.times.stepPx);
        for (let index = 0, len = this.shared.tasks.length; index < len; index++) {
          let task = this.shared.tasks[index];
          task.width = task.durationMs / this.shared.times.timePerPixel;
          task.height = this.shared.row.height;
          let x = task.startTime - this.shared.times.firstTaskTime;
          if (x) {
            x = x / this.shared.times.timePerPixel;
          }
          task.x = x;
          task.y = ((this.shared.row.height + this.shared.horizontalGrid.gap) * index) + this.shared.horizontalGrid.gap;
        }
      },
    },
    computed: {
      getWidth() {
        this.recalculate();
        let widthMs = this.shared.times.lastTaskTime - this.shared.times.firstTaskTime;
        if (widthMs) {
          return widthMs / this.shared.times.timePerPixel;
        }
        return 0;
      },
      getHeight() {
        this.recalculate();
        return this.shared.height = this.shared.tasks.length * (this.shared.row.height + this.shared.horizontalGrid.gap) + this.shared.horizontalGrid.gap;
      }
    }
  })
}
