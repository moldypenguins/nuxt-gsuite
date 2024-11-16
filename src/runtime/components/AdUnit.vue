<script lang="ts">
import { useRuntimeConfig } from '#imports'

export default {
  name: 'Contact',
  props: {
    adstyle: { type: Object, required: true },
    adslot: { type: Number, required: true },
  },
  setup(props) {
    const { gsuite } = useRuntimeConfig().public as any
    if (!gsuite.adsense.clientId) {
      throw new Error('Adsense client id')
    }
    return { gsuite, props }
  },

} as any
</script>

<template>
  <div align="left">
    <!-- Google AdUnit -->
    <ins class="adsbygoogle" :style="props.adstyle" :data-ad-client="gsuite.adsense.clientId" :data-ad-slot="props.adslot" />
  </div>
</template>
