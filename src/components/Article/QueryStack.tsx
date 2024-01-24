import { useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider, useIsFetching, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'

export function QueryStack() {

    const isFetching = useIsFetching();

    return (
      <>{isFetching}</>
    )

}