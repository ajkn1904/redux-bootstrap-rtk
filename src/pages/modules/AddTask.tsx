import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useCreateTaskMutation } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types/taskType";
import { DialogDescription } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValue, type SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux";


export function AddTask() {

    const [state, setState] = useState(false)

    const form = useForm();

    const [createTask, {data, isLoading, isError}] = useCreateTaskMutation()
    
    console.log(data);


    const onSubmit: SubmitHandler<FieldValue> = async (data) => {
        const taskData = {
            ...data,
            isCompleted: false,

        }
        await createTask(taskData as ITask);
        
        setState(false);
        form.reset();
    }

    return (
        <Dialog open={state} onOpenChange={setState}>
            <form>
                <DialogTrigger asChild>
                    <Button className="bg-green-500">Add Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogDescription className="sr-only">Fill up the form to Add Task</DialogDescription>
                        <DialogTitle>Add Task</DialogTitle>

                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} >
                            <FormField control={form.control} name="title" render={({ field }) => (
                                <FormItem className="mb-3.5">
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="description" render={({ field }) => (
                                <FormItem className="mb-3.5">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )} />


                            <FormField control={form.control} name="priority" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Priority</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className="w-full mb-3.5">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a priority level to set." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="High">High</SelectItem>
                                            <SelectItem value="Medium">Medium</SelectItem>
                                            <SelectItem value="Low">Low</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                            />


                            <FormField control={form.control} name="deuDate" render={({ field }) => (
                                <FormItem className="flex flex-col mb-3.5">
                                    <FormLabel>Deu Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button variant={"outline"} className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                                    {field.value ? (format(field.value, "PP")) : (<span>Pick a date</span>)}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} captionLayout="dropdown" />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                            />



                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button className="my-3.5" variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button className="my-3.5" type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </Form>

                </DialogContent>
            </form>
        </Dialog>
    )
}
