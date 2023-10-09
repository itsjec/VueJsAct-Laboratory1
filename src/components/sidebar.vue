<template>
  <v-bottom-navigation v-model="activeTab" active-class="my-active-tab">
    <v-btn value="home" to="/">
      <v-icon>mdi-home</v-icon>
      <span>Home</span>
    </v-btn>

    <v-btn value="manage" to="/manage">
      <v-icon>mdi-heart</v-icon>
      <span>Manage</span>
    </v-btn>

    <v-btn value="forms" to="/forms">
      <v-icon>mdi-chart-bar</v-icon>
      <span>Forms</span>
    </v-btn>
  </v-bottom-navigation>
</template>


<script>
export default {
  name: 'sidebar',
  data() {
    return {
      activeTab: 'home' // Set the default active tab to 'home'
    };
  }
};
</script>

<style>
.my-active-tab {
  background-color: #1a1b20; 
  color: white;}
@import '@/assets/css/style.css';
@import '@/assets/vendors/jvectormap/jquery-jvectormap.css';
@import '@/assets/vendors/flag-icon-css/css/flag-icon.min.css';
@import '@/assets/vendors/owl-carousel-2/owl.carousel.min.css';
@import '@/assets/vendors/owl-carousel-2/owl.theme.default.min.css';
@import '@/assets/vendors/mdi/css/materialdesignicons.min.css';
@import '@/assets/vendors/css/vendor.bundle.base.css';
</style>
