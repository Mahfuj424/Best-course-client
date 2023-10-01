import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";


const WatchVideo = () => {
     
     const [axiosSecure] = useAxiosSecure();
     const [videos, setVideos] = useState([]);


     useEffect(() => {
          
          axiosSecure.get('select')
               .then(result => {
                    // console.log(result.data);
                    setVideos(result.data)
               })
               .catch(err => {
               console.log(err.message);
          })
     }, [])
     
     const { id } = useParams();

     const videoData = videos && videos.find(data => data._id == id)

     

     return (
          <div>
               <embed className="w-[100%] h-[739px]" src={videoData?.course_content} type="" />
               
          </div>
     );
};

export default WatchVideo;