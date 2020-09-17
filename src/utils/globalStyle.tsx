import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
export const GlobalStyle = createGlobalStyle`
body, * {
    font-family: 'Proxima Nova', sans-serif;
  }
  body{
    background-color: #f5f6fa;
    .ant-layout{
      background:none;
    }
  }
`;