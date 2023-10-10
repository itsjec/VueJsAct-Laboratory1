<template>
    <sidebar />
    <tables />
</template>
<script>
import { defineComponent } from 'vue';
import sidebar from '@/components/sidebar.vue';
import tables from '@/components/tables.vue';
export default defineComponent({
  name: 'manage',
  components: {
    sidebar,
    tables,
  },
});
</script>
