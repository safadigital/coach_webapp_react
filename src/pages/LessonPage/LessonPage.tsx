import { useEffect } from 'react';
import data from '../../mock_data/lesson_data.json';
import useStore from '@/store/store';
import LessonHeader from '@/components/lesson/LessonHeader';
import { getLessonContent } from '@/utils/lesson_content';

const LessonPage = () => {

console.log("Lesson data: ", data);

// const { totalPages, setTotalPages, currentPage, setCurrentPage } = useStore();
const {  setTotalPages, setCurrentPage, setLessonTitle, currentPage, setPageContentItems } = useStore();
// data from lesson in zustand

const new_lesson_content_arr = getLessonContent(data.freetext_content, data.image_content, data.quiz_content, data.rating_content, data.text_content, data.video_content, currentPage);

setPageContentItems(new_lesson_content_arr);


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
setTotalPages(data.pages);
setLessonTitle(data.plate_name);
// setCurrentPage(5)

}, [])

    return (
    <>
    <LessonHeader />
    </>
       
       
    )
}

export default LessonPage;