import { Box, Button, ButtonProps, Card, Cell, DraggableList, Input, Layout, Modal, Page, SecondaryActionProps } from "@mement-frontend/ui";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DeleteIcon from '../../public/delete.png';
import { IMainKeyword, IMainProps, IMainRecommend } from "../api/main/types";

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
    recommentTitle: "recommend product",
    recommentTitle2: "recommend product2",
    recommendDescription: 'recommend description',
    recommendDescription2: 'recommend description2',
    recommendImage: "",
    recommendImage2: ""
  },
  {
    id: 1,
    title: "Recomment 02",
    recommentTitle: "recommend product",
    recommentTitle2: "recommend product2",
    recommendDescription: 'recommend description',
    recommendDescription2: 'recommend description2',
    recommendImage: "",
    recommendImage2: ""
  }
]

const Main = () => {
  const degreeSecondaryKeywordActions: SecondaryActionProps[] = [
    {
      icon: <img src={DeleteIcon} />,
      text: "delete",
      priority: "secondary",
      onClick: (_, index) => { deleteKeyword(index); }
    }
  ];
  const degreePrimaryRecommendsActions: ButtonProps[] = [
    {
      label: "Edit",
      skin: 'primary',
      priority: 'primary',
      onClick: (_, index) => { openModal(); }
    }
  ];
  const degreeSecondaryRecommendsActions: SecondaryActionProps[] = [
    {
      icon: <img src={DeleteIcon} />,
      text: "delete",
      skin: 'warning',
      priority: "secondary",
      onClick: (_, index) => { deleteRecommend(index); }
    }
  ];

  const methods = useForm<IMainProps>();
  const [keywords, setKeywords] = useState(tempKeywordList);
  const [recommends, setRecommends] = useState(tempRecommendList);
  const [recommendModalStatus, setRecommendModalStatus] = useState(false);
  useEffect(() => {
    methods.setValue("keywords", keywords);
    methods.setValue("recommends", recommends);
  }, [keywords]);

  const onSubmit: SubmitHandler<IMainProps> = async (data) => {
    console.log(data);
  };

  const addKeyword = () => {
    setKeywords((currentValue) => [...currentValue, {
      id: 0,
      name: '',
      url: ''
    }])
  }

  const deleteKeyword = (index: number | undefined) => {
    if (index) {
      setKeywords((currentValue) => currentValue.filter((_, valueIndex) => index != valueIndex));
    }
  }

  const deleteRecommend = (index: number | undefined) => {
    if (index) {
      setRecommends((currentValue) => currentValue.filter((_, valueIndex) => index != valueIndex));
    }
  }

  const openModal = () => {
    setRecommendModalStatus(true);
  }

  const closeModal = () => {
    setRecommendModalStatus(false);
  }
  return (
    <Page>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Page.Header title="Main Page" />

          <Page.Content fixed>
            <Layout gap="15px">
              <Cell>
                <Card>
                  <Card.Header
                    title="Consult Keyword"
                    suffix={<Button label="Add" skin="primary" onClick={() => addKeyword()} />} />

                  <Card.Content>
                    <DraggableList
                      data={keywords}
                      setData={setKeywords}
                      secondaryActions={degreeSecondaryKeywordActions}
                      render={(_, index) =>
                        <Layout key={index}>
                          <Cell span={4}>
                            <Input label="Keyword" value={`keywords[${index}].name`} />
                          </Cell>
                          <Cell span={8}>
                            <Input label="Keyword Url" value={`keywords[${index}].url`} />
                          </Cell>
                        </Layout>
                      } />
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header>
                    Recommend Products
                  </Card.Header>

                  <Card.Content>
                    <DraggableList
                      data={recommends}
                      setData={setRecommends}
                      numOfVisibleSecondaryActions={1}
                      primaryActions={degreePrimaryRecommendsActions}
                      secondaryActions={degreeSecondaryRecommendsActions}
                      render={(value, index) =>
                        <Layout key={index}>
                          <Cell>
                            {value.title}
                          </Cell>
                        </Layout>
                      } />
                  </Card.Content>
                </Card>
              </Cell>
            </Layout>
          </Page.Content>

          <Page.Footer divider fixed>
            <Box align="right">
              <Button label="save" type="submit" skin="primary" />
            </Box>
          </Page.Footer>
        </form>
      </FormProvider>


      <Modal isOpen={recommendModalStatus}>
        <Card className={['w-500']}>
          <Card.Header>Edit Recommend Detail</Card.Header>
          <Card.Content>
            <Layout>
              {
                // <Layout>
                //   <Cell>
                //     <Input label="title" value={`recommends[${index}].title`} />
                //   </Cell>

                //   <Cell span={4} rows={2}>
                //     <FileUpload id="recommendImage" />
                //   </Cell>
                //   <Cell span={8}>
                //     <Input label="Name" value={`recommends[${index}].recommentTitle`} />
                //   </Cell>
                //   <Cell span={8}>
                //     <Input label="description" value={`recommends[${index}].recommendDescription`} />
                //   </Cell>

                //   <Cell span={4} rows={2}>
                //     <FileUpload id="recommendImage2" />
                //   </Cell>
                //   <Cell span={8}>
                //     <Input label="Name" value={`recommends[${index}].recommentTitle2`} />
                //   </Cell>
                //   <Cell span={8}>
                //     <Input label="description" value={`recommends[${index}].recommendDescription2`} />
                //   </Cell>
                // </Layout>
              }
            </Layout>
          </Card.Content>

          <Card.Footer align="right">
            <Box gap="5px">
              <Button label="cancel" onClick={() => closeModal()} />
              <Button label="submit" type="submit" skin="primary" />
            </Box>
          </Card.Footer>
        </Card>
      </Modal>
    </Page >
  );
}

export default Main;