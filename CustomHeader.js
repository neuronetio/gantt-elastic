const CustomHeader = {
  inject: ['root'],
  template: `<div class="elastigantt__header">
    <div style="float:left;font-weight:bold;font-size:20px;letter-spacing:1px;">Elastigantt</div>
    <div class="elastigantt__header-options">
      <button class="elastigantt__btn-recenter btn btn-primary mr-4" @click="recenterPosition">{{root.state.locale.Now}}</button>
      <label class="mr-2">{{root.state.locale['X-Scale']}}<input type="range" v-model="scale" max="24" min="2"></label>
      <label class="mr-2">{{root.state.locale['Y-Scale']}}<input type="range" v-model="height" max="100" min="6"></label>
      <label class="mr-2">{{root.state.locale['Before/After']}}<input type="range" v-model="scope" max="100" min="0"></label>
      <label class="mr-2">{{root.state.locale['Task list width']}}<input type="range" v-model="divider" max="100" min="0"></label>
      <label class="mr-2"><input type="checkbox" class="mr-1" v-model="root.state.taskList.display">{{root.state.locale['Display task list']}}</label>
    </div>
  </div>`,
  data() {
    return {};
  },
  methods: {
    recenterPosition() {
      this.$root.$emit('elastigantt.recenterPosition');
    }
  },
  computed: {
    scale: {
      get() {
        return this.root.state.times.timeZoom;
      },
      set(value) {
        this.$root.$emit('elastigantt.times.timeZoom.change', Number(value));
      }
    },
    height: {
      get() {
        return this.root.state.row.height;
      },
      set(value) {
        this.$root.$emit('elastigantt.row.height.change', Number(value))
      }
    },
    scope: {
      get() {
        return this.root.state.scope.before;
      },
      set(value) {
        this.$root.$emit('elastigantt.scope.change', Number(value));
        this.$root.$emit('elastigantt.scope.before.change', Number(value));
        this.$root.$emit('elastigantt.scope.after.change', Number(value));
      }
    },
    divider: {
      get() {
        return this.root.state.taskList.percent;
      },
      set(value) {
        this.$root.$emit('elastigantt.taskList.width.change', Number(value));
      }
    }
  }
}
