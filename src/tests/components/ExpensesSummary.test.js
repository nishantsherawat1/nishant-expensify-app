import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import {shallow} from 'enzyme';

test('should render expense eummary with 1 expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render expense eummary with multiple expenses',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={29878667535}/>);
    expect(wrapper).toMatchSnapshot();
})