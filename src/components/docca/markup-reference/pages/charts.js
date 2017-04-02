import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

// const style = `
//     chart { flow: row; valign-items: bottom; width: 140 }
//     chartH { flow: column; width: 140 }

//     bar { width: 50; margin: 2 }
//     barH {
//       height: 20; margin: 5; border-radius: 5; padding: 5;
//       font-color: white; font-size: 14
//     }

//     .redBg { background-color: red }
//     .greenBg { background-color: green }
//     .blueBg { background-color: blue }

//     .height80 { height: 80 }
//     .height100 { height: 100 }
//     .height130 { height: 130 }

//     .width80 { width: 80 }
//     .width100 { width: 100 }
//     .width130 { width: 130 }
// `;

// const eg = `

//   <ro>
//     <co class="items-center">
//       <chart>
//         <bar class="redBg height80"></bar>
//         <bar class="greenBg height130"></bar>
//         <bar class="blueBg height100"></bar>
//       </chart>
//     </co>
//     <co>
//       <chartH class="center">
//         <barH class="redBg width80">No</barH>
//         <barH class="greenBg width130">Yes</barH>
//         <barH class="blueBg width100">Maybe</barH>
//       </chartH>
//     </co>
//   </ro>
// `;

const style = `
    chart { flow: row; valign-items: bottom; width: 140 }
    bar { width: 50; margin: 2 }

    .redBg { background-color: red }
    .greenBg { background-color: green }
    .blueBg { background-color: blue }

    .height80 { height: 80 }
    .height100 { height: 100 }
    .height130 { height: 130 }
`;

const eg = `

  <ro>
    <co class="items-center">
      <chart>
        <bar class="redBg height80"></bar>
        <bar class="greenBg height130"></bar>
        <bar class="blueBg height100"></bar>
      </chart>
    </co>
  </ro>
`;

const style2 = `
    chartH { flow: column; width: 140 }
    barH {
      height: 20; margin: 5; border-radius: 5; padding: 5;
      font-color: white; font-size: 10
    }

    .redBg { background-color: red }
    .greenBg { background-color: green }
    .blueBg { background-color: blue }

    .width80 { width: 80 }
    .width100 { width: 100 }
    .width130 { width: 130 }
`;

const eg2 = `

  <ro>
    <co>
      <chartH class="center">
        <barH class="redBg width80">No</barH>
        <barH class="greenBg width130">Yes</barH>
        <barH class="blueBg width100">Maybe</barH>
      </chartH>
    </co>
  </ro>
`;

const preStyle = `<style>${style}</style>`;
const preStyle2 = `<style>${style2}</style>`;

const Charts = () => (
  <newPage id='charts'>
    <Header>Charts</Header>
    <p>Not really, but..</p>
    <block>
      <style>{style}</style>
      <subhead>Vertical Bar Chart</subhead>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
    <block>
      <style>{style2}</style>
      <subhead>Horizontal Bar Chart</subhead>
      <Pre>{preStyle2}{eg2}</Pre>
      <EG>{eg2}</EG>
    </block>
  </newPage>
);

export default Charts;
