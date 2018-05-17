function ElastiganttTree(slug, self) {
    return {
        props: ['tasks'],
        template: `<div class="elastigantt__tree">
            <${slug+'-elastigantt-tree-row'}
            v-for="item in tasks"
            v-bind:key="item.id"
            v-bind:task="item">
            </${slug+'-elastigantt-tree-row'}>
        </div>`,
    };
}

export default ElastiganttTree;