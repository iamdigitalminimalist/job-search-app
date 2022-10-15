import React from 'react';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms, FaChartLine } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

export type LinkProps = {
  id: number;
  text: string;
  path: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

export const links: LinkProps[] = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: FaChartLine,
  },
  {
    id: 2,
    text: 'all jobs',
    path: 'all-jobs',
    icon: MdQueryStats,
  },
  {
    id: 3,
    text: 'add job',
    path: 'add-job',
    icon: FaWpforms,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: ImProfile,
  },
];
