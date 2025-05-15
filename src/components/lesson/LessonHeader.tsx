import React from 'react';
import prevIcon from '../../assets/left_chevron.svg';
import closeIcon from '../../assets/close.svg';

import useStore from '@/store/store';
import FullStep from './FullStep';
import NewStep from './NewStep';


interface LessonHeaderProps {
  lesson_data: any;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({ lesson_data }) => {

    const { currentPage, setCurrentPage } = useStore();
    const lessonData = lesson_data;

    return (
        <>
           <header className='fixed w-full bg-[#fff] h-20'>

    <div className="visible sm:invisible flex justify-center w-full">
<p className="font-bold new_york_medium_font text-[18px] ">{lessonData.plate_name}</p>
    </div>

    <div className="visible sm:invisible flex justify-between pl-5 pr-5">
        <img
        onClick={() => {
            if (currentPage > 1) {
  setCurrentPage(currentPage - 1); 
            window.scrollTo(0, 0); 
            }
          
        }}
        className="w-[32px] h-[32px] cursor-pointer" src={prevIcon} alt="" />
        <div className="flex items-center justify-center w-full">
      

        
             {
             Array.from({ length: lessonData.pages }, (_, index) => (
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