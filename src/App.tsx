import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
      queryKey: ['repoData'],
      queryFn: async () => await axios.get('/test'),
      // gcTime: 0
  })
  
  if(isPending) {
    return (
      <div className='example'>
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

  if(error) {
    return 'ERROR!'
  }

  return <div className='example'
  >{data.data}</div>
}

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Example />
      </QueryClientProvider>
    </>
  )
}

export default App
