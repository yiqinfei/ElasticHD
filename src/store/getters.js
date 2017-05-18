const getters = {
  status: state => state.headerx.status,
  health: state => state.headerx.health,
  indexList: state => state.headerx.indexList,
  githubUrl: state => state.headerx.githubUrl,
  serverhost: state => state.headerx.serverHost,
  statusStyleObject: state => state.headerx.statusStyleObject,
  msg: state => state.sidebarx.msg,
  activeIndex: state => state.sidebarx.activeIndex,
  items: state => state.sidebarx.items,
  toggleShow: state => state.sidebarx.toggleShow,
  toggleTitle: state => state.toolsbarx.toggleTitle,
  btnGroup: state => state.toolsbarx.btnGroup,
  panelWidget: state => state.overviewx.panelWidget,
  statsInfo: state => state.overviewx.statsInfo,
  clusterInfo: state => state.overviewx.clusterInfo,
  charts: state => state.overviewx.charts,
  templateInfo: state => state.overviewx.templateInfo,
  options: state => state.searchx.options,
  result: state => state.searchx.result,
  showSpinner: state => state.searchx.showSpinner,
  IndexTemplateList: state => state.overviewx.IndexTemplateList,
  toggleMapping: state => state.mappingx.toggleMapping,
  mappingInfo: state => state.mappingx.mappingInfo
}
export default getters

