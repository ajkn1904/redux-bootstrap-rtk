import { useAppSelector } from '@/redux/hooks';
import TaskCard from './modules/TaskCard';
import { AddTask } from './modules/AddTask';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDispatch } from 'react-redux';
import { useGetTasksQuery } from '@/redux/api/baseApi';
import type { ITask } from '@/types/taskType';


const task = () => {
    // const todo = useAppSelector(selectTasks);
    // console.log(todo);

    // const dispatch = useDispatch(filterTask);

    //const filter = useAppSelector(selectFilter);
    //console.log(filter);
    const {data, isLoading} = useGetTasksQuery(undefined)

    if(isLoading){
        return <p>Loading...</p>
    }


    return (
        <div className='mx-auto max-w-7xl px-5 mt-20'>
            <div className='flex justify-between items-center gap-2'>
                <h1 className='font-bold font-serif text-5xl'>Tasks</h1>

                <Tabs defaultValue="all" className="grid grid-cols-4">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="High">High</TabsTrigger>
                        <TabsTrigger value="Medium">Medium</TabsTrigger>
                        <TabsTrigger value="Low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTask />
            </div>
            <div className='space-y-5 mt-5'>
                {
                    !isLoading && data.tasks.map((task : ITask) => <TaskCard task={task} key={task.id} />)
                }
            </div>
        </div>
    );
};

export default task;