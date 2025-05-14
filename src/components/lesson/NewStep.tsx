import useStore from "@/store/store";

const NewStep = () => {
    const { totalPages } = useStore();

    return (
        <>
           {/* <div className={`w-[${Math.ceil( 100 / totalPages )}%] bg-gray-200 rounded-full h-[4px] mb-4 dark:bg-gray-200`}>
                <div className={`bg-[#FF6D03] h-[4px] rounded-full dark:bg-[#FF6D03] w-[${Math.ceil( 100 / totalPages )}%]`}>
                </div>
              </div> */}

                 <progress className={`h-1 w-6/12`} value={0} max={100} />
              &nbsp;
              </>
    )
}

export default NewStep;