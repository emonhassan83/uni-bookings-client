import blog1 from '../../../assets/blogs/blog1.jpg'
import blog2 from '../../../assets/blogs/blog2.jpg'

const BlogsResources = () => {
    return (
        <>
            <div className='md:flex justify-start items-center gap-20 mt-20'>
                <div className='md:w-2/5'>
                    <img className='rounded-sm' src={blog1} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <h4 className='text-2xl font-semibold mb-10 mt-10 md:mt-0'>Florida Education #1 in Nation - 4 Years Running!</h4>
                    <h6 className='text-sm font-semibold mb-6'>U.S. News: Higher Education Rankings - Measuring which states are the most educated</h6>
                    <p className='text-sm'>Half of the weighting in the education rankings goes to higher education. The metrics involved include the shares of citizens in each state holding college degrees, with wide variances found among the states and regionally. In Massachusetts, ranked No. 8 among Best States overall, half the citizenry holds associate degrees or higher. New England in general runs about 10 percentage points higher than Southwestern and Southeastern states by this measure. The rankings also take into account the time it takes students to complete both two- and four-year college programs, the cost of tuition and fees state by state and the burden of debt that college graduates carry.</p>
                    <button className='px-8 py-4 rounded-md bg-black text-sm font-semibold text-white hover:bg-gray-900 mt-10 transition'>Full Article</button>
                </div>
            </div>
            <div className='mt-20 md:flex flex-row-reverse justify-center items-center gap-20'>
                <div className='md:w-1/2'>
                    <img className='rounded-sm' src={blog2} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <h4 className='text-xl font-semibold mb-10 mt-10 md:mt-0'>Study Florida members win the 2021 Paul Simon Award for Campus Internationalization!</h4>
                    <p className='text-sm mb-4'>Congratulations to Florida International University, Miami Dade College and Santa Fe College for winning the prestigious NAFSA award! The 2021 Paul Simon Award for Campus Internationalization was awarded to 8 schools, 3 of which are Study Florida members.</p>
                    <p className='text-sm mb-2'>Study Florida members whom have won this award in the past include: </p>
                    <ul className='text-sm'>
                        <li className='list-disc ml-4'>Embry–Riddle Aeronautical University (2020)</li>
                        <li className='list-disc ml-4'>University of Tampa (2016)</li>
                        <li className='list-disc ml-4'>University of South Florida (2013)</li>
                        <li className='list-disc ml-4'>Miami Dade College (2008)</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogsResources;