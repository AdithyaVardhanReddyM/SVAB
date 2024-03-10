import CreateNoteDialog from '@/components/CreateNoteDialog'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex items-center">
              <div className="w-4"></div>
              <h1 className="text-3xl font-bold">Explore Blogs</h1>
              <div className="w-4"></div>
            </div>
          </div>

          <div className="h-8"></div>
          <Separator />
          <div className="h-8"></div>
          {/* list all the notes */}
          {/* if no notes, display this */}
          <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
            <CreateNoteDialog />
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Blog

