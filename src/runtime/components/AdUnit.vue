<script lang="ts">
import type { ModuleOptions } from '~/src/module'
import { useRuntimeConfig } from '#imports'

export default {
  setup() {
    const props = defineProps({
      style: { type: String, required: true },
      slot: { type: String, required: true },
    });
    const { style, slot } = props
    const clientId = (useRuntimeConfig().public.gsuite as ModuleOptions).adsense?.clientId
    if (!clientId) { throw new Error("Adsense client id") }

    return { style, slot, clientId }
  },
}
</script>

<template>
  <div align="center">
    <!-- Google AdUnit -->
    <ins class="adsbygoogle" :style="style" :data-ad-client="clientId" :data-ad-slot="slot"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>
</template>
