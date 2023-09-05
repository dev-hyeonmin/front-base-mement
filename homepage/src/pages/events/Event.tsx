import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IForm {
  title: string;
}

export default function Event() {
  const { eventId } = useParams();
  const { register, handleSubmit, reset } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    reset();
  }
  // const createEventsMutation = useMutation(createEvents, {
  //   onSuccess: () => {
  //     console.log('create event success.');
  //   },
  // });

  return (
    <>
      <h1>event detail :: {eventId}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("title", {required: true})}
        />
      </form>
    </>
  );
}
