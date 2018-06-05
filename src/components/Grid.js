export function Grid(prefix, self) {
  return self.wrapComponent({
  
      template: `<g>
        <line 
          v-for="(line,index) in horizontalLines"
          :key="line.key"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :style="line.style"
        ></line>
        
      </g>`,
      
      data(){
        return window.elastiganttStore.initStore(prefix,'Grid',{});
      },
      methods:{
        
      },
      computed: {
        verticalLines(){
          let options = this.shared.options;
          let lines = [];
          for(let [index, task] of this.shared.tasks.entries()){
            lines.push({
              key:'vl'+task.id,
              x1:0, 
              y1:index*(options.row.height+options.horizontalGrid.gap),
              x2:'100%',
              y2:index*(options.row.height+options.horizontalGrid.gap),
              style:options.horizontalGrid.style
            });
          }
          return lines;
        },
        horizontalLines(){
          let options = this.shared.options;
          let lines = [];
          for(let [index, task] of this.shared.tasks.entries()){
            lines.push({
              key:'hl'+task.id,
              x1:0, 
              y1:index*(options.row.height+options.horizontalGrid.gap) + options.horizontalGrid.gap / 2 ,
              x2:'100%',
              y2:index*(options.row.height+options.horizontalGrid.gap) + options.horizontalGrid.gap / 2 ,
              style:options.horizontalGrid.style
            });
          }
          return lines;
        }
      }
    });
  }