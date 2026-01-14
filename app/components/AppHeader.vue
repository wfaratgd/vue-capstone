<script lang="ts" setup>
import {Heart} from 'lucide-vue-next';

const favoriteStore = useFavorites();

</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-black">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">

      <nav class="flex items-center gap-6">
        <NuxtLink
            active-class="text-white"
            class="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            to="/characters"
        >
          Characters
        </NuxtLink>

        <NuxtLink
            active-class="text-white"
            class="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            to="/favorites"
        >
          Favorites
        </NuxtLink>
      </nav>

      <div class="flex items-center">
        <button
            class="group flex items-center justify-center gap-2">
          <Heart
              class="h-6 w-6 text-gray-400 fill-none transition-colors group-hover:text-red-500 group-hover:fill-current"
          />

          <span class="text-sm text-gray-400 font-semibold group-hover:text-red-500">
            {{ favoriteStore.favoriteCount }}
          </span>
        </button>
      </div>

    </div>
  </header>
</template>

<style scoped>
</style>