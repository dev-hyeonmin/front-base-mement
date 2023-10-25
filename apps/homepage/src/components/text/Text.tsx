interface TextProps {
  title?: boolean;
  content: string;
}

export const Text = ({
  title = false,
  content
}: TextProps) => {
  const type = title ? "hm-text--title" : "";

  return (
    <div className={["hm-text", type].join(' ')} dangerouslySetInnerHTML={{__html: content}}></div>
  );
}

export default Text;