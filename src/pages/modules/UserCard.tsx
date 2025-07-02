import { Button } from "@/components/ui/button";
import type { IUser } from "@/types/userType";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";


interface IProps {
    user: IUser
}

const UserCard = ({ user }: IProps) => {
    //const dispatch = useDispatch();

    return (
        <div className='border px-5 py-3 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div />
                    {/* <h1>{user.name}</h1> */}
                </div>
                <div>
                    {/* <div className='flex gap-3 items-center'>
                        <Button variant="link" className='p-0 text-red-500' onClick={() => dispatch(deleteUser(user.id))}>
                            <Trash2 />
                        </Button>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default UserCard;