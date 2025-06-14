import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@libs/shadcn-ui';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="max-w-md w-full">
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <span role='img' aria-label='say hi' className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            🎉{' '}
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-border w-[1px] mx-2 h-4"
            ></div>{' '}
            <span className="hidden sm:inline">
              Hey, look at me! I'm a bullet!
            </span>
          </span>
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            <span role='img' aria-label='logo'>🔥</span>SignDigital
          </h1>
          <span
            className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
            data-br=":r4o:"
            data-brr="1"
          >
            A simple configuration NX workspace with
            shadcn/ui and React.js
          </span>
        </section>

        <span className="text-center w-full inline-block mb-4">
          shadcn/ui example component
        </span>

        <Command className="rounded-lg border shadow-md h-fit">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
