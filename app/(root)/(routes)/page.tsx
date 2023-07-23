import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <h1>My App</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </header>
    </div>
  );
}
