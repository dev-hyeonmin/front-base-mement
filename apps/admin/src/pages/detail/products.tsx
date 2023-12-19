import { Box, Button, Card, DraggableList, Text } from "@mement-frontend/ui";
import { IDetailProduct } from "../../api/detail/types";

interface IDetailProductsProps {
  data: IDetailProduct[];
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const DetailProducts = ({
  data,
  setData,
}: IDetailProductsProps) => {
  const deleteData = (index: number | undefined) => {
    if (index != undefined) {
      setData((currentValue: any) => currentValue.filter((_: any, valueIndex: number) => index != valueIndex));
    }
  }

  return (
    <Card.Content>
      <DraggableList
        data={data}
        setData={setData}
        render={(value, index) =>
          <Box key={index} align="space-between" verticalAlign="middle" className={['w-full']}>
            <Text>{value.name}</Text>

            <Button label="Del" skin="warning" onClick={() => deleteData(index)} />
          </Box>
        } />
    </Card.Content>
  );
}

export default DetailProducts;