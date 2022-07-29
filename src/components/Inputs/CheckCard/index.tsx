import Element from "./Element";
import withHookForm from "./withHookForm";
import { CheckedCardType, InputControllerProps } from "../types";

const CheckCard = withHookForm<CheckedCardType & InputControllerProps>(Element);

export default CheckCard;
