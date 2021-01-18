interface IGlobalStore {
  heroLimit: number
  heroOffset: number
  heroTotal: number
  heroNameSearch: string
}

interface IContext<T> {
  state: T
  dispatch: Dispatch<IAction>
}
