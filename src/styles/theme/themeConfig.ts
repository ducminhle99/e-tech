import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontFamily: `var(--font-primary)`,
    colorPrimary: '#00000005',
  },
  components: {
    Button: {
      fontSize: 14,
      fontWeight: 600,
    },
  },
};

export default theme;
