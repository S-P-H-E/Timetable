import Lesson from '@/components/Lesson';
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa';


const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
};

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

export default function Home({ initialTime }) {
  const [dayNum, setDayNum] = useState(6); // Set the initial day to 4
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(formatTime(now));

      // Check if the date has changed since the last update
      const newDate = formatDate(now);
      if (newDate !== currentDate) {
        setCurrentDate(newDate);
        setDayNum((prevDay) => prevDay + 1); // Increment the day by 1
      }
    }, 1000);

    return () => clearInterval(timer); // Clear the interval when the component unmounts
  }, [currentDate]);

  const [dayX, setDayX] = useState(`Day ${dayNum}`)

  const columns = [
    {
      title: '',
      dataIndex: 'day',
      key: 'day',
      width: '15%',
      render: (_, { day }) => (
        <>
          {day.map((tag) => {
            let color = tag.length > 5 ? '' : '';
            if (tag === dayX) {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '08:05',
      dataIndex: 'lesson1',
      key: 'lesson1',
    },
    {
      title: '09:00',
      dataIndex: 'lesson2',
      key: 'lesson2',
    },
    {
      title: '09:55',
      dataIndex: 'breaks',
      key: 'breaks',
      width: '5%',
      render: (_, { breaks }) => (
        <>
          {breaks.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={'green'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '10:25',
      dataIndex: 'lesson3',
      key: 'lesson3',
    },
    {
      title: '11:20',
      dataIndex: 'lesson4',
      key: 'lesson4',
    },
    {
      title: '12:15',
      dataIndex: 'breaks',
      key: 'breaks',
      width: '5%',
      render: (_, { breaks }) => (
        <>
          {breaks.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={'green'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '12:40',
      dataIndex: 'lesson5',
      key: 'lesson5',
    },
    {
      title: '13:30',
      dataIndex: 'lesson6',
      key: 'lesson6',
    },
    {
      title: '14:20',
      dataIndex: 'lesson7',
      key: 'lesson7',
      width: '5%',
      render: (_, { lesson7 }) => (
        <>
          {lesson7.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={'volcano'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      day: ['Day 1'],
      lesson1: 'English',
      lesson2: 'Math',
      breaks: ['Break'],
      lesson3: 'EGD',
      lesson4: 'LS',
      breaks: ['Break'],
      lesson5: 'CAT',
      lesson6: 'Zulu',
      lesson7: ['Reg'],
      
    },
    {
      key: '2',
      day: ['Day 2'],
      lesson1: 'Zulu',
      lesson2: 'English',
      breaks: ['Break'],
      lesson3: 'LS',
      lesson4: 'EGD',
      breaks: ['Break'],
      lesson5: 'CAT',
      lesson6: 'Math',
      lesson7: ['Reg'],
    },
    {
      key: '3',
      day: ['Day 3'],
      lesson1: 'Zulu',
      lesson2: 'LS',
      breaks: ['Break'],
      lesson3: 'Math',
      lesson4: 'English',
      breaks: ['Break'],
      lesson5: 'CAT',
      lesson6: 'LO',
      lesson7: ['Reg'],
    },
    {
      key: '4',
      day: ['Day 4'],
      lesson1: 'CAT',
      lesson2: 'LO',
      breaks: ['Break'],
      lesson3: 'LS',
      lesson4: 'English',
      breaks: ['Break'],
      lesson5: 'Math',
      lesson6: 'EGD',
      lesson7: ['Reg'],
    },
    {
      key: '5',
      day: ['Day 5'],
      lesson1: 'EGD',
      lesson2: 'Zulu',
      breaks: ['Break'],
      lesson3: 'Math',
      lesson4: 'Math',
      breaks: ['Break'],
      lesson5: 'LS',
      lesson6: 'English',
      lesson7: ['Reg'],
    },
    {
      key: '6',
      day: ['Day 6'],
      lesson1: 'English',
      lesson2: 'EGD',
      breaks: ['Break'],
      lesson3: 'Zulu',
      lesson4: 'Math',
      breaks: ['Break'],
      lesson5: 'CAT',
      lesson6: 'PE',
      lesson7: ['Reg'],
    },
    {
      key: '7',
      day: ['Day 7'],
      lesson1: 'LS',
      lesson2: 'CAT',
      breaks: ['Break'],
      lesson3: 'EGD',
      lesson4: 'English',
      breaks: ['Break'],
      lesson5: 'Math',
      lesson6: 'Zulu',
      lesson7: ['Reg'],
    },
    {
      key: '8',
      day: ['Day 8'],
      lesson1: 'Math',
      lesson2: 'EGD',
      breaks: ['Break'],
      lesson3: 'Zulu',
      lesson4: 'LS',
      breaks: ['Break'],
      lesson5: 'English',
      lesson6: 'CAT',
      lesson7: ['Reg'],
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 gap-4 h-screen text-black bg-white dark:invert">
        <div className='flex justify-between items-center w-[1000px]'>
          <h1 className="text-3xl">{currentTime}</h1>
          <h1>{currentDate}</h1>
        </div>

        <Table 
          bordered={true} 
          columns={columns} 
          dataSource={data} 
          className='w-[1000px]' 
          footer={() => ''} 
          pagination={{ position: ['none', 'none'],}}
          
          />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const initialTime = formatTime(new Date());

  return {
    props: {
      initialTime,
    },
  };
}
