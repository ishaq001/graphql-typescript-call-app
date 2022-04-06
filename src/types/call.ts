export interface CallType {
  to: string
  duration: string
  created_at: string
  direction: string
  id: string
  serialNum: number
  via: string
  call_type: string
}

export interface PaginatedCallsType {
  hasNextPage: boolean
  nodes: CallType[]
  totalCount: number
}
