import React from 'react'
import { Button, TableBody, TableColumnHeaderCell, TableHeader } from '@radix-ui/themes'
import Link  from 'next/link';
import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <div className='mb-5'>
        <Button>
          <Link href='/issues/new'>New Issue</Link>
        </Button>
      </div>
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
              {issue.title}
              <div className='block md:hidden'>{issue.status}</div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.status}</Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  )
}

export default IssuesPage