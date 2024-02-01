import { Box, Button, Cell, Layout, Page } from "@mement-frontend/ui";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGetBranches } from "../../api/branch";
import { IMainKeyword, IMainProps, IMainRecommend } from "../../api/main/types";
import MainKeyword from "./keyword";
import MainRecommend from "./recommend";
import MainRecommendModal from "./recommendModal";

const tempKeywordList: IMainKeyword[] = [
  {
    id: 1,
    name: "keyword 01",
    url: "https://www.naver.com"
  },
  {
    id: 2,
    name: "keyword 02",
    url: "https://www.naver.com"
  },
  {
    id: 3,
    name: "keyword 03",
    url: "https://www.naver.com"
  },
  {
    id: 4,
    name: "keyword 04",
    url: "https://www.naver.com"
  }
];

const tempRecommendList: IMainRecommend[] = [
  {
    id: 0,
    title: "Recomment 01",
    recommendTitle: "recommend product",
    recommendTitle2: "recommend product2",
    recommendDescription: 'recommend description',
    recommendDescription2: 'recommend description2',
    recommendImage: "",
    recommendImage2: ""
  },
  {
    id: 1,
    title: "Recomment 02",
    recommendTitle: "recommend product",
    recommendTitle2: "recommend product2",
    recommendDescription: 'recommend description',
    recommendDescription2: 'recommend description2',
    recommendImage: "",
    recommendImage2: ""
  }
]

const Main = () => {
  const temp = useGetBranches();
  console.log(temp);

  const methods = useForm<IMainProps>();
  const [keywords, setKeywords] = useState<IMainKeyword[]>(tempKeywordList);
  const [recommends, setRecommends] = useState<IMainRecommend[]>(tempRecommendList);
  const [selectedRecommend, setSelectedRecommend] = useState<IMainRecommend>();
  const [recommendModalStatus, setRecommendModalStatus] = useState(false);

  const onSubmit: SubmitHandler<IMainProps> = async (data) => {
    console.log(data);
  };

  const updateCurrentValue = (name: any, value: any) => {
    methods.setValue(name, value);

    switch (name) {
      case 'keywords':
        setKeywords(() => value);
        break;
      case 'recommends':
        // setRecommends(() => value);
        break;
    }
  }

  const openModal = (index?: number) => {
    if (index != undefined) {
      setSelectedRecommend(() => recommends[index]);
    }
    setRecommendModalStatus(true);
  }

  const closeModal = () => {
    setRecommendModalStatus(false);
  }

  return (
    <Page>
      <Page.Header title="Main Page" />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Page.Content fixed>
            <Layout gap="15px">
              <Cell>
                <MainKeyword data={keywords} setData={setKeywords} updateFormData={updateCurrentValue} />
              </Cell>

              <Cell>
                <MainRecommend
                  data={recommends}                  
                  setData={setRecommends}
                  updateFormData={updateCurrentValue}
                  openModal={openModal} />
              </Cell>
            </Layout>
          </Page.Content>

          <Page.Footer fixed divider>
            <Box align="right">
              <Button label="save" type="submit" skin="primary" priority="primary" />
            </Box>
          </Page.Footer>
        </form>
      </FormProvider>

      <MainRecommendModal isOpen={recommendModalStatus} onClose={closeModal} data={selectedRecommend} />
    </Page >
  );
}

export default Main;