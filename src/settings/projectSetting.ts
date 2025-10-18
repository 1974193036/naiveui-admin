const setting = {
  app: {
    /**
     * 应用标题
     */
    title: 'Naive UI Admin',
  },
  theme: {
    /**
     * 主题主色
     */
    primaryColor: '#1677ff',
    primaryColorHover: '#0958d9',
    primaryColorPressed: '#003eb3',
    primaryColorSuppl: '#0958d9',
  },
  layout: {
    /**
     * 布局模式（时间关系暂时目前只有这一种布局）
     */
    mode: 'sidebar',
    /**
     * 是否显示顶栏
     */
    showNav: true,
    /**
     * 是否显示 logo
     */
    showLogo: true,
    /**
     * 是否显示侧边栏
     */
    showSidebar: true,
    /**
     * 顶栏是否固定
     */
    navFixed: true,
    /**
     * 侧边栏是否折叠
     */
    collapsed: false,
    /**
     * 顶栏高度
     */
    navHeight: 50,
    /**
     * 侧边栏宽度
     */
    sidebarWidth: 224,
    /**
     * 侧边栏折叠后的宽度
     */
    sidebarCollapsedWidth: 80,
  },
}

export default setting
