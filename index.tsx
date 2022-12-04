/**
 *
 * SignIn
 *
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSmartAccountContext } from '../../../contexts/SmartAccountContext';
import { useWeb3AuthContext } from '../../../contexts/SocialLoginContext';
import { ethers } from 'ethers';

interface Props {}

export function SignIn(props: Props) {
  const [providerFound, setProviderFound] = useState(false);

  const {
    address,
    loading: eoaLoading,
    userInfo,
    connect,
    disconnect,
    getUserInfo,
  } = useWeb3AuthContext();
  const {
    selectedAccount,
    loading: scwLoading,
    setSelectedAccount,
  } = useSmartAccountContext();
  console.log('address', address);

  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('provider', provider);
      console.log('signer', await signer.getAddress());

      if (provider) {
        setProviderFound(true);
      } else {
        setProviderFound(false);
      }

      let signerAddress = await signer.getAddress();

      // Redirect to /view-listing if provider is found
      if (signerAddress) {
        window.location.replace('/listings');
      }
    })();
  }, []);

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src={require('./text.png')}
                alt="Your Company"
              />
              <button className="mt-6 text-3xl font-bold tracking-tight text-gray-900"></button>
              <p className="mt-2 text-sm text-gray-600">
                The{' '}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Decentrailised business directory
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <div>
                  {address ? (
                    <div>
                      {!providerFound && (
                        <div
                          onClick={() => {
                            console.log('connect');
                            connect();
                          }}
                          className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Link your metamask wallet
                        </div>
                      )}
                      <button
                        onClick={() => {
                          setSelectedAccount(null);
                          disconnect();
                        }}
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={async () => {
                        await connect();
                      }}
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  )}
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={require('./landing.jpg')}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
