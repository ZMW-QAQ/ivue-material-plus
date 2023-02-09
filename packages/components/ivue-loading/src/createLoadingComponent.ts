import {
  createApp,
  createVNode,
  reactive,
  ref,
  toRefs,
  h,
  Transition,
  vShow,
  withCtx,
  withDirectives,
} from 'vue';
import { removeClass } from '@ivue-material-plus/utils';
import { useNamespace } from '@ivue-material-plus/hooks';

// ts
import type { LoadingOptionsResolved } from './types';

const prefixCls = 'ivue-loading';

export function createLoadingComponent(options: LoadingOptionsResolved) {
  // bem
  const bem = useNamespace(prefixCls);

  // 离开后的时间
  let afterLeaveTimer: number;

  // 离开的标志
  const afterLeaveFlag = ref<boolean>(false);

  // data
  const data = reactive({
    // 选项
    ...options,
    // 定位
    originalPosition: '',
    // 显示/隐藏
    originalOverflow: '',
    // 是否隐藏
    visible: false,
  });

  // 设置文字
  function setText(text: string) {
    data.text = text;
  }

  // 销毁
  function destroySelf() {
    // 父节点
    const target = data.parent;

    if (!target.LoadingAddClassList) {
      let loadingNumber: number | string | null =
        target.getAttribute('loading-number');
      loadingNumber = Number.parseInt(loadingNumber as any) - 1;

      // 删除当前loading
      if (!loadingNumber) {
        // 删除相对定位
        removeClass(target, bem.em('parent', 'relative'));

        target.removeAttribute('loading-number');
      }
      // add loading-number to parent
      else {
        target.setAttribute('loading-number', loadingNumber.toString());
      }

      // 删除隐藏
      removeClass(target, 'ivue-loading-parent--hidden');
    }

    // 删除节点
    removeLoadingChild();

    loadingInstance.unmount();
  }

  // 删除节点
  function removeLoadingChild(): void {
    vm.$el?.parentNode?.removeChild(vm.$el);
  }

  // 关闭
  function close() {
    // 自定义 beforeClose
    if (options.beforeClose && !options.beforeClose()) {
      return;
    }

    // 离开的标志
    afterLeaveFlag.value = true;

    // 延迟销毁关闭 400 ms
    clearTimeout(afterLeaveTimer);

    // 销毁元素
    afterLeaveTimer = window.setTimeout(handleAfterLeave, 400);

    // 关闭
    data.visible = false;

    // close
    options.close?.();
  }

  // 离开方法
  function handleAfterLeave() {
    if (!afterLeaveFlag.value) {
      return;
    }

    afterLeaveFlag.value = false;

    // 清除class
    const target = data.parent;
    target.LoadingAddClassList = undefined;

    // 销毁元素
    destroySelf();
  }

  // 节点元素
  const LoadingComponent = {
    name: prefixCls,
    setup() {
      return () => {
        // 圆形
        const spinner = h(
          'svg',
          {
            class: 'circular',
            viewBox: '25 25 50 50',
          },
          [
            h('circle', {
              class: 'path',
              cx: '50',
              cy: '50',
              r: '20',
              fill: 'none',
            }),
          ]
        );

        // 图标
        const noSpinner = h('i', { class: data.iconClass }, data.iconText);

        // 需要渲染的文字
        const spinnerText = h('span', { class: bem.e('text') }, [data.text]);

        // 渲染
        return h(
          Transition,
          {
            name: 'fade',
            onAfterLeave: handleAfterLeave,
          },
          {
            default: withCtx(() => [
              withDirectives(
                createVNode(
                  'div',
                  {
                    style: {
                      backgroundColor: data.background || '',
                    },
                    class: [
                      bem.b('mask'),
                      data.customClass,
                      data.fullscreen ? bem.is('fullscreen') : '',
                    ],
                  },
                  [
                    h(
                      'div',
                      {
                        class: bem.b('spinner'),
                      },
                      h(
                        'div',
                        {
                          class: bem.be('spinner', 'content'),
                        },
                        [
                          // 图标渲染函数
                          data.loadingSpinner
                            ? data.loadingSpinner()
                            : !data.iconClass
                            ? spinner
                            : noSpinner,
                          data.text ? spinnerText : null,
                        ]
                      )
                    ),
                  ]
                ),
                [[vShow, data.visible]]
              ),
            ]),
          }
        );
      };
    },
  };

  // 创建节点
  const loadingInstance = createApp(LoadingComponent);
  const vm = loadingInstance.mount(document.createElement('div'));

  return {
    ...toRefs(data),
    setText,
    close,
    removeLoadingChild,
    handleAfterLeave,
    vm,
    get $el(): HTMLElement {
      return vm.$el;
    },
  };
}

export type LoadingInstance = ReturnType<typeof createLoadingComponent>;
