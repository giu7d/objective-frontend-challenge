import { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { setHeroLimit, setHeroOffset, setHeroTotal } from '../reducers/action'
import { fetcherWithQuery } from '../services/MarvelAPI'
import { GlobalContext } from '../stores/GlobalStore'

interface IHerosResponse {
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

export const useHeros = () => {
  const { state, dispatch } = useContext(GlobalContext)

  const { data, error } = useSWR<IHerosResponse>(
    ['/v1/public/characters', state.heroOffset, state.heroLimit],
    fetcherWithQuery
  )

  const setLimit = (limit: number) => dispatch(setHeroLimit(limit))

  const setOffset = (offset: number) => dispatch(setHeroOffset(offset))

  const setTotal = (total: number) => dispatch(setHeroTotal(total))

  useEffect(() => {
    if (data) setTotal(data.data.total)
  }, [data])

  return {
    heros: data?.data.results,
    total: state.heroTotal,
    offset: state.heroOffset,
    limit: state.heroLimit,
    isLoading: !error && !data,
    isError: error,
    setLimit,
    setOffset,
    setTotal
  }
}
