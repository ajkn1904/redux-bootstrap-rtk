import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { IUser } from '@/types/userType';
import { useState } from 'react';
import { useForm, type FieldValue, type SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [state, setState] = useState(false)
    const form = useForm();

   // const dispatch = useDispatch();

    const onSubmit : SubmitHandler<FieldValue>= (data) => {
        dispatch(addUser(data as IUser));
        setState(false);
        form.reset();
    }

    return (
        <Dialog open={state} onOpenChange={setState}>
            <form>
                <DialogTrigger asChild>
                    <Button className="bg-green-500">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogDescription className="sr-only">Fill up the form to Add User</DialogDescription>
                        <DialogTitle>Add User</DialogTitle>

                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} >
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem className="mb-3.5">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )} />
                            

                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button className="my-3.5" variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button className="my-3.5" type="submit">Save</Button>
                            </DialogFooter>
                        </form>
                    </Form>

                </DialogContent>
            </form>
        </Dialog>
    )
};

export default AddUser;