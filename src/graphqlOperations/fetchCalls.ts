import gql from 'graphql-tag'

export const FETCH_ALL_CALLS = gql`
  query ($offset: Float!, $limit: Float!) {
    paginatedCalls(offset: $offset, limit: $limit) {
      nodes {
        id
        to
        direction
        duration
        via
        call_type
        created_at
      }
      totalCount
      hasNextPage
    }
  }
`
