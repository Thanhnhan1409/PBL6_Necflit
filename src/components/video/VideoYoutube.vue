<template>
  <vue-plyr>
    <div
      data-plyr-provider="youtube"
      :data-plyr-embed-id="videoId"
    >
    </div>
  </vue-plyr>
</template>

<script lang="ts" setup>

defineProps<{
  videoId: string | undefined;
}>()
</script>