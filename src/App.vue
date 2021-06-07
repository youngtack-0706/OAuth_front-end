<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {store} from './store/store'

export default defineComponent({
  name: 'App',
  store: store
});
</script>
