import Lesson from '@/components/Lesson';
import { Button, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa';


const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
};

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

export default function Home({ initialTime }) {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(formatTime(now));
      setCurrentDate(formatDate(now));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [filteredInfo, setFilteredInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'day',
      width: '15%',
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
      dataIndex: 'break1',
      key: 'break1',
      width: '5%'
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
      dataIndex: 'break2',
      key: 'break2',
      width: '5%'
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
      width: '5%'
    },
  ];

  const data = [
    {
      key: '1',
      day: <h1 className='font-medium'>Day 1</h1>,
      lesson1: 'English',
      lesson2: 'Math',
      break1: '',
      lesson3: 'EGD',
      lesson4: 'LS',
      break2: '',
      lesson5: 'CAT',
      lesson6: 'Zulu',
      lesson7: '',
    },
    {
      key: '2',
      day: <h1 className='font-medium'>Day 2</h1>,
      lesson1: 'Zulu',
      lesson2: 'English',
      break1: '',
      lesson3: 'LS',
      lesson4: 'EGD',
      break2: '',
      lesson5: 'CAT',
      lesson6: 'Math',
      lesson7: '',
    },
    {
      key: '3',
      day: <h1 className='font-medium'>Day 3</h1>,
      lesson1: 'Zulu',
      lesson2: 'LS',
      break1: '',
      lesson3: 'Math',
      lesson4: 'English',
      break2: '',
      lesson5: 'CAT',
      lesson6: 'LO',
      lesson7: '',
    },
    {
      key: '4',
      day: <h1 className='font-medium'>Day 4</h1>,
      lesson1: 'CAT',
      lesson2: 'LO',
      break1: '',
      lesson3: 'LS',
      lesson4: 'English',
      break2: '',
      lesson5: 'Math',
      lesson6: 'EGD',
      lesson7: '',
    },
    {
      key: '5',
      day: <h1 className='font-medium'>Day 5</h1>,
      lesson1: 'EGD',
      lesson2: 'Zulu',
      break1: '',
      lesson3: 'Math',
      lesson4: 'Math',
      break2: '',
      lesson5: 'LS',
      lesson6: 'English',
      lesson7: '',
    },
    {
      key: '6',
      day: <h1 className='font-medium'>Day 6</h1>,
      lesson1: 'English',
      lesson2: 'EGD',
      break1: '',
      lesson3: 'Zulu',
      lesson4: 'Math',
      break2: '',
      lesson5: 'CAT',
      lesson6: 'PE',
      lesson7: '',
    },
    {
      key: '7',
      day: <h1 className='font-medium'>Day 7</h1>,
      lesson1: 'LS',
      lesson2: 'CAT',
      break1: '',
      lesson3: 'EGD',
      lesson4: 'English',
      break2: '',
      lesson5: 'Math',
      lesson6: 'Zulu',
      lesson7: '',
    },
    {
      key: '8',
      day: <h1 className='font-medium'>Day 8</h1>,
      lesson1: 'Math',
      lesson2: 'EGD',
      break1: '',
      lesson3: 'Zulu',
      lesson4: 'LS',
      break2: '',
      lesson5: 'English',
      lesson6: 'CAT',
      lesson7: '',
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
          onChange={handleChange} 
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
