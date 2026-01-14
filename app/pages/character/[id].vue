<script lang="ts" setup>
const route = useRoute();
const favoritesStore = useFavorites();

const {data: character, pending} = useRickAndMortyCharacter(route.params.id ?? '');
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-5xl mx-auto mb-8 flex justify-between items-center">
      <NuxtLink class="text-sm font-semibold hover:underline" to="/">← Back to Characters</NuxtLink>
    </div>

    <main class="max-w-5xl mx-auto">
      <div v-if="pending" class="text-center py-20 text-xl">Loading character...</div>

      <div
          v-else-if="character"
          class="bg-white border border-gray-200 rounded shadow-sm flex flex-col md:flex-row overflow-hidden">
        <div class="p-8 flex-1 flex flex-col gap-4">
          <h1 class="text-5xl font-bold text-gray-900">{{ character.name }}</h1>

          <div class="text-lg text-gray-700 space-y-1">
            <p>{{ character.species }} - {{ character.status }}</p>
          </div>

          <div class="mt-4 space-y-4">
            <div>
              <p class="text-gray-500 text-sm">Last known location:</p>
              <p class="text-lg">{{ character.location?.name }}</p>
            </div>

            <div>
              <p class="text-gray-500 text-sm">First seen in:</p>
              <p class="text-lg">Episode {{ character.episode?.[0]?.split('/').pop() }}</p>
            </div>
          </div>

          <button
              class="mt-auto w-fit bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors"
              @click="favoritesStore.toggleFavorite(character)"
          >
            {{ favoritesStore.isFavorite(character.id) ? 'Remove from Favourites' : 'Add to Favourites' }}
          </button>
        </div>

        <div class="w-full md:w-1/3 bg-slate-400 aspect-square md:aspect-auto">
          <img
              :alt="character.name"
              :src="character.image"
              class="w-full h-full object-cover"
          >
        </div>
      </div>

      <div v-else class="text-red-500 text-center py-20">Character not found.</div>
    </main>
  </div>
</template>