<template>
  <div class="font-serif text-[30px] border-2 border-amber-500">{{ text }}</div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class Hello extends Vue {
  text = 'JOJOu';
}
</script>
