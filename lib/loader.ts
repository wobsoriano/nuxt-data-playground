export async function useServerData<T>(fn: () => Promise<T>) {
  const route = useRoute()
  const data = useState<T | null>(`data-${route.path}`, () => null)
  
  if (process.server) {
    data.value = await fn()
  }

  return data
}
