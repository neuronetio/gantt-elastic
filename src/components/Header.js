export function Header(prefix, self) {
  return self.wrapComponent({

    template: `<div class="elastigantt__header">
          <input type="range" v-model="scale" max="22" min="1">
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
          this.$root.$data.times.timeZoom = value;
          this.$root.recalculate();
        }
      }

    }
  });
}
