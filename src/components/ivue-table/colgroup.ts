import { h, defineComponent } from 'vue';

import { TableColumnCtx } from './table-column/defaults';

type Props = {
  columns: TableColumnCtx[];
  tableLayout?: string;
};

export default defineComponent({
  props: {
    /**
     * 列数据
     *
     * @type {Array}
     */
    columns: {
      type: Array,
      default: () => [],
    },
    /**
     * 设置表格单元、行和列的布局方式
     *
     * @type {String}
     */
    tableLayout: {
      type: String,
    },
  },
  methods: {
    // 渲染col
    renderCol(column: TableColumnCtx) {
      // 是否是自动表格布局
      const isAuto = this.tableLayout === 'auto';

      const obj = {
        key: `${this.tableLayout}-${column.id}`,
        style: {},
        name: undefined,
      };

      // auto
      if (isAuto) {
        obj.style = {
          width: `${column.width}px`,
        };
      }
      // fixed
      else {
        obj.name = column.id;
      }

      return h('col', obj);
    },
  },
  render(props: Props) {
    // 是否是自动表格布局
    const isAuto = props.tableLayout === 'auto';

    // 列数量
    let columns = props.columns || [];

    // auto
    if (isAuto) {
      if (columns.every((column) => column.width === undefined)) {
        columns = [];
      }
    }

    return h(
      'colgroup',
      {},
      columns.map((column) => this.renderCol(column))
    );
  },
});
