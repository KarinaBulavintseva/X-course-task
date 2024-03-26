export const getTotalPrice = ({
  price,
  itemsNumber,
}: {
  price: number;
  itemsNumber: number;
}): number => {
  return price * itemsNumber;
};
