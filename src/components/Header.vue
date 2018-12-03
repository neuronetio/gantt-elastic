<template>
  <div class="gantt-elastic__header" :style="root.style('header')">
    <div class="gantt-elastic__header-title" :style="root.style('header-title')">
      <div
        class="gantt-elastic__header-title--text"
        :style="root.style('header-title--text')"
        v-if="!root.state.title.html"
      >{{root.state.title.label}}</div>
      <div
        class="gantt-elastic__header-title--html"
        :style="root.style('header-title--html')"
        v-if="root.state.title.html"
        v-html="root.state.title.label"
      ></div>
    </div>
    <div class="gantt-elastic__header-options" :style="root.style('header-options')">
      <button
        class="gantt-elastic__header-btn-recenter"
        :style="root.style('header-btn-recenter')"
        @click.prevent="recenterPosition"
      >{{root.state.locale.Now}}</button>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{root.state.locale['X-Scale']}}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="scale"
            :max="24"
            :min="2"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{root.state.locale['Y-Scale']}}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="height"
            :max="100"
            :min="7"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{root.state.locale['Before/After']}}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="scope"
            :max="31"
            :min="0"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{root.state.locale['Task list width']}}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="divider"
            :max="100"
            :min="0"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label
        class="gantt-elastic__header-task-list-switch--wrapper"
        :style="root.style('header-task-list-switch--label')"
      >
        <switches
          class="gantt-elastic__header-task-list-switch"
          :style="root.style('header-task-list-switch')"
          v-model="root.state.taskList.display"
        ></switches>
        {{root.state.locale['Display task list']}}
      </label>
    </div>
  </div>
</template>

<script>
import vueSlider from "vue-slider-component/src/vue2-slider.vue";
import Switches from "vue-switches";
export default {
  components: {
    vueSlider,
    Switches
  },
  inject: ["root"],
  data () {
    return {
      scaleTimeoutId: null,
      firstScale: false,
      localScale: this.root.state.times.timeZoom,
      localHeight: this.root.state.row.height,
      localBefore: this.root.state.scope.before,
      localPercent: this.root.state.taskList.percent,
      sliderOptions: {
        xScale: {
          value: this.root.state.times.timeZoom
        }
      }
    };
  },
  created () {
    this.localScale = this.root.state.times.timeZoom;
    this.localHeight = this.root.state.row.height;
    this.localBefore = this.root.state.scope.before;
    this.localPercent = this.root.state.taskList.percent;
  },
  methods: {
    getImage () {
      this.root.getImage("image/png")
        .then(imgB64 => {
          const link = document.createElement("a");
          link.href = imgB64;
          link.download = "gantt-elastic.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    },
    recenterPosition () {
      this.root.$emit("gantt-elastic.recenterPosition");
    },
    setScale (value) {
      if (this.scaleTimeoutId !== null) {
        clearTimeout(this.scaleTimeoutId);
        this.scaleTimeoutId = null;
      }
      // debouncing
      if (this.firstScale) {
        this.scaleTimeoutId = setTimeout(() => {
          this.root.$emit("gantt-elastic.times.timeZoom.change", value);
          this.scaleTimeoutId = null;
        }, 75);
      } else {
        this.root.$emit("gantt-elastic.times.timeZoom.change", value);
        this.firstScale = true;
      }
    }
  },
  computed: {
    scale: {
      get () {
        return this.localScale;
      },
      set (value) {
        this.localScale = Number(value);
        this.setScale(this.localScale);
      }
    },
    height: {
      get () {
        return this.localHeight;
      },
      set (value) {
        this.localHeight = Number(value);
        this.root.$emit("gantt-elastic.row.height.change", Number(value));
      }
    },
    scope: {
      get () {
        return this.localBefore;
      },
      set (value) {
        this.localBefore = Number(value);
        this.root.$emit("gantt-elastic.scope.change", Number(value));
        this.root.$emit("gantt-elastic.scope.before.change", Number(value));
        this.root.$emit("gantt-elastic.scope.after.change", Number(value));
      }
    },
    divider: {
      get () {
        return this.localPercent;
      },
      set (value) {
        this.localPercent = Number(value);
        this.root.$emit("gantt-elastic.taskList.width.change", Number(value));
      }
    }
  }
};
</script>
