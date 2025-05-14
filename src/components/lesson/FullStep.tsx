import useStore from "@/store/store";

const FullStep = () => {

    const { totalPages } = useStore();

    return (
        <>
         {/* <div className={`w-[${Math.ceil( 100 / totalPages )}%] bg-gray-200 rounded-full h-[4px] mb-4 dark:bg-gray-200`}>
                <div className={`bg-[#FF6D03] h-[4px] rounded-full dark:bg-[#FF6D03] w-[100%]`} >
                </div>
              </div> */}

                <progress className={`h-1 w-6/12`} value={100} max={100} />
 &nbsp;
              </>
    )
}

export default FullStep;