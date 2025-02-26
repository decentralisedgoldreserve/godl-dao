import { utils } from "ethers";

export const safeSub = (n1: string, n2: string) => {
  const bn1 = utils.parseUnits(n1, 18);
  const bn2 = utils.parseUnits(n2, 18);
  const result = bn1.sub(bn2);
  return utils.formatUnits(result, 18);
};
