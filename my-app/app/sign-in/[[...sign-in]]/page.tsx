import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="sign-in min-h-screen flex items-center justify-center bg-background">
            <SignIn />
        </div>
    )
}