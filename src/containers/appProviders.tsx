import theme from '@/styles/theme/themeConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import React from 'react';
type Props = React.PropsWithChildren;

export const AppProviders = ({ children }: Props) => {
  return (
    <ConfigProvider theme={theme}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};
