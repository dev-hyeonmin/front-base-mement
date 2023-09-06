import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IForm {
  title: string;
}

export default function Product() {
  const { eventId } = useParams();

  return (
    <>
      <h1>event detail :: {eventId}</h1>
    </>
  );
}
