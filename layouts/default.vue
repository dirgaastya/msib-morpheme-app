<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm') // only smaller than lg
const isAsideOpen = ref(true)
const isMini = ref(false)
const colorMode = useColorMode()

watchEffect(() => {
  isAsideOpen.value = !isMobile.value
})
</script>

<template>
  <VAppShell padded-content>
    <!-- header -->
    <template #header>
      <VAppBar v-model="isMobile">
        Hello World
      </VAppBar>
    </template>
    <template #navigation>
      <AppBreadcrumbs />
    </template>
    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model:mini="isMini"
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
        style="min-height: 100%;"
        color="morning-glory"
        bordered
      >
        <div :class="`flex justify-between items-center ${isMini ? 'p-1' : 'ps-6 pe-3 py-3'}`">
          <VLogo v-if="!isMini" />
          <VBtn text icon color="morning-glory" @click="isMini = !isMini">
            <VIcon name="quill:hamburger" />
          </VBtn>
        </div>
        <NavDrawerItems />
      </VNavDrawer>
    </template>

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="mt-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <!-- content -->
    <slot />
  </VAppShell>
</template>

<style lang="scss">
.nav-drawer-morning-glory{
    --nav-drawer-bg-color: var(--color-morning-glory-100);
}
aside .nav-drawer{
    height:100% !important;
}
</style>
