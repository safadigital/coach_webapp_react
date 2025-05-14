import { useEffect } from 'react';
import data from '../../mock_data/lesson_data.json';
import useStore from '@/store/store';
import LessonHeader from '@/components/lesson/LessonHeader';

const LessonPage = () => {

console.log("Lesson data: ", data);

// const { totalPages, setTotalPages, currentPage, setCurrentPage } = useStore();
const {  setTotalPages, setCurrentPage, setLessonTitle } = useStore();
// data from lesson in zustand

// current page data use in useState


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