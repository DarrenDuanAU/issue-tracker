import React from 'react'
import { TableBody, TableColumnHeaderCell, TableHeader } from '@radix-ui/themes'
import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import Link from '../components/Link';
import { IssueStatusBadge } from '../components/IssueStatusBadge';
import IssueActions from './IssueActions';
import delay from 'delay';

const IssuesPage = async () => {
  await delay(1000);
  const issues = await prisma.issue.findMany();

  return (
    <div>
    <IssueActions />
      <Table.Root variant='surface'>
        <TableHeader>
          <Table.Row>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className='hidden md:table-cell'>Status</TableColumnHeaderCell>
            <TableColumnHeaderCell className='hidden md:table-cell'>Created</TableColumnHeaderCell>
          </Table.Row>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>
                {issue.title}
              </Link>
              <div className='block md:hidden'>
                <IssueStatusBadge status={issue.status}/>
              </div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>
              <IssueStatusBadge status={issue.status}/>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  )
}

export default IssuesPage