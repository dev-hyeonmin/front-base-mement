import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation(['common']);

  return (
    <>
      < h1>{t('menu.events')}.</h1>
    </>
  );
}