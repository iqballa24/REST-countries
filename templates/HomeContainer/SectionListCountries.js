import React, { Fragment, useState, useMemo, useEffect } from "react";
import Card from "@/components/Card";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const ErrorState = () => {
  return (
    <div className="flex flex-col items-center text-center w-full mt-10">
      <h1 className="text-base sm:text-lg font-bold mb-2">Oopps..</h1>
      <p className="text-sm sm:text-base font-normal">
        Something when wrong, we failed to get the page.
      </p>
      <p className="text-sm sm:text-base font-normal">
        You may also refresh the page or try again later.
      </p>
    </div>
  );
};

const EmptyState = ({ country }) => {
  return (
    <div className="flex flex-col items-center text-center w-full mt-10">
      <h1 className="text-base sm:text-lg font-bold mb-2">
        Country "{country}" is not found!
      </h1>
      <p className="text-sm sm:text-base font-normal">
        Try another name or change to another region
      </p>
    </div>
  );
};

const SectionListCountries = ({ data, loading, error, searchValue }) => {
  const itemPerPage = 16;
  const totalPage = Math.ceil(data.length / itemPerPage);
  const [page, setPage] = useState(1);
  const [initializeData, setInitializeData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setPage((prev) => prev + 1);

    if (searchValue === "") {
      if (page >= totalPage) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
    return;
  };

  const pageData = useMemo(() => {
    return searchValue === ""
      ? data.slice(page * itemPerPage - itemPerPage, page * itemPerPage)
      : data;
  }, [page, data, searchValue]);

  useEffect(() => {
    setInitializeData([]);
    searchValue === "" ? setHasMore(true) : setHasMore(false);
    setPage(1);
  }, [searchValue]);

  useEffect(() => {
    searchValue === ""
      ? setInitializeData((prev) => [...prev, ...pageData])
      : setInitializeData((prev) => [...pageData]);
  }, [pageData, page, searchValue]);

  return (
    <Fragment>
      {data.length > 0 && (
        <InfiniteScroll
          dataLength={initializeData.length}
          next={loadMore}
          hasMore={hasMore}
          loader={
            <div className="flex flex-wrap justify-evenly md:justify-between w-full">
              {Array(4)
                .fill(4)
                .map((value, index) => (
                  <CardSkeleton key={index} />
                ))}
            </div>
          }
        >
          <div className="flex flex-wrap justify-evenly md:justify-between w-full mt-2">
            {initializeData.map((item, i) => (
              <Card data={item} key={i} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {error.status && <ErrorState />}
      {data.length === 0 && !loading && <EmptyState country={searchValue} />}
    </Fragment>
  );
};

export default React.memo(SectionListCountries);
