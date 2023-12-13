import { Box, Button, ButtonProps, Card, Cell, DraggableList, FileUpload, ImageViewer, Input, Layout, Modal, Page, SecondaryActionProps } from "@mement-frontend/ui";
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
  const recommendMethods = useForm<IMainRecommend>();
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

  const onRecommendSubmit: SubmitHandler<IMainRecommend> = async (data) => {
    console.log(data);
  };

  return (
    <Page>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Page.Header title="Main Page"/>

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
                  <Card.Header title="Recommend Products" subtitle="메인 페이지 하단의 저장시 순서만 저장되며, 수정 모달창에서 저장시 해당 정보가 바로 저장됩니다. " />

                  <Card.Content>
                    <DraggableList
                      data={recommends}
                      setData={setRecommends}
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
          <FormProvider {...recommendMethods}>
            <form onSubmit={recommendMethods.handleSubmit(onRecommendSubmit)}>
              <Card.Header
                title="Edit Recommend Detail"/>
                
              <Card.Content>
                <Layout>
                  <Cell>
                    <Input label="title" value={`title`} />
                  </Cell>

                  <Cell span={4} rows={2}>
                    <FileUpload value={`recommendImage`}>
                      {({ openFileUploadDialog, deleteFile }) => (
                        <ImageViewer
                          imageFile={recommendMethods.watch('recommendImage')}
                          deafultImageUrl="http://museclinic.co.kr/new_homepage_files/main_NSeOvZY31693817874.jpg"
                          onAddImage={openFileUploadDialog}
                          onRemoveImage={deleteFile} />
                      )}
                    </FileUpload>
                  </Cell>
                  <Cell span={8}>
                    <Input label="Name" value={`recommendTitle`} />
                  </Cell>
                  <Cell span={8}>
                    <Input label="description" value={`recommendDescription`} />
                  </Cell>

                  <Cell span={4} rows={2}>
                    <FileUpload value={`recommendImage2`}>
                      {({ openFileUploadDialog, deleteFile }) => (
                        <ImageViewer
                        status="error"
                        imageFile={recommendMethods.watch('recommendImage2')}
                        onAddImage={openFileUploadDialog}
                        onRemoveImage={deleteFile} />
                      )}
                    </FileUpload>
                  </Cell>
                  <Cell span={8}>
                    <Input label="Name" value={`recommendTitle2`} />
                  </Cell>
                  <Cell span={8}>
                    <Input label="description" value={`recommendDescription2`} />
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Footer align="right">
                <Box gap="5px">
                  <Button label="cancel" onClick={() => closeModal()} />
                  <Button label="submit" type="submit" skin="primary" priority="primary" />
                </Box>
              </Card.Footer>
            </form>
          </FormProvider>
        </Card>
      </Modal>
    </Page >
  );
}

export default Main;