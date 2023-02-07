import type { VNode, ComponentInternalInstance, Ref, PropType } from 'vue';
import type { Table, TableRefs } from '../table/defaults';

import { oneOf } from '../../../utils/assist';

// 插槽内容 slots
type SlotsContent = { column: TableColumnCtx; $index: number };

type FilterMethods = (value, row: any, column: TableColumnCtx) => void;

// 数据过滤的选项
// 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。
// array[{ text, value }]
type Filters = {
  text: string;
  value: string;
}[];

// 列参数
interface TableColumnCtx {
  id: string;
  prop: string;
  label: string;
  width: string | number;
  minWidth: string | number;
  children?: TableColumnCtx[];
  isSubColumn: boolean;
  type: string;
  sortable: boolean | string;
  property: string;
  align: string;
  headerAlign: string;
  showOverflowTooltip: boolean;
  filters: Filters;
  filterMethod: FilterMethods;
  filterPlacement: string;
  filterOpened?: boolean;
  index: number | ((index: number) => number);
  rawColumnKey: string;
  renderHeader: (data: SlotsContent) => VNode;
  renderCell: (data: any) => void;
  formatter: (
    row: Record<string, any>,
    column: TableColumnCtx,
    cellValue,
    index: number
  ) => VNode | string;
  columnWidth: number;
  className: string;
  fixed: boolean | string;
  getColumnIndex: () => number;
  currentIndex: number;
  level: number;
  rowSpan: number;
  colSpan: number;
  order: string | null;
  labelClassName: string;
  columns: TableColumnCtx[];
  resizable: boolean;
  selectable: (row: any, index: number | string) => boolean;
  reserveSelection: boolean;
  sortOrders: ('ascending' | 'descending' | null)[];
  sortBy: string | ((row: any, index: number) => string) | string[];
  sortMethod: (a: any, b: any) => number;
  columnKey: string;
  filterable: boolean | FilterMethods | Filters;
  filterMultiple: boolean;
  filteredValue: string[];
}

// 列节点内容
interface TableColumn extends ComponentInternalInstance {
  vnode: {
    vParent: TableColumn | Table;
  } & VNode;
  vParent: TableColumn | Table;
  columnId: string;
  columnConfig: Ref<Partial<TableColumnCtx>>;
}

interface ColumnParent {
  columnConfig?: Ref<Partial<TableColumnCtx>>;
  tableId?: string;
  vnode?: {
    vParent?: TableColumn | Table;
  } & VNode;
  parent?: Table;
  refs?: TableRefs;
  columnId?: string;
}

export type { TableColumnCtx, TableColumn, ColumnParent };

