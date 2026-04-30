import { getHotest} from '@/lib/data';
import React from 'react';
import CourseCard from './CourseCard';

const ExtraSec = async() => {
    const hotest= await getHotest()
    return (
        <div className="container mx-auto my-10 py-5">
            <h2 className='text-4xl font-bold  mb-5'>Trendiest Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                 {
                hotest.map(n=>{
                    return <CourseCard key={n.id} course={n}></CourseCard>
                }
            )}
            </div>
           
        </div>
    );
};

export default ExtraSec;