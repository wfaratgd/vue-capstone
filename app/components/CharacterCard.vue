<script lang="ts" setup>
import type {Character} from "~/types/rickAndMorty";

defineProps<{
  character: Character;
  isFavourite: boolean;
}>();

defineEmits(['toggleFavourite']);
</script>

<template>
  <NuxtLink :to="`/character/${character.id}`">
    <div class="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm flex flex-col">
      <div class="aspect-square bg-slate-400 flex items-center justify-center relative">
        <img
            :alt="character.name"
            :src="character.image"
            class="absolute inset-0 w-full h-full object-cover"
        >
      </div>

      <div class="p-4 flex flex-col gap-2">
        <h3 class="text-xl font-bold text-gray-900">{{ character.name }}</h3>
        <p class="text-gray-600 text-sm">
          {{ character.species }} - {{ character.status }}
        </p>

        <button
            :class="[
          'mt-2 py-2 px-4 rounded font-medium transition-colors text-sm self-start',
          isFavourite
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-black text-white hover:bg-gray-800'
        ]"
            @click.prevent="$emit('toggleFavourite', character.id)"
        >
          {{ isFavourite ? 'Remove from Favourites' : 'Add to Favourites' }}
        </button>
      </div>
    </div>
  </NuxtLink>
</template>