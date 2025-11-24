import { useSuiClientQuery } from "@mysten/dapp-kit";

interface ObjectProps {
  objectId: string;
}

export const SuiObject: React.FC<ObjectProps> = ({ objectId }) => {
  const { data: objectDetails, isPending, error } = useSuiClientQuery(
    "getObject",
    { id: objectId ,
      options: {
        showType: true,
        showContent: true,
        showOwner: true
      }
    },
    {
      enabled: !!objectId, // Ensure query only runs if `objectId` is valid
    }
  );

  if (isPending) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Loading object details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
        <p className="text-red-600 dark:text-red-400 text-sm font-medium">Error: {error.message}</p>
      </div>
    );
  }

  const objectType = objectDetails?.data?.type;
  const isCoin = objectType?.includes("0x2::coin::Coin");
  const balance = isCoin ? (objectDetails.data?.content as any)?.fields?.balance : null;

  return (
    <div className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-md">
      <div className="space-y-3">
        {/* Object ID */}
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Object ID</p>
          <p className="text-sm font-mono text-gray-900 dark:text-white break-all">{objectId}</p>
        </div>
        
        {/* Object Type */}
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Type</p>
          <div className="flex items-center space-x-2">
            {isCoin ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                💰 Coin
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                📦 Object
              </span>
            )}
            <p className="text-sm font-mono text-gray-700 dark:text-gray-300 break-all">
              {objectType || "Unknown"}
            </p>
          </div>
        </div>
        
        {/* Balance if it's a coin */}
        {objectType?.startsWith("0x2::coin::Coin") && balance && (
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Balance</p>
            <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              {Number(balance).toLocaleString()} SUI
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
