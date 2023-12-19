import {
  Box,
  Button,
  Card,
  Cell,
  DraggableList,
  FormField,
  Input,
  Layout,
  Page
} from '@mement-frontend/ui';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IDetailEvent, IDetailProduct, IDetailProps } from '../../api/detail/types';
import DetailProductModal from './productModal';
import DetailProducts from './products';

const tempProducts: IDetailProduct[] = [
  {
    id: 1,
    name: "브이올렛 2cc 1회"
  },
  {
    id: 2,
    name: "LDM 홍조모드 1회"
  },
  {
    id: 3,
    name: "오리지널 수입 주름보톡스 1부위"
  },
  {
    id: 4,
    name: "프리미엄 국산 주름 보톡스 1부위"
  },
  {
    id: 5,
    name: "수입 주름보톡스 1부위"
  }
];

const tempEvents: IDetailEvent[] = [
  {
    id: 1,
    name: "[런칭] 프리미엄 엑소좀(ASCE+) 5cc"
  },
  {
    id: 2,
    name: "[기간한정] 올인원 리프팅 집중케어"
  },
  {
    id: 3,
    name: "[1회체험]  PDRN 연어톡신 4CC"
  },
  {
    id: 4,
    name: "[해피아워] 블루다이아 팔자실리프팅 4줄"
  },
  {
    id: 5,
    name: "피코플러스토닝 5회"
  }
];

const tempRelatedProducts: IDetailProduct[] = [
  {
    id: 1,
    name: "피코슈어토닝 5회"
  },
  {
    id: 2,
    name: "회오리 30줄"
  },
  {
    id: 3,
    name: "핑크팻주사 10cc"
  }
];

const ProductDetail = () => {
  const methods = useForm<IDetailProps>();
  const editorRef = useRef<any>();
  const [productModalType, setProductModalType] = useState("products");
  const [productModalStatus, setProductModalStatus] = useState(false);
  const [products, setProducts] = useState<IDetailProduct[]>(tempProducts);
  const [relatedProducts, setRelatedProducts] = useState<IDetailProduct[]>(tempRelatedProducts);
  const [events, setEvents] = useState(tempEvents.map((event) => ({
    ...event,
    disabledDrag: true
  })));

  const setEditorValue = (ref: any, name: any) => {
    const editor = ref?.current?.getInstance()?.getHTML();
    methods.setValue(name, editor);
  }

  useEffect(() => {
    methods.setValue("products", products);
    methods.setValue("events", events);
    methods.setValue("relatedProducts", relatedProducts);
  }, [products, events, relatedProducts]);

  const onSubmit: SubmitHandler<IDetailProps> = async (data) => {
    console.log(data);
  };

  const onProductSubmit: SubmitHandler<IDetailProduct> = (data: IDetailProduct) => {
    console.log(data);

    if (productModalType == "products") {
      setProducts((currentValue: any) => [...currentValue, {
        name: data.name
      }]);
    } else if (productModalType == "relatedProducts") {
      setRelatedProducts((currentValue: any) => [...currentValue, {
        name: data.name
      }]);
    }

    closeProductModal();
  };

  const openProductModal = (type: string) => {
    setProductModalType(type);
    setProductModalStatus(true);
  }

  const closeProductModal = () => {
    setProductModalStatus(false);
  }

  return (
    <Page>
      <Page.Header title="Product detail" />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Page.Content fixed>
            <Layout>
              <Cell>
                <Card>
                  <Card.Header title="Title" />

                  <Card.Content>
                    <Layout gap="10px">
                      <Cell>
                        <FormField label="title" required>
                          <Input
                            value="title"
                            registerOption={{ required: 'Title is required.' }}
                          />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="subTitle">
                          <Input value="subTitle" />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header
                    title="Products"
                    suffix={
                      <Button label='Add' onClick={() => openProductModal("products")} />
                    } />
                  <Card.SubHeader>해당 대분류에 속한 정규가(일반) 상품 관리</Card.SubHeader>
                  <DetailProducts
                    data={products}
                    setData={setProducts} />
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header title="Events" />
                  <Card.SubHeader>해당 대분류에 속한 이벤트 상품입니다. 이벤트 페이지의 대분류 연결에서 수정 하실 수 있습니다.</Card.SubHeader>

                  <Card.Content>
                    <DraggableList
                      data={events}
                      setData={setEvents}
                      render={(value, index) =>
                        <Box key={index}>
                          {value.name}
                        </Box>
                      } />
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header title="Content" />

                  <Card.Content>
                    <Layout gap="10px">
                      <Cell>
                        <Editor ref={editorRef} onBlur={() => setEditorValue(editorRef, "content")} />
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header
                    title="Related Products"
                    suffix={
                      <Button label='Add' onClick={() => openProductModal("relatedProducts")} />
                    } />

                  <DetailProducts
                    data={relatedProducts}
                    setData={setRelatedProducts} />
                </Card>
              </Cell>
            </Layout>
          </Page.Content>

          <Page.Footer fixed divider>
            <Box align="right">
              <Button
                label="submit"
                type="submit"
                skin="primary"
                priority="primary"
              />
            </Box>
          </Page.Footer>
        </form>
      </FormProvider>

      <DetailProductModal isOpen={productModalStatus} onSubmit={onProductSubmit} onClose={closeProductModal} />
    </Page>
  );
};

export default ProductDetail;
