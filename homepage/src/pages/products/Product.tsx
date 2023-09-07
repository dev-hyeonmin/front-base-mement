import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IForm {
  title: string;
}

export default function Product() {
  const { productId } = useParams();

  return (
    <>
      <h1>event detail :: {productId}</h1>
    </>
  );
}
