export function Header(prefix, self) {
  return self.wrapComponent({

    template: `<div class="elastigantt__header">
          <input type="range" v-model="scale" max="24" min="2">
          <input type="range" v-model="height" max="100" min="6">
          <input type="range" v-model="scope" max="100" min="0">
      </div>`,

    data() {
      return {};
    },

    computed: {
      scale: {
        get() {
          return this.$root.$data.times.timeZoom;
        },
        set(value) {
          this.$root.$data.times.timeZoom = Number(value);
          this.$root.recalculate();
        }
      },
      height: {
        get() {
          return this.$root.$data.row.height;
        },
        set(value) {
          this.$root.$data.row.height = Number(value);
          this.$root.recalculate();
        }
      },
      scope: {
        get() {
          return this.$root.$data.scope.before;
        },
        set(value) {
          this.$root.$data.scope.before = Number(value);
          this.$root.$data.scope.after = Number(value);
          this.$root.recalculate();
        }
      },

    }
  });
}
