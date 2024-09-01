export interface DropDownItem {
  label: string
  icon?: string
  value?: string
  items?: DropDownItem[]
  onClick?: () => void
}
