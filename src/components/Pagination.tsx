/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, SetStateAction } from 'react'
import ReactPaginate from 'react-paginate'
import { CallType, PaginatedCallsType } from '../types/call'
import { TableWIthPagination as Table } from './Table'

interface PaginationProps {
  data: PaginatedCallsType
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({ data, offset, setOffset }: PaginationProps) => {
  const [currentItems, setCurrentItems] = useState<CallType[]>([])
  const [pageCount, setPageCount] = useState<number>(0)

  const { totalCount, nodes, hasNextPage } = data

  useEffect(() => {
    const endOffset = offset + 10
    console.log(`Loading items from ${offset} to ${endOffset}`)
    let slicedData: any = nodes.slice(offset, endOffset)
    setCurrentItems(slicedData)
    setPageCount(Math.ceil(totalCount / 10))
  }, [offset, nodes, totalCount])

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 10) % data?.nodes?.length
    setOffset(newOffset)
  }

  return (
    <>
      <Table nodes={nodes} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
      />
    </>
  )
}
