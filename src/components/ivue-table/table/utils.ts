import type { Store } from '../store';
import type { TableColumnCtx } from '../table-column/defaults';

function useUtils(store: Store) {
  // 设置当前选择的行
  const setCurrentRow = (row: TableColumnCtx) => {
    store.commit('setCurrentRow', row);
  };

  // 返回当前选中的行
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };

  // 选中当前行
  const toggleRowSelection = (row: TableColumnCtx, selected: boolean) => {
    store.toggleRowSelection(row, selected, false);
    store.updateAllSelected();
  };

  // 清除选择行
  const clearSelection = () => {
    store.clearSelection();
  };

  // 用于清空排序条件，数据会恢复成未排序的状态
  const clearSort = () => {
    store.clearSort();
  };

  // 手动排序表格,参数 prop 属性指定排序列 order 指定排序顺序
  const sort = (prop: string, order: string) => {
    store.commit('sort', { prop, order });
  };

  // 传入由columnKey 组成的数组以清除指定列的过滤条件
  const clearFilter = (columnKeys: string[]) => {
    store.clearFilter(columnKeys);
  };

  // 切换行展开
  const toggleRowExpansion = (row: TableColumnCtx, expanded: boolean) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };

  return {
    // 设置当前选择的行
    setCurrentRow,
    // 返回当前选中的行
    getSelectionRows,
    // 选中当前行
    toggleRowSelection,
    // 清除选择行
    clearSelection,
    // 用于清空排序条件，数据会恢复成未排序的状态
    clearSort,
    // 手动排序表格,参数 prop 属性指定排序列 order 指定排序顺序
    sort,
    // 传入由columnKey 组成的数组以清除指定列的过滤条件
    clearFilter,
    // 切换行展开
    toggleRowExpansion,
  };
}

export default useUtils;
