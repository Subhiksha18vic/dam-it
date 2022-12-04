/**
 *
 * CreateBrand
 *
 */
import * as React from 'react';
import { storageClient } from '../../../utils/NftStorageClient';

interface Props {}

export function CreateBrand(props: Props) {
  const [listing, setListing] = React.useState({
    brandName: '',
    brandOverview: '',
    description: '',
    image: '',
    assetUpload: '',
    generalGuidelines: '',
    dos: '',
    donts: '',
    primaryColor: '',
    secondaryColor: '',
    pronunciation: '',
  });

  const handleSubmit = async () => {
    let metadata: any = {
      name: listing.brandName,
      description: listing.description,
      company_name: listing.brandOverview,
      image: listing.image,
      assetUpload: listing.assetUpload,
      generalGuidelines: listing.generalGuidelines,
      dos: listing.dos,
      donts: listing.donts,
      primaryColor: listing.primaryColor,
      secondaryColor: listing.secondaryColor,
      pronunciation: listing.pronunciation,
    };
    const ipfsData = await storageClient.store(metadata);
    console.log(ipfsData.url);
    // console.log(listing);
  };

  return (
    <>
      {/* <form className="space-y-8 divide-y divide-gray-200"> */}
      <div>
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Create A Listing
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="brand-name"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="brand-name"
                  id="brand-name"
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      brandName: e.target.value,
                    });
                  }}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="brand-overview"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Overview
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="brand-overview"
                  id="brand-overview"
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      brandOverview: e.target.value,
                    });
                  }}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="pronunciation"
                className="block text-sm font-medium text-gray-700"
              >
                Pronunciation
              </label>
              <div className="mt-1">
                <input
                  id="pronunciation"
                  name="pronunciation"
                  placeholder="li-cet patt-ar-ee"
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      pronunciation: e.target.value,
                    });
                  }}
                  type="text"
                  // autoComplete="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      description: e.target.value,
                    });
                  }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="image-url"
                className="block text-sm font-medium text-gray-700"
              >
                Logo Image
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <button>
                  <input
                    type="file"
                    className="ml-0 mt-1 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    name="image-url"
                    id="image-url"
                    onChange={(e: any) => {
                      let file = e.target.files[0];
                      setListing({
                        ...listing,
                        image: file,
                      });
                    }}
                    autoComplete="family-name"
                    // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </button>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="general-guidelines"
                className="block text-sm font-medium text-gray-700"
              >
                General Guidelines
              </label>
              <div className="mt-1">
                <textarea
                  id="general-guidelines"
                  name="general-guidelines"
                  rows={3}
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      generalGuidelines: e.target.value,
                    });
                  }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="dos"
                className="block text-sm font-medium text-gray-700"
              >
                Do's
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="dos"
                  id="dos"
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      dos: e.target.value,
                    });
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="donts"
                className="block text-sm font-medium text-gray-700"
              >
                Dont's
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="donts"
                  id="donts"
                  onChange={(e: any) => {
                    setListing({
                      ...listing,
                      donts: e.target.value,
                    });
                  }}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="sm:col-span-6">
                <label
                  htmlFor="primary-color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Primary Color
                </label>
                <div className="mt-1">
                  <input
                    type="color"
                    id="colorpicker"
                    value="#000000"
                    style={{ width: '40px', height: '40px' }}
                    onChange={(e: any) => {
                      setListing({
                        ...listing,
                        primaryColor: e.target.value,
                      });
                    }}
                  ></input>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="secondary-color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Secondary Color
                </label>
                <div className="mt-1">
                  <input
                    type="color"
                    id="colorpicker"
                    value="#ffffff"
                    style={{ width: '40px', height: '40px' }}
                    onChange={(e: any) => {
                      setListing({
                        ...listing,
                        secondaryColor: e.target.value,
                      });
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="asset-upload"
                className="block text-sm font-medium text-gray-700"
              >
                Asset Upload (Upload your zip file)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <button>
                  <input
                    type="file"
                    className="ml-0 mt-1 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    name="asset-upload"
                    id="asset-upload"
                    onChange={(e: any) => {
                      let file = e.target.files[0];
                      setListing({
                        ...listing,
                        assetUpload: file,
                      });
                    }}
                    autoComplete="family-name"
                    // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            // type="submit"
            onClick={handleSubmit}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </div>
      {/* </form> */}
    </>
  );
}
