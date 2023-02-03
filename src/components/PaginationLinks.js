import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? "/" : "/page/" + (currentPage - 1).toString()
  const nextPage = "/page/" + (currentPage + 1).toString()
  return (
    <Pagination aria-label="Page navigation example">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink className="text-danger" previous href="/" />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink
            className="text-danger"
            previous
            href={previousPage}
          />
        </PaginationItem>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem active key={`page-number${i + 1}`}>
            <PaginationLink
              className="btn btn-secondary active"
              href={`/${i === 0 ? "" : "page/" + (i + 1)}`}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`page-number${i + 1}`}>
            <PaginationLink
              className="text-secondary"
              href={`/${i === 0 ? "" : "page/" + (i + 1)}`}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink className="text-danger" next href={nextPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink className="text-danger" next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks



