import styled from 'styled-components';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

const LI = styled.p`
  display: flex;
  justify-content: space-between;
  & > span:nth-child(1) {
    color: #f44336;
    flex: 0 1 5%;
  }
  & > span:nth-child(2) {
    flex: 0 1 90%;
    line-height: 1.1;
  }
`;

const renderRow = (props) => {
  const { index, style, data } = props;
  return (
    <LI key={index} style={style}>
      <span>{index + 1 + '.'}</span>
      <span>{data[index] + '.'}</span>
    </LI>
  );
};

const V_Menu = ({ content }) => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        height={height}
        width={width}
        itemCount={content.length}
        itemSize={width < 365 ? 70 : 50}
        itemData={content}
      >
        {renderRow}
      </List>
    )}
  </AutoSizer>
);

export default V_Menu;
