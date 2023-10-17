import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import { FlatList, View } from "native-base";
import BudgetCard from "../Budgets/BudgetCard";
import moment from "moment";

const BudgetForMonth = () => {
  return (
    // <ComponentWrapper title={`Budget for ${moment().format("MMMM")}`}>
    <FlatList
      w="full"
      data={[...new Array(1).keys()]}
      renderItem={() => <BudgetCard />}
      ItemSeparatorComponent={<View my={"2"} />}
    />
    // </ComponentWrapper>
  );
};

export default BudgetForMonth;
