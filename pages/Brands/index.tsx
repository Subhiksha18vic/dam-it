/**
 *
 * Brands
 *
 */
import * as React from 'react';
import { useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';

const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
];

interface Props {}

export function Brands(props: Props) {
  const [isloading, setIsLoading] = React.useState(false);
  const [NFTs, setNFTs] = React.useState<any>([]);

  let contract_address =
    process.env.REACT_APP_CONTRACT ||
    '0xa82ad1C49A38043278Bd3a08e301DF89172871b2';

  const { loading, error, data } = useQuery(gql`
    query {
      mints {
        tokenId
        tokenURI
      }
    }
  `);

  const fetchData = async tokenIds => {
    let arr: any = [];
    for (let i = 0; i < tokenIds.length; i++) {
      try {
        const response = await fetch(
          `https://api.covalenthq.com/v1/80001/tokens/${contract_address}/nft_metadata/${tokenIds[i]}/?key=ckey_78ec9b22555b4bc6bb3023a2fe3`,
        )
          .then(res => res.json())
          .catch(err => console.log(err));
        const json = await response;
        arr.push(json);
        // setNFTs([...NFTs, json]);
      } catch (error) {
        console.log(error);
      }
    }
    setNFTs(arr);
    console.log(arr);
  };

  useEffect(() => {
    if (data) {
      console.log(data);

      let tokenIds =
        data && data.transfers.map((transfer: any) => transfer.tokenId);
      //fetchData(tokenIds);
    }
  }, [data]);

  return (
    <div>
      <div className="mx-auto max-w-lg">
        <div>
          <form action="#" className="mt-6 flex">
            <label htmlFor="email" className="sr-only">
              Search
            </label>
            <input
              type="keywords"
              name="keywords"
              id="keywords"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              placeholder="Search for businesses"
            />
            <button
              type="submit"
              className="ml-4 flex-shrink-0 rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-2xl pt-8 pb-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {/* {products.map(product => (
               <div
                 key={product.id}
                 className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
               >
                 <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                   <img
                     src={product.imageSrc}
                     alt={product.imageAlt}
                     className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                   />
                 </div>
                 <div className="flex flex-1 flex-col space-y-2 p-4">
                   <h3 className="text-sm font-medium text-gray-900">
                     <a href={product.href}>
                       <span aria-hidden="true" className="absolute inset-0" />
                       {product.name}
                     </a>
                   </h3>
                   <p className="text-sm text-gray-500">{product.description}</p>
                   <div className="flex flex-1 flex-col justify-end">
                     <p className="text-sm italic text-gray-500">
                       {product.options}
                     </p>
                     <p className="text-base font-medium text-gray-900">
                       {product.price}
                     </p>
                   </div>
                 </div>
               </div>
             ))} */}

            {NFTs.length > 0 &&
              NFTs.map((nft: any, index: number) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                    <img
                      src={nft.data?.items?.logo_url}
                      alt="nft logo"
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
