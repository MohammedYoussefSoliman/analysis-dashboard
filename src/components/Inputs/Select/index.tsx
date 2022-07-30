import Element from "./Select";
import withHookForm from "./withHookForm";
import { SelectProps, InputControllerProps } from "../types";

type SelectPropsType = SelectProps & InputControllerProps;

const Select = withHookForm<SelectPropsType>(Element);

export { default as SelectInput } from "./Select";

export default Select;
