import useStore from "@/store/store";
import { getLessonContent } from "@/utils/lesson_content";

import playIcon from '../../assets/play_button.svg';

// mock data
import lessonData from '../../mock_data/lesson_data.json';

const PageContent = () => {

    const { currentPage } = useStore();

console.log("Whole lesson data from store: ", lessonData);

 const pageContentItems = getLessonContent(lessonData.freetext_content, lessonData.image_content, lessonData.quiz_content, lessonData.rating_content, lessonData.text_content, lessonData.video_content, currentPage);

// console.log(" PAGE CONTENT ITEMS ON CONTENT PAGE: ", pageContentItems);

    return (
        <>
        <div className="visible sm:invisible flex-column gap-[16px] pl-5 pr-5 pt-10">

      
      {
        pageContentItems && pageContentItems.map((item: any, idx: number) => {
            if (item.content_type == 'section') {
                return <h3 className="text-[#FF6D03] sp_pro_text_medium_font text-[14px] font-bold tracking-[6%] uppercase">{item.text}</h3>
            }
             if (item.content_type == 'video') {
                return <div> 

                    <svg width="100%" height="100%" viewBox="0 0 1000 1000"
 xmlns="http://www.w3.org/2000/svg" 
 xmlnsXlink="http://www.w3.org/1999/xlink">
    <image xlinkHref={item.preview_url} x="0" y="0" height="1000" width="1000" />
    <image className="cursor-pointer" xlinkHref={playIcon} x="40%" y="40%" height="200" width="200" />    
</svg>

{/* <div className={'main-video'}>
    <img className="w-full imgVideo" src={item.preview_url} alt="" />
    <img className="playIcon" src={playIcon} alt="" />
    </div> */}

    <div className="w-full bg-[#F1ECE9] pb-2">
        <p className="pl-2 pt-2 text-[16px] font-bold sp_pro_text_medium_font">{item.video_name}</p>
        <p className="pl-2 pt-2 text-[#696E6C] text-[14px] font-bold sp_pro_text_medium_font tracking-[6%] uppercase">{item.author}</p>
    </div></div>
            }
            if (item.content_type == 'normal_text') {
                return <p className="new_york_medium_font text-[16px] pb-[16px]">{item.text}</p>
            }
            if (item.content_type == 'header') {
                return <h1 className="page_h1 new_york_heavy_font pb-[16px] tracking-[-2%] text-[24px]">{item.text}</h1>
            }

        })
      }
        </div>

        <button className="visible sm:invisible bg-[#141D19] text-[#fff] text-[14px] sp_pro_text_medium_font font-bold mr-5 ml-5 pl-5 pr-5 mt-20 mb-5 w-[90%] pt-[18px] pb-[18px] uppercase cursor-pointer">Continue</button>
        </>
    )

}

export default PageContent;