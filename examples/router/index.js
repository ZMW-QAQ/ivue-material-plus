import { createWebHistory, createRouter } from 'vue-router';
import Affix from '../components/affix';
import Input from '../components/input';
import Icon from '../components/icon';
import Button from '../components/button';
import Elevation from '../components/elevation';
import Layout from '../components/layout';
import Carousel from '../components/carousel';
import Switch from '../components/switch';
import BottomNav from '../components/bottom-nav';
import Breadcrumb from '../components/breadcrumb';
import Select from '../components/select';
import Steps from '../components/steps';
import UpLoad from '../components/upLoad';
import Progress from '../components/progress';
import Circle from '../components/circle';
import Loading from '../components/loading';
import Notice from '../components/notice';
import Message from '../components/message';
import LoadingBar from '../components/loading-bar';
import Tabs from '../components/tabs';
import Badge from '../components/badge';
import DatePicker from '../components/date-picker';
import Collapse from '../components/collapse';
import Cascader from '../components/cascader';
import Tooltip from '../components/tooltip';
import Chip from '../components/chip';
import Radio from '../components/radio';
import Checkbox from '../components/checkbox';
import Avatar from '../components/avatar';
import Page from '../components/page';
import Spin from '../components/spin';
import Table from '../components/table';
import AutoComplete from '../components/auto-complete';
import Animation from '../components/animation';
import CountDown from '../components/count-down';
import CountUp from '../components/count-up';
import Card from '../components/card';
import Scrollbar from '../components/scrollbar';
import Image from '../components/image';
import NoticeBar from '../components/notice-bar';
import CarouselLoop from '../components/carousel-loop';
import Ellipsis from '../components/ellipsis';
import RelativeTime from '../components/relative-time';
import BackTop from '../components/back-top';
import Modal from '../components/modal';
import Popover from '../components/popover';
import InputNumber from '../components/input-number';
import Menu from '../components/menu';
import Form from '../components/form';

const routes = [
  {
    path: '/Affix',
    name: 'Affix',
    component: Affix,
  },
  {
    path: '/loading-bar',
    name: 'LoadingBar',
    component: LoadingBar,
  },
  {
    path: '/Input',
    name: 'Input',
    component: Input,
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: Icon,
  },
  {
    path: '/Button',
    name: 'Button',
    component: Button,
  },
  {
    path: '/Elevation',
    name: 'Elevation',
    component: Elevation,
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/Carousel',
    name: 'Carousel',
    component: Carousel,
  },
  {
    path: '/Switch',
    name: 'Switch',
    component: Switch,
  },
  {
    path: '/bottom-nav',
    name: 'BottomNav',
    component: BottomNav,
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: Breadcrumb,
  },
  {
    path: '/select',
    name: 'Select',
    component: Select,
  },
  {
    path: '/steps',
    name: 'Steps',
    component: Steps,
  },
  {
    path: '/upLoad',
    name: 'UpLoad',
    component: UpLoad,
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress,
  },
  {
    path: '/circle',
    name: 'Circle',
    component: Circle,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs,
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge,
  },
  {
    path: '/date-picker',
    name: 'DatePicker',
    component: DatePicker,
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: Collapse,
  },
  {
    path: '/cascader',
    name: 'Cascader',
    component: Cascader,
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: Tooltip,
  },
  {
    path: '/chip',
    name: 'Chip',
    component: Chip,
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio,
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox,
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: Avatar,
  },
  {
    path: '/page',
    name: 'Page',
    component: Page,
  },
  {
    path: '/spin',
    name: 'Spin',
    component: Spin,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/auto-complete',
    name: 'AutoComplete',
    component: AutoComplete,
  },
  {
    path: '/animation',
    name: 'Animation',
    component: Animation,
  },
  {
    path: '/count-down',
    name: 'CountDown',
    component: CountDown,
  },
  {
    path: '/count-up',
    name: 'CountUp',
    component: CountUp,
  },
  {
    path: '/card',
    name: 'Card',
    component: Card,
  },
  {
    path: '/scrollbar',
    name: 'Scrollbar',
    component: Scrollbar,
  },
  {
    path: '/image',
    name: 'Image',
    component: Image,
  },
  {
    path: '/notice-bar',
    name: 'NoticeBar',
    component: NoticeBar,
  },
  {
    path: '/carousel-loop',
    name: 'CarouselLoop',
    component: CarouselLoop,
  },
  {
    path: '/ellipsis',
    name: 'Ellipsis',
    component: Ellipsis,
  },
  {
    path: '/relative-time',
    name: 'RelativeTime',
    component: RelativeTime,
  },
  {
    path: '/back-top',
    name: 'BackTop',
    component: BackTop,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/popover',
    name: 'Popover',
    component: Popover,
  },
  {
    path: '/input-number',
    name: 'InputNumber',
    component: InputNumber,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
