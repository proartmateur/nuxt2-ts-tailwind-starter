<template>
  <div class="font-serif border-2 border-amber-500">
    <h2 class="text-[30px]">{{ title }}</h2>
    <p class="font-sans">{{ text }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
export default class Hello extends Vue {
  @Prop()
  title: string;

  text = 'JOJOu';
}
</script>
