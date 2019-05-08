<!--
/**
 * @fileoverview ItemColumn component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div class="gantt-elastic__task-list-item-column" :style="itemColumnStyle">
    <div class="gantt-elastic__task-list-item-value-wrapper" :style="wrapperStyle">
      <slot></slot>
      <div class="gantt-elastic__task-list-item-value-container" :style="containerStyle">
        <div
          v-if="!html"
          class="gantt-elastic__task-list-item-value"
          :style="valueStyle"
          @click="emitEvent('click', $event)"
          @mouseenter="emitEvent('mouseenter', $event)"
          @mouseover="emitEvent('mouseover', $event)"
          @mouseout="emitEvent('mouseout', $event)"
          @mousemove="emitEvent('mousemove', $event)"
          @mousedown="emitEvent('mousedown', $event)"
          @mouseup="emitEvent('mouseup', $event)"
          @mousewheel="emitEvent('mousewheel', $event)"
          @touchstart="emitEvent('touchstart', $event)"
          @touchmove="emitEvent('touchmove', $event)"
          @touchend="emitEvent('touchend', $event)"
        >
          {{ value }}
        </div>
        <div
          v-else
          class="gantt-elastic__task-list-item-value"
          :style="valueStyle"
          @click="emitEvent('click', $event)"
          @mouseenter="emitEvent('mouseenter', $event)"
          @mouseover="emitEvent('mouseover', $event)"
          @mouseout="emitEvent('mouseout', $event)"
          @mousemove="emitEvent('mousemove', $event)"
          @mousedown="emitEvent('mousedown', $event)"
          @mouseup="emitEvent('mouseup', $event)"
          @mousewheel="emitEvent('mousewheel', $event)"
          @touchstart="emitEvent('touchstart', $event)"
          @touchmove="emitEvent('touchmove', $event)"
          @touchend="emitEvent('touchend', $event)"
          v-html="value"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemColumn',
  inject: ['root'],
  props: ['column', 'task'],
  data() {
    return {};
  },
  methods: {
    /**
     * Emit event
     *
     * @param {String} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
        this.column.events[eventName]({ event, data: this.task, column: this.column });
      }
      this.root.$emit(`taskList-${this.task.type}-${eventName}`, { event, data: this.task, column: this.column });
    }
  },
  computed: {
    /**
     * Should we display html or just text?
     *
     * @returns {boolean}
     */
    html() {
      if (typeof this.column.html !== 'undefined' && this.column.html === true) {
        return true;
      }
      return false;
    },

    /**
     * Get column value
     *
     * @returns {any|string}
     */
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    },

    itemColumnStyle() {
      return {
        ...this.root.style['task-list-item-column'],
        ...this.column.style['task-list-item-column'],
        width: this.column.finalWidth + 'px',
        height: this.column.height + 'px'
      };
    },

    wrapperStyle() {
      return {
        ...this.root.style['task-list-item-value-wrapper'],
        ...this.column.style['task-list-item-value-wrapper']
      };
    },

    containerStyle() {
      return {
        ...this.root.style['task-list-item-value-container'],
        ...this.column.style['task-list-item-value-container']
      };
    },

    valueStyle() {
      return { ...this.root.style['task-list-item-value'], ...this.column.style['task-list-item-value'] };
    }
  }
};
</script>