export default {
  /**
   * 对应列的类型
   *
   * selection / index / expand
   *
   * @type {String}
   */
  type: {
    type: String,
    validator(value: string | boolean) {
      return oneOf(value, ['selection', 'index', 'expand', 'default']);
    },
    default: 'default',
  },
  /**
   * 字段名称 对应列内容的字段名
   *
   * @type {String}
   */
  prop: {
    type: String,
  },
  /**
   * column 的 key
   *
   * @type {String}
   */
  label: {
    type: String,
  },
  /**
   * 对应列的宽度
   *
   * @type {String | Number}
   */
  width: {
    type: [String, Number],
    default: '',
  },
  /**
   * 对应列的最小宽度
   *
   * @type {String | Number}
   */
  minWidth: {
    type: [String, Number],
    default: '',
  },
  /**
   * 对应列是否可以排序
   *
   * @type {Boolean | String}
   */
  sortable: {
    type: [Boolean, String],
    validator(value: string | boolean) {
      return oneOf(value, ['custom', false, true]);
    },
    default: false,
  },
  /**
   * 字段名称 对应列内容的字段名
   *
   * @type {String}
   */
  property: {
    type: String,
  },
  /**
   * 对齐方式
   *
   * left / center / right
   *
   * @type {String}
   */
  align: {
    type: String,
    validator(value: string | boolean) {
      return oneOf(value, ['left', 'center', 'right']);
    },
    default: 'left',
  },
  /**
   * 表头对齐方式
   *
   * left / center / right
   *
   * @type {String}
   */
  headerAlign: {
    type: String,
    validator(value: string | boolean) {
      return oneOf(value, ['left', 'center', 'right', '']);
    },
    default: '',
  },
  /**
   * 当内容过长被隐藏时显示 tooltip
   *
   * @type {Boolean}
   */
  showOverflowTooltip: {
    type: Boolean,
    default: false,
  },
  /**
   * 数据过滤的选项
   * 数组格式，数组中的元素需要有 text 和 value 属性
   * 数组中的每个元素都需要有 text 和 value 属性。
   *
   * @type {Array}
   */
  filters: {
    type: Array as PropType<TableColumnCtx['filters']>,
  },
  /**
   * 数据过滤使用的方法
   * 如果是多选的筛选项
   * 对每一条数据会执行多次
   * 任意一次返回 true 就会显示。
   *
   * @type {Function}
   */
  filterMethod: {
    type: Function as PropType<TableColumnCtx['filterMethod']>,
  },
  /**
   * 过滤弹出框的定位
   *
   * @type {String}
   */
  filterPlacement: {
    type: String,
    default: 'bottom-start',
  },
  /**
   * 如果设置了 type=index，可以通过传递 index 属性来自定义索引
   *
   * @type {Number, Function}
   */
  index: {
    type: [Number, Function] as PropType<TableColumnCtx['index']>,
  },
  /**
   * 列标题 Label 区域渲染使用的 Function
   *
   * @type {Function}
   */
  renderHeader: {
    type: Function as PropType<TableColumnCtx['renderHeader']>,
  },
  /**
   * 用来格式化内容
   *
   * @type {Function}
   */
  formatter: {
    type: Function as PropType<TableColumnCtx['formatter']>,
  },
  /**
   * 列的 className
   *
   * @type {String}
   */
  className: {
    type: String,
  },
  /**
   * 列是否固定在左侧或者右侧。
   *
   * @type {Boolean | String}
   */
  fixed: {
    type: [Boolean, String],
    validator(value: string | boolean) {
      return oneOf(value, ['left', 'right', true, false]);
    },
  },
  /**
   * 当前列标题的自定义类名
   *
   * @type {String}
   */
  labelClassName: {
    type: String,
  },
  /**
   * 对应列是否可以通过拖动改变宽度（需要在设置 border 属性为真）
   *
   * @type {Boolean}
   */
  resizable: {
    type: Boolean,
    default: true,
  },
  /**
   * 仅对 type=selection 的列有效，
   * 类型为 Function，
   * Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
   *
   * @type {Function}
   */
  selectable: {
    type: Function as PropType<TableColumnCtx['selectable']>,
  },
  /**
   * 保存数据更新前选中的值
   *
   * @type {Boolean}
   */
  reserveSelection: {
    type: Boolean,
    default: false,
  },
  /**
   * 数据在排序时所使用排序策略的轮转顺序
   *
   * @type {Array}
   */
  sortOrders: {
    type: Array as PropType<TableColumnCtx['sortOrders']>,
    default: () => {
      return ['ascending', 'descending', null];
    },
  },
  /**
   * 没有指定数据按照哪个属性进行排序
   *
   * @type {String, Function, Array}
   */
  sortBy: {
    type: [String, Function, Array] as PropType<TableColumnCtx['sortBy']>,
  },
  /**
   * 自定义排序方法
   *
   * @type {Function}
   */
  sortMethod: {
    type: Function as PropType<TableColumnCtx['sortMethod']>,
  },
  /**
   * column 的 key， column 的 key
   * 如果需要使用 filter-change 事件
   * 则需要此属性标识是哪个 column 的筛选条件
   *
   * @type {String}
   */
  columnKey: {
    type: String,
  },
  /**
   * 数据过滤的选项是否多选
   *
   * @type {Boolean}
   */
  filterMultiple: {
    type: Boolean,
    default: true,
  },
  /**
   * 选中的数据过滤项
   * 如果需要自定义表头过滤的渲染方式
   * 可能会需要此属性。
   *
   * @type {Array}
   */
  filteredValue: {
    type: Array as PropType<TableColumnCtx['filteredValue']>,
  },
};
