<template>
    <sidebar />
    <dashboard />
</template>

<script>
import { defineComponent } from 'vue';
import sidebar from '@/components/sidebar.vue';
import dashboard from '@/components/dashboard.vue';

export default defineComponent({
  name: 'IndexView',

  components: {
    sidebar,
    dashboard,
  },
});
</script>
