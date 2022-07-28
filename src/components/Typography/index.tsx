import typographyConfig from "./typographyConfig";
import { TypographyPropsType } from "./types";
import TextElement from "./Text";

export default function Typography(Props: TypographyPropsType) {
  return <TextElement as="span" {...Props} />;
}

const h1 = (Props: TypographyPropsType) => {
  const config = typographyConfig.h1;

  return (
    <TextElement
      as="h1"
      fontSize={config.sizes}
      weight={config.weight as number}
      isHeader
      {...Props}
    />
  );
};

const h2 = (Props: TypographyPropsType) => {
  const config = typographyConfig.h2;

  return (
    <TextElement
      as="h2"
      fontSize={config.sizes}
      weight={config.weight as number}
      isHeader
      {...Props}
    />
  );
};

const h3 = (Props: TypographyPropsType) => {
  const config = typographyConfig.h3;

  return (
    <TextElement
      as="h3"
      fontSize={config.sizes}
      weight={config.weight as number}
      isHeader
      {...Props}
    />
  );
};

const h4 = (Props: TypographyPropsType) => {
  const config = typographyConfig.h4;

  return (
    <TextElement
      as="h3"
      fontSize={config.sizes}
      weight={config.weight as number}
      isHeader
      {...Props}
    />
  );
};

const h5 = (Props: TypographyPropsType) => {
  const config = typographyConfig.h5;

  return (
    <TextElement
      as="h3"
      fontSize={config.sizes}
      weight={config.weight as number}
      isHeader
      {...Props}
    />
  );
};

const h6 = (Props: TypographyPropsType) => {
  const config = typographyConfig.h6;

  return (
    <TextElement
      as="h6"
      fontSize={config.sizes}
      weight={config.weight as number}
      isHeader
      {...Props}
    />
  );
};

const p1 = (Props: TypographyPropsType) => {
  const config = typographyConfig.p1;

  return (
    <TextElement
      as="p"
      fontSize={config.sizes}
      weight={config.weight as number}
      {...Props}
    />
  );
};

const p2 = (Props: TypographyPropsType) => {
  const config = typographyConfig.p2;

  return (
    <TextElement
      as="p"
      fontSize={config.sizes}
      weight={config.weight as number}
      {...Props}
    />
  );
};

const p3 = (Props: TypographyPropsType) => {
  const config = typographyConfig.p2;

  return (
    <TextElement
      as="p"
      fontSize={config.sizes}
      weight={config.weight as number}
      {...Props}
    />
  );
};

const small = (Props: TypographyPropsType) => {
  const config = typographyConfig.small;

  return (
    <TextElement
      as="small"
      fontSize={config.sizes}
      weight={config.weight as number}
      {...Props}
    />
  );
};

Typography.H1 = h1;
Typography.H2 = h2;
Typography.H3 = h3;
Typography.H4 = h4;
Typography.H5 = h5;
Typography.H5 = h5;
Typography.H6 = h6;
Typography.P1 = p1;
Typography.P2 = p2;
Typography.P3 = p3;
Typography.Small = small;
