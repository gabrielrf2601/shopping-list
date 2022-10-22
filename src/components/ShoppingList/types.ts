import { ShoppingItem } from "../../screens/List/types";

export interface ShoppingListProps {
  items: ShoppingItem[];
  selectItem(index: number): void;
  handleDeleteItem(item: ShoppingItem): void;
}