export function Header(prefix, self) {
  return self.wrapComponent({

    template: `<div class="elastigantt__header">
          <input type="number" v-model="scale"> time zoom:{{$root.$data.times.timePerPixel}}
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
