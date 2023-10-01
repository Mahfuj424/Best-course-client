import { Helmet } from "react-helmet-async";
import Benner from "../../components/Benner/Benner";
import NewSkill from "../../components/NewSkill/NewSkill";
import Review from "../../components/ReviewPepole/Review";
import TopCategories from "../../components/TopCategories/TopCategories";
import PopularCourse from "../../components/popularCourse/PopularCourse";



const Home = () => {
     return (
          <div className="space-y-20">
               <Helmet>
                    <title>
                         Best Course | Home
                    </title>
               </Helmet>
               <Benner />
               <TopCategories />
               <PopularCourse />
               <Review />
               <NewSkill/>
          </div>
     );
};

export default Home;