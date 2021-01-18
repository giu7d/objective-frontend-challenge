interface IGlobalStore {
  heroLimit: number
  heroOffset: number
  heroTotal: number
}

interface IContext<T> {
  state: T
  dispatch: Dispatch<IAction>
}
