import { PlaceholderProps, components } from "react-select";
import { OptionType } from "./types";

export default function Placeholder(props: PlaceholderProps<OptionType, true>) {
  const { children } = props;
  return <components.Placeholder {...props}>{children}</components.Placeholder>;
}
