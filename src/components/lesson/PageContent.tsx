import useStore from "@/store/store";
import { getLessonContent } from "@/utils/lesson_content";

const PageContent = () => {

    const { lessonData, currentPage } = useStore();

console.log("Whole lesson data from store: ", lessonData);

const pageContentItems = getLessonContent(lessonData.freetext_content, lessonData.image_content, lessonData.quiz_content, lessonData.rating_content, lessonData.text_content, lessonData.video_content, currentPage);

console.log(" PAGE CONTENT ITEMS ON CONTENT PAGE: ", pageContentItems);

    return (
        <>
      {
        pageContentItems && pageContentItems.map((item: any) => {
            if (item.content_type == 'section') {
                return <h1>Section</h1>
            }
             if (item.content_type == 'video') {
                return <h1>Video</h1>
            }
            if (item.content_type == 'normal_text') {
                return <h1>Normal text</h1>
            }
            if (item.content_type == 'header') {
                return <h1>Header</h1>
            }

        })
      }
        </>
    )

}

export default PageContent;