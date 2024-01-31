import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Checkbox, Input, Radio } from '..';
import { CommonProps } from '../common';

interface RecordsProps {
  value: number | string;
  name: string;
}

export interface SelectorListProps extends CommonProps {
  data: RecordsProps[];
  multiple?: boolean;
}

export const SelectorList = ({
  className = [],
  data,
  multiple = false
}: SelectorListProps) => {
  const { watch } = useFormContext();
  const [list, setList] = useState(data);
  const searchQuery = watch("searchQuery");

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setList(filtered);
    } else {
      setList(data);
    }
  }, [searchQuery]);

  return (
    <div className={["ui-selectorlist", ...className].join(' ')}>
      <Input value={`searchQuery`} placeholder='Search...' />

      <Box className={['ui-selectorlist__list']} height='150px' direction='vertical' scroll>
        {list.map((item, index) =>
          <div className='ui-selectorlist__list-item' key={index}>
            {!multiple &&
              <Radio name="selectedIds" value={item.value} label={item.name} />
            }

            {multiple &&
              <Checkbox name="selectedIds" value={item.value} label={item.name} />
            }
          </div>
        )}
      </Box>
    </div>
  )
}