import { useAppSelector } from "@/redux/hooks";
import AddUser from "./modules/AddUser";
import UserCard from "./modules/UserCard";

const user = () => {
    //     const allUser = useAppSelector(selectUsers);
    // console.log(allUser);


    return (
        <div className='mx-auto max-w-7xl px-5 mt-20'>
            <div className='flex justify-between items-center gap-2'>
                <h1 className='font-bold font-serif text-5xl'>Users</h1>

                <AddUser />
            </div>
            <div className='space-y-5 mt-5'>
                {/* {
                    allUser.map(user => <UserCard user={user} key={user.id} />)
                } */}
            </div>
        </div>
    );
};

export default user;