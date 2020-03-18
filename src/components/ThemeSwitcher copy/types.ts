import { Themes } from "../../store/main/types"

type ParentProps = {}
type StoreProps = {
  theme: Themes
}
type DispatchProps = {
  setTheme(theme: Themes): void
}

export type Props = ParentProps & StoreProps & DispatchProps