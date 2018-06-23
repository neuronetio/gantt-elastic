export function Header(prefix, self) {
  return self.wrapComponent({

    template: `<div class="elastigantt__header">
          <input type="number" v-model="scale">
      </div>`,

    data() {
      return window.elastiganttStore.initStore(prefix, 'Header', {});
    },

    computed: {
      scale: {
        get() {
          return this.shared.times.timeZoom;
        },
        set(value) {
          this.shared.times.timeZoom = value;
        }
      }

    }
  });
}
