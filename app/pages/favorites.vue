<script lang="ts" setup>

const favoriteStore = useFavorites();
</script>

<template>
  <main class="max-w-7xl mx-auto">
    <CharacterList
        :characters="favoriteStore.favorites"
    />
  </main>
</template>

<style scoped>

</style>