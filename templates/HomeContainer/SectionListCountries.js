import React, { Fragment, useState, useMemo, useEffect, useRef } from 'react';
import Card from '@/components/Card';
import EmptyState from '@/components/EmptyState';
import ErrorState from '@/components/ErrorState';
import CardSkeleton from '@/components/Skeleton/CardSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

const SectionListCountries = ({ data, loading, error, searchValue }) => {
  const itemPerPage = 16;
  const totalPage = Math.ceil(data.length / itemPerPage);
  const [hasMore, setHasMore] = useState(true);
  const page = useRef(1);
  const [initializeData, setInitializeData] = useState([]);

  const loadMore = () => {
    page.current += 1;

    if (page.current >= totalPage) {
      page.current = 1;
      setHasMore(false);
    } else {
      setInitializeData((prev) => [...prev, ...pageData]);
      setHasMore(true);
    }
    return;
  };

  const pageData = useMemo(() => {
    return data.slice(
      page.current * itemPerPage - itemPerPage,
      page.current * itemPerPage
    );
  }, [page.current, data]);

  useEffect(() => {
    setInitializeData((prev) => [...pageData]);

    if (searchValue === '') {
      page.current = 1;
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [data, searchValue]);

  const countries =
    searchValue === ''
      ? initializeData
      : data.filter((country) =>
          country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        );

  return (
    <Fragment>
      {countries.length > 0 && (
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
            {countries.map((item, i) => (
              <Card data={item} key={i} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {error.status && <ErrorState />}
      {countries.length === 0 && !loading && (
        <EmptyState country={searchValue} />
      )}
    </Fragment>
  );
};

export default React.memo(SectionListCountries);
