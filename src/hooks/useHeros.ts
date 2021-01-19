import { useContext, useEffect } from 'react'
import useSWR from 'swr'
import {
  setHeroLimit,
  setHeroOffset,
  setHeroNameSearch,
  setHeroTotal
} from '../reducers/action'
import { fetcherWithQuery } from '../services/MarvelAPI'
import { GlobalContext } from '../stores/GlobalStore'
export const useHeros = () => {
  const { state, dispatch } = useContext(GlobalContext)

  const { data, error } = useSWR<IMarvelIndexCharactersResponse>(
    [
      '/v1/public/characters',
      state.heroOffset,
      state.heroLimit,
      state.heroNameSearch
    ],
    fetcherWithQuery
  )

  const setLimit = (limit: number) => dispatch(setHeroLimit(limit))

  const setOffset = (offset: number) => dispatch(setHeroOffset(offset))

  const setTotal = (total: number) => dispatch(setHeroTotal(total))

  const setSearchByName = (search: string, offset = 0) => {
    setOffset(offset)
    dispatch(setHeroNameSearch(search))
  }

  useEffect(() => {
    if (data) setTotal(data.data.total)
  }, [data])

  return {
    heros: data?.data.results || [],
    total: state.heroTotal,
    offset: state.heroOffset,
    limit: state.heroLimit,
    isLoading: !error && !data,
    isError: error,
    setLimit,
    setOffset,
    setTotal,
    setSearchByName
  }
}
