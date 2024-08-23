export default (key: string, value: any) => {
  if (!window || !localStorage) return

  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : value
  )
}
