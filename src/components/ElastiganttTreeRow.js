function ElastiganttTreeRow(slug, self) {
    return {
        props: ['tasks'],
        template: `<div class="elastigantt">
            <${slug+'-elastigantt-tree'}
            v-bind:tasks="tasks"
            ></${slug+'-elastigantt-tree'}>
        </div>`,
    };
}

export default ElastiganttTreeRow;