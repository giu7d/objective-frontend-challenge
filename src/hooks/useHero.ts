import useSWR from 'swr'

import { fetcher } from '../services/MarvelAPI'

export const useHero = (id: string) => {
  const { data, error } = useSWR<IMarvelShowCharacterResponse>(
    `/v1/public/characters/${id}`,
    fetcher
  )

  return {
    hero: data?.data.results || [],
    isLoading: !error && !data,
    isError: error
  }
}
