import { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { setHeroLimit, setHeroOffset, setHeroTotal } from '../reducers/action'
import { fetcherWithQuery } from '../services/MarvelAPI'
import { GlobalContext } from '../stores/GlobalStore'
export const useHeros = () => {
  const { state, dispatch } = useContext(GlobalContext)

  const { data, error } = useSWR<IMarvelCharactersResponse>(
    ['/v1/public/characters', state.heroOffset, state.heroLimit],
    fetcherWithQuery
  )

  const setLimit = (limit: number) => dispatch(setHeroLimit(limit))

  const setOffset = (offset: number) => dispatch(setHeroOffset(offset))

  const setTotal = (total: number) => dispatch(setHeroTotal(total))

  useEffect(() => {
    if (data && !error) setTotal(data.data.total)
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
    setTotal
  }
}
