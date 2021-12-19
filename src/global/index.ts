import { AppConstant, DesktopConfig } from './interface';

const appConstants: AppConstant = {
  ID_REG: /^[A-Za-z0-9+]*$/,
  ID_REG_MSG: '영문, 숫자만 가능합니다',
};

const desktopConfig: DesktopConfig = {
  width: {
    leftMainNav: 80,
    leftSubNav: 200,
    rightNav: 150,
  },
  height: {
    topBar: 44,
  },
};

export { appConstants, desktopConfig };
