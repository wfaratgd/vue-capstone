<script lang="ts" setup>
import debounce from 'lodash.debounce';

const page = ref(1);
const debouncedSearch = ref('');
const searchQuery = ref('');
watch(searchQuery, debounce((val) => {
  debouncedSearch.value = val;
}, 500))
const speciesFilter = ref('All');

const {data, pending} = useRickAndMorty(page, debouncedSearch, speciesFilter);

const speciesOptions = ['All', 'Human', 'Animal', 'Alien'];
</script>
`
<template>
  <main class="max-w-7xl mx-auto">
    <div class="flex flex-wrap gap-4 mb-8">
      <div class="inline-flex border border-black rounded overflow-hidden">
        <button
            v-for="s in speciesOptions"
            :key="s"
            :class="[
              'px-4 py-1.5 border-r last:border-r-0 border-black',
              speciesFilter === s ? 'bg-black text-white' : 'bg-white'
            ]"
            @click="speciesFilter = s; page = 1"
        >
          {{ s }}
        </button>
      </div>

      <div class="flex">
        <input
            v-model="searchQuery"
            class="border border-black px-4 py-1.5 w-64"
            placeholder="Search by name..."
        >
        <button class="bg-white border border-l-0 border-black px-4 py-1.5">Search</button>
      </div>
    </div>
    <div v-if="pending" class="text-center py-20">Loading characters...</div>

    <CharacterList
        v-else-if="data?.results"
        v-model:page="page"
        :characters="data.results"
        :info="data.info"
    />
  </main>
</template>