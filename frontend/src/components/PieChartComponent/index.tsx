import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

const PieChartComponent: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#F7931b" >
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>
    <SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie 
            data={[{amount:30, percent:95}]}
            labelLine={false}
            dataKey="percent"
          >
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
  </Container>
);

export default PieChartComponent;
