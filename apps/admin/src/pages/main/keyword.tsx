import { Button, Card, Cell, DraggableList, Input, Layout, SecondaryActionProps } from "@mement-frontend/ui";
import { useEffect } from "react";
import { IMainKeyword } from "../../api/main/types";
import DeleteIcon from '/public/delete.png';

interface IMainKeywordProps {
  data: IMainKeyword[];
  setData: React.Dispatch<React.SetStateAction<any>>;
  updateFormData: (name: any, value: any) => void;
}

const MainKeyword = ({
  data,
  setData,
  updateFormData
}: IMainKeywordProps) => {
  const degreeSecondaryKeywordActions: SecondaryActionProps[] = [
    {
      icon: <img src={DeleteIcon} />,
      text: "delete",
      priority: "secondary",
      onClick: (_, index) => { deleteKeyword(index); }
    }
  ];

  useEffect(() => {
    updateFormData("keywords", data);
  }, [data]);

  const addKeyword = () => {
    setData((currentValue: any) => [...currentValue, {
      id: 0,
      name: '',
      url: ''
    }])
  }

  const deleteKeyword = (index: number | undefined) => {
    if (index != undefined) {
      setData((currentValue: any) => currentValue.filter((_: any, valueIndex: number) => index != valueIndex));
    }
  }

  return (
    <Card>
      <Card.Header
        title="Consult Keyword"
        suffix={<Button label="Add" skin="primary" onClick={() => addKeyword()} />} />

      <Card.Content>
        <DraggableList
          data={data}
          setData={setData}
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
    </Card >
  );
}

export default MainKeyword;