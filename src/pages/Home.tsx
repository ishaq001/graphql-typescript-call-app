/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { AuthContext } from '../authContext/auth'
import { FETCH_ALL_CALLS } from '../graphqlOperations/fetchCalls'
import { Pagination } from '../components'

export const Home = () => {
  const [offset, setOffset] = useState(0)
  const { data, loading, error } = useQuery(FETCH_ALL_CALLS, {
    variables: { offset, limit: 10 },
  })

  const { user } = useContext(AuthContext)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data?.paginatedCalls && !error && (
        <Pagination data={data} offset={offset} setOffset={setOffset} />
      )}
    </div>
  )
}
