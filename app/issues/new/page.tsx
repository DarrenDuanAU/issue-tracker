'use client';

import React from 'react'
import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
    <TextField.Root>
      <TextField.Input placeholder="Search the docs…" />
    </TextField.Root>
    <SimpleMDE placeholder="Reply to comment…" />
    <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage