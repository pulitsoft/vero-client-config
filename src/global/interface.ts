interface AppConstant {
  ID_REG: RegExp;
  ID_REG_MSG: string;
}

interface DesktopConfig {
  width: {
    leftMainNav: number;
    leftSubNav: number;
    rightNav: number;
  };
  height: {
    topBar: number;
  };
}

export type { AppConstant, DesktopConfig };
