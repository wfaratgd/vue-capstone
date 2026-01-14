import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {Character} from "~/types/rickAndMorty";

export const useFavorites = defineStore('favorites', () => {
    const favorites = ref<Character[]>([]);

    const favoriteCount = computed(() => favorites.value.length);

    const isFavorite = (id: number) => {
        return favorites.value.some(char => char.id === id);
    };

    // Actions
    const toggleFavorite = (character: Character) => {
        const index = favorites.value.findIndex(c => c.id === character.id);

        if (index > -1) {
            favorites.value.splice(index, 1);
        } else {
            favorites.value.push(character);
        }
    }

    return {
        favorites,
        favoriteCount,
        toggleFavorite,
        isFavorite
    };
}, {
    persist: true
});