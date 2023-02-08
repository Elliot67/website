'use client'

import * as React from 'react'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './index.module.scss'

const sidebarNavRoutes = [
  {
    label: 'Build Settings',
    pathSegment: 'build-settings',
  },
  {
    label: 'Environment Variables',
    pathSegment: 'environment-variables',
  },
  {
    label: 'Domain',
    pathSegment: 'domain',
  },
  {
    label: 'Ownership',
    pathSegment: 'ownership',
  },
  {
    label: 'Plan',
    pathSegment: 'plan',
  },
  {
    label: 'Billing',
    pathSegment: 'billing',
  },
]

type ProjectSettingsLayoutType = {
  children: React.ReactNode
  params: {
    id: string
  }
}
const ProjectSettingsLayout = ({ children, params }: ProjectSettingsLayoutType) => {
  const pathname = usePathname()

  return (
    <Grid>
      <Cell cols={4} start={1}>
        <div className={classes.sidebarNav}>
          {sidebarNavRoutes.map(route => {
            const routePath = `/dashboard/${params.id}/settings/${route.pathSegment}`
            const isActive = pathname.startsWith(routePath)

            return (
              <p
                key={route.label}
                className={[classes.sidebarNavItem, isActive && classes.active]
                  .filter(Boolean)
                  .join(' ')}
              >
                <Link href={routePath}>{route.label}</Link>
              </p>
            )
          })}
        </div>
      </Cell>

      <Cell start={5} cols={8}>
        {children}
      </Cell>
    </Grid>
  )
}

export default ProjectSettingsLayout