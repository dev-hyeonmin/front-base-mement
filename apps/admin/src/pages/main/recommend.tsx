import { Button, ButtonProps, Card, Cell, DraggableList, Layout, SecondaryActionProps } from "@mement-frontend/ui";
import { useEffect } from "react";
import { IMainRecommend } from "../../api/main/types";
import DeleteIcon from '/public/delete.png';

interface IMainRecommendProps {
  data: IMainRecommend[];
  setData: React.Dispatch<React.SetStateAction<any>>;
  updateFormData: (name: any, value: any) => void;
  openModal: (index?: number) => void;
}

const MainRecommend = ({
  data,
  setData,
  updateFormData,
  openModal
}: IMainRecommendProps) => {
  const degreePrimaryRecommendsActions: ButtonProps[] = [
    {
      label: "Edit",
      skin: 'primary',
      priority: 'primary',
      onClick: (_, index) => { openModal(index); }
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

  useEffect(() => {    
    updateFormData("recommends", data);
  }, [data]);

  const addKeyword = () => {
    setData((currentValue: any) => [...currentValue, {
      title: "New Recommend Item",
      recommendTitle: "",
      recommendTitle2: "",
      recommendDescription: "",
      recommendDescription2: "",
      recommendImage: "",
      recommendImage2: ""
    }])
  }

  const deleteRecommend = (index: number | undefined) => {
    if (index != undefined) {
      setData((currentValue: any) => currentValue.filter((_: any, valueIndex: number) => index != valueIndex));
    }
  }

  return (
    <Card>
      <Card.Header
        title="Recommend Products"
        subtitle="메인 페이지 하단의 저장시 순서만 저장되며, 수정 모달창에서 저장시 해당 정보가 바로 저장됩니다. "
        suffix={<Button label="Add" skin="primary" onClick={() => addKeyword()} />} />

      <Card.Content>
        <DraggableList
          data={data}
          setData={setData}
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
  );
}

export default MainRecommend;