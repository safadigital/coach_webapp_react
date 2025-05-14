import { useEffect } from 'react';
import data from '../../mock_data/lesson_data.json';
import useStore from '@/store/store';
import LessonHeader from '@/components/lesson/LessonHeader';
import { getLessonContent } from '@/utils/lesson_content';
import PageContent from '@/components/lesson/PageContent';

const LessonPage = () => {

console.log("Lesson data: ", data);

// const { totalPages, setTotalPages, currentPage, setCurrentPage } = useStore();
const { setLessonData, currentPage } = useStore();
// data from lesson in zustand

const new_lesson_content_arr = getLessonContent(data.freetext_content, data.image_content, data.quiz_content, data.rating_content, data.text_content, data.video_content, currentPage);

function setDataToStore() {
    setLessonData(data);
   
// setTotalPages(data.pages);
// setLessonTitle(data.plate_name);
//  setCurrentPage(1);
//  setPageContentItems(new_lesson_content_arr);
}


// current page data use in useState

/*
-------------------------------------------------------
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TODO

"freetext_content" : [],
"image_content" : [],
"quiz_content" : [],
"rating_content" : [],
"text_content" : [],
"video_content" : [],


Сделать выборку по каждому из массовивов 


*/


useEffect(() => {
    setDataToStore();
// setTotalPages(data.pages);
// setLessonTitle(data.plate_name);
//  setCurrentPage(1);
//  setPageContentItems(new_lesson_content_arr);

}, [])

    return (
    <>
    <LessonHeader />
    <PageContent />
    </>
       
       
    )
}

export default LessonPage;