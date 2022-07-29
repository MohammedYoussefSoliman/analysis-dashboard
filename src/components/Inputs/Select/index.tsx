import Element from "./Select";
import withHookForm from "./withHookForm";
import { SelectProps, InputControllerProps } from "../types";

type SelectPropsType = SelectProps & InputControllerProps;

const Select = withHookForm<SelectPropsType>(Element);

export default Select;
