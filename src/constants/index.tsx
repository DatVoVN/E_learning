import {
  IconExplore,
  IconPlay,
  IconComment,
  IconOrder,
  IconStudy,
  IconUsers,
} from '@/components/icons';

import { TMenuItem } from '@/types';

export const MenuItems: TMenuItem[] = [
  {
    url: '/',
    title: 'Khám phá',
    icon: <IconPlay className="size-5" />,
  },
  {
    url: '/study',
    title: 'Khu vực học tập',
    icon: <IconStudy className="size-5" />,
  },
  {
    url: '/manager/course',
    title: 'Quản lý khóa học',
    icon: <IconExplore className="size-5" />,
  },
  {
    url: '/manager/member',
    title: 'Quản lý thành viên',
    icon: <IconUsers className="size-5" />,
  },
  {
    url: '/manager/order',
    title: 'Quản lý đơn hàng',
    icon: <IconOrder className="size-5" />,
  },
  {
    url: '/manager/comment',
    title: 'Quản lý bình luận',
    icon: <IconComment className="size-5" />,
  },
];
