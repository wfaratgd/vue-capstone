<script lang="ts" setup>
import type {Character, RickAndMortyResponse} from "~/types/rickAndMorty";

const favoritesStore = useFavorites();
defineProps<{
  characters: Character[];
  info?: RickAndMortyResponse['info'];
  page?: number;
}>();

const emit = defineEmits(['update:page']);
const changePage = (newPage: number) => {
  emit('update:page', newPage);
};
</script>
<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard
          v-for="char in characters"
          :key="char.id"
          :character="char"
          :is-favourite="favoritesStore.isFavorite(char.id)"
          @toggle-favourite="favoritesStore.toggleFavorite(char)"
      />
    </div>

    <div v-if="info" class="mt-12 flex justify-end items-center gap-6 text-sm">
      <span>Page {{ page }} of {{ info.pages }}</span>
      <div class="flex gap-4">
        <button
            :disabled="page === 1"
            class="disabled:opacity-30 font-bold"
            @click="changePage(page - 1)"
        >
          &lt;&lt; Prev
        </button>
        <button
            :disabled="page >= info.pages"
            class="font-bold"
            @click="changePage(page + 1)"
        >
          Next &gt;&gt;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>