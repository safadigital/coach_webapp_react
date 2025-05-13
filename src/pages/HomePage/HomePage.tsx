import profileImg from '../../assets/profile.svg';
import leftArrov from '../../assets/left_arrow.svg';
import rightArrov from '../../assets/right_arrow.svg';

import statusDone from '../../assets/status_done.svg';
import statusNext from '../../assets/status_next.svg';

// fake data
import data from '../../mock_data/daily_plan.json';
//interface Props {}

// const HomePage = (props: Props) => {

const HomePage = () => {


    console.log(data.plan[0]);

    const headline = data.plan[0].headline;
    const lessons = data.plan[0].questions;
    const theory_lessons = lessons.filter((lesson) => lesson.section_id === 0 );
    const practice_lessons = lessons.filter((lesson) => lesson.section_id === 1 );
    const total_days = data.plan[0].total_days;
    const day_in_program = data.plan[0].day_in_program;

    const progress_in_percent = Math.ceil((day_in_program / total_days) * 100);
    const class_progress = 'w-[' + progress_in_percent + '%]';

    return (
        <>
         <header className="visible sm:invisible lg:invisible flex items-center justify-between pr-5 pl-5 pt-5">
        <div className="flex-column">
            <h3 className="text-xl font-bold new_york_medium_font">{headline}</h3>
            <div className="flex items-start pt-3">
                <div className="w-20 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                    <div className={`bg-[#FF6D03] h-1.5 rounded-full dark:bg-[#FF6D03] ${class_progress}`}>

   {/* <progress className='' value={progress_in_percent} /> */}
                      
                    </div>
                 
                   
                  </div>
                  &nbsp;
                  <sup className="text-xs text-[#696E6C] font-bold tracking-widest">{progress_in_percent}%</sup>
            </div>
          
        </div>
    
        <img className="cursor-pointer w-[31px] h-[31px]" src={profileImg} alt="" />
       
    </header>

    <hr className="visible sm:invisible text-gray-200" />

    <div className="visible sm:invisible flex items-center justify-between pr-5 pl-5 pt-3">
<img className="cursor-pointer" src={leftArrov} alt="" />
<p className="text-[#696E6C] text-xs font-bold new_york_medium_font">Day {day_in_program} of {total_days}</p>
<img className="cursor-pointer" src={rightArrov} alt="" />
    </div>

    <div className="visible sm:invisible flex pr-5 pl-5 pt-5">
<p className="text-[#696E6C] text-[10px] uppercase font-bold sp_pro_text_medium_font wide">Daily lessons</p>
    </div>


{

theory_lessons.map((lesson, idx) => (
  <div key={idx} className="visible sm:invisible columns pr-5 pl-5 pt-1 mt-2 mb-2 ">
  
    <div className="flex bg-[#F3F4F4] topleftrounded bottomleftrounded pt-[16px] pl-[16px] pb-[16px] bottom_shadow">
        <img className="couseimage" src={lesson.main_image} alt="" />
    </div>
    <div className="flex-column bottomrightrounded toprightrounded content-between bg-[#F3F4F4] pl-3 pr-[16px] pt-[16px] pb-[16px] bottom_shadow">
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[16px] font-bold new_york_medium_font mr-1">{lesson.headline}</p>
            <img className="w-[30px] h-[30px]" src={ lesson.completed ? statusDone : statusNext} alt="" />
                </div>
                <div className="mttauto">
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.description}</p>
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.duration}</p>     
                        </div>
    </div>
   </div>
))

}

   



       <div className="visible sm:invisible flex pr-5 pl-5 pt-3">
        <p className="text-[#696E6C] text-[10px] uppercase font-bold sp_pro_text_medium_font wide">Daily practice</p>
            </div>


       {

practice_lessons.map((lesson, idx) => (
  <div key={idx} className="visible sm:invisible columns pr-5 pl-5 pt-1 mt-2 mb-2 ">
  
    <div className="flex bg-[#F3F4F4] topleftrounded bottomleftrounded pt-[16px] pl-[16px] pb-[16px] bottom_shadow">
        <img className="couseimage" src={lesson.main_image} alt="" />
    </div>
    <div className="flex-column bottomrightrounded toprightrounded content-between bg-[#F3F4F4] pl-3 pr-[16px] pt-[16px] pb-[16px] bottom_shadow">
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[16px] font-bold new_york_medium_font mr-1">{lesson.headline}</p>
            <img className="w-[30px] h-[30px]" src={ lesson.completed ? statusDone : statusNext} alt="" />
                </div>
                <div className="mttauto">
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.description}</p>
                    <p className="text-[10px] text-[#696E6C] uppercase font-bold sp_pro_text_medium_font wide">{lesson.duration}</p>     
                        </div>
    </div>
   </div>
))

}

      
        </>
    )

}


export default HomePage