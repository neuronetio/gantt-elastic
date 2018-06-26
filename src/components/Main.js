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
      return {};
    },
    created() {
      let tasks = this.$root.$data.tasks;
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      for (let task of this.$root.$data.tasks) {
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
      this.$root.$data.times.firstTaskTime = firstTaskTime;
      this.$root.$data.times.lastTaskTime = lastTaskTime;
      this.$root.recalculate();
    },
    methods: {

    },
    computed: {
      getWidth() {
        //this.recalculate();
        let widthMs = this.$root.$data.times.lastTaskTime - this.$root.$data.times.firstTaskTime;
        if (widthMs) {
          return widthMs / this.$root.$data.times.timePerPixel;
        }
        return 0;
      },
      getHeight() {
        //this.recalculate();
        return this.$root.$data.height = this.$root.$data.tasks.length * (this.$root.$data.row.height + this.$root.$data.horizontalGrid.gap) + this.$root.$data.horizontalGrid.gap;
      }
    }
  })
}
