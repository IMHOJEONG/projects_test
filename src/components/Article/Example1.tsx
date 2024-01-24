import { useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider, useIsFetching, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'

export function Example1() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => 
        await axios.get('/test2'),
        // throwOnError: true
    })
    
    if(data) {
      return <div style={{display: "flex",flexDirection:"column"}}>
          <div>
            Example1 : {data.data} 
          </div>
      </div>
    }
  
    if(isPending) {
      return (
        <div className="flex justify-center align-center"
        >
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
  
    return <div className="bg-red-500/100 text-center">
      ERROR!
  </div>
    
  }