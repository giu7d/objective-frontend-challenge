import useSWR from 'swr'
import { fetcherWithPagination } from '../services/MarvelAPI'

interface ICharactersResponse {
  data: {
    count: number
    limit: number
    offset: number
    total: number
    results: {
      id: number
      name: string
      thumbnail: {
        path: string
        extension: string
      }
      events: {
        items: {
          name: string
        }[]
      }
      series: {
        items: {
          name: string
        }[]
      }
    }[]
  }
}

export const useCharacters = (offset = 0, limit = 10) => {
  const { data, error } = useSWR<ICharactersResponse>(
    ['/v1/public/characters', offset, limit],
    fetcherWithPagination
  )
  return {
    characters: data?.data,
    isLoading: !error && !data,
    isError: error
  }
}
