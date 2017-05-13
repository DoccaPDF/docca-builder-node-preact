import { h } from 'preact';

export const HelloWorld = () => {
  return (
    <doc>
      <page>
        Hello World
      </page>
    </doc>
  );
};

export const HelloRow = () => {
  return (
    <doc>
      <page>
        <row>Hello World</row>
      </page>
    </doc>
  );
};

export const NakedAndRow = () => {
  return (
    <doc>
      <page>
        Naked Text
        <row>Hello World</row>
        Naked Text
      </page>
    </doc>
  );
};

export const HelloStyle = () => {
  return (
    <doc>
      <style>{`
        page { padding: 5; margin: 5; border: 1; border-color: blue }
        row { padding: 5; margin: 5; border: 1; border-color: red; font-color: blue }
        n { font-color: green }
      `}</style>
      <page>
        Naked
        <row>Row</row>
      </page>
    </doc>
  );
};
