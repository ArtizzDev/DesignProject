import React, { useState } from 'react';
import Card from '../common/Card';
import img1 from '../../images/img1.avif';
import img2 from '../../images/img2.avif';
import img3 from '../../images/img3.avif';
import img4 from '../../images/img4.avif';
import CTAButton from '../common/Button'

const tabsName = [
  "India",
  "Autralia",
  "Dubai",
  "Paris",
  "London",
];

export const explores = [
  {
    tag: 'India',
    courses: [
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description1",
        name: "name",
        price: "$100"
      },
    ],
  },
  {
    tag: 'Autralia',
    courses: [
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
      {
        img: img2,
        description: "Description2",
        name: "name",
        price: "$100"
      },
    ],
  },
  {
    tag: 'Dubai',
    courses: [
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
      {
        img: img3,
        description: "Description3",
        name: "name",
        price: "$100"
      },
    ],
  },
  {
    tag: 'Paris',
    courses: [
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
      {
        img: img4,
        description: "Description4",
        name: "name",
        price: "$100"
      },
    ],
  },
  {
    tag: 'London',
    courses: [
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
      {
        img: img1,
        description: "Description5",
        name: "name",
        price: "$100"
      },
    ],
  },
];

const Services = () => {
  const [currentTab, setCurrentTab] = useState(explores[0].tag);
  const [courses, setCourses] = useState(explores[0].courses);

  const setMyTab = (value) => {
    setCurrentTab(value);
    const result = explores.filter((course) => course.tag === value);
    setCourses(result[0].courses);
  };

  return (
    <>
      <div className='bg-white h-full'>
        <div className='w-11/12 max-w-screen-lg mx-auto'>
          <div className='text-4xl font-semibold text-center my-[30px] text-black'>
            Go anywhere
            <br />
            with our latest e-Tour offers
          </div>
          <div className="w-9/12 mx-auto lg:flex mt-5 shadow-custom flex-row rounded-full bg-slate-200 mb-5 border-slate-500 p-1 justify-center ">
            {tabsName.map((element, index) => (
              <div
                className={`text-[16px] flex flex-row items-center gap-9 font-medium ${currentTab === element
                  ? "bg-yellow-500 text-richblack-5 font-medium"
                  : "text-black"
                  } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-8 py-2`}
                key={index}
                onClick={() => setMyTab(element)}
              >
                {element}
              </div>
            ))}
          </div>


          <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-8 ">
              {courses.map((element, index) => (
                <Card key={index} img={element.img} children={element.description} name={element.name} price={element.price}>
                </Card>
              ))}
            </div>
          </div>
          <CTAButton active={true} linkto={"#"} className='my-16'>
            View all places
          </CTAButton>
        </div>
      </div>
    </>
  );
};

export default Services;
