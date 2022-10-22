import { ViewProps } from "react-native";
import { ShoppingItem } from "../../screens/List/types";

export interface ModalProps extends ViewProps {
  visible: boolean;
  onClose?: () => void;
  onDelete?: () => void;
}