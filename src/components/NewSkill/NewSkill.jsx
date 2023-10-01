

const NewSkill = () => {
     return (
          <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-10">
                    <div className="space-y-10 mt-16">
                         <h1 className="text-5xl font-bold "><span className="text-[#00FF84]">Learn</span> new skills when <br /> and where you like.</h1>
                         <p>Use the list below to bring attention to your product’s key <br /> differentiator.</p>
                         <ol>
                              <li>✅ Hand-Picked Authors</li>
                              <li>✅ Easy To Follow Curriculum</li>
                              <li>✅ Free Courses</li>
                              <li>✅ Money-Back Guarantee</li>
                         </ol>
                         <button className="fill-btn">Join Free</button>
                    </div>
                    <div className="w-[500px] h-[600px]">
                         <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default NewSkill;