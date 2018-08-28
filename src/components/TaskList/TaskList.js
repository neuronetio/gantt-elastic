export function TaskList(prefix, self) {
  return self.wrapComponent({
    template : `<foreignObject class="elastigantt__task-list-object"
      x="0"
      y="0"
      width="100%"
      height="100%"
      v-if="$root.$data.taskList.display"
      >
      <div  xmlns="http://www.w3.org/1999/xhtml" class="elastigantt__task-list-container">
      <div v-html="$root.$data.defs.join('')"></div>
        <${prefix}-task-list-resizer></${prefix}-task-list-resizer>
        <${prefix}-task-list-header></${prefix}-task-list-header>
        <${prefix}-task-list-item
          v-for="task in $root.$data.tasks"
          :key="task.id"
          :task="task"
        ></${prefix}-task-list-item>
      </div>
    </foreignObject>`,
    data() { return {}; },
  });
}
