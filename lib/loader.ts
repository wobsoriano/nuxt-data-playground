export async function useServerData<T>(fn: () => Promise<T>) {
  const data = useState<T | null>(() => null)
  
  if (process.server) {
    data.value = await fn()
  }

  return data
}
