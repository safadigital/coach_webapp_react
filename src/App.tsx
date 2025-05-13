import { useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";


const App = () => {


 

  useEffect(() => {

//   function handleAddVideo() {

//     const resourceId = "VMJQit9N0hJaCAss";
//     dispatch(ADD_VIDEO, {
//       payload: {
//         id: generateId(),
//         details: {
//           src: "https://res.cloudinary.com/the-coach/video/upload/v1681652731/BREATHING_PRACTICE_hpdspx.mp4",
//           volume: 50
//         },
//         metadata: {
//           resourceId
//         }
//       }
//     });
//   };

//   const setVideo = () => {
//     setTimeout(() => {
// handleAddVideo();
//     }, 0)
 
//   }

//   setVideo();

   
  }, [])

 

  return (
    <>
   <HomePage />
   <ProfilePage />
    </>
  );
}

export default App;
