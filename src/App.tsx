import { useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider, useIsFetching, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import toast, { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(query.state.data)
      // if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`)
      // }
    }
  })
})

function Example1() {
  const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: async () => 
      await axios.get('/test'),
      // throwOnError: true
  })
  
  if(data) {
    return <div style={{display: "flex",flexDirection:"column"}}>
        <div>
          data-Example1 : {data.data} 
        </div>
    </div>
  }

  if(isPending) {
    return (
      <div>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
      </div>
   )
  }

  return 'ERROR!'
  
}

function Example2() {
  const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: async () => await axios.get('/test'),
      // gcTime: 0
  })
  
  if(data) {
    return <div style={{display: "flex",flexDirection:"column"}}>
        <div>
          data-Example2 : {data.data} 
        </div>
    </div>
  }

  if(isPending) {
    return (
      <div>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
      </div>
   )
  }

  return 'ERROR!'
  
}

function QueryStack() {

    const isFetching = useIsFetching();

    return (
      <>{isFetching}</>
    )

}

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <QueryStack />
          <Example1 />
          <Example2 />
          <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App
