import React, { useMemo } from 'react';
import { last } from 'lodash';

import { ConfigurableLink } from '@openmrs/esm-framework';
import styles from './dashboardextension.scss';

export interface DashboardExtensionProps {
  title: string;
  basePath: string;
  currentPath: string;
}

export const DashboardExtension = ({ title, basePath, currentPath }: DashboardExtensionProps) => {
  const navLink = useMemo(() => decodeURIComponent(last(currentPath.split('/'))), [currentPath]);

  const activeClassName = title === navLink ? 'active-left-nav-link' : 'non-active';

  return (
    <div key={title} className={activeClassName}>
      <ConfigurableLink to={`${basePath}/${encodeURIComponent(title)}`} className={'bx--side-nav__link ' + styles.link}>
        {title}
      </ConfigurableLink>
    </div>
  );
};
