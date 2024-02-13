import { Box, Button, ButtonProps, Tag } from '../..';
import { CommonProps } from '../../common';

export interface TagsProps {
  value: number | string;
  name: string;
}
export interface TagListProps extends CommonProps {
  tags?: TagsProps[];
  actionButton?: ButtonProps;
  onTagRemove: (value: number | string) => void;
}

export const TagList = ({
  tags = [],
  actionButton = { label: 'action button', onClick: () => { } },
  onTagRemove
}: TagListProps) => {
  return (
    <div className={['ui-taglist'].join(' ')}>
      <Box gap='5px' wrap>
        {tags.map(tag =>
          <Tag key={`tag-${tag.value}-${tag.name}`} onTagRemove={() => onTagRemove(tag.value)}>{tag.name}</Tag>
        )}

        <Button size='tiny' skin='primary' priority='secondary' {...actionButton} />
      </Box>
    </div>
  );
};
