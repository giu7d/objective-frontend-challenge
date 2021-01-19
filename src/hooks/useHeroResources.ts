import useSWR from 'swr'
import { fetcher } from '../services/MarvelAPI'

export const useHeroResources = (type: string, id: string) => {
  const { data, error } = useSWR<IMarvelIndexCharacterResourceResponse>(
    `/v1/public/${type}`,
    (path: string) =>
      fetcher(path, {
        params: {
          characters: id
        }
      })
  )

  return {
    resources: data?.data.results || [],
    isLoading: !error && !data,
    isError: error
  }
}
