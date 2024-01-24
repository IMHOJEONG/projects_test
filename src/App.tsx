import { QueryCache, QueryClient, QueryClientProvider, useIsFetching, useQuery } from '@tanstack/react-query'
import { Header, Footer, Article, QueryStack } from './components'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import toast, { Toaster } from 'react-hot-toast'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(query.state.data)
        toast.error(`Something went wrong: ${error.message}`)
    },
    onSuccess: (data, query) => {
      console.log("SUCCESS : ", data, query)
    }
  })
})

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <div className="h-svh
          flex flex-col">
            <Header />
            <Article />
            <Footer />
          </div>
          <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App
