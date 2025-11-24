import { useCurrentAccount } from "@mysten/dapp-kit";
import { OwnedObjects } from "../shared/OwnedObjects";

export const WalletStatus = () => {
  const account = useCurrentAccount();

  return (
    <div className="space-y-6">
      {/* Wallet Connection Status Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Wallet Status
          </h2>
        </div>
        
        <div className="p-6">
          {account ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Connected</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Wallet Address</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm sm:text-base font-mono text-gray-900 dark:text-white break-all">
                    {account.address}
                  </p>
                  <button
                    onClick={() => navigator.clipboard.writeText(account.address)}
                    className="flex-shrink-0 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                    title="Copy address"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Wallet Connected</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Please connect your wallet to continue</p>
            </div>
          )}
        </div>
      </div>

      {/* Owned Objects Section */}
      <OwnedObjects />
    </div>
  );
};
