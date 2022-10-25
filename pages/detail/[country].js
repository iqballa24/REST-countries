import React from "react";
import DetailCountry from "@/templates/DetailCountry";
import instance from "lib/instance";

const index = ({ country }) => {
  console.log(country);
  return <DetailCountry data={country.data} />;
};

export default index;

export async function getStaticPaths() {
  const res = await instance.fetcher("/v3.1/all");
  const { data, status } = await res;

  const paths = data.map((country) => ({
    params: {
      country: country.cca3,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res1 = await instance.fetcher(`/v3.1/alpha/${params.country}`);
  const res2 = await instance.fetcher(`/v3.1/alpha?codes=TLS,MYS,PNG`);

  const data = {
    status: res1.status == 200 && res2.status == 200,
    data: { ...res1.data[0], borders: res2.data },
  };

  return { props: { country: data } };
}
