import type {Character, RickAndMortyResponse} from "~/types/rickAndMorty";

export const useRickAndMorty = (
    page: Ref<number> | number,
    name: Ref<string> | string,
    species: Ref<string> | string
) => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';

    return useFetch<RickAndMortyResponse>(baseUrl, {

        query: computed(() => ({
            page: toValue(page),
            name: toValue(name),
            species: toValue(species) === 'All' ? '' : toValue(species)
        })),

        key: computed(() => `chars-${toValue(page)}-${toValue(name)}-${toValue(species)}`),

        watch: [() => toValue(page), () => toValue(name), () => toValue(species)]
    });
};

export const useRickAndMortyCharacter = (id: string | string[]) => {
    const baseUrl = `https://rickandmortyapi.com/api/character/${id}`;

    return useFetch<Character>(baseUrl, {
        key: `character-detail-${id}`,
    });
};