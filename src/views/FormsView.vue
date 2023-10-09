<template>
    <sidebar />
    <formscom />
</template>
<script>
import { defineComponent } from 'vue';
import sidebar from '@/components/sidebar.vue';
import formscom from '@/components/formscom.vue';
export default defineComponent({
  name: 'forms',

  components: {
    sidebar,
    formscom,
  },
});
</script>
