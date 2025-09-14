export default function YourPositions() {
    return (
      <div className="container mt-[80px] md:mt-[144px] h-[40vh]">
        {/* Header Section */}
        <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
          <h2 className="text-[20px] font-bold leading-10 text-gray-100 md:text-[32px]">
            Your Positions
          </h2>
          
          <div className="flex items-center justify-between gap-[10px]">
            <button 
              className="font-poppins my-4 flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold leading-5 tracking-[0.28px] md:my-0 text-white sm:text-xs md:px-6"
              disabled
              style={{
                border: '2px solid rgb(122, 90, 251)',
                background: 'radial-gradient(332.27% 67.64% at 53.61% 45.38%, rgba(122, 90, 251, 0.4) 24.27%, rgba(30, 96, 236, 0.4) 100%), rgb(20, 15, 58)',
                boxShadow: 'rgb(122, 90, 251) 0px 0px 9px 0px'
              }}
            >
              <p>
                <span className="text-white">Harvest</span> <span className="text-white">0.00</span> ORUX
              </p>
            </button>
          </div>
        </div>
  
        {/* Table Section */}
        <div className="relative w-full overflow-auto">
          <table className="caption-bottom text-sm w-full rounded-xl bg-trans-dark-300">
            <thead className="[&_tr]:border-b bg-[#1D1A46]">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-none">
                <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 font-medium uppercase leading-5 tracking-[0.12em] text-gray-200">
                  Staked/Locked
                </th>
                <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 font-medium uppercase leading-5 tracking-[0.12em] text-gray-200">
                  ORUX
                </th>
                <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 font-medium uppercase leading-5 tracking-[0.12em] text-gray-200">
                  ORUX Rewards
                </th>
                <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 font-medium uppercase leading-5 tracking-[0.12em] text-gray-200">
                  APR
                </th>
                <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 font-medium uppercase leading-5 tracking-[0.12em] text-gray-200">
                  Duration
                </th>
                <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 font-medium uppercase leading-5 tracking-[0.12em] text-gray-200">
                  Value
                </th>
              </tr>
            </thead>
                        <tbody className="[&_tr:last-child]:border-0 bg-[#151237]">
              <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-[#302D5B80]">
                <td 
                  className="p-4 align-middle [&:has([role=checkbox])]:pr-0 w-full px-[24px] py-[18px] text-center font-inter font-medium text-gray-200" 
                  colSpan={6}
                >
                  No Stake or Lock Positions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }