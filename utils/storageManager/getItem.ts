export default <T>(key: string): T | null => {
  if (!window || !localStorage) return null

  const item = localStorage.getItem(key)

  if (!item) return null

  try {
    return JSON.parse(item) as T
  } catch {
    return (Number.isNaN(item) ? item : Number(item)) as T
  }
}
