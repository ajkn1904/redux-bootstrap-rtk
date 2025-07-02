import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types/taskType";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

interface IProps {
    task:ITask
}

const TaskCard = ({task} : IProps) => {

    //const dispatch = useDispatch();
    //const user = useAppSelector(selectUsers)

   // const assigned = user.find(user => user.id == task.assignedTo);

        return (
        <div className='border px-5 py-3 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div className={cn("size-3 rounded-full", {
                     "bg-green-500": task.priority == "Low",
                     "bg-yellow-500": task.priority == "Medium",
                     "bg-red-500": task.priority == "High",
                    })} />
                    <h1 >{task.title}</h1>
                </div>
                 <div>
                    <div className='flex gap-3 items-center'>
                    <Button variant="link" className='p-0 text-red-500'>
                        <Trash2/>
                    </Button>
                    <Checkbox/>
                </div>
                 
                </div>
                
            </div>
            <p className='mt-5'>{task.description}</p>
        </div>
    );
};

export default TaskCard;