import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import { FlatList, View } from "native-base";
import BudgetCard from "../Budgets/BudgetCard";
import moment from "moment";
import SavingPlanCard from "../Savings/SavingPlanCard";

const SavingsForMonth = () => {
  return (
    // <ComponentWrapper title={`Saving plan for ${moment().format("MMMM")}`}>
    <FlatList
      w="full"
      data={[...new Array(1).keys()]}
      renderItem={() => <SavingPlanCard />}
      ItemSeparatorComponent={<View my={"2"} />}
    />
    // </ComponentWrapper>
  );
};

export default SavingsForMonth;
