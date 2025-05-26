import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <nav>
        <ul>
          <li><a href="/subscription">Subscription</a></li>
          <li><a href="/my-journey">My Journey</a></li>
          <li><a href="/sign-in">Sign In</a></li>
        </ul>
      </nav>
      <Button variant="outline">Click Me</Button>
    </div>
  )
}

export default Page