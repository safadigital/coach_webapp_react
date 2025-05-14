import prevIcon from '../../assets/left_chevron.svg';
import closeIcon from '../../assets/close.svg';

import useStore from '@/store/store';
import FullStep from './FullStep';
import NewStep from './NewStep';

const LessonHeader = () => {

    const { currentPage, totalPages, lessonTitle } = useStore();

    return (
        <>
           <header>

    <div className="visible sm:invisible flex justify-center w-full pt-[13px]">
<p className="font-bold new_york_medium_font text-[18px]">{lessonTitle}</p>
    </div>

    <div className="visible sm:invisible flex justify-between pl-5 pr-5">
        <img className="w-[32px] h-[32px] cursor-pointer" src={prevIcon} alt="" />
        <div className="flex items-center justify-center w-full">
      

        
             {
             Array.from({ length: totalPages }, (_, index) => (
                              index + 1 <= currentPage ? <FullStep key={index} /> : <NewStep key={index} />
             )
             

            )
             }
        
            
          
        </div>
        <img className="w-[32px] h-[32px]" src={closeIcon} alt="" />

      
          
    </div>

    <hr className="visible sm:invisible text-gray-200" />
</header>
        </>
    )
}

export default LessonHeader;