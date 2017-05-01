import { h } from 'preact';

const Index = () => (
  <co class='index'>
    <subhead>Index</subhead>
    <co class='index-container' index-el='pages'>
      <ro class='index-page-row' index-el='page-link'>
        <o><span index-el='page-title'>Untitled Page</span></o>
        <ro class='index-page-number-row'><span index-el='page-number'>999</span></ro>
      </ro>
      <co index-el='page-marks'>
        <ro class='index-mark-row' index-el='mark-link'>
          <o> - <span index-el='mark-title'>Untitled</span></o>
        </ro>
      </co>
    </co>
  </co>
);

export default Index;
