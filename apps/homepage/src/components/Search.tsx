import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type TForm = {
  keyword: string;
}

type TSearch = {
  onSubmit: (keyword: string) => void;
}

export default function Search({ onSubmit }: TSearch) {
  const { t } = useTranslation(['common']);
  const { register, handleSubmit, formState: { errors } } = useForm<TForm>({ reValidateMode: "onSubmit" });
  const onSubmitForm: SubmitHandler<TForm> = (data) => {
    onSubmit(data.keyword);
  }

  return (
    <div className="search-box">
      <div className="inner">
        <div className="search-txt">
          {t('search.text')}
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <input
            type="text"
            autoComplete="off"
            placeholder={t('search.placeholder')}
            {...register("keyword", { required: true, minLength: 2 })} />
        </form>

        <div className="search-error">
          {errors.keyword?.type == 'required' && t('search.error-require')}
          {errors.keyword?.type == 'minLength' && t('search.error-minLength')}
        </div>
      </div>
    </div>
  );
}
