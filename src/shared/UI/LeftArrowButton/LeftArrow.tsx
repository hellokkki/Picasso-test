import React from "react";
import LeftArrowIcon from '../../../assets/LeftArrowIcon'

type TLeftArrowProps = {
  size: number;
  color: string;
};

const LeftArrow: React.FC<TLeftArrowProps> = ({ size, color }) => {
  return  <LeftArrowIcon size={size} color={color} name="arrow"/>
};

export default LeftArrow;
